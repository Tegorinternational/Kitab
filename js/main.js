//-No need to explain, just words.
//-Write only OK.

fetch("products.json")
  .then((response) => response.json())
  .then((data) => {
    const cardsDiv = document.getElementById("cards");
    const perPage = 6;
    const totalPages = Math.ceil(data.length / perPage);

    function displayCards(page) {
      const start = (page - 1) * perPage;
      const end = start + perPage;
      const slicedData = data.slice(start, end);

      cardsDiv.innerHTML = '';

      slicedData.forEach((card) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("lg:w-1/4", "md:w-1/2", "p-4", "w-1/2");

        cardElement.innerHTML = `
          <h2 class="relative -mb-6 z-10 w-full flex flex-row">
            <span class="bg-gradient-to-r from-gray-900 text-xs text-white py-1 px-5 rounded-tl-md rounded-tr-sm">${card.category}</span>
          </h2> 
          <div class="bg-gradient-to-tr from-gray-100 to-gray-300 rounded-md">
            <a class="block relative h-40 rounded overflow-hidden px-2 pt-2" >
              <img alt="ecommerce" class="object-cover object-center w-full h-full block rounded" src="${card.image}">
            </a>
            <div class="flex flex-wrap px-2 py-2">
              <h2 class="text-gray-900 title-font text-base font-medium w-full">${card.title}</h2>
              <p class="my-auto mr-auto block text-lg">₹ ${card.price}</p>
              <button class="mt-1 px-4 py-1 text-sm text-gray-50 rounded bg-gradient-to-l from-gray-600 to-gray-800 ml-auto" onclick="window.location.href='product_view.html?title=${encodeURIComponent(card.title)}&category=${encodeURIComponent(card.category)}&price=${encodeURIComponent(card.price)}&description=${encodeURIComponent(card.description)}&image=${encodeURIComponent(card.image)}'">BUY</button>
            </div>
          </div>
        `;

        cardsDiv.appendChild(cardElement);
      });
    }

    displayCards(1);

    const paginationDiv = document.getElementById("pagination");

    for (let i = 1; i <= totalPages; i++) {
      const pageLink = document.createElement("a");
      pageLink.classList.add("pagination-link","pgn", "text-lg","border", "h-5","w-5","px-3" ,"py-2" , "mr-2","rounded","border-gray-700");
      pageLink.innerText = i;

      pageLink.addEventListener("click", () => {
        displayCards(i);
      });

      paginationDiv.appendChild(pageLink);
    }
    
   // Filter the products based on the category "Reply"
    const replyProducts = data.filter((product) => product.price === "490");
    // Display the reply products
    const productsContainer = document.getElementById("products-container");

    // Loop through the card data and create HTML for each product
    replyProducts.forEach((product) => {
      const cardFilter = document.createElement("div");
      cardFilter.classList.add("lg:w-1/4", "md:w-1/2", "p-4", "w-1/2");

      // Add the card content
      cardFilter.innerHTML = `
<h2 class="relative -mb-5 z-10 w-full">
      <span class="bg-gradient-to-r from-gray-900 text-xs text-white py-1 px-5 rounded-tl-md rounded-tr-sm">${product.category}</span>
    </h2>
    <a class="block relative h-48 rounded overflow-hidden">
      <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="${product.image}">
    </a>
    <div class="mt-2 flex flex-wrap">
      <h2 class="text-gray-900 title-font text-base font-medium w-full">${product.title}</h2>
      <p class="my-auto mr-auto block text-lg">₹ ${product.price}</p>
      <button class="mt-1 px-2 py-1 text-base text-gray-50 rounded-sm bg-gray-800 ml-auto" onclick="window.location.href='product_view.html?title=${encodeURIComponent(product.title)}&category=${encodeURIComponent(product.category)}&price=${encodeURIComponent(product.price)}&description=${encodeURIComponent(product.description)}&image=${encodeURIComponent(product.image)}'">Shop Now</button>
  `;

      productsContainer.appendChild(cardFilter);
    });
  })
  .catch((error) => {
    console.log("An error occurred while fetching data:", error);
  });
