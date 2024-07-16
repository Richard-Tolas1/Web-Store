document.getElementById("fetchButton").addEventListener("click", () => {
  fetchData();
});

function fetchData() {
  const url = "https://api.example.com/endpoint";

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error " + response.statusText);
      }
      return response.json(); 
    })
    .then((data) => {
      console.log(data);
      window.open(data, '_blank');
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}
