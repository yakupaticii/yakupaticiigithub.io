// Hero section animations
document.addEventListener('DOMContentLoaded', () => {
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
    
    // Animated Code Text
    const animatedCode = document.getElementById('animated-code');
    if (animatedCode) {
        const codeSnippets = [
            '&lt;code&gt;',
            'function()',
            'const data =',
            'import ML',
            'while(true)',
            'if(coding)',
            'for(i=0;i++)',
            'AI.train()',
            'ML.predict()',
            '&lt;/code&gt;'
        ];
        
        let currentIndex = 0;
        
        // Function to update the code text
        function updateCodeText() {
            // Fade out
            animatedCode.style.opacity = '0';
            
            setTimeout(() => {
                // Update text
                currentIndex = (currentIndex + 1) % codeSnippets.length;
                animatedCode.innerHTML = codeSnippets[currentIndex];
                
                // Fade in
                animatedCode.style.opacity = '1';
            }, 500);
        }
        
        // Set initial text
        animatedCode.innerHTML = codeSnippets[0];
        
        // Start the animation cycle
        setInterval(updateCodeText, 3000);
        
        // Add typing effect when hovering
        const codeAnimation = document.querySelector('.code-animation');
        if (codeAnimation) {
            codeAnimation.addEventListener('mouseenter', () => {
                const currentText = animatedCode.innerHTML;
                animatedCode.innerHTML = '';
                
                let i = 0;
                const typingEffect = setInterval(() => {
                    if (i < currentText.length) {
                        animatedCode.innerHTML += currentText.charAt(i);
                        i++;
                    } else {
                        clearInterval(typingEffect);
                    }
                }, 50);
            });
        }
    }
}); 