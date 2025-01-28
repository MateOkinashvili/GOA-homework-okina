const fetchProducts = async () => {
    const container = document.getElementById("products");
  
    for (let id = 1; id <= 3; id++) {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const product = await response.json();
  
      const productBox = document.createElement("div");
      productBox.className = "product-box";
  
      productBox.innerHTML = `
        <img src="${product.image}" alt="Product Image">
        <p><strong>Category:</strong> ${product.category}</p>
        <p><strong>Price:</strong> $${product.price}</p>
        <p><strong>Description:</strong> ${product.description}</p>
      `;
  
      container.appendChild(productBox);
    }
  };
  
  fetchProducts();
  