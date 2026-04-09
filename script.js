// HudaLabs - Premium Islamic Learning Reimagined
// Main JavaScript File - SEO & Performance Optimized 2026

// ============================================
// Mobile Menu Toggle
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = !mobileMenu.classList.contains('hidden');
            
            if (isOpen) {
                // Close menu
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                mobileMenuBtn.querySelector('path').setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            } else {
                // Open menu
                mobileMenu.classList.remove('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'true');
                mobileMenuBtn.querySelector('path').setAttribute('d', 'M6 18L18 6M6 6l12 12');
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                mobileMenuBtn.querySelector('path').setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                mobileMenuBtn.querySelector('path').setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            }
        });
    }
});

// Native Lazy Loading Fallback & Enhancement
(function() {
    'use strict';
    
    // Lazy load images without native support
    if ('loading' in HTMLImageElement.prototype) {
        // Native lazy loading is supported
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
            }
        });
    } else {
        // Fallback for browsers without native lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        script.async = true;
        document.body.appendChild(script);
    }
})();

// Smooth appearance on scroll with performance optimization
const observerOptions = { 
    threshold: 0.1,
    rootMargin: '50px' // Start loading slightly before element enters viewport
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            // Stop observing after animation completes (performance boost)
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply animation to all sections with reduced DOM queries
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
        observer.observe(section);
    });
});

// 3D Carousel Logic - SEO Optimized with descriptive alt text
const carouselImages = [
    { id: 1, src: '1.webp', alt: 'Noor Ul Huda Islamic App Home Screen - Interactive Islamic Learning Interface', width: 300, height: 600 },
    { id: 2, src: '2.webp', alt: 'Journey Through Prophet Stories - Islamic Education for Kids', width: 300, height: 600 },
    { id: 3, src: '3.webp', alt: 'Build Daily Salah Prayer Habit - Muslim Kids Prayer Tracker', width: 300, height: 600 },
    { id: 4, src: '4.webp', alt: 'Learn Namaz Step-by-Step - Complete Islamic Prayer Guide', width: 300, height: 600 },
    { id: 5, src: '5.webp', alt: 'Learn Essential Daily Duas - Islamic Supplications for Children', width: 300, height: 600 },
    { id: 6, src: '6.webp', alt: 'Learn Arabic Letters and Alphabet - Quran Reading Basics', width: 300, height: 600 },
    { id: 7, src: '7.webp', alt: 'Word-by-Word Quran Learning - Interactive Quran Translation', width: 300, height: 600 },
    { id: 8, src: '8.webp', alt: 'Islamic Knowledge Quiz - Test Your Memory and Understanding', width: 300, height: 600 }
];

let carouselActiveIndex = 3;
let carouselTouchStartX = null;

function initCarousel() {
    const container = document.getElementById('carousel-container');
    const indicators = document.getElementById('carousel-indicators');
    const prevBtn = document.getElementById('carousel-prev-btn');
    const nextBtn = document.getElementById('carousel-next-btn');

    if (!container) return;

    // Generate Cards with lazy loading and SEO optimization
    carouselImages.forEach((img, index) => {
        const card = document.createElement('div');
        card.className = 'carousel-card';
        card.dataset.index = index;
        
        // Lazy load images beyond the first 3 for performance
        const loadingAttr = index < 3 ? 'eager' : 'lazy';
        
        card.innerHTML = `
            <img src="${img.src}" alt="${img.alt}" draggable="false" loading="${loadingAttr}" width="${img.width}" height="${img.height}" decoding="async">
            <div class="carousel-card-border"></div>
        `;
        
        card.addEventListener('click', () => {
            carouselActiveIndex = index;
            updateCarousel();
        });

        container.appendChild(card);

        // Generate Dots
        const dot = document.createElement('div');
        dot.className = 'carousel-dot h-2 w-2 rounded-full bg-white/30 cursor-pointer';
        dot.addEventListener('click', () => {
            carouselActiveIndex = index;
            updateCarousel();
        });
        indicators.appendChild(dot);
    });

    // Navigation buttons with accessibility
    prevBtn.addEventListener('click', () => {
        if (carouselActiveIndex > 0) {
            carouselActiveIndex--;
            updateCarousel();
            // Announce to screen readers
            announceCarouselChange();
        }
    });
    prevBtn.setAttribute('aria-label', 'Previous image in Islamic app features carousel');

    nextBtn.addEventListener('click', () => {
        if (carouselActiveIndex < carouselImages.length - 1) {
            carouselActiveIndex++;
            updateCarousel();
            announceCarouselChange();
        }
    });
    nextBtn.setAttribute('aria-label', 'Next image in Islamic app features carousel');

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' && carouselActiveIndex < carouselImages.length - 1) {
            carouselActiveIndex++;
            updateCarousel();
        } else if (e.key === 'ArrowLeft' && carouselActiveIndex > 0) {
            carouselActiveIndex--;
            updateCarousel();
        }
    });

    // Touch events for mobile
    container.addEventListener('touchstart', (e) => {
        carouselTouchStartX = e.touches[0].clientX;
    });

    container.addEventListener('touchend', (e) => {
        if (carouselTouchStartX === null) return;
        const touchEndX = e.changedTouches[0].clientX;
        const diff = carouselTouchStartX - touchEndX;

        if (diff > 50 && carouselActiveIndex < carouselImages.length - 1) {
            carouselActiveIndex++;
            updateCarousel();
        } else if (diff < -50 && carouselActiveIndex > 0) {
            carouselActiveIndex--;
            updateCarousel();
        }
        carouselTouchStartX = null;
    });

    updateCarousel();
}

function updateCarousel() {
    const cards = document.querySelectorAll('.carousel-card');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevBtn = document.getElementById('carousel-prev-btn');
    const nextBtn = document.getElementById('carousel-next-btn');

    cards.forEach((card, index) => {
        const offset = index - carouselActiveIndex;
        const absOffset = Math.abs(offset);
        const sign = Math.sign(offset);

        let translateX = 0;
        let scale = 1;
        let opacity = 1;
        let brightness = 1;
        let rotateY = 0;
        let zIndex = 20 - absOffset;
        let pointerEvents = absOffset > 2 ? 'none' : 'auto';
        let boxShadow = '0 20px 40px rgba(0,0,0,0.8)';

        if (absOffset === 0) {
            translateX = 0; scale = 1.1; opacity = 1; brightness = 1; rotateY = 0;
            boxShadow = '0 30px 60px -15px rgba(0,107,84,0.3)';
            card.classList.add('active');
        } else if (absOffset === 1) {
            translateX = sign * 110; scale = 0.85; opacity = 0.8; brightness = 0.5; rotateY = sign * -10;
            card.classList.remove('active');
        } else if (absOffset === 2) {
            translateX = sign * 180; scale = 0.65; opacity = 0.5; brightness = 0.3; rotateY = sign * -15;
            card.classList.remove('active');
        } else {
            translateX = sign * 240; scale = 0.5; opacity = 0; brightness = 0;
            card.classList.remove('active');
        }

        card.style.transform = `translateX(${translateX}%) scale(${scale}) perspective(1000px) rotateY(${rotateY}deg)`;
        card.style.zIndex = zIndex;
        card.style.opacity = opacity;
        card.style.filter = `brightness(${brightness})`;
        card.style.pointerEvents = pointerEvents;
        card.style.boxShadow = boxShadow;
    });

    // Update dots
    dots.forEach((dot, index) => {
        if (index === carouselActiveIndex) {
            dot.classList.add('active');
            dot.classList.remove('bg-white/30');
        } else {
            dot.classList.remove('active');
            dot.classList.add('bg-white/30');
        }
    });

    // Update buttons state
    prevBtn.disabled = carouselActiveIndex === 0;
    nextBtn.disabled = carouselActiveIndex === carouselImages.length - 1;
}

// Announce carousel changes for screen readers (accessibility)
function announceCarouselChange() {
    const currentImage = carouselImages[carouselActiveIndex];
    const announcement = `Showing ${currentImage.alt}, image ${carouselActiveIndex + 1} of ${carouselImages.length}`;
    
    // Create or update ARIA live region
    let liveRegion = document.getElementById('carousel-live-region');
    if (!liveRegion) {
        liveRegion = document.createElement('div');
        liveRegion.id = 'carousel-live-region';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only'; // Screen reader only
        document.body.appendChild(liveRegion);
    }
    liveRegion.textContent = announcement;
}

// Initialize carousel when DOM is ready with async loading
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarousel);
} else {
    // DOM already loaded
    initCarousel();
}

// ============================================
// Testimonials Slider
// ============================================
function initTestimonialsSlider() {
    const slider = document.getElementById('testimonials-slider');
    const prevBtn = document.getElementById('testimonials-prev-btn');
    const nextBtn = document.getElementById('testimonials-next-btn');
    const indicatorsRoot = document.getElementById('testimonials-indicators');

    if (!slider || !prevBtn || !nextBtn || !indicatorsRoot) return;

    const cards = Array.from(slider.querySelectorAll('[data-testimonial-card]'));
    if (!cards.length) return;

    let autoplayTimer = null;
    const speedFromHtml = Number.parseInt(slider.dataset.autoplaySpeed || '', 10);
    const autoplayDelay = Number.isFinite(speedFromHtml) && speedFromHtml >= 1500 ? speedFromHtml : 3000;
    let indicatorButtons = [];
    let cardPositions = [];

    const buildCardPositions = () => {
        cardPositions = cards.map((card) => Math.round(card.offsetLeft));
    };

    const getCurrentIndex = () => {
        if (!cardPositions.length) return 0;

        let closestIdx = 0;
        let closestDistance = Math.abs(slider.scrollLeft - cardPositions[0]);

        for (let idx = 1; idx < cardPositions.length; idx += 1) {
            const distance = Math.abs(slider.scrollLeft - cardPositions[idx]);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestIdx = idx;
            }
        }

        return closestIdx;
    };

    const goToIndex = (index, smooth = true) => {
        if (!cardPositions.length) buildCardPositions();
        if (!cardPositions.length) return;

        const target = Math.max(0, Math.min(cards.length - 1, index));
        slider.scrollTo({
            left: cardPositions[target],
            behavior: smooth ? 'smooth' : 'auto'
        });
    };

    const updateIndicators = () => {
        const active = getCurrentIndex();
        indicatorButtons.forEach((btn, idx) => {
            if (idx === active) {
                btn.setAttribute('aria-selected', 'true');
            } else {
                btn.setAttribute('aria-selected', 'false');
            }
        });
    };

    const nextSlide = () => {
        const active = getCurrentIndex();
        const next = active >= cards.length - 1 ? 0 : active + 1;
        goToIndex(next);
    };

    const prevSlide = () => {
        const active = getCurrentIndex();
        const prev = active <= 0 ? cards.length - 1 : active - 1;
        goToIndex(prev);
    };

    const stopAutoplay = () => {
        if (autoplayTimer) {
            clearInterval(autoplayTimer);
            autoplayTimer = null;
        }
    };

    const startAutoplay = () => {
        stopAutoplay();
        autoplayTimer = setInterval(nextSlide, autoplayDelay);
    };

    // Build indicators
    indicatorsRoot.innerHTML = '';
    indicatorButtons = cards.map((_, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'testimonial-indicator';
        btn.setAttribute('aria-label', `Go to testimonial ${idx + 1}`);
        btn.setAttribute('role', 'tab');
        btn.addEventListener('click', () => {
            goToIndex(idx);
            stopAutoplay();
            startAutoplay();
        });
        indicatorsRoot.appendChild(btn);
        return btn;
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoplay();
        startAutoplay();
    });

    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoplay();
        startAutoplay();
    });

    let scrollRaf = null;
    slider.addEventListener('scroll', () => {
        if (scrollRaf) cancelAnimationFrame(scrollRaf);
        scrollRaf = requestAnimationFrame(updateIndicators);
    }, { passive: true });

    slider.addEventListener('mouseenter', stopAutoplay);
    slider.addEventListener('mouseleave', startAutoplay);
    slider.addEventListener('touchstart', stopAutoplay, { passive: true });
    slider.addEventListener('touchend', startAutoplay);
    prevBtn.addEventListener('focus', stopAutoplay);
    nextBtn.addEventListener('focus', stopAutoplay);
    prevBtn.addEventListener('blur', startAutoplay);
    nextBtn.addEventListener('blur', startAutoplay);

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopAutoplay();
        } else {
            startAutoplay();
        }
    });

    window.addEventListener('resize', () => {
        const active = getCurrentIndex();
        buildCardPositions();
        goToIndex(active, false);
        updateIndicators();
    });

    buildCardPositions();
    goToIndex(0, false);
    updateIndicators();
    startAutoplay();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTestimonialsSlider);
} else {
    initTestimonialsSlider();
}

// ============================================
// Custom SVG Cursor - Lightweight Implementation
// ============================================
(function() {
    // Only enable on desktop devices
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    const isSmallScreen = window.innerWidth < 768;
    
    // Skip custom cursor on mobile
    if (isTouchDevice || isSmallScreen) return;
    
    // Enable custom cursor class on body
    document.body.classList.add('custom-cursor-enabled');
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth < 768) {
                document.body.classList.remove('custom-cursor-enabled');
            } else {
                document.body.classList.add('custom-cursor-enabled');
            }
        }, 150);
    });
})();

// Performance optimization: Preload critical images
(function() {
    'use strict';
    
    // Preload hero images for better Core Web Vitals
    const criticalImages = [
        'Untitled design/10.webp', // Logo
        'Untitled (512 x 512 px) (6).webp' // Hero image
    ];
    
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            criticalImages.forEach(src => {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.as = 'image';
                link.href = src;
                document.head.appendChild(link);
            });
        });
    }
})();
