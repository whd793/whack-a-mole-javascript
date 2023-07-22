// import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

const hammer = document.querySelector(".hammer");
const holes = [...document.querySelectorAll(".hole")];
const scoreboard = document.querySelector(".scoreboard");
let score = 0;
const btn = document.querySelector(".btn");

window.addEventListener("mousemove", (e) => {
  hammer.style.top = e.pageY + "px";
  hammer.style.left = e.pageX + "px";
});

window.addEventListener("mousedown", () => {
  hammer.classList.add("active");
});

window.addEventListener("mouseup", () => {
  hammer.classList.remove("active");
});

btn.addEventListener("click", () => {
  run();
});

function run() {
  let id = null;
  const random = Math.floor(Math.random() * holes.length);
  const img = document.createElement("img");
  img.src = "../assets/mole.png";
  img.classList.add("mole");
  holes[random].appendChild(img);

  img.addEventListener("click", (e) => {
    score += 10;
    scoreboard.innerText = "Score: " + score;
    img.src = "../assets/mole-whacked.png";

    // holes[random].removeChild(img);
  });

  id = setTimeout(() => {
    // if (holes[random].childElementCount > 0) {
    holes[random].removeChild(img);
    // }
    run();
    clearTimeout(id);
  }, 1500);
}

// run();
