const App = {
  enquiryList: JSON.parse(localStorage.getItem('enquiryList') || '[]'),
  darkMode: localStorage.getItem('darkMode') === 'true',
  currentSlide: 0,
  slideInterval: null,

  init() {
    this.initTheme();
    this.initNavbar();
    this.initMobileMenu();
    this.initSearch();
    this.initHeroSlider();
    this.initBackToTop();
    this.initScrollAnimations();
    this.updateEnquiryBadge();
    this.initProductCards();
    this.initLoading();
  },

  initLoading() {
    const loader = document.getElementById('loading-screen');
    if (loader) {
      window.addEventListener('load', () => {
        setTimeout(() => loader.classList.add('hidden'), 500);
        setTimeout(() => loader.remove(), 1200);
      });
    }
  },

  initTheme() {
    if (this.darkMode) document.documentElement.setAttribute('data-theme', 'dark');
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        this.darkMode = !this.darkMode;
        localStorage.setItem('darkMode', this.darkMode);
        document.documentElement.setAttribute('data-theme', this.darkMode ? 'dark' : '');
        document.querySelectorAll('.theme-toggle').forEach(b => {
          const icon = b.querySelector('i');
          if (icon) icon.className = this.darkMode ? 'fas fa-sun' : 'fas fa-moon';
        });
      });
    });
    document.querySelectorAll('.theme-toggle').forEach(b => {
      const icon = b.querySelector('i');
      if (icon) icon.className = this.darkMode ? 'fas fa-sun' : 'fas fa-moon';
    });
  },

  initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
    document.querySelectorAll('.nav-menu a').forEach(link => {
      const href = link.getAttribute('href');
      if (href && location.pathname.endsWith(href.replace('./', ''))) {
        link.classList.add('active');
      }
    });
  },

  initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (!hamburger || !mobileMenu) return;
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  },

  initSearch() {
    const overlay = document.getElementById('search-overlay');
    const input = document.getElementById('search-input');
    if (!overlay || !input) return;

    document.querySelectorAll('.open-search').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.classList.add('active');
        setTimeout(() => input.focus(), 200);
      });
    });

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('active');
    });

    const closeBtn = overlay.querySelector('.search-close');
    if (closeBtn) closeBtn.addEventListener('click', () => overlay.classList.remove('active'));

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') overlay.classList.remove('active');
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        overlay.classList.add('active');
        setTimeout(() => input.focus(), 200);
      }
    });

    input.addEventListener('input', () => this.performSearch(input.value));
  },

  performSearch(query) {
    const resultsContainer = document.getElementById('search-results');
    if (!resultsContainer) return;
    if (!query || query.length < 2) {
      resultsContainer.innerHTML = '<p style="text-align:center;color:var(--text-light);padding:30px;">Type at least 2 characters to search...</p>';
      return;
    }

    const filters = {
      category: document.getElementById('search-category')?.value || '',
      fabric: document.getElementById('search-fabric')?.value || '',
      occasion: document.getElementById('search-occasion')?.value || ''
    };

    let results = PRODUCTS.filter(p => {
      const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.code.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.fabric.toLowerCase().includes(query.toLowerCase()) ||
        p.occasion.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.colors.some(c => c.toLowerCase().includes(query.toLowerCase()));
      const matchesCategory = !filters.category || p.category === filters.category;
      const matchesFabric = !filters.fabric || p.fabric === filters.fabric;
      const matchesOccasion = !filters.occasion || p.occasion === filters.occasion;
      return matchesQuery && matchesCategory && matchesFabric && matchesOccasion;
    });

    if (results.length === 0) {
      resultsContainer.innerHTML = '<p style="text-align:center;color:var(--text-light);padding:30px;">No products found matching your search.</p>';
      return;
    }

    resultsContainer.innerHTML = results.slice(0, 10).map(p => `
      <a href="product.html?id=${p.id}" class="search-result-item">
        <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
        <div class="result-info">
          <h4>${p.name}</h4>
          <p>${p.category} | ${p.fabric}</p>
        </div>
        <div class="result-price">₹${p.price.toLocaleString()}</div>
      </a>
    `).join('');
  },

  initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dots .dot');
    if (slides.length === 0) return;

    const showSlide = (index) => {
      slides.forEach((s, i) => s.classList.toggle('active', i === index));
      dots.forEach((d, i) => d.classList.toggle('active', i === index));
      this.currentSlide = index;
    };

    dots.forEach((dot, i) => dot.addEventListener('click', () => { showSlide(i); this.resetSlideInterval(showSlide, slides.length); }));

    this.slideInterval = setInterval(() => {
      showSlide((this.currentSlide + 1) % slides.length);
    }, 5000);
  },

  resetSlideInterval(showSlide, count) {
    clearInterval(this.slideInterval);
    this.slideInterval = setInterval(() => {
      showSlide((this.currentSlide + 1) % count);
    }, 5000);
  },

  initBackToTop() {
    const btn = document.querySelector('.back-to-top');
    if (!btn) return;
    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 400);
    });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  },

  initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  },

  addToEnquiry(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    const existing = this.enquiryList.find(item => item.id === productId);
    if (existing) {
      existing.quantity++;
    } else {
      this.enquiryList.push({ id: productId, quantity: 1 });
    }
    localStorage.setItem('enquiryList', JSON.stringify(this.enquiryList));
    this.updateEnquiryBadge();
    this.showToast(`${product.name} added to enquiry list!`);
  },

  removeFromEnquiry(productId) {
    this.enquiryList = this.enquiryList.filter(item => item.id !== productId);
    localStorage.setItem('enquiryList', JSON.stringify(this.enquiryList));
    this.updateEnquiryBadge();
  },

  updateEnquiryBadge() {
    document.querySelectorAll('.enquiry-badge').forEach(badge => {
      const count = this.enquiryList.length;
      badge.textContent = count;
      badge.classList.toggle('show', count > 0);
    });
  },

  showToast(message) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.style.cssText = 'position:fixed;bottom:100px;left:50%;transform:translateX(-50%);background:var(--accent-gold);color:#fff;padding:14px 28px;border-radius:var(--radius-xl);font-size:0.88rem;font-weight:500;z-index:3000;animation:fadeInUp 0.3s ease;box-shadow:0 4px 20px rgba(201,169,110,0.4);font-family:Inter,sans-serif;';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  },

  initProductCards() {
    document.addEventListener('click', (e) => {
      const addBtn = e.target.closest('.add-to-enquiry');
      if (addBtn) {
        e.preventDefault();
        const id = parseInt(addBtn.dataset.id);
        this.addToEnquiry(id);
      }
      const shareBtn = e.target.closest('.share-product');
      if (shareBtn) {
        e.preventDefault();
        const id = parseInt(shareBtn.dataset.id);
        this.shareProduct(id);
      }
    });
  },

  shareProduct(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    const url = `${window.location.origin}/product.html?id=${product.id}`;
    if (navigator.share) {
      navigator.share({ title: product.name, text: `Check out ${product.name} - ₹${product.price.toLocaleString()}`, url });
    } else {
      navigator.clipboard.writeText(url).then(() => this.showToast('Link copied to clipboard!'));
    }
  },

  sendWhatsApp(product) {
    const text = `Hi! I'm interested in:\n\n*${product.name}*\nCode: ${product.code}\nPrice: ₹${product.price.toLocaleString()}\n\nPlease share more details.`;
    window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  }
};

const ProductPage = {
  init() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    if (!id) return;
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) {
      document.querySelector('.product-detail').innerHTML = '<div style="text-align:center;padding:100px 20px;"><h2>Product Not Found</h2><p style="color:var(--text-secondary);margin-top:10px;">The product you are looking for does not exist.</p><a href="shop.html" class="btn btn-primary" style="margin-top:20px;">Browse Shop</a></div>';
      return;
    }
    this.render(product);
    this.initGallery(product);
    this.initActions(product);
  },

  render(product) {
    document.title = `${product.name} | Elegant Threads`;
    const mainImg = document.getElementById('main-product-image');
    if (mainImg) mainImg.src = product.images[0];
    
    const thumbs = document.getElementById('product-thumbs');
    if (thumbs) {
      thumbs.innerHTML = product.images.map((img, i) => 
        `<img src="${img}" alt="${product.name}" class="${i === 0 ? 'active' : ''}" data-img="${img}" loading="lazy">`
      ).join('');
    }

    const info = document.getElementById('product-info');
    if (info) {
      const stars = '★'.repeat(Math.floor(product.rating)) + (product.rating % 1 ? '☆' : '');
      info.innerHTML = `
        <div class="product-category" style="font-family:Inter;font-size:0.75rem;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:var(--accent-gold);margin-bottom:10px;">${product.category}</div>
        <h1>${product.name}</h1>
        <p class="code">Code: ${product.code}</p>
        <div class="detail-rating"><span class="stars">${stars}</span><span style="font-size:0.85rem;color:var(--text-secondary);">${product.rating} (${product.reviews} reviews)</span></div>
        <div class="detail-price">₹${product.price.toLocaleString()}</div>
        <p class="detail-desc">${product.description}</p>
        <div class="detail-specs">
          <div class="spec-row"><span class="label">Fabric</span><span class="value">${product.fabric}</span></div>
          <div class="spec-row"><span class="label">Occasion</span><span class="value">${product.occasion}</span></div>
          <div class="spec-row"><span class="label">Category</span><span class="value">${product.category}</span></div>
          <div class="spec-row"><span class="label">Age Group</span><span class="value">${product.ageGroup}</span></div>
        </div>
        <div class="size-options"><h4>Available Sizes</h4>${product.sizes.map((s, i) => `<button class="size-btn ${i === 0 ? 'active' : ''}">${s}</button>`).join('')}</div>
        <div class="color-options"><h4>Available Colors</h4>${product.colors.map((c, i) => `<span class="color-swatch ${i === 0 ? 'active' : ''}" style="background:${this.getColorHex(c)}" title="${c}"></span>`).join('')}</div>
        <div class="detail-actions">
          <button class="btn btn-primary btn-lg add-to-enquiry" data-id="${product.id}"><i class="fas fa-plus"></i> Add to Enquiry List</button>
          <button class="btn btn-whatsapp btn-lg whatsapp-enquiry" data-id="${product.id}"><i class="fab fa-whatsapp"></i> WhatsApp Enquiry</button>
        </div>
        <div class="share-section">
          <h4>Share This Product</h4>
          <div class="share-buttons">
            <a href="https://wa.me/?text=${encodeURIComponent(product.name + ' - ₹' + product.price + ' at Elegant Threads')}" target="_blank"><i class="fab fa-whatsapp"></i></a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(product.name)}&url=${encodeURIComponent(window.location.href)}" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}&description=${encodeURIComponent(product.name)}" target="_blank"><i class="fab fa-pinterest-p"></i></a>
            <button class="share-product" data-id="${product.id}"><i class="fas fa-link"></i></button>
          </div>
        </div>
      `;
    }
  },

  getColorHex(colorName) {
    const colors = {
      'red': '#e74c3c', 'maroon': '#800000', 'gold': '#c9a96e', 'navy blue': '#1a237e', 'navy': '#1a237e',
      'wine': '#722f37', 'black': '#1a1a1a', 'green': '#2ecc71', 'white': '#f5f5f5', 'yellow': '#f1c40f',
      'peach': '#ffcba4', 'lavender': '#b39ddb', 'mint green': '#a8e6cf', 'mint': '#a8e6cf',
      'royal blue': '#1565c0', 'magenta': '#d81b60', 'emerald green': '#2ecc71', 'emerald': '#2ecc71',
      'blue': '#2196f3', 'pink': '#e91e63', 'orange': '#ff9800', 'grey': '#9e9e9e', 'teal': '#009688',
      'rust': '#bf5b21', 'burgundy': '#800020', 'deep purple': '#4a148c', 'forest green': '#1b5e20',
      'beige': '#d4c5a9', 'light blue': '#81d4fa', 'coral': '#ff7f50', 'turquoise': '#40e0d0',
      'blush pink': '#f4c2c2', 'lilac': '#c8a2c8', 'sky blue': '#87ceeb', 'red': '#e74c3c',
      'ivory': '#fffff0', 'champagne': '#f7e7ce', 'silver': '#c0c0c0', 'rose gold': '#b76e79',
      'charcoal': '#36454f', 'sage': '#b2ac88', 'olive': '#808000', 'terracotta': '#e2725b',
      'cream': '#fffdd0', 'indigo': '#3f51b5', 'mustard': '#ffdb58', 'camel': '#c19a6b',
      'khaki': '#c3b091', 'stone': '#928e85', 'white-blue': '#e3f2fd', 'white-green': '#e8f5e9',
      'white-pink': '#fce4ec', 'red-black': '#b71c1c', 'blue-white': '#bbdefb', 'green-yellow': '#cddc39',
      'green-red': '#c62828', 'red-yellow': '#ff6f00', 'blue-white': '#bbdefb', 'green-orange': '#ff6d00',
      'multi-color': '#ff5722', 'orange-red': '#ff5722', 'blue-green': '#009688', 'red-white': '#ffcdd2',
      'green-white': '#c8e6c9', 'blue-purple': '#673ab7', 'yellow-orange': '#ff9800', 'peach-pink': '#f8bbd0',
      'dusty rose': '#c9a0a0', 'powder blue': '#b0e0e6', 'floral pink': '#ffb6c1',
      'floral blue': '#87cefa', 'floral yellow': '#ffff99', 'floral pink': '#ffb6c1',
      'floral blue': '#87cefa', 'floral cream': '#fffdd0', 'cinderella blue': '#a2c2e8',
      'rose pink': '#ff007f', 'midnight blue': '#191970', 'navy blue': '#000080',
      'bottle green': '#006a4e', 'deep red': '#b22222', 'peacock blue': '#005f69',
      'oxidised silver': '#6e6e6e', 'abstract blue': '#42a5f5', 'abstract pink': '#ec407a',
      'abstract green': '#66bb6a', 'pink floral': '#f8bbd0', 'blue floral': '#90caf9',
      'yellow floral': '#fff176', 'neon pink': '#ff6ec7', 'electric blue': '#0892d0',
      'lime': '#cddc39', 'black-gold': '#1a1a1a', 'white-silver': '#f5f5f5',
      'wine-gold': '#722f37', 'gold-rose gold': '#c9a96e', 'ivory gold': '#f0e6d3',
      'pink gold': '#b76e79', 'lavender gold': '#b39ddb'
    };
    return colors[colorName.toLowerCase()] || '#c9a96e';
  },

  initGallery(product) {
    document.addEventListener('click', (e) => {
      const thumb = e.target.closest('#product-thumbs img');
      if (thumb) {
        document.getElementById('main-product-image').src = thumb.dataset.img;
        document.querySelectorAll('#product-thumbs img').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      }
    });
    document.querySelectorAll('.size-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
    document.querySelectorAll('.color-swatch').forEach(swatch => {
      swatch.addEventListener('click', () => {
        document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
      });
    });
  },

  initActions(product) {
    document.addEventListener('click', (e) => {
      if (e.target.closest('.whatsapp-enquiry')) {
        App.sendWhatsApp(product);
      }
    });
  }
};

const ShopPage = {
  filters: { category: '', fabric: '', occasion: '', ageGroup: '', priceRange: '', sort: '' },

  init() {
    this.bindFilters();
    this.renderProducts();
  },

  bindFilters() {
    document.querySelectorAll('.filter-checkbox').forEach(cb => {
      cb.addEventListener('change', () => {
        this.filters[cb.dataset.filter] = cb.checked ? cb.value : '';
        document.querySelectorAll(`.filter-checkbox[data-filter="${cb.dataset.filter}"]`).forEach(c => {
          if (c !== cb) c.checked = false;
        });
        this.renderProducts();
      });
    });

    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', () => {
        this.filters.sort = sortSelect.value;
        this.renderProducts();
      });
    }

    const filterToggle = document.getElementById('filter-toggle');
    if (filterToggle) {
      filterToggle.addEventListener('click', () => {
        document.querySelector('.shop-sidebar').classList.toggle('active');
      });
    }
  },

  getFiltered() {
    let filtered = [...PRODUCTS];
    if (this.filters.category) filtered = filtered.filter(p => p.category === this.filters.category || p.subcategory === this.filters.category);
    if (this.filters.fabric) filtered = filtered.filter(p => p.fabric === this.filters.fabric);
    if (this.filters.occasion) filtered = filtered.filter(p => p.occasion === this.filters.occasion);
    if (this.filters.ageGroup) filtered = filtered.filter(p => p.ageGroup === this.filters.ageGroup);
    if (this.filters.priceRange) {
      const [min, max] = this.filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(p => max ? (p.price >= min && p.price <= max) : p.price >= min);
    }
    switch (this.filters.sort) {
      case 'price-low': filtered.sort((a, b) => a.price - b.price); break;
      case 'price-high': filtered.sort((a, b) => b.price - a.price); break;
      case 'name': filtered.sort((a, b) => a.name.localeCompare(b.name)); break;
      case 'rating': filtered.sort((a, b) => b.rating - a.rating); break;
      case 'newest': filtered.sort((a, b) => b.id - a.id); break;
    }
    return filtered;
  },

  renderProducts() {
    const grid = document.getElementById('products-grid');
    const count = document.getElementById('result-count');
    if (!grid) return;
    const products = this.getFiltered();
    if (count) count.textContent = `Showing ${products.length} of ${PRODUCTS.length} products`;
    if (products.length === 0) {
      grid.innerHTML = '<div class="no-results"><h3>No Products Found</h3><p>Try adjusting your filters to find what you are looking for.</p></div>';
      return;
    }
    grid.innerHTML = products.map(p => App.createProductCard(p)).join('');
  }
};

const CategoryPage = {
  currentTab: 'all',

  init() {
    document.querySelectorAll('.category-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.currentTab = tab.dataset.category;
        this.renderCategories();
      });
    });
    this.renderCategories();
  },

  renderCategories() {
    const grid = document.getElementById('categories-content');
    if (!grid) return;
    let items = [];
    switch (this.currentTab) {
      case 'all':
        items = this.getAllCategories();
        break;
      case 'age':
        items = this.getAgeCategories();
        break;
      case 'garment':
        items = this.getGarmentCategories();
        break;
      case 'price':
        items = this.getPriceCategories();
        break;
      case 'fabric':
        items = this.getFabricCategories();
        break;
      case 'occasion':
        items = this.getOccasionCategories();
        break;
    }
    grid.innerHTML = items.map(item => `
      <a href="${item.link}" class="category-card fade-in">
        <div class="cat-icon">${item.icon}</div>
        <h4>${item.name}</h4>
        <p>${item.count} products</p>
      </a>
    `).join('');
    App.initScrollAnimations();
  },

  getAllCategories() {
    const cats = {};
    PRODUCTS.forEach(p => {
      if (!cats[p.category]) cats[p.category] = 0;
      cats[p.category]++;
    });
    const icons = { 'Sarees': '\uD83D\uDCD7', 'Kurtis': '\uD83D\uDC55', 'Lehengas': '\uD83C\uDF80', 'Salwar Suits': '\uD83D\uDC5C', 'Gowns': '\uD83D\uDC57', 'Long Dresses': '\uD83D\uDC58', 'Western Wear': '\u2728', 'Night Wear': '\uD83C\uDF19', 'Accessories': '\uD83D\uDC8D' };
    return Object.entries(cats).map(([name, count]) => ({ name, count, icon: icons[name] || '\uD83D\uDC54', link: `shop.html?category=${encodeURIComponent(name)}` }));
  },

  getAgeCategories() {
    const ages = ['Kids', 'Teen Girls', 'Young Women', 'Adults', 'Senior Women'];
    return ages.map(age => ({
      name: age, icon: age === 'Kids' ? '\uD83D\uDC76' : age === 'Teen Girls' ? '\uD83D\uDC67' : age === 'Young Women' ? '\uD83D\uDC69' : age === 'Adults' ? '\uD83D\uDC69\u200D\uD83D\uDCBC' : '\uD83D\uDC75',
      count: PRODUCTS.filter(p => p.ageGroup === age).length,
      link: `shop.html?age=${encodeURIComponent(age)}`
    }));
  },

  getGarmentCategories() {
    const garments = [
      'Sarees', 'Silk Sarees', 'Cotton Sarees', 'Designer Sarees', 'Party Wear Sarees',
      'Kurtis', 'Lehengas', 'Salwar Suits', 'Gowns', 'Long Dresses', 'Western Wear', 'Night Wear', 'Accessories'
    ];
    return garments.map(g => ({
      name: g, icon: '👗',
      count: PRODUCTS.filter(p => p.category === g || p.subcategory === g).length,
      link: `shop.html?category=${encodeURIComponent(g)}`
    }));
  },

  getPriceCategories() {
    return [
      { name: 'Below ₹500', icon: '💰', count: PRODUCTS.filter(p => p.price < 500).length, link: 'shop.html?price=0-500' },
      { name: '₹500 – ₹1000', icon: '💰', count: PRODUCTS.filter(p => p.price >= 500 && p.price <= 1000).length, link: 'shop.html?price=500-1000' },
      { name: '₹1000 – ₹2500', icon: '💎', count: PRODUCTS.filter(p => p.price >= 1000 && p.price <= 2500).length, link: 'shop.html?price=1000-2500' },
      { name: '₹2500+', icon: '👑', count: PRODUCTS.filter(p => p.price > 2500).length, link: 'shop.html?price=2500-99999' }
    ];
  },

  getFabricCategories() {
    const fabrics = ['Cotton', 'Silk', 'Linen', 'Rayon', 'Georgette', 'Chiffon', 'Crepe', 'Velvet', 'Net'];
    return fabrics.map(f => ({
      name: f, icon: '🧵',
      count: PRODUCTS.filter(p => p.fabric === f).length,
      link: `shop.html?fabric=${encodeURIComponent(f)}`
    }));
  },

  getOccasionCategories() {
    const occasions = ['Wedding', 'Party', 'Office', 'Festival', 'Daily Wear', 'Casual', 'Traditional'];
    return occasions.map(o => ({
      name: o, icon: '🎉',
      count: PRODUCTS.filter(p => p.occasion === o).length,
      link: `shop.html?occasion=${encodeURIComponent(o)}`
    }));
  }
};

App.createProductCard = function(p) {
  const stars = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 ? '☆' : '');
  return `
    <div class="product-card fade-in">
      <div class="product-image">
        <a href="product.html?id=${p.id}"><img src="${p.images[0]}" alt="${p.name}" loading="lazy"></a>
        ${p.badge ? `<span class="product-badge ${p.badge.toLowerCase()}">${p.badge}</span>` : ''}
        <div class="product-actions">
          <button class="share-product" data-id="${p.id}" title="Share"><i class="fas fa-share-alt"></i></button>
          <button class="add-to-enquiry" data-id="${p.id}" title="Add to Enquiry"><i class="fas fa-plus"></i></button>
          <button class="whatsapp-quick" onclick="App.sendWhatsApp(PRODUCTS.find(x=>x.id===${p.id}))" title="WhatsApp"><i class="fab fa-whatsapp"></i></button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">${p.category}</div>
        <a href="product.html?id=${p.id}"><h3 class="product-name">${p.name}</h3></a>
        <div class="product-rating"><span class="stars">${stars}</span><span class="count">(${p.reviews})</span></div>
        <div class="product-price">₹${p.price.toLocaleString()}</div>
        <div class="product-meta"><span>${p.fabric}</span><span>|</span><span>${p.occasion}</span></div>
        <div class="product-colors">${p.colors.slice(0, 5).map(c => `<span class="color-dot" style="background:${App.getColorHex ? App.getColorHex(c) : c}" title="${c}"></span>`).join('')}</div>
      </div>
    </div>
  `;
};

App.getColorHex = function(colorName) {
  const colors = {
    'red': '#e74c3c', 'maroon': '#800000', 'gold': '#c9a96e', 'navy blue': '#1a237e', 'navy': '#1a237e',
    'wine': '#722f37', 'black': '#1a1a1a', 'green': '#2ecc71', 'white': '#f5f5f5', 'yellow': '#f1c40f',
    'peach': '#ffcba4', 'lavender': '#b39ddb', 'mint green': '#a8e6cf', 'mint': '#a8e6cf',
    'royal blue': '#1565c0', 'magenta': '#d81b60', 'emerald green': '#2ecc71', 'emerald': '#2ecc71',
    'blue': '#2196f3', 'pink': '#e91e63', 'orange': '#ff9800', 'grey': '#9e9e9e', 'teal': '#009688',
    'rust': '#bf5b21', 'burgundy': '#800020', 'deep purple': '#4a148c', 'forest green': '#1b5e20',
    'beige': '#d4c5a9', 'light blue': '#81d4fa', 'coral': '#ff7f50', 'turquoise': '#40e0d0',
    'blush pink': '#f4c2c2', 'lilac': '#c8a2c8', 'sky blue': '#87ceeb',
    'ivory': '#fffff0', 'champagne': '#f7e7ce', 'silver': '#c0c0c0', 'rose gold': '#b76e79',
    'charcoal': '#36454f', 'sage': '#b2ac88', 'olive': '#808000', 'terracotta': '#e2725b',
    'cream': '#fffdd0', 'indigo': '#3f51b5', 'mustard': '#ffdb58', 'camel': '#c19a6b',
    'khaki': '#c3b091', 'stone': '#928e85', 'dusty rose': '#c9a0a0', 'powder blue': '#b0e0e6',
    'cinderella blue': '#a2c2e8', 'midnight blue': '#191970', 'bottle green': '#006a4e',
    'deep red': '#b22222', 'peacock blue': '#005f69', 'oxidised silver': '#6e6e6e',
    'neon pink': '#ff6ec7', 'electric blue': '#0892d0', 'lime': '#cddc39'
  };
  return colors[colorName.toLowerCase()] || '#c9a96e';
};

document.addEventListener('DOMContentLoaded', () => {
  App.init();
  if (document.querySelector('.product-detail')) ProductPage.init();
  if (document.querySelector('.shop-layout')) ShopPage.init();
  if (document.querySelector('.category-tabs')) CategoryPage.init();
  document.querySelectorAll('.whatsapp-float').forEach(btn => {
    btn.href = `https://wa.me/${STORE_INFO.whatsapp}`;
  });
});
