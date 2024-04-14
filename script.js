const searchForm = document.getElementById("search-form");
const vehicleNumberInput = document.getElementById("vehicle-number");
const results = document.getElementById("results");
const accidentLocation = document.getElementById("accident-location");
const mapContainer = document.getElementById("map-container");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const vehicleNumber = vehicleNumberInput.value;

  //Trying to get accident data here.....
  const accidentData = {
    location: "Latitude: 48.3191, Longitude: 5.5771",
  };
  // console.log(accidentData);
  if (accidentData && vehicleNumber === "1234") {
    results.classList.remove("hidden");
    notFound.classList.add("hidden");
    accidentLocation.textContent = accidentData.location;

    mapContainer.innerHTML = `
    <a href="https://www.google.com/maps?q=22.574533,88.433954" target="_blank" class="map-link">
    <img src="logo.png" alt="Google Maps" class="map-logo">
    </a>
  </a>
    `;
  } else {
    results.classList.add("hidden");
    notFound.classList.remove("hidden");
    //document.querySelector(".notFound").classList.add("visible");
  }
});

// src="https://www.google.com/maps/embed/v1/place?q=${accidentData.location.replace(
//     / /g,
//     "+"
//    )}&key=YOUR_API_KEY"
