import { loadData, getCategory, getProductsByCategory, getProduct, getRandomFeatured } from './data.js';

// ---- Main Application Logic ----

document.addEventListener('DOMContentLoaded', async () => {
    const data = await loadData();
    const path = window.location.pathname;

    // Initialize common UI (Menu, Animations)
    initMenu(data.categorias);
    initAnimations();

    // Router Logic (Simple Path Check)
    if (path.includes('categoria.html')) {
        renderCategoryPage(data);
    } else if (path.includes('producto.html')) {
        renderProductPage(data);
    } else {
        // Default to Home if root or index.html
        renderHomePage(data);
    }
});

// ---- UI Functions ----

function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

function initMenu(categories) {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-menu');
    const menu = document.getElementById('fullscreen-menu');
    const navList = document.getElementById('nav-links');

    // Only initialize menu if elements exist (e.g., might not be on all pages)
    if (!menuBtn || !menu || !navList) return;

    // Populate Menu
    navList.innerHTML = categories.map(c => `
        <li><a href="/categoria.html?cat=${c.id}" class="fade-in">${c.nombre}</a></li>
    `).join('');

    // Events
    menuBtn.addEventListener('click', () => menu.classList.add('active'));
    if (closeBtn) {
        closeBtn.addEventListener('click', () => menu.classList.remove('active'));
    }
}

// ---- Page Renderers ----

function renderHomePage(data) {
    const featuredList = document.getElementById('featured-list');
    const categoryList = document.getElementById('category-list');

    if (featuredList) {
        const featured = getRandomFeatured(data, 4);
        featuredList.innerHTML = featured.map(p => createProductCard(p, data.categorias)).join('');
    }

    if (categoryList) {
        categoryList.innerHTML = data.categorias.map(c => `
            <a href="/categoria.html?cat=${c.id}" class="category-card fade-in">
                <img src="${c.imagen}" alt="${c.nombre}" loading="lazy">
            </a>
        `).join('');
    }
}

function renderCategoryPage(data) {
    const params = new URLSearchParams(window.location.search);
    const catId = params.get('cat');
    const category = getCategory(data, catId);

    if (!category) {
        window.location.href = '/index.html';
        return;
    }

    // Update Title
    document.title = `${category.nombre} - Nirmata`;
    document.getElementById('category-title').textContent = category.nombre;

    // Render Products
    const products = getProductsByCategory(data, catId);
    const productList = document.getElementById('product-list');

    if (products.length === 0) {
        productList.innerHTML = `<p class="text-secondary" style="text-align:center;">No hay productos disponibles.</p>`;
    } else {
        productList.innerHTML = products.map(p => createProductCard(p, data.categorias)).join('');
    }
}

function renderProductPage(data) {
    const params = new URLSearchParams(window.location.search);
    const prodId = params.get('id');
    const product = getProduct(data, prodId);

    if (!product) {
        window.location.href = '/index.html';
        return;
    }

    const category = getCategory(data, product.categoriaId);

    document.title = `${product.nombre} - Nirmata`;

    // Populate HTML elements
    const imgEl = document.getElementById('product-img');
    // Fallback logic: Use product image if exists, else category image
    imgEl.src = product.imagen || category?.imagen || '/img/cat-calientes.jpg';

    document.getElementById('product-name').textContent = product.nombre;
    document.getElementById('product-desc').textContent = product.descripcion;

    // Prices
    const pricesContainer = document.getElementById('product-prices');
    pricesContainer.innerHTML = product.precios.map(p => `
        <div class="price-item">
            <span>${p.tamano}</span>
            <span>${p.precio}</span>
        </div>
    `).join('');

    // Extras
    const extrasContainer = document.getElementById('product-extras');
    extrasContainer.innerHTML = data.extras.map(e => `
        <div class="extra-item">
            <span>${e.nombre}</span>
            <span>${e.precio}</span>
        </div>
    `).join('');
}

// ---- Helpers ----

function createProductCard(product, categories) {
    const category = categories.find(c => c.id === product.categoriaId);
    const img = product.imagen || category?.imagen || 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600';

    return `
        <a href="/producto.html?id=${product.id}" class="product-card fade-in">
            <div class="img-wrapper">
                <img src="${img}" alt="${product.nombre}" loading="lazy" style="width:100%; height:100%; object-fit:cover;">
            </div>
            <h3>${product.nombre}</h3>
            <p class="text-secondary" style="font-size:14px; display:none;">${product.descripcion.substring(0, 40)}...</p>
        </a>
    `;
}
