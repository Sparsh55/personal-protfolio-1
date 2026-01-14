document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");
  const loaderText = document.getElementById("loading");
  const messages = [
    "Fetching data...",
    "Setting things up...",
    "Almost done...",
  ];
  const intervals = [0, 1500, 3000];

  intervals.forEach((interval, index) => {
    setTimeout(() => {
      loaderText.textContent = messages[index];
    }, interval);
  });

  setTimeout(() => {
    loader.style.display = "none";
    content.style.display = "block";
  }, 5000); // 15 seconds delay
});
