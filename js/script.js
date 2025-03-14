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
    
    // Animated Code Text - simplified to only show "yakup atıcı"
    const animatedCode = document.getElementById('animated-code');
    console.log('Animated code element:', animatedCode);
    if (animatedCode) {
        // Set fixed text to "yakup atıcı"
        animatedCode.textContent = 'yakup atıcı';
        console.log('Fixed text set:', animatedCode.textContent);
        
        // Add typing effect when hovering
        const codeAnimation = document.querySelector('.code-animation');
        if (codeAnimation) {
            codeAnimation.addEventListener('mouseenter', () => {
                const currentText = 'yakup atıcı';
                animatedCode.textContent = '';
                
                let i = 0;
                const typingEffect = setInterval(() => {
                    if (i < currentText.length) {
                        animatedCode.textContent += currentText.charAt(i);
                        i++;
                    } else {
                        clearInterval(typingEffect);
                    }
                }, 50);
            });
        }
    }
}); 