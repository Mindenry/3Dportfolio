// //  // Enhanced Initialization
// //  document.addEventListener('DOMContentLoaded', () => {
// //     initAnimations();
// //     init3DEffect();
// //     initParallax();
// //     initScrollProgress();
// //     initTheme();
// //     initSoundEffects();
// //     initKonamiCode();
// // });

// // // Enhanced GSAP Animations
// // function initAnimations() {
// //     gsap.registerPlugin(ScrollTrigger);

// //     // Hero Animation
// //     gsap.from('.hero-content', {
// //         opacity: 0,
// //         y: 100,
// //         duration: 1.5,
// //         ease: 'power4.out'
// //     });

// //     // Section Animations
// //     gsap.utils.toArray('section').forEach(section => {
// //         gsap.from(section, {
// //             scrollTrigger: {
// //                 trigger: section,
// //                 start: 'top 80%',
// //                 end: 'top 20%',
// //                 scrub: 1,
// //                 toggleActions: 'play none none reverse'
// //             },
// //             opacity: 0,
// //             y: 50,
// //             duration: 1
// //         });
// //     });

// //     // Timeline Animations
// //     gsap.utils.toArray('.timeline-item').forEach(item => {
// //         gsap.from(item, {
// //             scrollTrigger: {
// //                 trigger: item,
// //                 start: 'top 80%',
// //                 toggleActions: 'play none none reverse'
// //             },
// //             opacity: 0,
// //             x: item.classList.contains('left') ? -50 : 50,
// //             duration: 0.8
// //         });
// //     });

// //     // Skill Items Stagger Animation
// //     gsap.from('.skill-item', {
// //         scrollTrigger: {
// //             trigger: '.skills-grid',
// //             start: 'top 80%'
// //         },
// //         opacity: 0,
// //         y: 30,
// //         stagger: 0.2,
// //         duration: 0.6
// //     });
// // }

// // // Enhanced 3D Effect
// // function init3DEffect() {
// //     const cards = document.querySelectorAll('.card-3d');
    
// //     cards.forEach(card => {
// //         card.addEventListener('mousemove', (e) => {
// //             const rect = card.getBoundingClientRect();
// //             const x = e.clientX - rect.left;
// //             const y = e.clientY - rect.top;
            
// //             const centerX = rect.width / 2;
// //             const centerY = rect.height / 2;
            
// //             const rotateX = ((y - centerY) / centerY) * 10;
// //             const rotateY = ((centerX - x) / centerX) * 10;
            
// //             card.style.transform = `
// //                 perspective(1000px)
// //                 rotateX(${rotateX}deg)
// //                 rotateY(${rotateY}deg)
// //                 scale3d(1.05, 1.05, 1.05)
// //             `;
// //         });

// //         card.addEventListener('mouseleave', () => {
// //             card.style.transform = `
// //                 perspective(1000px)
// //                 rotateX(0deg)
// //                 rotateY(0deg)
// //                 scale3d(1, 1, 1)
// //             `;
// //         });
// //     });
// // }

// // // Enhanced Parallax Effect
// // function initParallax() {
// //     const parallaxElements = document.querySelectorAll('.hero, .card-3d, .project-card');
    
// //     window.addEventListener('scroll', () => {
// //         const scrolled = window.pageYOffset;
        
// //         parallaxElements.forEach(element => {
// //             const elementTop = element.offsetTop;
// //             const elementHeight = element.offsetHeight;
// //             const screenHeight = window.innerHeight;
            
// //             if (scrolled + screenHeight > elementTop && 
// //                 scrolled < elementTop + elementHeight) {
// //                 const speed = 0.3;
// //                 const yPos = (scrolled - elementTop) * speed;
// //                 element.style.transform = `translateY(${yPos}px)`;
// //             }
// //         });
// //     });
// // }

// // // Enhanced Scroll Progress
// // function initScrollProgress() {
// //     const progressBar = document.querySelector('.progress-bar');
    
// //     window.addEventListener('scroll', () => {
// //         const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
// //         const scrolled = (window.pageYOffset / windowHeight) * 100;
// //         progressBar.style.width = `${scrolled}%`;
// //     });
// // }

// // // Enhanced Theme Toggle
// // function initTheme() {
// //     const savedTheme = localStorage.getItem('theme') || 'dark';
// //     document.documentElement.setAttribute('data-theme', savedTheme);
    
// //     const themeToggle = document.querySelector('.theme-toggle');
// //     themeToggle.addEventListener('click', () => {
// //         const currentTheme = document.documentElement.getAttribute('data-theme');
// //         const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
// //         document.documentElement.setAttribute('data-theme', newTheme);
// //         localStorage.setItem('theme', newTheme);
        
// //         playSound(880, 0.1, 'sine');
// //     });
// // }

// // // Enhanced Sound Effects
// // function initSoundEffects() {
// //     const AudioContext = window.AudioContext || window.webkitAudioContext;
// //     const audioCtx = new AudioContext();

// //     function playSound(frequency = 440, duration = 0.1, type = 'sine') {
// //         const oscillator = audioCtx.createOscillator();
// //         const gainNode = audioCtx.createGain();
        
// //         oscillator.type = type;
// //         oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
        
// //         gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
// //         gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
        
// //         oscillator.connect(gainNode);
// //         gainNode.connect(audioCtx.destination);
        
// //         oscillator.start();
// //         oscillator.stop(audioCtx.currentTime + duration);
// //     }

// //     document.querySelectorAll('.skill-item, .download-btn, .project-card')
// //         .forEach(element => {
// //             element.addEventListener('mouseenter', () => playSound(660, 0.05, 'sine'));
// //             element.addEventListener('click', () => playSound(880, 0.1, 'square'));
// //         });
// // }

// // // Konami Code Easter Egg
// // function initKonamiCode() {
// //     const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
// //     let konamiIndex = 0;

// //     document.addEventListener('keydown', (e) => {
// //         if (e.key === konamiCode[konamiIndex]) {
// //             konamiIndex++;
// //             if (konamiIndex === konamiCode.length) {
// //                 activateEasterEgg();
// //                 konamiIndex = 0;
// //             }
// //         } else {
// //             konamiIndex = 0;
// //         }
// //     });
// // }

// // function activateEasterEgg() {
// //     const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'];
// //     document.body.style.animation = 'rainbow 5s infinite';
    
// //     const style = document.createElement('style');
// //     style.textContent = `
// //         @keyframes rainbow {
// //             ${colors.map((color, i) => 
// //                 `${(i * 100) / colors.length}% { background-color: ${color}; }`
// //             ).join('\n')}
// //         }
// //     `;
// //     document.head.appendChild(style);
    
// //     // Play melody
// //     setTimeout(() => playSound(523.25, 0.2, 'square'), 0);    // C5
// //     setTimeout(() => playSound(659.25, 0.2, 'square'), 200);  // E5
// //     setTimeout(() => playSound(783.99, 0.2, 'square'), 400);  // G5
    
// //     setTimeout(() => {
// //         document.body.style.animation = '';
// //         style.remove();
// //     }, 5000);
// // }

// // // Smooth Scroll Implementation
// // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
// //     anchor.addEventListener('click', function(e) {
// //         e.preventDefault();
// //         const target = document.querySelector(this.getAttribute('href'));
// //         if (target) {
// //             target.scrollIntoView({
// //                 behavior: 'smooth',
// //                 block: 'start'
// //             });
// //         }
// //     });
// // });

// // Main initialization
// document.addEventListener('DOMContentLoaded', () => {
//     initPageLoader();
//     initParticles();
//     initSkillsAnimation();
//     init3DCube();
//     initMouseParallax();
//     initScrollAnimations();
//     initThreeJSBackground();
//     initMobileMenu();
//     initCustomCursor();
//     initThemeToggle();
//     initAudioPlayer();
// });

// // Page Loader
// function initPageLoader() {
//     const loader = document.createElement('div');
//     loader.className = 'loader';
//     loader.innerHTML = `
//         <div class="loader-content">
//             <div class="loader-spinner"></div>
//             <div class="loader-text">Loading 3D Portfolio...</div>
//         </div>
//     `;
//     document.body.appendChild(loader);
    
//     window.addEventListener('load', () => {
//         setTimeout(() => {
//             loader.classList.add('hidden');
//             setTimeout(() => {
//                 loader.remove();
//             }, 1000);
//         }, 1500);
//     });
// }

// // Particle background
// function initParticles() {
//     const sections = document.querySelectorAll('.section');
    
//     sections.forEach(section => {
//         const particlesContainer = document.createElement('div');
//         particlesContainer.className = 'particles-background';
//         section.querySelector('.section-background')?.appendChild(particlesContainer);
        
//         const particleCount = 50;
        
//         for (let i = 0; i < particleCount; i++) {
//             const particle = document.createElement('div');
//             particle.className = 'particle';
//             particle.style.left = `${Math.random() * 100}%`;
//             particle.style.top = `${Math.random() * 100}%`;
//             particle.style.width = `${Math.random() * 5 + 1}px`;
//             particle.style.height = particle.style.width;
//             particle.style.opacity = Math.random() * 0.5;
//             particle.style.background = 'var(--accent)';
//             particle.style.borderRadius = '50%';
//             particle.style.position = 'absolute';
//             particle.style.animation = `float ${Math.random() * 6 + 3}s ease-in-out infinite`;
//             particle.style.animationDelay = `${Math.random() * 5}s`;
            
//             particlesContainer.appendChild(particle);
//         }
//     });
// }

// // Skills animation
// function initSkillsAnimation() {
//     const skillItems = document.querySelectorAll('.skill-item');
    
//     skillItems.forEach(item => {
//         const progress = item.getAttribute('data-progress');
//         const progressBar = item.querySelector('.skill-progress');
        
//         if (progressBar) {
//             progressBar.style.setProperty('--progress', `${progress}%`);
//         }
        
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     item.classList.add('in-viewport');
//                     observer.unobserve(item);
//                 }
//             });
//         }, { threshold: 0.1 });
        
//         observer.observe(item);
//     });
// }

// // 3D Cube Animation
// function init3DCube() {
//     const skillsSection = document.getElementById('skills');
    
//     if (skillsSection) {
//         const cubeWrapper = document.createElement('div');
//         cubeWrapper.className = 'cube-wrapper';
        
//         cubeWrapper.innerHTML = `
//             <div class="cube">
//                 <div class="cube-face face-front"><i class="fab fa-html5"></i></div>
//                 <div class="cube-face face-back"><i class="fab fa-css3-alt"></i></div>
//                 <div class="cube-face face-right"><i class="fab fa-js"></i></div>
//                 <div class="cube-face face-left"><i class="fab fa-react"></i></div>
//                 <div class="cube-face face-top"><i class="fab fa-node"></i></div>
//                 <div class="cube-face face-bottom"><i class="fas fa-database"></i></div>
//             </div>
//         `;
        
//         skillsSection.appendChild(cubeWrapper);
//     }
// }

// // Mouse parallax effect
// function initMouseParallax() {
//     const parallaxElements = document.querySelectorAll('[data-mouse-parallax]');
    
//     document.addEventListener('mousemove', (e) => {
//         const x = e.clientX / window.innerWidth - 0.5;
//         const y = e.clientY / window.innerHeight - 0.5;
        
//         parallaxElements.forEach(el => {
//             const strength = el.getAttribute('data-mouse-parallax') || 20;
//             el.style.transform = `translateX(${x * strength}px) translateY(${y * strength}px)`;
//         });
//     });
// }

// // Scroll animations
// function initScrollAnimations() {
//     const sections = document.querySelectorAll('.section');
//     const navbar = document.querySelector('.navbar');
    
//     // Progress bar
//     const progressContainer = document.createElement('div');
//     progressContainer.className = 'progress-container';
//     const progressBar = document.createElement('div');
//     progressBar.className = 'progress-bar';
//     progressContainer.appendChild(progressBar);
//     document.body.appendChild(progressContainer);
    
//     // Scroll event
//     window.addEventListener('scroll', () => {
//         const scrollPosition = window.scrollY;
        
//         // Update progress bar
//         const totalHeight = document.body.scrollHeight - window.innerHeight;
//         const progress = (scrollPosition / totalHeight) * 100;
//         progressBar.style.width = `${progress}%`;
        
//         // Navbar background
//         if (scrollPosition > 50) {
//             navbar.classList.add('scrolled');
//         } else {
//             navbar.classList.remove('scrolled');
//         }
        
//         // Animate sections
//         sections.forEach(section => {
//             const sectionTop = section.offsetTop - window.innerHeight * 0.5;
//             if (scrollPosition >= sectionTop) {
//                 section.classList.add('in-viewport');
//             }
//         });
//     });
    
//     // Initial check
//     window.dispatchEvent(new Event('scroll'));
// }

// // Initialize ThreeJS background for hero section
// function initThreeJSBackground() {
//     const heroSection = document.querySelector('.hero');
//     const canvas = document.createElement('canvas');
//     canvas.id = 'hero-canvas';
//     canvas.style.position = 'absolute';
//     canvas.style.top = '0';
//     canvas.style.left = '0';
//     canvas.style.width = '100%';
//     canvas.style.height = '100%';
//     canvas.style.zIndex = 'var(--z-negative)';
    
//     const container = document.querySelector('.hero-3d-container');
//     if (container) {
//         container.appendChild(canvas);
        
//         // Simple placeholder for Three.js
//         // In real implementation, you would integrate actual Three.js code here
//         const ctx = canvas.getContext('2d');
        
//         const resizeCanvas = () => {
//             canvas.width = container.offsetWidth;
//             canvas.height = container.offsetHeight;
//         };
        
//         const animateCanvas = () => {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);
            
//             // Draw some placeholder gradient
//             const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
//             gradient.addColorStop(0, 'rgba(10, 25, 47, 0.5)');
//             gradient.addColorStop(1, 'rgba(100, 255, 218, 0.1)');
//             ctx.fillStyle = gradient;
//             ctx.fillRect(0, 0, canvas.width, canvas.height);
            
//             // Draw some circles
//             for (let i = 0; i < 50; i++) {
//                 ctx.beginPath();
//                 const x = Math.random() * canvas.width;
//                 const y = Math.random() * canvas.height;
//                 const radius = Math.random() * 2 + 1;
//                 ctx.arc(x, y, radius, 0, Math.PI * 2);
//                 ctx.fillStyle = 'rgba(100, 255, 218, 0.2)';
//                 ctx.fill();
//             }
            
//             requestAnimationFrame(animateCanvas);
//         };
        
//         window.addEventListener('resize', resizeCanvas);
//         resizeCanvas();
//         animateCanvas();
//     }
    
//     // Skills canvas
//     const skillsCanvas = document.getElementById('skills-canvas');
//     if (skillsCanvas) {
//         const ctx = skillsCanvas.getContext('2d');
        
//         const resizeCanvas = () => {
//             skillsCanvas.width = skillsCanvas.parentElement.offsetWidth;
//             skillsCanvas.height = skillsCanvas.parentElement.offsetHeight;
//         };
        
//         const animateCanvas = () => {
//             ctx.clearRect(0, 0, skillsCanvas.width, skillsCanvas.height);
            
//             // Draw grid lines
//             ctx.strokeStyle = 'rgba(100, 255, 218, 0.1)';
//             ctx.lineWidth = 1;
            
//             // Vertical lines
//             for (let x = 0; x < skillsCanvas.width; x += 50) {
//                 ctx.beginPath();
//                 ctx.moveTo(x, 0);
//                 ctx.lineTo(x, skillsCanvas.height);
//                 ctx.stroke();
//             }
            
//             // Horizontal lines
//             for (let y = 0; y < skillsCanvas.height; y += 50) {
//                 ctx.beginPath();
//                 ctx.moveTo(0, y);
//                 ctx.lineTo(skillsCanvas.width, y);
//                 ctx.stroke();
//             }
            
//             requestAnimationFrame(animateCanvas);
//         };
        
//         window.addEventListener('resize', resizeCanvas);
//         resizeCanvas();
//         animateCanvas();
//     }
// }

// // Mobile menu
// function initMobileMenu() {
//     const mobileMenuToggle = document.querySelector('.mobile-menu');
//     const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
//     const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
//     if (mobileMenuToggle && mobileMenuOverlay) {
//         mobileMenuToggle.addEventListener('click', () => {
//             mobileMenuToggle.classList.toggle('active');
//             mobileMenuOverlay.classList.toggle('active');
//             document.body.classList.toggle('menu-open');
//         });
        
//         mobileNavLinks.forEach(link => {
//             link.addEventListener('click', () => {
//                 mobileMenuToggle.classList.remove('active');
//                 mobileMenuOverlay.classList.remove('active');
//                 document.body.classList.remove('menu-open');
//             });
//         });
//     }
// }

// // Custom cursor
// function initCustomCursor() {
//     const cursorOuter = document.createElement('div');
//     cursorOuter.className = 'custom-cursor';
//     const cursorInner = document.createElement('div');
//     cursorInner.className = 'custom-cursor-dot';
    
//     document.body.appendChild(cursorOuter);
//     document.body.appendChild(cursorInner);
    
//     document.addEventListener('mousemove', (e) => {
//         cursorOuter.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
//         cursorInner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
//     });
    
//     // Add special effects for links and buttons
//     const interactiveElements = document.querySelectorAll('a, button, .skill-item, .project-card, .mini-project-card');
    
//     interactiveElements.forEach(el => {
//         el.addEventListener('mouseenter', () => {
//             cursorOuter.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(1.5)`;
//             cursorOuter.style.background = 'rgba(100, 255, 218, 0.1)';
//             cursorOuter.style.borderColor = 'transparent';
//         });
        
//         el.addEventListener('mouseleave', () => {
//             cursorOuter.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(1)`;
//             cursorOuter.style.background = 'transparent';
//             cursorOuter.style.borderColor = 'var(--accent)';
//         });
//     });
// }

// // Theme toggle
// function initThemeToggle() {
//     const themeToggle = document.querySelector('.theme-toggle');
    
//     if (themeToggle) {
//         // Check for saved theme
//         const savedTheme = localStorage.getItem('theme');
//         if (savedTheme) {
//             document.documentElement.setAttribute('data-theme', savedTheme);
//             updateThemeIcon(themeToggle, savedTheme);
//         }
        
//         themeToggle.addEventListener('click', () => {
//             const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
//             const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
//             document.documentElement.setAttribute('data-theme', newTheme);
//             localStorage.setItem('theme', newTheme);
            
//             updateThemeIcon(themeToggle, newTheme);
//         });
//     }
// }

// function updateThemeIcon(themeToggle, theme) {
//     if (theme === 'dark') {
//         themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
//     } else {
//         themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
//     }
// }

// // Background audio player
// function initAudioPlayer() {
//     const audioPlayer = document.createElement('div');
//     audioPlayer.className = 'audio-player';
    
//     const audio = new Audio('background-music.mp3');
//     audio.loop = true;
//     audio.volume = 0.1;
    
//     let isPlaying = false;
    
//     audioPlayer.innerHTML = `
//         <button class="audio-control">
//             <i class="fas fa-play"></i>
//         </button>
//         <span class="audio-text">Play Background Music</span>
//     `;
    
//     document.body.appendChild(audioPlayer);
    
//     const audioControl = audioPlayer.querySelector('.audio-control');
//     const audioText = audioPlayer.querySelector('.audio-text');
    
//     audioControl.addEventListener('click', () => {
//         if (isPlaying) {
//             audio.pause();
//             audioControl.innerHTML = '<i class="fas fa-play"></i>';
//             audioText.textContent = 'Play Background Music';
//         } else {
//             audio.play().catch(err => {
//                 console.log('Audio autoplay was prevented:', err);
//             });
//             audioControl.innerHTML = '<i class="fas fa-pause"></i>';
//             audioText.textContent = 'Pause Background Music';
//         }
        
//         isPlaying = !isPlaying;
//     });
// }

// Advanced 3D Portfolio - By Peerawit Lakhampa

// IIFE to prevent global scope pollution
(() => {
    'use strict';

    // Configuration
    const CONFIG = {
        particles: {
            count: 50,
            colors: ['var(--accent)', 'var(--accent-light)', 'var(--accent-dark)'],
            sizeRange: { min: 1, max: 5 },
            opacityRange: { min: 0.2, max: 0.7 },
            speedRange: { min: 3, max: 8 }
        },
        three: {
            particleCount: 1000,
            mouseStrength: 0.15,
            cameraDistance: 1000,
            particleSize: 2
        },
        loader: {
            minTime: 1500 // Minimum loading time in ms
        },
        cube: {
            spinSpeed: 0.01,
            wobbleAmount: 0.1
        },
        audio: {
            volume: 0.1,
            fadeTime: 1000 // ms
        }
    };

    // Utility functions
    const Utils = {
        random: (min, max) => Math.random() * (max - min) + min,
        
        getScrollPercent: () => {
            const h = document.documentElement;
            const b = document.body;
            return (h.scrollTop || b.scrollTop) / ((h.scrollHeight || b.scrollHeight) - h.clientHeight) * 100;
        },
        
        debounce: (func, wait) => {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },
        
        isInViewport: (element) => {
            const rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.bottom >= 0
            );
        },
        
        lerp: (start, end, amt) => {
            return (1 - amt) * start + amt * end;
        },
        
        getMousePos: (e) => {
            let posX = 0;
            let posY = 0;
            
            if (!e) e = window.event;
            if (e.pageX || e.pageY) {
                posX = e.pageX;
                posY = e.pageY;
            } else if (e.clientX || e.clientY) {
                posX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                posY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            }
            
            return { x: posX, y: posY };
        },
        
        setVhProperty: () => {
            // Fix for mobile browsers' viewport height issues
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
    };

    // Global state
    const state = {
        isMenuOpen: false,
        isLightTheme: false,
        isAudioPlaying: false,
        mousePosition: { x: 0, y: 0 },
        scrollYPos: 0,
        screenSize: { width: window.innerWidth, height: window.innerHeight },
        loadStartTime: Date.now(),
        threeJsScene: null,
        audioVolume: 0,
        cubeMesh: null
    };

    // DOM Elements Cache
    const DOM = {};
    const cacheDOM = () => {
        DOM.body = document.body;
        DOM.navbar = document.querySelector('.navbar');
        DOM.mobileMenuToggle = document.querySelector('.mobile-menu');
        DOM.mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
        DOM.mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        DOM.progressBar = document.querySelector('.progress-bar');
        DOM.cursorOuter = document.querySelector('.custom-cursor');
        DOM.cursorInner = document.querySelector('.custom-cursor-dot');
        DOM.navLinks = document.querySelectorAll('.nav-link');
        DOM.themeToggle = document.querySelector('.theme-toggle');
        DOM.sections = document.querySelectorAll('.section');
        DOM.hero = document.querySelector('.hero');
        DOM.heroCanvas = document.getElementById('hero-3d-scene');
        DOM.skillsCanvas = document.getElementById('skills-canvas');
        DOM.projectsBackground = document.getElementById('projects-background');
        DOM.audioPlayer = document.querySelector('.audio-player');
        DOM.audioControl = document.querySelector('.audio-control');
        DOM.skillItems = document.querySelectorAll('.skill-item');
        DOM.parallaxElements = document.querySelectorAll('[data-mouse-parallax]');
    };
    
    // Advanced Theme Toggle JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    const particlesContainer = document.querySelector('.theme-toggle-particles');
    
    // Check for saved theme preference or default to light
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
    
    // Create particles
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.classList.add('theme-toggle-particle');
        particlesContainer.appendChild(particle);
    }
    
    // Position particles randomly
    const particles = document.querySelectorAll('.theme-toggle-particle');
    
    // Toggle theme function
    function toggleTheme() {
        // Add animating class
        themeToggle.classList.add('animating');
        
        // Trigger particle animations
        particles.forEach((particle, index) => {
            // Random position around the toggle button
            const angle = Math.random() * 2 * Math.PI;
            const distance = 15 + Math.random() * 15;
            
            const size = 3 + Math.random() * 5;
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Position relative to center
            const x = Math.cos(angle) * distance + 30;
            const y = Math.sin(angle) * distance + 15;
            
            particle.style.top = `${y}px`;
            particle.style.left = `${x}px`;
            
            // Set animation with delay based on index
            particle.style.animation = `particle-burst 0.6s ease forwards ${index * 0.1}s`;
            
            // Set color based on theme
            const isDark = document.body.classList.contains('dark-theme');
            particle.style.background = isDark ? '#FFD700' : '#C4C9E8';
        });
        
        // Toggle dark theme class
        document.body.classList.toggle('dark-theme');
        
        // Save preference
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        // Remove animating class after animation completes
        setTimeout(() => {
            themeToggle.classList.remove('animating');
            
            // Reset particle animations
            particles.forEach(particle => {
                particle.style.animation = 'none';
                particle.style.opacity = '0';
            });
        }, 1000);
    }
    
    // Event listener
    themeToggle.addEventListener('click', toggleTheme);
});

    // Page Loader
    const initPageLoader = () => {
        const loader = document.createElement('div');
        loader.className = 'loader';
        loader.innerHTML = `
            <div class="loader-content">
                <div class="loader-spinner"></div>
                <div class="loader-text">Loading 3D Portfolio...</div>
                <div class="loader-progress">
                    <div class="loader-bar"></div>
                </div>
            </div>
        `;
        DOM.body.appendChild(loader);
        DOM.loader = loader;
        DOM.loaderBar = loader.querySelector('.loader-bar');
        
        // Simulate loading progress
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 5;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
            }
            DOM.loaderBar.style.width = `${progress}%`;
        }, 100);
        
        // Add loaded class to body when everything is loaded
        window.addEventListener('load', () => {
            const now = Date.now();
            const elapsed = now - state.loadStartTime;
            const delay = Math.max(0, CONFIG.loader.minTime - elapsed);
            
            setTimeout(() => {
                DOM.body.classList.add('loaded');
                DOM.loader.classList.add('hidden');
                setTimeout(() => {
                    DOM.loader.remove();
                    // Trigger load animations
                    animateHeroElements();
                }, 1000);
            }, delay);
        });
    };

    // Animate hero elements when page loads
    const animateHeroElements = () => {
        const heroContent = document.querySelector('.hero-content');
        const elements = heroContent.children;
        
        gsap.from(elements, {
            y: 30,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: "power2.out"
        });
    };

    // Particle background
    const initParticles = () => {
        const createParticlesForSection = (section) => {
            let container = section.querySelector('.particles-background');
            if (!container) {
                container = document.createElement('div');
                container.className = 'particles-background';
                const background = section.querySelector('.section-background');
                if (background) {
                    background.appendChild(container);
                }
            }
            
            for (let i = 0; i < CONFIG.particles.count; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                // Random properties
                const size = Utils.random(CONFIG.particles.sizeRange.min, CONFIG.particles.sizeRange.max);
                const opacity = Utils.random(CONFIG.particles.opacityRange.min, CONFIG.particles.opacityRange.max);
                const duration = Utils.random(CONFIG.particles.speedRange.min, CONFIG.particles.speedRange.max);
                const delay = Utils.random(0, 5);
                const colorIndex = Math.floor(Utils.random(0, CONFIG.particles.colors.length));
                
                Object.assign(particle.style, {
                    left: `${Utils.random(0, 100)}%`,
                    top: `${Utils.random(0, 100)}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                    opacity: opacity,
                    background: CONFIG.particles.colors[colorIndex],
                    borderRadius: '50%',
                    position: 'absolute',
                    animation: `float ${duration}s ease-in-out infinite`,
                    animationDelay: `${delay}s`
                });
                
                container.appendChild(particle);
            }
        };
        
        DOM.sections.forEach(createParticlesForSection);
    };

    // Skills animation
    const initSkillsAnimation = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const item = entry.target;
                    const progress = item.getAttribute('data-progress');
                    const progressBar = item.querySelector('.skill-progress');
                    
                    if (progressBar) {
                        progressBar.style.setProperty('--progress', `${progress}%`);
                        item.classList.add('in-viewport');
                    }
                    
                    // Animate the skill icon
                    const icon = item.querySelector('i');
                    if (icon) {
                        gsap.from(icon, {
                            rotate: -30,
                            scale: 0.8,
                            opacity: 0,
                            duration: 0.6,
                            ease: "back.out(1.7)"
                        });
                    }
                    
                    observer.unobserve(item);
                }
            });
        }, { threshold: 0.1 });
        
        DOM.skillItems.forEach(item => observer.observe(item));
    };

    // 3D Cube Animation
    const init3DCube = () => {
        const skillsSection = document.getElementById('skills');
        
        if (skillsSection) {
            const cubeWrapper = document.createElement('div');
            cubeWrapper.className = 'cube-wrapper';
            
            cubeWrapper.innerHTML = `
                <div class="cube">
                    <div class="cube-face face-front"><i class="fab fa-html5"></i></div>
                    <div class="cube-face face-back"><i class="fab fa-css3-alt"></i></div>
                    <div class="cube-face face-right"><i class="fab fa-js"></i></div>
                    <div class="cube-face face-left"><i class="fab fa-react"></i></div>
                    <div class="cube-face face-top"><i class="fab fa-node"></i></div>
                    <div class="cube-face face-bottom"><i class="fas fa-database"></i></div>
                </div>
            `;
            
            skillsSection.appendChild(cubeWrapper);
            
            // Get cube reference for animation
            state.cube = cubeWrapper.querySelector('.cube');
            
            // Animate cube on scroll
            const animateCube = () => {
                if (!state.cube) return;
                
                const rotateY = state.scrollYPos * 0.2;
                const rotateX = state.scrollYPos * 0.1;
                const wobbleX = Math.sin(Date.now() * 0.001) * CONFIG.cube.wobbleAmount;
                const wobbleY = Math.cos(Date.now() * 0.001) * CONFIG.cube.wobbleAmount;
                
                state.cube.style.transform = `
                    rotateX(${rotateX + wobbleX}deg) 
                    rotateY(${rotateY + wobbleY}deg)
                `;
                
                requestAnimationFrame(animateCube);
            };
            
            animateCube();
        }
    };

    // Mouse parallax effect
    const initMouseParallax = () => {
        const updateParallaxElements = () => {
            // Normalize coordinates to be between -1 and 1
            const x = (state.mousePosition.x / state.screenSize.width - 0.5) * 2;
            const y = (state.mousePosition.y / state.screenSize.height - 0.5) * 2;
            
            DOM.parallaxElements.forEach(el => {
                const strength = parseFloat(el.getAttribute('data-mouse-parallax')) || 20;
                
                // Use GSAP for smooth animation
                gsap.to(el, {
                    x: x * strength,
                    y: y * strength,
                    duration: 0.5,
                    ease: "power2.out"
                });
            });
        };
        
        document.addEventListener('mousemove', (e) => {
            state.mousePosition = Utils.getMousePos(e);
            updateParallaxElements();
        });
    };

    // Scroll animations
    const initScrollAnimations = () => {
        const updateProgressBar = () => {
            const progress = Utils.getScrollPercent();
            DOM.progressBar.style.width = `${progress}%`;
        };
        
        const updateNavbar = () => {
            if (state.scrollYPos > 50) {
                DOM.navbar.classList.add('scrolled');
            } else {
                DOM.navbar.classList.remove('scrolled');
            }
        };
        
        const updateSections = () => {
            DOM.sections.forEach(section => {
                if (Utils.isInViewport(section)) {
                    section.classList.add('in-viewport');
                    
                    // Animate section heading when it comes into view
                    const heading = section.querySelector('.section-heading');
                    if (heading && !heading.classList.contains('animated')) {
                        heading.classList.add('animated');
                        gsap.from(heading, {
                            y: 30,
                            opacity: 0,
                            duration: 0.8,
                            ease: "power2.out"
                        });
                    }
                }
            });
        };
        
        // Scroll event handler
        const handleScroll = () => {
            state.scrollYPos = window.scrollY;
            updateProgressBar();
            updateNavbar();
            updateSections();
        };
        
        window.addEventListener('scroll', handleScroll);
        
        // Initial check
        handleScroll();
        
        // Setup GSAP ScrollTrigger for advanced animations
        setupScrollTriggers();
    };

    // Setup GSAP ScrollTrigger animations
    const setupScrollTriggers = () => {
        // Animate project cards when they come into view
        gsap.utils.toArray('.project-card').forEach(card => {
            ScrollTrigger.create({
                trigger: card,
                start: "top 80%",
                onEnter: () => {
                    gsap.from(card, {
                        y: 50,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power2.out"
                    });
                },
                once: true
            });
        });
        
        // Animate mini project cards with stagger
        const miniProjectsGrid = document.querySelector('.mini-projects-grid');
        if (miniProjectsGrid) {
            const miniCards = miniProjectsGrid.querySelectorAll('.mini-project-card');
            ScrollTrigger.create({
                trigger: miniProjectsGrid,
                start: "top 75%",
                onEnter: () => {
                    gsap.from(miniCards, {
                        y: 30,
                        opacity: 0,
                        stagger: 0.15,
                        duration: 0.6,
                        ease: "power2.out"
                    });
                },
                once: true
            });
        }
    };

    // Initialize ThreeJS background for hero section
    const initThreeJSBackground = () => {
        if (!DOM.heroCanvas) return;
        
        // Set up Three.js scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({
            canvas: DOM.heroCanvas,
            alpha: true,
            antialias: true
        });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        // Create particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = CONFIG.three.particleCount;
        
        const posArray = new Float32Array(particlesCount * 3);
        const scaleArray = new Float32Array(particlesCount);
        
        for (let i = 0; i < particlesCount * 3; i += 3) {
            // Position vertices in a cube
            posArray[i] = (Math.random() - 0.5) * 2000; // x
            posArray[i + 1] = (Math.random() - 0.5) * 1000; // y
            posArray[i + 2] = (Math.random() - 0.5) * 1000; // z
            
            // Random scales for particles
            scaleArray[i / 3] = Math.random();
        }
        
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        particlesGeometry.setAttribute('scale', new THREE.BufferAttribute(scaleArray, 1));
        
        // Create material
        const particlesMaterial = new THREE.PointsMaterial({
            size: CONFIG.three.particleSize,
            color: 0x64ffda,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending
        });
        
        // Points
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);
        
        // Position camera
        camera.position.z = CONFIG.three.cameraDistance;
        
        // Store in state for mouse interaction
        state.threeJsScene = {
            scene,
            camera,
            renderer,
            particlesMesh
        };
        
        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            
            // Rotate particles slowly
            particlesMesh.rotation.x += 0.0003;
            particlesMesh.rotation.y += 0.0005;
            
            // Mouse interaction if available
            if (state.mousePosition.x && state.mousePosition.y) {
                // Convert mouse position to normalized coordinates (-1 to 1)
                const mouseX = (state.mousePosition.x / window.innerWidth) * 2 - 1;
                const mouseY = -(state.mousePosition.y / window.innerHeight) * 2 + 1;
                
                // Apply subtle movement to the particle system based on mouse position
                particlesMesh.rotation.x += mouseY * CONFIG.three.mouseStrength * 0.01;
                particlesMesh.rotation.y += mouseX * CONFIG.three.mouseStrength * 0.01;
            }
            
            renderer.render(scene, camera);
        };
        
        animate();
        
        // Handle window resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        
        window.addEventListener('resize', Utils.debounce(handleResize, 100));
    };

    // Projects background animation
    const initProjectsBackground = () => {
        if (!DOM.projectsBackground) return;
        
        const ctx = DOM.projectsBackground.getContext('2d');
        
        const resizeCanvas = () => {
            DOM.projectsBackground.width = DOM.projectsBackground.parentElement.offsetWidth;
            DOM.projectsBackground.height = DOM.projectsBackground.parentElement.offsetHeight;
        };
        
        const dots = [];
        const createDots = () => {
            dots.length = 0; // Clear existing dots
            const count = Math.floor(DOM.projectsBackground.width * DOM.projectsBackground.height / 10000);
            
            for (let i = 0; i < count; i++) {
                dots.push({
                    x: Math.random() * DOM.projectsBackground.width,
                    y: Math.random() * DOM.projectsBackground.height,
                    radius: Math.random() * 2 + 1,
                    speedX: Math.random() * 0.5 - 0.25,
                    speedY: Math.random() * 0.5 - 0.25
                });
            }
        };
        
        const drawDots = () => {
            ctx.clearRect(0, 0, DOM.projectsBackground.width, DOM.projectsBackground.height);
            
            // Draw dots
            ctx.fillStyle = 'rgba(100, 255, 218, 0.2)';
            dots.forEach(dot => {
                // Update position
                dot.x += dot.speedX;
                dot.y += dot.speedY;
                
                // Wrap around edges
                if (dot.x < 0) dot.x = DOM.projectsBackground.width;
                if (dot.x > DOM.projectsBackground.width) dot.x = 0;
                if (dot.y < 0) dot.y = DOM.projectsBackground.height;
                if (dot.y > DOM.projectsBackground.height) dot.y = 0;
                
                // Draw dot
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
                ctx.fill();
            });
            
            // Draw connections between nearby dots
            ctx.strokeStyle = 'rgba(100, 255, 218, 0.1)';
            ctx.lineWidth = 0.5;
            
            for (let i = 0; i < dots.length; i++) {
                for (let j = i + 1; j < dots.length; j++) {
                    const dx = dots[i].x - dots[j].x;
                    const dy = dots[i].y - dots[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(dots[i].x, dots[i].y);
                        ctx.lineTo(dots[j].x, dots[j].y);
                        ctx.stroke();
                    }
                }
            }
            
            requestAnimationFrame(drawDots);
        };
        
        // Initialize
        resizeCanvas();
        createDots();
        drawDots();
        
        // Handle resize
        window.addEventListener('resize', Utils.debounce(() => {
            resizeCanvas();
            createDots();
        }, 200));
    };

    // Skills canvas background
    const initSkillsCanvas = () => {
        if (!DOM.skillsCanvas) return;
        
        const ctx = DOM.skillsCanvas.getContext('2d');
        
        const resizeCanvas = () => {
            DOM.skillsCanvas.width = DOM.skillsCanvas.parentElement.offsetWidth;
            DOM.skillsCanvas.height = DOM.skillsCanvas.parentElement.offsetHeight;
        };
        
        const drawGrid = () => {
            ctx.clearRect(0, 0, DOM.skillsCanvas.width, DOM.skillsCanvas.height);
            
            // Draw grid lines
            ctx.strokeStyle = 'rgba(100, 255, 218, 0.1)';
            ctx.lineWidth = 1;
            
            const gridSize = 50;
            const time = Date.now() * 0.001; // Use time for animation
            
            // Calculate grid offset based on time
            const offsetX = Math.sin(time * 0.2) * 10;
            const offsetY = Math.cos(time * 0.2) * 10;
            
            // Vertical lines
            for (let x = offsetX % gridSize; x < DOM.skillsCanvas.width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, DOM.skillsCanvas.height);
                ctx.stroke();
            }
            
            // Horizontal lines
            for (let y = offsetY % gridSize; y < DOM.skillsCanvas.height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(DOM.skillsCanvas.width, y);
                ctx.stroke();
            }
            
            // Add some floating particles
            const particleCount = 20;
            for (let i = 0; i < particleCount; i++) {
                const x = (Math.sin(time + i) * 0.5 + 0.5) * DOM.skillsCanvas.width;
                const y = (Math.cos(time * 0.8 + i * 0.3) * 0.5 + 0.5) * DOM.skillsCanvas.height;
                const size = Math.sin(time * 0.5 + i) * 2 + 3;
                
                ctx.fillStyle = 'rgba(100, 255, 218, 0.2)';
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();
            }
            
            requestAnimationFrame(drawGrid);
        };
        
        // Initialize
        resizeCanvas();
        drawGrid();
        
        // Handle resize
        window.addEventListener('resize', Utils.debounce(resizeCanvas, 200));
    };

    // Mobile menu
    const initMobileMenu = () => {
        if (!DOM.mobileMenuToggle || !DOM.mobileMenuOverlay) return;
        
        const toggleMenu = () => {
            state.isMenuOpen = !state.isMenuOpen;
            DOM.mobileMenuToggle.classList.toggle('active', state.isMenuOpen);
            DOM.mobileMenuOverlay.classList.toggle('active', state.isMenuOpen);
            DOM.body.classList.toggle('menu-open', state.isMenuOpen);
        };
        
        DOM.mobileMenuToggle.addEventListener('click', toggleMenu);
        
        DOM.mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (state.isMenuOpen) toggleMenu();
            });
        });
    };

    // Custom cursor
    const initCustomCursor = () => {
        if (!DOM.cursorOuter || !DOM.cursorInner) return;
        
        const updateCursorPosition = (e) => {
            // Get mouse position including scroll
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            // Set cursor position with fixed positioning relative to viewport
            gsap.to(DOM.cursorOuter, {
                x: mouseX,
                y: mouseY,
                duration: 0.1,
                ease: "power2.out"
            });
            
            gsap.to(DOM.cursorInner, {
                x: mouseX,
                y: mouseY,
                duration: 0.01,
                ease: "power2.out"
            });
        };
        
        document.addEventListener('mousemove', updateCursorPosition);
        
        // Handle interactive elements
        const interactiveElements = document.querySelectorAll(
            'a, button, .skill-item, .project-card, .mini-project-card, .nav-link, .mobile-nav-link'
        );
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                DOM.cursorOuter.classList.add('active');
                DOM.cursorInner.classList.add('active');
                
                // Scale up the outer cursor
                gsap.to(DOM.cursorOuter, {
                    scale: 1.5,
                    backgroundColor: 'rgba(100, 255, 218, 0.1)',
                    borderColor: 'transparent',
                    duration: 0.3
                });
            });
            
            el.addEventListener('mouseleave', () => {
                DOM.cursorOuter.classList.remove('active');
                DOM.cursorInner.classList.remove('active');
                
                // Reset the outer cursor
                gsap.to(DOM.cursorOuter, {
                    scale: 1,
                    backgroundColor: 'transparent',
                    borderColor: 'var(--accent)',
                    duration: 0.3
                });
            });
        });
        
        // Hide default cursor
        document.documentElement.style.cursor = 'none';
        
        // Handle cursor on page leave
        document.addEventListener('mouseleave', () => {
            DOM.cursorOuter.style.display = 'none';
            DOM.cursorInner.style.display = 'none';
        });
        
        document.addEventListener('mouseenter', () => {
            DOM.cursorOuter.style.display = 'block';
            DOM.cursorInner.style.display = 'block';
        });
    };

    // Theme toggle
    const initThemeToggle = () => {
        if (!DOM.themeToggle) return;
        
        // Check for saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
            updateThemeIcon(savedTheme);
            state.isLightTheme = savedTheme === 'light';
        }
        
        DOM.themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            // Animate theme transition
            gsap.to('body', {
                backgroundColor: newTheme === 'dark' ? '#0a192f' : '#f8f9fa',
                duration: 0.5,
                ease: "power2.out"
            });
            
            // Update theme
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
            
            state.isLightTheme = newTheme === 'light';
        });
    };

    const updateThemeIcon = (theme) => {
        if (!DOM.themeToggle) return;
        
        const icon = theme === 'dark' ? 'sun' : 'moon';
        
        // Animate icon change
        gsap.to(DOM.themeToggle, {
            rotation: 360,
            duration: 0.5,
            ease: "back.out(1.7)",
            onComplete: () => {
                DOM.themeToggle.innerHTML = `<i class="fas fa-${icon}"></i>`;
                gsap.set(DOM.themeToggle, { rotation: 0 });
            }
        });
    };

    // Background audio player
    const initAudioPlayer = () => {
        const audio = new Audio('background-music.mp3');
        audio.loop = true;  
        audio.volume = CONFIG.audio.volume;
        
        const audioControl = DOM.audioControl;
        const audioText = DOM.audioPlayer.querySelector('.audio-text');
        
        const toggleAudio = () => {
            state.isAudioPlaying = !state.isAudioPlaying;
            
            if (state.isAudioPlaying) {
                audio.play().catch(err => {
                    console.log('Audio autoplay was prevented:', err);
                });
                audioControl.innerHTML = '<i class="fas fa-pause"></i>';
                audioText.textContent = 'Pause Background Music';
            } else {
                audio.pause();
                audioControl.innerHTML = '<i class="fas fa-play"></i>';
                audioText.textContent = 'Play Background Music';
            }
        };

        audioControl.addEventListener('click', toggleAudio);

        // Fade in audio
        gsap.to(audio, {
            volume: CONFIG.audio.volume,
            duration: CONFIG.audio.fadeTime / 1000
        });
    }

    // Initialize
    
    // Cache DOM elements
    cacheDOM();

    // Utility functions
    Utils.setVhProperty();

    // Initialize
    initPageLoader();
    initParticles();
    initSkillsAnimation();
    init3DCube();
    initMouseParallax();
    initScrollAnimations();
    initMobileMenu();
    initCustomCursor();
    initThemeToggle();
    initAudioPlayer();
    initThreeJSBackground();
    initProjectsBackground();
    initSkillsCanvas();
})();

