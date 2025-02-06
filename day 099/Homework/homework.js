fetch("https://fakestoreapi.com/products/1")
  .then(res => res.json())
  .then(data => document.getElementById("item").innerHTML = `
    <img src="${data.image}" alt="${data.title}">
    <h2>${data.title}</h2>
    <p>${data.description}</p>
    <p><b>Price:</b> $${data.price}</p>
  `)
  .catch(console.error);
