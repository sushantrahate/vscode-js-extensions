document.addEventListener('DOMContentLoaded', function () {
  fetch('extensions.json')
    .then((response) => response.json())
    .then((categories) => {
      const list = document.getElementById('extensions-list');
      list.innerHTML = categories
        .map(
          (category) => `
            <div class="mb-16">
              <h1 class="text-2xl font-bold text-stone-800 mb-4">${
                category.category
              }</h1>
              <div class="flex flex-wrap gap-8 justify-content justify-start max-w-5xl mx-auto">
                ${category.extensions
                  .map(
                    (extension) => `
                      <div class="bg-[#fff6c3] p-4 elevation-1 rounded-2xl flex items-start space-x-4 w-[320px] border border-stone-100">
                        <img src="${extension.thumb}" alt="${extension.name}" class="w-12 h-12 rounded">
                        <div>
                          <h2 class="text-lg font-semibold">${extension.name}</h2>
                          <p class="text-stone-600 pb-1 text-sm">Author: ${extension.author}</p>
                          <p class="text-sm text-stone-700">${extension.description}</p>
                          <a href="${extension.url}" target="_blank" class="text-blue-500 hover:underline text-sm">View on Marketplace</a>
                        </div>
                      </div>
                    `
                  )
                  .join('')}
              </div>
            </div>
          `
        )
        .join('');
    })
    .catch((error) => console.error('Error fetching extensions:', error));
});
