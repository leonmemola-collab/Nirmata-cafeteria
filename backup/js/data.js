
// Data Module
export async function loadData() {
    try {
        const response = await fetch('/productos.json');
        if (!response.ok) throw new Error('Error loading data');
        return await response.json();
    } catch (error) {
        console.error('Failed to load products:', error);
        return { categorias: [], productos: [], extras: [] };
    }
}

export function getCategory(data, categoryId) {
    return data.categorias.find(c => c.id === categoryId);
}

export function getProductsByCategory(data, categoryId) {
    return data.productos.filter(p => p.categoriaId === categoryId);
}

export function getProduct(data, productId) {
    // productId from URL might be a string, JSON ids are strings.
    // Ensure accurate comparison.
    return data.productos.find(p => p.id === String(productId));
}

export function getRandomFeatured(data, count = 4) {
    // Try to find products marked as 'destacado'
    let featured = data.productos.filter(p => p.destacado);

    // If not enough, fill with random products
    if (featured.length < count) {
        const others = data.productos.filter(p => !p.destacado);
        // Shuffle others
        for (let i = others.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [others[i], others[j]] = [others[j], others[i]];
        }
        featured = [...featured, ...others.slice(0, count - featured.length)];
    }

    return featured.slice(0, count);
}
