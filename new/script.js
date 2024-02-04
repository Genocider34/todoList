function myTime() {
  const time = document.getElementById("time");

  setInterval(() => {
    let currentTime = new Date();
    time.innerHTML = currentTime.toLocaleTimeString();
  }, 1000);
}

myTime();

// ---------------- to do list --------------------//

// ELEMENTS

const mainSection = document.querySelector("main");

{
  /* <i class="fa-solid fa-circle-check"></i> */
}

function createElements() {
  mainSection.innerHTML += `
  <section>
    <div class="list">
      <div class="information">
        <i class="fa-regular fa-circle"></i>
        <span>Hello world</span>
      </div>
    
      <div class="icons">
        <i class="fa-solid fa-pen-to-square"></i>
        <i class="fa-solid fa-trash"></i>
      </div>
    </div>
  </section>`;
}

createElements();
