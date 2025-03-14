// Hero section animations
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded - initializing animations v2');
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
    
    // Simplified YA Logo Animation
    const animatedCode = document.getElementById('animated-code');
    console.log('Animated code element:', animatedCode);
    
    if (animatedCode) {
        // Set the content directly to YA with styling
        animatedCode.innerHTML = '<span class="matrix-y">Y</span><span class="matrix-a">A</span>';
        console.log('Set YA content');
        
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