function bgColor() {
  let button = document.querySelector(".navbar-btn");
  let body = document.body;
  let colors = [
    "blue",
    "red",
    "grey",
    "white",
    "green",
    "#aaa",
    "#EEFFAA",
    "rgb(122,111,110)",
  ];
  button.onclick = function () {
    body.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
  };
}
bgColor();

function getQuote() {
  let quote = document.querySelector(".quote-container");
  let button = document.querySelector(".set-quote");
  let quotes = [
    `Tənbəl deyər: "Bu gün oynaram, sabah oxuyaram". Çalışqan deyər: "Bu gün oxuyaram, sabah oynaram".`,
    "Asta gedən yorulmaz.",
    "Ağıl gücdən üstündür.",
    "Əldən gəlməz iş olmaz, ayaq gedməz yol olmaz.",
    "Ağıl yaşda olmaz, başda olar.",
    "Baxmaqla öyrənmək olsa, it də qəssab olar.",
    "Həcdən gələn mən, Məkkədən xəbər verən sən?",
    "Məkkəyə gedən dəvə hacı olmaz.",
    "Qələm yazanı qılınc poza bilməz.",
  ];
  quote.innerHTML += `<div class="label label-info">${
    quotes[Math.floor(Math.random() * quotes.length)]
  }</div> `;

  button.onclick = function () {
    window.location.reload();
  };
}
getQuote();

function user() {
  let userName = document.querySelector(".name");
  let userSurname = document.querySelector(".surname");
  let submitBtn = document.querySelector(".submit");
  let user = document.querySelector(".user-info");

  submitBtn.onclick = function () {
    user.innerHTML += `<div class="user-list"><p>${userName.value} ${userSurname.value}</p></div>`;
  };
}
user();
