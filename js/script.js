// Hero section animations
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded - initializing animations');
    const heroText = document.querySelector('.hero-text');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroText && heroImage) {
        heroText.style.opacity = '0';
        heroImage.style.opacity = '0';
        
        setTimeout(() => {
            heroText.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            heroImage.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            
            heroText.style.opacity = '1';
            heroImage.style.opacity = '1';
        }, 100);
    }

    // Mobile Navigation
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    if (mobileNavToggle && navLinks) {
        mobileNavToggle.addEventListener('click', () => {
            mobileNavToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        navLinksItems.forEach(link => {
            link.addEventListener('click', () => {
                mobileNavToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav') && navLinks.classList.contains('active')) {
            mobileNavToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
    
    // Advanced Matrix-style Animation for Logo
    const animatedCode = document.getElementById('animated-code');
    console.log('Animated code element:', animatedCode);
    if (animatedCode) {
        // Create matrix effect with YA
        const createMatrixEffect = () => {
            // Set initial content
            animatedCode.innerHTML = '<span class="matrix-y">Y</span><span class="matrix-a">A</span>';
            
            // Get the letter elements
            const yElement = animatedCode.querySelector('.matrix-y');
            const aElement = animatedCode.querySelector('.matrix-a');
            
            // Add glitch effect occasionally
            const glitchEffect = () => {
                const shouldGlitch = Math.random() > 0.7;
                if (shouldGlitch) {
                    // Random glitch characters
                    const glitchChars = ['¥', '¢', '£', '€', '¥', 'Ψ', 'Φ'];
                    const randomChar = glitchChars[Math.floor(Math.random() * glitchChars.length)];
                    
                    // Apply glitch to Y
                    yElement.textContent = randomChar;
                    yElement.classList.add('glitch');
                    
                    // Reset after short delay
                    setTimeout(() => {
                        yElement.textContent = 'Y';
                        yElement.classList.remove('glitch');
                    }, 100);
                }
                
                // Glitch for A with different timing
                setTimeout(() => {
                    const shouldGlitchA = Math.random() > 0.7;
                    if (shouldGlitchA) {
                        const glitchCharsA = ['Δ', 'Λ', '∆', '∀', '∂', '∃'];
                        const randomCharA = glitchCharsA[Math.floor(Math.random() * glitchCharsA.length)];
                        
                        aElement.textContent = randomCharA;
                        aElement.classList.add('glitch');
                        
                        setTimeout(() => {
                            aElement.textContent = 'A';
                            aElement.classList.remove('glitch');
                        }, 120);
                    }
                }, 150);
            };
            
            // Run glitch effect at random intervals
            setInterval(glitchEffect, 2000);
            
            // Initial glitch after a delay
            setTimeout(glitchEffect, 1000);
        };
        
        // Initialize the matrix effect
        createMatrixEffect();
        
        // Add hover effect
        const codeAnimation = document.querySelector('.code-animation');
        if (codeAnimation) {
            codeAnimation.addEventListener('mouseenter', () => {
                // Pulse effect on hover
                animatedCode.classList.add('pulse');
                
                // Remove pulse class after animation completes
                setTimeout(() => {
                    animatedCode.classList.remove('pulse');
                }, 500);
            });
        }
    }
}); 