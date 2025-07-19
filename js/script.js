document.addEventListener('DOMContentLoaded', function() {
    // Check for ServiceWorker support
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').then(function() {
            console.log('Service Worker registered');
        }).catch(function(error) {
            console.log('Service Worker registration failed:', error);
        });
    }
    
    // Navigation highlight
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
    
    function updateActiveLink() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();
    
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Add message when form is in an iframe
    const formIframe = document.querySelector('.google-form-container iframe');
    if (formIframe) {
        formIframe.onload = function() {
            // Add event listener to know when form is submitted (not reliable with Google Forms)
            // This is just for UI feedback, as Google Forms handles the actual submission
            formIframe.addEventListener('load', function() {
                // If URL contains "formResponse" it means the form was likely submitted
                if (formIframe.contentWindow.location.href.includes('formResponse')) {
                    showThankYouMessage();
                }
            });
        };
    }
    
    // Show thank you message (appears after form submission)
    function showThankYouMessage() {
        const thankYouMessage = document.createElement('div');
        thankYouMessage.className = 'thank-you-message';
        thankYouMessage.innerHTML = `
            <div class="message-content">
                <i class="fas fa-check-circle"></i>
                <h3>Obrigado pela sua contribuição!</h3>
                <p>Suas fotos foram enviadas com sucesso para o nosso álbum.</p>
                <button id="closeMessage" class="btn">Fechar</button>
            </div>
        `;
        document.body.appendChild(thankYouMessage);
        
        // Close button functionality
        document.getElementById('closeMessage').addEventListener('click', function() {
            document.body.removeChild(thankYouMessage);
        });
        
        // Auto-close after 5 seconds
        setTimeout(() => {
            if (document.body.contains(thankYouMessage)) {
                document.body.removeChild(thankYouMessage);
            }
        }, 5000);
    }
    
    // Add styles for thank you message
    const style = document.createElement('style');
    style.textContent = `
        .thank-you-message {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0,0,0,0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        
        .message-content {
            background-color: white;
            padding: 2rem;
            border-radius: 10px;
            text-align: center;
            max-width: 90%;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        
        .message-content i {
            font-size: 3rem;
            color: #4caf50;
            margin-bottom: 1rem;
        }
        
        .message-content h3 {
            margin-bottom: 0.5rem;
            color: var(--primary-color);
        }
    `;
    document.head.appendChild(style);
}); 