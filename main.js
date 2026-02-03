
// Initialize Lucide Icons
function initIcons() {
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// Scroll Reveal Logic with Staggering Support
function reveal() {
    const reveals = document.querySelectorAll(".reveal, .reveal-stagger");
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}

// Smooth Header Change
window.addEventListener("scroll", reveal);

// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
    initIcons();
    
    // Slight delay for initial reveals to ensure smooth page load feel
    setTimeout(reveal, 100);
    
    // Contact Form Handler with premium feedback
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = `
                <span class="flex items-center justify-center gap-2">
                    <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                </span>
            `;
            btn.disabled = true;
            btn.style.opacity = "0.7";
            
            // Mock submission delay
            setTimeout(() => {
                btn.innerHTML = `<span class="flex items-center justify-center gap-2"><i data-lucide="check-circle" class="w-5 h-5"></i> Audit Booked!</span>`;
                initIcons(); // Re-init for the new check icon
                btn.classList.remove('bg-blue-600');
                btn.classList.add('bg-emerald-600');
                btn.style.opacity = "1";
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    btn.classList.add('bg-blue-600');
                    btn.classList.remove('bg-emerald-600');
                    contactForm.reset();
                }, 4000);
            }, 1800);
        });
    }
});

// Smooth scroll logic for standard links with offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});
