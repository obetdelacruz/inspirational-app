import "./style.css";

function getQuote() {
  return new Promise((resolve, reject) => {
    fetch("https://api.quotable.io/quotes/random")
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}
getQuote()
  .then((data) => {
    document.body.innerHTML = `<h1>${data[0].author}</h1>
      <p>${data[0].content}</p>
      <button></button>`;
  })
  .catch((error) => console.error(error));

document.getElementById(button).addEventListener("click", function () {
  location.reload();
  return false;
});
