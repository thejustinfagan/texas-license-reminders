// Texas License Reminders - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
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

    // Form submission handling
    const form = document.querySelector('.signup-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            const submitButton = form.querySelector('.submit-button');
            const originalText = submitButton.textContent;
            
            // Show loading state
            submitButton.textContent = 'Submitting...';
            submitButton.disabled = true;
            
            // Note: Formspree handles the actual submission
            // This just provides UI feedback
            
            // If using Formspree, the form will redirect or show success
            // For a custom backend, you'd handle the response here
        });
    }

    // Animate stats on scroll
    const observerOptions = {
        threshold: 0.5
    };

    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Add initial styles and observe elements
    document.querySelectorAll('.stat-item, .problem-card, .step, .license-card, .faq-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        animateOnScroll.observe(el);
    });

    // License number validation helper
    const licenseInput = document.getElementById('license_number');
    if (licenseInput) {
        licenseInput.addEventListener('input', function() {
            // Remove non-numeric characters (Texas licenses are numeric)
            this.value = this.value.replace(/[^0-9]/g, '');
        });
    }

    // Console message for developers
    console.log('🔔 Texas License Reminders');
    console.log('Interested in the data behind this? Contact us!');
});
