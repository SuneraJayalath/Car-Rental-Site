const cars = [
  {
    name: "Toyota Prius",
    image: "images/prius.jpg",
    description: "A reliable hybrid with top fuel efficiency.",
    price: "Price per day = 2500",
    type: "Sedan"
  },
  {
    name: "Honda Civic",
    image: "images/civic.jpg",
    description: "A stylish, powerful, and compact sedan.",
    price: "Price per day = 2700",
    type: "Sedan"
  },
  {
    name: "Suzuki Alto",
    image: "images/alto.png",
    description: "Perfect for city driving with great economy.",
    price: "Price per day = 1800",
    type: "Hatchback"
  },
  {
    name: "Sedan - Toyota Corolla",
    image: "images/car1.jpeg",
    description: "Comfortable, fuel-efficient car perfect for city rides.",
    price: "Price per day = 3000",
    type: "Sedan"
  },
  {
    name: "SUV - Nissan X-Trail",
    image: "images/car2.jpg",
    description: "Spacious SUV ideal for family trips and off-road drives.",
    price: "Price per day = 3500",
    type: "SUV"
  },
  {
    name: "Hatchback - Honda Fit",
    image: "images/car3.jpg",
    description: "Compact, reliable car perfect for daily commutes.",
    price: "Price per day = 2000",
    type: "Hatchback"
  },
  {
    name: "Luxury - BMW 5 Series",
    image: "images/car4.jpg",
    description: "Stylish luxury sedan with premium features and comfort.",
    price: "Price per day = 6000",
    type: "Luxury"
  }
];

function renderCars(filteredCars) {
  const carList = document.getElementById("carList");
  carList.innerHTML = ""; // Clear existing list

  filteredCars.forEach((car) => {
    const div = document.createElement("div");
    div.className = "car-item";
    div.innerHTML = `
      <img src="${car.image}" alt="${car.name}" />
      <h3>${car.name}</h3>
      <p class="price">${car.price || "Price not available"}</p>
      <button onclick='showDetails(${JSON.stringify(car)})' class="btn">View Details</button>
    `;
    carList.appendChild(div);
  });
}

document.getElementById("carType").addEventListener("change", function () {
  const selected = this.value;

  if (selected === "all") {
    renderCars(cars);
  } else {
    const filtered = cars.filter(car => car.type === selected);
    renderCars(filtered);
  }
});

renderCars(cars); // Show all cars by default

function showDetails(car) {
  document.getElementById("modalTitle").textContent = car.name;
  document.getElementById("modalImage").src = car.image;
  document.getElementById("modalDescription").textContent = `${car.description}\n${car.price || ""}`;
  document.getElementById("carModal").style.display = "flex";
}
