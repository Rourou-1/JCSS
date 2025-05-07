        // JavaScript for FAQ accordion functionality

        document.addEventListener('DOMContentLoaded', function() {

            // Toggle FAQ answers
            const faqQuestions = document.querySelectorAll('.faq-question');
            
            faqQuestions.forEach(question => {
                question.addEventListener('click', function() {
                    const answer = this.nextElementSibling;
                    const icon = this.querySelector('.faq-toggle i');
                    
                    // Toggle active class
                    this.classList.toggle('active');
                    
                    // Toggle icon
                    if (icon.classList.contains('fa-plus')) {
                        icon.classList.remove('fa-plus');
                        icon.classList.add('fa-minus');
                    } else {
                        icon.classList.remove('fa-minus');
                        icon.classList.add('fa-plus');
                    }
                    
                    // Toggle answer visibility
                    if (answer.style.maxHeight) {
                        answer.style.maxHeight = null;
                    } else {
                        answer.style.maxHeight = answer.scrollHeight + "px";
                    }
                });
            });
            
            // Category filter functionality
            const categoryButtons = document.querySelectorAll('.faq-category-btn');
            const faqSections = document.querySelectorAll('.faq-section');
            
            categoryButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    categoryButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    const category = this.getAttribute('data-category');
                    
                    // Show/hide sections based on category
                    if (category === 'all') {
                        faqSections.forEach(section => {
                            section.style.display = 'block';
                        });
                    } else {
                        faqSections.forEach(section => {
                            if (section.id === category + '-faqs' || section.classList.contains('contact-section')) {
                                section.style.display = 'block';
                            } else {
                                section.style.display = 'none';
                            }
                        });
                    }
                });
            });
        });