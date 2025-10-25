// Modern scroll effect for hero section
document.addEventListener('DOMContentLoaded', () => {
    const heroPhoto = document.querySelector('.hero-photo-container');
    const photoFrame = document.querySelector('.photo-frame');
    const heroContent = document.querySelector('.hero-content');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const introScreen = document.getElementById('intro-screen');
    
    if (!heroPhoto || !introScreen) {
        console.log('Scroll effect elements not found');
        return;
    }

    let scrollPosition = 0;
    const maxScroll = 800;

    function updateScrollEffects() {
        scrollPosition = window.scrollY;
        
        // Calculate scroll progress
        const progress = Math.min(scrollPosition / maxScroll, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        if (heroPhoto) {
            // Photo scales down and moves up
            const photoScale = 1 - (progress * 0.3);
            const photoTranslateY = -progress * 100;
            
            heroPhoto.style.transform = `
                scale(${photoScale})
                translateY(${photoTranslateY}px)
            `;
            heroPhoto.style.opacity = 1 - progress;
        }
        
        if (photoFrame) {
            // Add rotation to photo frame as you scroll
            const photoRotate = progress * 5;
            photoFrame.style.transform = `rotate(${photoRotate}deg)`;
        }
        
        if (heroContent) {
            // Content stays visible and slightly moves
            const contentTranslateY = progress * 20;
            heroContent.style.transform = `translateY(${contentTranslateY}px)`;
            // Don't fade out - keep it visible
        }
        
        // Remove scroll indicator logic - no scrolling on intro
        
        // Background gets darker as you scroll
        if (introScreen) {
            const bgOpacity = 0.3 + (progress * 0.4);
            introScreen.style.background = `
                radial-gradient(
                    ellipse at top,
                    rgba(26, 10, 26, ${1 - bgOpacity}) 0%,
                    rgba(10, 10, 10, ${1 - bgOpacity * 0.5}) 50%,
                    rgba(0, 0, 0, 1) 100%
                )
            `;
        }
    }

    // Optimized scroll handler
    let ticking = false;
    
    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateScrollEffects();
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Initial call
    updateScrollEffects();
});
