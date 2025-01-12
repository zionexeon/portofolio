const products = [
  {
    name: "product1",
    img: "path/to/logo-softdev.png", // Replace with actual image path
  },
  {
    name: "product2",
    img: "path/to/logo-mekar-laser.png", // Replace with actual image path
  },
  {
    name: "product2",
    img: "path/to/logo-mekar-laser.png", // Replace with actual image path
  },
  // Add more products as needed
];

let currentPage = 1;
const itemsPerPage = 6;

function renderProducts() {
  const grid = document.getElementById("product-grid");
  grid.innerHTML = "";

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedItems = products.slice(start, end);

  paginatedItems.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.innerHTML = `
                <div class="product-card">
                    <img src="${product.img}" alt="${product.name}" />
                    <div class="product-info">
                        <h1>${product.name}</h1>
                    </div>
                </div>
            `;
    grid.appendChild(productDiv);
  });
}

function changePage(direction) {
  currentPage += direction;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  if (currentPage < 1) currentPage = 1;
  if (currentPage > totalPages) currentPage = totalPages;

  renderProducts();

  document.getElementById("prev-btn").disabled = currentPage === 1;
  document.getElementById("next-btn").disabled = currentPage === totalPages;
}

// Initial render
renderProducts();
