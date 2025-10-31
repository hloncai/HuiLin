// Mobile Navigation Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger menu
        const bars = mobileMenu.querySelectorAll('.bar');
        bars[0].style.transform = navMenu.classList.contains('active') 
            ? 'rotate(-45deg) translate(-5px, 6px)' 
            : 'none';
        bars[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
        bars[2].style.transform = navMenu.classList.contains('active') 
            ? 'rotate(45deg) translate(-5px, -6px)' 
            : 'none';
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const bars = mobileMenu.querySelectorAll('.bar');
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = 70; // Height of fixed navbar
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Publication filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const publications = document.querySelectorAll('.pub-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter publications
        const filter = button.getAttribute('data-filter');
        
        publications.forEach(pub => {
            if (filter === 'all' || pub.getAttribute('data-category') === filter) {
                pub.style.display = 'flex';
                setTimeout(() => {
                    pub.style.opacity = '1';
                    pub.style.transform = 'translateY(0)';
                }, 10);
            } else {
                pub.style.opacity = '0';
                pub.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    pub.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Show more news functionality
const showMoreNewsBtn = document.getElementById('show-more-news');
let newsExpanded = false;

if (showMoreNewsBtn) {
    showMoreNewsBtn.addEventListener('click', () => {
        const newsList = document.querySelector('.news-list');
        
        if (!newsExpanded) {
            // Add additional news items
            additionalNews.forEach(item => {
                const newsItem = document.createElement('div');
                newsItem.classList.add('news-item');
                newsItem.style.opacity = '0';
                newsItem.innerHTML = `
                    <span class="news-date">${item.date}</span>
                    <span class="news-content">${item.content}</span>
                `;
                newsList.insertBefore(newsItem, showMoreNewsBtn);
                
                // Animate in
                setTimeout(() => {
                    newsItem.style.opacity = '1';
                }, 10);
            });
            
            showMoreNewsBtn.textContent = 'Show Less';
            newsExpanded = true;
        } else {
            // Remove additional news items
            const addedItems = newsList.querySelectorAll('.news-item');
            const itemsToRemove = Array.from(addedItems).slice(-additionalNews.length);
            
            itemsToRemove.forEach(item => {
                item.style.opacity = '0';
                setTimeout(() => {
                    item.remove();
                }, 300);
            });
            
            showMoreNewsBtn.textContent = 'Show More';
            newsExpanded = false;
        }
    });
}

// Active navigation highlighting based on scroll position
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

function highlightNavigation() {
    let scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${sectionId}`) {
                    item.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animatedElements = document.querySelectorAll('.news-item, .pub-item, .team-member, .course-item');
animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(element);
});

// Load more publications dynamically (optional)
function loadMorePublications() {
    // This function can be used to load more publications via AJAX
    // or from a JavaScript array/object
    console.log('Loading more publications...');
}

// Initialize tooltips (if needed)
function initTooltips() {
    const elements = document.querySelectorAll('[data-tooltip]');
    elements.forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = e.target.getAttribute('data-tooltip');
            document.body.appendChild(tooltip);
            
            const rect = e.target.getBoundingClientRect();
            tooltip.style.position = 'absolute';
            tooltip.style.top = `${rect.top - 30}px`;
            tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
        });
        
        element.addEventListener('mouseleave', () => {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
}

// Add search functionality (optional)
function addSearchFunctionality() {
    const searchInput = document.getElementById('search-publications');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const publications = document.querySelectorAll('.pub-item');
            
            publications.forEach(pub => {
                const text = pub.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    pub.style.display = 'flex';
                } else {
                    pub.style.display = 'none';
                }
            });
        });
    }
}

// Print functionality for CV
function printCV() {
    window.print();
}

// Email obfuscation (anti-spam)
function protectEmail() {
    const emailElements = document.querySelectorAll('[data-email]');
    emailElements.forEach(element => {
        const email = element.getAttribute('data-email');
        element.textContent = email.replace('[at]', '@').replace('[dot]', '.');
        element.setAttribute('href', `mailto:${email.replace('[at]', '@').replace('[dot]', '.')}`);
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    highlightNavigation();
    initTooltips();
    addSearchFunctionality();
    protectEmail();
});

// Add CSS for active navigation state
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color);
        border-bottom-color: var(--primary-color);
    }
    
    .tooltip {
        background-color: var(--text-dark);
        color: var(--white);
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 0.875rem;
        z-index: 1000;
        pointer-events: none;
    }
    
    @media print {
        .navbar, .nav-toggle, .show-more-btn, .filter-btn {
            display: none;
        }
        
        section {
            page-break-inside: avoid;
        }
        
        .pub-item, .news-item {
            page-break-inside: avoid;
        }
    }
`;
document.head.appendChild(style);
