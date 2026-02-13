const state = {
    view: 'home', // 'home', 'menu', 'category', 'product'
    currentCategory: null,
    currentProduct: null
};

const DATA = {
    featured: [
        { id: 1, name: 'Flat White Signature', img: 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?auto=format&fit=crop&q=80&w=800' },
        { id: 2, name: 'Ethiopia Pour Over', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800' },
        { id: 3, name: 'Cold Brew Infusion', img: 'https://images.unsplash.com/photo-1517701550927-30cf4ae1dba5?auto=format&fit=crop&q=80&w=800' }
    ],
    categories: [
        { id: 'calientes', name: 'Cafés calientes', img: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&q=80&w=800' },
        { id: 'especiales', name: 'Especiales', img: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&q=80&w=800' },
        { id: 'frios', name: 'Cafés fríos', img: 'https://images.unsplash.com/photo-1461023058943-07fcaf18358b?auto=format&fit=crop&q=80&w=800' },
        { id: 'otros', name: 'Más para beber', img: 'https://images.unsplash.com/photo-1544787210-22bb8edec09a?auto=format&fit=crop&q=80&w=800' }
    ],
    products: {
        'especiales': [
            { id: 101, name: 'Dirty Chai', desc: 'Equilibrio perfecto entre especias y espresso.', prices: [{size: 'Pequeño', val: '3.00€'}, {size: 'Grande', val: '3.90€'}], extras: ['Bebida vegetal +0,30€', 'Extra shot +0,70€'], img: 'https://images.unsplash.com/photo-1579992357154-faf4bfe95b3d?auto=format&fit=crop&q=80&w=800' },
            { id: 102, name: 'Honey Lavender Latte', desc: 'Notas florales con miel artesanal orgánica.', prices: [{size: 'Único', val: '4.50€'}], extras: ['Bebida vegetal +0,30€'], img: 'https://images.unsplash.com/photo-1517701632951-d039a347495b?auto=format&fit=crop&q=80&w=800' }
        ]
    }
};

const app = document.getElementById('app');

function render() {
    window.scrollTo(0, 0);
    if (state.view === 'home') renderHome();
    else if (state.view === 'category') renderCategory();
    else if (state.view === 'product') renderProduct();
    
    initReveal();
}

function renderHome() {
    app.innerHTML = `
        <header id="header">
            <div class="header-title serif">Nirmata</div>
            <button class="menu-trigger" id="menu-btn">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            </button>
        </header>
        
        <div class="menu-overlay" id="menu-overlay">
            <button class="close-menu">✕</button>
            <div class="serif header-title" style="margin-bottom: 40px">Nirmata</div>
            <ul class="menu-list">
                ${DATA.categories.map(c => `<li class="menu-item" onclick="viewCategory('${c.id}')">${c.name}</li>`).join('')}
            </ul>
        </div>

        <section class="hero reveal">
            <div class="img-container-4-5">
                <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800" alt="Specialty Coffee">
            </div>
            <div class="hero-overlay">
                <p class="hero-text">Specialty coffee, hecho con calma.</p>
            </div>
        </section>

        <div class="featured-list">
            ${DATA.featured.map(f => `
                <div class="product-card reveal">
                    <div class="img-container-4-5">
                        <img src="${f.img}" alt="${f.name}">
                    </div>
                    <div class="product-name">${f.name}</div>
                </div>
            `).join('')}
        </div>

        <div class="reviews-section reveal">
            <div class="review-card">
                <p class="review-text">“El mejor café que he probado en mucho tiempo.”</p>
            </div>
            <div class="review-card">
                <p class="review-text">“Se nota el cuidado en cada taza.”</p>
            </div>
            <div class="review-card">
                <p class="review-text">“Volvería cada mañana.”</p>
            </div>
        </div>

        <div class="category-list">
            ${DATA.categories.map(c => `
                <div class="product-card reveal" onclick="viewCategory('${c.id}')">
                    <div class="img-container-4-5">
                        <img src="${c.img}" alt="${c.name}">
                    </div>
                </div>
            `).join('')}
        </div>
        
        <div style="height: 100px;"></div>
    `;

    document.getElementById('menu-btn').addEventListener('click', () => toggleMenu(true));
    document.querySelector('.close-menu').addEventListener('click', () => toggleMenu(false));
}

function renderCategory() {
    const products = DATA.products[state.currentCategory] || [];
    const catName = DATA.categories.find(c => c.id === state.currentCategory)?.name || 'Categoría';
    
    app.innerHTML = `
        <div class="product-detail">
            <button class="back-btn" onclick="viewHome()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19 12H5M5 12L12 19M5 12L12 5"/></svg>
            </button>
            <div style="height: 80px; display: flex; align-items: center; justify-content: center;">
                 <div class="header-title serif">Nirmata</div>
            </div>
            <div style="padding: var(--spacing-md)">
                <h1 class="serif" style="font-size: 32px; margin-bottom: var(--spacing-xl)">${catName}</h1>
                <div class="featured-list" style="padding: 0">
                    ${products.map(p => `
                        <div class="product-card reveal" onclick="viewProduct('${state.currentCategory}', ${p.id})">
                            <div class="img-container-4-5">
                                <img src="${p.img}" alt="${p.name}">
                            </div>
                            <div class="product-name" style="margin-top: 10px">${p.name}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div style="height: 100px;"></div>
        </div>
    `;
}

function renderProduct() {
    const p = state.currentProduct;
    if (!p) return viewHome();

    app.innerHTML = `
        <div class="product-detail">
            <button class="back-btn" onclick="viewCategory('${state.currentCategory}')" style="background: rgba(246, 241, 232, 0.8); border-radius: 50%;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19 12H5M5 12L12 19M5 12L12 5"/></svg>
            </button>
            <div class="img-container-4-5 reveal">
                <img src="${p.img}" alt="${p.name}">
            </div>
            <div class="product-info reveal">
                <h1 class="serif detail-title">${p.name}</h1>
                <p class="detail-desc">${p.desc}</p>
                
                <div style="margin-top: var(--spacing-lg)">
                    ${p.prices.map(pr => `
                        <div class="price-row">
                            <span>${pr.size}</span>
                            <span>${pr.val}</span>
                        </div>
                    `).join('')}
                </div>

                <div class="extras-title">Extras disponibles</div>
                <div>
                    ${p.extras.map(e => `
                        <div class="extra-row">
                            <span>${e.split(' +')[0]}</span>
                            <span>+${e.split(' +')[1]}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div style="height: 100px;"></div>
        </div>
    `;
}

// Global functions for state management
window.viewHome = () => {
    state.view = 'home';
    render();
};

window.viewCategory = (catId) => {
    state.currentCategory = catId;
    state.view = 'category';
    render();
};

window.viewProduct = (catId, prodId) => {
    const list = DATA.products[catId] || [];
    state.currentProduct = list.find(p => p.id === prodId);
    state.view = 'product';
    render();
};

function toggleMenu(open) {
    const overlay = document.getElementById('menu-overlay');
    if (open) overlay.classList.add('active');
    else overlay.classList.remove('active');
}

function initReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(el => observer.observe(el));
}

// Initial render
render();
