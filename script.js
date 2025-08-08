// Global variables and state management
let currentArticlesPage = 0;
const articlesPerPage = 6;
let currentFilter = 'all';
let searchQuery = '';
let isLoading = false;

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Main initialization function
function initializeApp() {
    setupEventListeners();
    loadInitialArticles();
    setupMobileNavigation();
    setupScrollEffects();
    setupModals();
    setupSearch();
    setupForms();
    showRandomHealthTip();
}

// Event Listeners Setup
function setupEventListeners() {
    // Navigation smooth scrolling
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', handleNavigation);
    });
    
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', handleFilterChange);
    });
    
    // Category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', handleCategoryClick);
    });
    
    // Load more articles button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreArticles);
    }
    
    // Search functionality
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        // Real-time search with debounce
        searchInput.addEventListener('input', debounce(performSearch, 300));
    }
    
    // Window scroll events
    window.addEventListener('scroll', handleScroll);
    
    // Window resize events
    window.addEventListener('resize', handleResize);
}

// Mobile Navigation Setup
function setupMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Smooth Navigation Handler
function handleNavigation(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    scrollToSection(targetId);
    
    // Update active navigation link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    this.classList.add('active');
}

// Smooth Scroll Function
function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for fixed header
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Scroll Effects Setup
function setupScrollEffects() {
    // Header scroll effect
    const header = document.querySelector('.header');
    
    function updateHeaderOnScroll() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    updateHeaderOnScroll();
    window.addEventListener('scroll', updateHeaderOnScroll);
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.article-card, .category-card, .stat').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Modal Management
function setupModals() {
    // Newsletter modal
    const newsletterModal = document.getElementById('newsletterModal');
    const articleModal = document.getElementById('articleModal');
    
    // Close modals when clicking the X
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target);
        }
    });
    
    // Escape key to close modals
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal').forEach(modal => {
                if (modal.style.display === 'block') {
                    closeModal(modal);
                }
            });
        }
    });
}

// Open Modal Function
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Focus management for accessibility
        const firstFocusable = modal.querySelector('input, button, textarea, select');
        if (firstFocusable) {
            firstFocusable.focus();
        }
    }
}

// Close Modal Function
function closeModal(modal) {
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Search Functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.setAttribute('autocomplete', 'off');
    }
}

function performSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    searchQuery = searchInput.value.trim();
    currentArticlesPage = 0;
    
    showLoadingSpinner();
    
    // Simulate API delay
    setTimeout(() => {
        loadInitialArticles();
        hideLoadingSpinner();
    }, 500);
}

// Filter Handling
function handleFilterChange(e) {
    const filterValue = e.target.getAttribute('data-category');
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    e.target.classList.add('active');
    
    // Reset pagination and load articles
    currentFilter = filterValue;
    currentArticlesPage = 0;
    searchQuery = '';
    
    // Clear search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = '';
    }
    
    showLoadingSpinner();
    
    setTimeout(() => {
        loadInitialArticles();
        hideLoadingSpinner();
    }, 300);
}

// Category Click Handler
function handleCategoryClick(e) {
    const category = e.currentTarget.getAttribute('data-category');
    
    // Update filter
    currentFilter = category;
    currentArticlesPage = 0;
    
    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        }
    });
    
    // Scroll to articles section and load
    scrollToSection('articles');
    
    setTimeout(() => {
        loadInitialArticles();
    }, 500);
}

// Article Loading Functions
function loadInitialArticles() {
    const articlesGrid = document.getElementById('articlesGrid');
    if (!articlesGrid) return;
    
    articlesGrid.innerHTML = '';
    currentArticlesPage = 0;
    
    const articles = getFilteredArticles();
    const articlesToShow = articles.slice(0, articlesPerPage);
    
    if (articlesToShow.length === 0) {
        showNoArticlesMessage();
        return;
    }
    
    articlesToShow.forEach((article, index) => {
        setTimeout(() => {
            articlesGrid.appendChild(createArticleCard(article));
        }, index * 100);
    });
    
    updateLoadMoreButton(articles.length);
}

function loadMoreArticles() {
    if (isLoading) return;
    
    isLoading = true;
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    if (loadMoreBtn) {
        loadMoreBtn.textContent = 'Loading...';
        loadMoreBtn.disabled = true;
    }
    
    setTimeout(() => {
        const articles = getFilteredArticles();
        currentArticlesPage++;
        
        const startIndex = currentArticlesPage * articlesPerPage;
        const endIndex = startIndex + articlesPerPage;
        const articlesToShow = articles.slice(startIndex, endIndex);
        
        const articlesGrid = document.getElementById('articlesGrid');
        
        articlesToShow.forEach((article, index) => {
            setTimeout(() => {
                articlesGrid.appendChild(createArticleCard(article));
            }, index * 100);
        });
        
        updateLoadMoreButton(articles.length);
        isLoading = false;
        
        if (loadMoreBtn) {
            loadMoreBtn.textContent = 'Load More Articles';
            loadMoreBtn.disabled = false;
        }
    }, 1000);
}

function getFilteredArticles() {
    let articles = blogData.articles;
    
    // Apply search filter
    if (searchQuery) {
        articles = dataUtils.searchArticles(searchQuery);
    }
    
    // Apply category filter
    if (currentFilter !== 'all') {
        articles = articles.filter(article => article.category === currentFilter);
    }
    
    return articles;
}

function updateLoadMoreButton(totalArticles) {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const loadMoreContainer = document.querySelector('.load-more-container');
    
    if (!loadMoreBtn || !loadMoreContainer) return;
    
    const articlesShown = (currentArticlesPage + 1) * articlesPerPage;
    
    if (articlesShown >= totalArticles) {
        loadMoreContainer.style.display = 'none';
    } else {
        loadMoreContainer.style.display = 'block';
    }
}

// Article Card Creation
function createArticleCard(article) {
    const card = document.createElement('div');
    card.className = 'article-card';
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    const categoryInfo = dataUtils.getCategoryBySlug(article.category);
    const categoryName = categoryInfo ? categoryInfo.name : article.category;
    
    card.innerHTML = `
        <div class="article-image">
            <i class="fas ${article.icon}"></i>
            <span class="article-category">${categoryName}</span>
        </div>
        <div class="article-content">
            <h3 class="article-title">${article.title}</h3>
            <p class="article-excerpt">${article.excerpt}</p>
            <div class="article-meta">
                <div class="article-author">
                    <i class="fas fa-user-md"></i>
                    <span>${article.author}</span>
                </div>
                <div class="article-details">
                    <span>${dataUtils.formatDate(article.date)}</span>
                    <span>•</span>
                    <span>${article.readTime}</span>
                </div>
            </div>
        </div>
    `;
    
    // Add click event to open article modal
    card.addEventListener('click', () => {
        openArticleModal(article);
    });
    
    // Animate card appearance
    setTimeout(() => {
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 100);
    
    return card;
}

// Article Modal Functions
function openArticleModal(article) {
    const modal = document.getElementById('articleModal');
    const modalContent = document.getElementById('articleModalContent');
    
    if (!modal || !modalContent) return;
    
    modalContent.innerHTML = `
        <div class="article-header">
            <div class="article-meta-info">
                <span class="article-category-tag">${dataUtils.getCategoryBySlug(article.category)?.name || article.category}</span>
                <div class="article-meta-details">
                    <span><i class="fas fa-user-md"></i> ${article.author}</span>
                    <span><i class="fas fa-calendar"></i> ${dataUtils.formatDate(article.date)}</span>
                    <span><i class="fas fa-clock"></i> ${article.readTime}</span>
                </div>
            </div>
        </div>
        <div class="article-body">
            ${article.content}
        </div>
        <div class="article-footer">
            <div class="related-articles">
                <h4>Related Articles</h4>
                <div class="related-articles-grid">
                    ${getRelatedArticlesHTML(article)}
                </div>
            </div>
        </div>
    `;
    
    openModal('articleModal');
}

function getRelatedArticlesHTML(currentArticle) {
    const relatedArticles = dataUtils.getRelatedArticles(currentArticle, 3);
    
    if (relatedArticles.length === 0) {
        return '<p>No related articles found.</p>';
    }
    
    return relatedArticles.map(article => `
        <div class="related-article" onclick="openArticleModal(dataUtils.getArticleById(${article.id}))">
            <h5>${article.title}</h5>
            <p>${article.excerpt.substring(0, 100)}...</p>
        </div>
    `).join('');
}

// Form Handling
function setupForms() {
    // Newsletter forms
    const newsletterForm = document.getElementById('newsletterForm');
    const modalNewsletterForm = document.getElementById('modalNewsletterForm');
    const contactForm = document.getElementById('contactForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
    
    if (modalNewsletterForm) {
        modalNewsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
    
    const email = e.target.querySelector('input[type="email"]').value;
    
    if (!isValidEmail(email)) {
        showErrorMessage('Please enter a valid email address.');
        return;
    }
    
    showLoadingSpinner();
    
    // Simulate API call
    setTimeout(() => {
        hideLoadingSpinner();
        showSuccessMessage('Successfully subscribed to newsletter!');
        e.target.reset();
        
        // Close modal if it's the modal form
        const modal = e.target.closest('.modal');
        if (modal) {
            closeModal(modal);
        }
    }, 1500);
}

function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Basic validation
    if (!data.name || !data.email || !data.message) {
        showErrorMessage('Please fill in all required fields.');
        return;
    }
    
    if (!isValidEmail(data.email)) {
        showErrorMessage('Please enter a valid email address.');
        return;
    }
    
    showLoadingSpinner();
    
    // Simulate API call
    setTimeout(() => {
        hideLoadingSpinner();
        showSuccessMessage('Message sent successfully! We\'ll get back to you soon.');
        e.target.reset();
    }, 2000);
}

// Utility Functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showLoadingSpinner() {
    const spinner = document.getElementById('loadingSpinner');
    if (spinner) {
        spinner.style.display = 'block';
    }
}

function hideLoadingSpinner() {
    const spinner = document.getElementById('loadingSpinner');
    if (spinner) {
        spinner.style.display = 'none';
    }
}

function showSuccessMessage(message) {
    const successMsg = document.getElementById('successMessage');
    if (successMsg) {
        successMsg.querySelector('span').textContent = message;
        successMsg.style.display = 'flex';
        
        setTimeout(() => {
            successMsg.style.display = 'none';
        }, 4000);
    }
}

function showErrorMessage(message) {
    // Create error message element if it doesn't exist
    let errorMsg = document.getElementById('errorMessage');
    if (!errorMsg) {
        errorMsg = document.createElement('div');
        errorMsg.id = 'errorMessage';
        errorMsg.className = 'error-message';
        errorMsg.innerHTML = '<i class="fas fa-exclamation-circle"></i><span></span>';
        errorMsg.style.cssText = `
            display: none;
            position: fixed;
            top: 100px;
            right: 20px;
            background: #ef4444;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 3000;
            animation: slideInRight 0.3s ease;
        `;
        document.body.appendChild(errorMsg);
    }
    
    errorMsg.querySelector('span').textContent = message;
    errorMsg.style.display = 'flex';
    
    setTimeout(() => {
        errorMsg.style.display = 'none';
    }, 4000);
}

function showNoArticlesMessage() {
    const articlesGrid = document.getElementById('articlesGrid');
    if (!articlesGrid) return;
    
    articlesGrid.innerHTML = `
        <div class="no-articles-message" style="
            grid-column: 1 / -1;
            text-align: center;
            padding: 3rem;
            color: var(--text-secondary);
        ">
            <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
            <h3>No articles found</h3>
            <p>Try adjusting your search terms or filters.</p>
        </div>
    `;
}

// Health Tips
function showRandomHealthTip() {
    const tip = dataUtils.getRandomHealthTip();
    
    // Create floating health tip
    const tipElement = document.createElement('div');
    tipElement.className = 'health-tip-float';
    tipElement.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        background: var(--primary-color);
        color: white;
        padding: 1rem;
        border-radius: 8px;
        max-width: 300px;
        box-shadow: var(--shadow-lg);
        z-index: 1000;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
    `;
    
    tipElement.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
            <i class="fas ${tip.icon}"></i>
            <strong>Health Tip</strong>
            <button onclick="this.parentElement.parentElement.remove()" style="
                margin-left: auto;
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                font-size: 1.2rem;
            ">&times;</button>
        </div>
        <h5 style="margin: 0 0 0.5rem 0;">${tip.title}</h5>
        <p style="margin: 0; font-size: 0.875rem; opacity: 0.9;">${tip.description}</p>
    `;
    
    document.body.appendChild(tipElement);
    
    // Animate in
    setTimeout(() => {
        tipElement.style.transform = 'translateX(0)';
    }, 1000);
    
    // Auto-hide after 10 seconds
    setTimeout(() => {
        if (tipElement.parentElement) {
            tipElement.style.transform = 'translateX(-100%)';
            setTimeout(() => {
                tipElement.remove();
            }, 300);
        }
    }, 10000);
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function handleScroll() {
    // Update navigation active state based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

function handleResize() {
    // Handle any resize-specific logic
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    if (window.innerWidth > 768) {
        if (navMenu) navMenu.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
    }
}

// Accessibility Enhancements
document.addEventListener('keydown', function(e) {
    // Tab navigation enhancement
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Performance optimization: Lazy loading for images
function setupLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', setupLazyLoading);

// Export functions for global access
window.scrollToSection = scrollToSection;
window.openModal = openModal;
window.closeModal = closeModal;
window.openArticleModal = openArticleModal;