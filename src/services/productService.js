const BASE_URL = 'https://fakestoreapi.com';

export const productService = {
  async getAllProducts() {
    try {
      const response = await fetch(`${BASE_URL}/products`);
      const data = await response.json();
      return this.formatProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  async getProductById(id) {
    try {
      const response = await fetch(`${BASE_URL}/products/${id}`);
      const data = await response.json();
      return this.formatProduct(data);
    } catch (error) {
      console.error(`Error fetching product ${id}:`, error);
      throw error;
    }
  },

  async getProductsByCategory(category) {
    try {
      const response = await fetch(`${BASE_URL}/products/category/${category}`);
      const data = await response.json();
      return this.formatProducts(data);
    } catch (error) {
      console.error(`Error fetching ${category} products:`, error);
      throw error;
    }
  },

  formatProduct(product) {
    return {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      image: product.image,
      category: product.category,
      rating: product?.rating?.rate || 0,
      reviews: product?.rating?.count || 0
    };
  },

  formatProducts(products) {
    return products.map(this.formatProduct);
  }
};