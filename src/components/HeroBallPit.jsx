import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const HeroBallPit = () => {
  const containerRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {


    if (!containerRef.current) return;

    // Intersection Observer to pause rendering when out of view
    const observer = new IntersectionObserver(
      (entries) => {
        setShouldRender(entries[0].isIntersecting);
      },
      { threshold: 0 }
    );
    observer.observe(containerRef.current);

    // Three.js Setup
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    
    // Camera setup - orthographic might be easier for 2D bounds, but perspective looks better
    // We'll use perspective and calculate boundaries
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.z = 150;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // Remove pointer events so it doesn't block interactions with the text above it
    renderer.domElement.style.pointerEvents = 'none';
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.zIndex = '0';
    renderer.domElement.style.opacity = '0.85';

    containerRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(100, 100, 50);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0x6D5CE0, 2, 200);
    pointLight.position.set(-50, -50, 50);
    scene.add(pointLight);

    // Create Spheres
    const palette = [0x4338CA, 0xF97316, 0x6D5CE0, 0xB9BDE0];
    const spheres = [];
    const sphereCount = 45;
    
    // Bounds calculation based on camera distance
    const fov = camera.fov * (Math.PI / 180);
    const vFov = 2 * Math.tan(fov / 2) * camera.position.z;
    const hFov = vFov * camera.aspect;
    
    const bounds = {
      top: vFov / 2,
      bottom: -vFov / 2,
      right: hFov / 2,
      left: -hFov / 2
    };

    const geometry = new THREE.SphereGeometry(1, 32, 32);

    for (let i = 0; i < sphereCount; i++) {
      const radius = Math.random() * 3 + 2; // Random radius between 2 and 5
      
      const material = new THREE.MeshPhysicalMaterial({
        color: palette[Math.floor(Math.random() * palette.length)],
        metalness: 0.2,
        roughness: 0.1,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.scale.setScalar(radius);
      
      // Random position within bounds
      mesh.position.set(
        (Math.random() - 0.5) * (bounds.right - bounds.left) * 0.8,
        (Math.random() - 0.5) * (bounds.top - bounds.bottom) * 0.8,
        (Math.random() - 0.5) * 20
      );

      scene.add(mesh);

      spheres.push({
        mesh,
        radius,
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.5,
          (Math.random() - 0.5) * 0.5,
          (Math.random() - 0.5) * 0.1
        ),
        mass: radius * radius
      });
    }

    // Mouse Interaction
    const mouse = new THREE.Vector2(0, 0);
    const targetMouse = new THREE.Vector2(0, 0);
    let isHovering = false;

    // Use window listener but calculate relative to container
    const onMouseMove = (event) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      
      // Handle both mouse and touch events
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;
      const clientY = event.touches ? event.touches[0].clientY : event.clientY;

      // Check if interaction is over the hero section
      if (
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom
      ) {
        isHovering = true;
        // Normalize mouse to -1 to 1
        targetMouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
        targetMouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;
      } else {
        isHovering = false;
      }
    };

    const onTouchEnd = () => {
      isHovering = false;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onMouseMove, { passive: true });
    window.addEventListener('touchstart', onMouseMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Animation Loop
    let animationFrameId;
    const gravity = new THREE.Vector3(0, -0.005, 0); // Much lower gravity for a floaty effect
    const damping = 0.99;
    const bounceFactor = 0.7;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Skip rendering if not visible
      if (!shouldRender) return;

      // Smooth mouse movement
      mouse.lerp(targetMouse, 0.05);

      // Convert mouse coords to world space for attraction
      const mouseWorldPos = new THREE.Vector3(
        mouse.x * (bounds.right),
        mouse.y * (bounds.top),
        0
      );

      // Physics step
      for (let i = 0; i < spheres.length; i++) {
        const s = spheres[i];
        
        // Apply gravity
        s.velocity.add(gravity);
        
        // Apply mouse interaction if hovering
        if (isHovering) {
          const dirToMouse = new THREE.Vector3().subVectors(mouseWorldPos, s.mesh.position);
          const dist = dirToMouse.length();
          if (dist < 50) {
            dirToMouse.normalize();
            // Push away (repel) and push heavily DOWN so they "fall" when hovered
            s.velocity.add(dirToMouse.multiplyScalar(-0.1 * (50 - dist) / 50));
            s.velocity.y -= 0.3 * (50 - dist) / 50;
          }
        }

        // Apply damping (friction)
        s.velocity.multiplyScalar(damping);
        
        // Update position
        s.mesh.position.add(s.velocity);

        // Z-axis gentle return to 0
        s.mesh.position.z += (0 - s.mesh.position.z) * 0.01;

        // Collision with walls (bounds)
        if (s.mesh.position.y - s.radius < bounds.bottom) {
          s.mesh.position.y = bounds.bottom + s.radius;
          s.velocity.y *= -bounceFactor;
        }
        if (s.mesh.position.y + s.radius > bounds.top) {
          s.mesh.position.y = bounds.top - s.radius;
          s.velocity.y *= -bounceFactor;
        }
        if (s.mesh.position.x - s.radius < bounds.left) {
          s.mesh.position.x = bounds.left + s.radius;
          s.velocity.x *= -bounceFactor;
        }
        if (s.mesh.position.x + s.radius > bounds.right) {
          s.mesh.position.x = bounds.right - s.radius;
          s.velocity.x *= -bounceFactor;
        }
      }

      // Very simple sphere-to-sphere collision (O(n^2) but n is small)
      for (let i = 0; i < spheres.length; i++) {
        for (let j = i + 1; j < spheres.length; j++) {
          const s1 = spheres[i];
          const s2 = spheres[j];
          
          const dx = s2.mesh.position.x - s1.mesh.position.x;
          const dy = s2.mesh.position.y - s1.mesh.position.y;
          const dz = s2.mesh.position.z - s1.mesh.position.z;
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
          const minDist = s1.radius + s2.radius;

          if (distance < minDist) {
            // Resolve overlap
            const overlap = minDist - distance;
            const nx = dx / distance;
            const ny = dy / distance;
            const nz = dz / distance;

            // Push apart
            const massRatio1 = s2.mass / (s1.mass + s2.mass);
            const massRatio2 = s1.mass / (s1.mass + s2.mass);

            s1.mesh.position.x -= nx * overlap * massRatio1;
            s1.mesh.position.y -= ny * overlap * massRatio1;
            s1.mesh.position.z -= nz * overlap * massRatio1;

            s2.mesh.position.x += nx * overlap * massRatio2;
            s2.mesh.position.y += ny * overlap * massRatio2;
            s2.mesh.position.z += nz * overlap * massRatio2;

            // Simple velocity exchange (elastic collision)
            const kx = (s1.velocity.x - s2.velocity.x);
            const ky = (s1.velocity.y - s2.velocity.y);
            const kz = (s1.velocity.z - s2.velocity.z);

            // Vector projection
            const p = 2.0 * (nx * kx + ny * ky + nz * kz) / (s1.mass + s2.mass);
            
            // Apply bounce factor to dampen collision energy
            const collisionBounce = 0.8;
            
            s1.velocity.x -= p * s2.mass * nx * collisionBounce;
            s1.velocity.y -= p * s2.mass * ny * collisionBounce;
            s1.velocity.z -= p * s2.mass * nz * collisionBounce;
            
            s2.velocity.x += p * s1.mass * nx * collisionBounce;
            s2.velocity.y += p * s1.mass * ny * collisionBounce;
            s2.velocity.z += p * s1.mass * nz * collisionBounce;
          }
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      
      renderer.setSize(newWidth, newHeight);
      
      // Update bounds
      const newVFov = 2 * Math.tan((camera.fov * (Math.PI / 180)) / 2) * camera.position.z;
      const newHFov = newVFov * camera.aspect;
      bounds.top = newVFov / 2;
      bounds.bottom = -newVFov / 2;
      bounds.right = newHFov / 2;
      bounds.left = -newHFov / 2;
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onMouseMove);
      window.removeEventListener('touchstart', onMouseMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose Three.js resources
      geometry.dispose();
      spheres.forEach(s => s.mesh.material.dispose());
      renderer.dispose();
    };
  }, [shouldRender]);

  return <div ref={containerRef} className="absolute inset-0 overflow-hidden" />;
};

export default HeroBallPit;
