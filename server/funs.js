const apiUrl = "http://10.15.1.230:5000/reports";

setTimeout(() => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => console.log("API Response:", data))
    .catch((error) => console.error("Error fetching data:", error.message));
}, 1000); // Retry after 1 second
