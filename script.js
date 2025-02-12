 // Enhanced Initialization
 document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
    init3DEffect();
    initParallax();
    initScrollProgress();
    initTheme();
    initSoundEffects();
    initKonamiCode();
});

// Enhanced GSAP Animations
function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Animation
    gsap.from('.hero-content', {
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: 'power4.out'
    });

    // Section Animations
    gsap.utils.toArray('section').forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'top 20%',
                scrub: 1,
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 1
        });
    });

    // Timeline Animations
    gsap.utils.toArray('.timeline-item').forEach(item => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: item.classList.contains('left') ? -50 : 50,
            duration: 0.8
        });
    });

    // Skill Items Stagger Animation
    gsap.from('.skill-item', {
        scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.6
    });
}

// Enhanced 3D Effect
function init3DEffect() {
    const cards = document.querySelectorAll('.card-3d');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * 10;
            const rotateY = ((centerX - x) / centerX) * 10;
            
            card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale3d(1.05, 1.05, 1.05)
            `;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `
                perspective(1000px)
                rotateX(0deg)
                rotateY(0deg)
                scale3d(1, 1, 1)
            `;
        });
    });
}

// Enhanced Parallax Effect
function initParallax() {
    const parallaxElements = document.querySelectorAll('.hero, .card-3d, .project-card');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const elementTop = element.offsetTop;
            const elementHeight = element.offsetHeight;
            const screenHeight = window.innerHeight;
            
            if (scrolled + screenHeight > elementTop && 
                scrolled < elementTop + elementHeight) {
                const speed = 0.3;
                const yPos = (scrolled - elementTop) * speed;
                element.style.transform = `translateY(${yPos}px)`;
            }
        });
    });
}

// Enhanced Scroll Progress
function initScrollProgress() {
    const progressBar = document.querySelector('.progress-bar');
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = `${scrolled}%`;
    });
}

// Enhanced Theme Toggle
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        playSound(880, 0.1, 'sine');
    });
}

// Enhanced Sound Effects
function initSoundEffects() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();

    function playSound(frequency = 440, duration = 0.1, type = 'sine') {
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        oscillator.type = type;
        oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
        
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
        
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + duration);
    }

    document.querySelectorAll('.skill-item, .download-btn, .project-card')
        .forEach(element => {
            element.addEventListener('mouseenter', () => playSound(660, 0.05, 'sine'));
            element.addEventListener('click', () => playSound(880, 0.1, 'square'));
        });
}

// Konami Code Easter Egg
function initKonamiCode() {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
}

function activateEasterEgg() {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'];
    document.body.style.animation = 'rainbow 5s infinite';
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            ${colors.map((color, i) => 
                `${(i * 100) / colors.length}% { background-color: ${color}; }`
            ).join('\n')}
        }
    `;
    document.head.appendChild(style);
    
    // Play melody
    setTimeout(() => playSound(523.25, 0.2, 'square'), 0);    // C5
    setTimeout(() => playSound(659.25, 0.2, 'square'), 200);  // E5
    setTimeout(() => playSound(783.99, 0.2, 'square'), 400);  // G5
    
    setTimeout(() => {
        document.body.style.animation = '';
        style.remove();
    }, 5000);
}

// Smooth Scroll Implementation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});