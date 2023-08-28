const loadPhone = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=iphone"
  );
  const data = await response.json();
  const phones = data.data;
  console.log(phones);
  displayPhone(phones);
};

const displayPhone = (phones) => {
  const phoneContainer = document.getElementById("phone-card-container");

  phones.forEach((phone) => {
    const phoneCard = document.createElement("div");
    phoneCard.classList = `max-w-sm bg-white border border-gray-200 rounded-lg shadow`;
    phoneCard.innerHTML = `<div class="flex justify-center py-8 bg-primary">
    <img
    class="rounded-t-lg"
    src="${phone.image}"
    alt=""
    draggable=false
  /></div>
  <hr>

  <div class="p-5">
    <a href="#">
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900"
      >
        ${phone.phone_name}
      </h5>
    </a>
    <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">${phone.brand}</span>
    <br>
    <a
      href="#"
      class="inline-flex items-center mt-3 px-3 py-2 text-sm font-medium text-center text-white bg-tertiary rounded duration-300 hover:bg-blue-800"
    >
      Read more
      <svg
        class="w-3.5 h-3.5 ml-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </a>
  </div>`;

    phoneContainer.appendChild(phoneCard);
  });
};

loadPhone();
