const wheel_ul = document.querySelector("ul");
const wheel = document.querySelector("ul");
const spinBtn = document.getElementById("spin-btn");
const spin = document.getElementById("spin-btn2");
console.log(spin);
let currentRotation=0;
console.log(wheel);
console.log(document.getElementById("list-of-names"));


function startSpinning() {
  let randomNumber = currentRotation + Math.floor(Math.random() * 1200);
  currentRotation = randomNumber;
  console.log(randomNumber);
  wheel.style.transformOrigin="center"
  wheel.style.transitionDuration = "2s"
  wheel.style.transform = 'rotate('+randomNumber+'deg)'; 

  setTimeout(() => {
    decideWinner();;
  }, 2000);

}

function wheelOfFortune(selector) {
  let animation;
  let previousEndDegree = 0;

  spin.addEventListener('click', () => {
    if (animation) {
      animation.cancel(); // Reset the animation if it already exists
    }

    const randomAdditionalDegrees = Math.random() * 360 + 1800;
    const newEndDegree = previousEndDegree + randomAdditionalDegrees;

    animation = wheel_ul.animate([
      { transform: `rotate(${previousEndDegree}deg)` },
      { transform: `rotate(${newEndDegree}deg)` }
    ], {
      duration: 4000,
      direction: 'normal',
      easing: 'cubic-bezier(0.440, -0.205, 0.000, 1.130)',
      fill: 'forwards',
      iterations: 1
    });

    previousEndDegree = newEndDegree;
  });
}
spin.onclick=wheelOfFortune(wheel)

function decideWinner(){
  let angle= currentRotation%360;
  angle=angle/36;

  angle=parseInt(angle)

  console.log(angle)
  alert('Winner is ' + angle);
}


function addItemToTheList(){
  let newEntry= document.getElementById("addname").value;
  let ul = document.getElementById("list-of-names");

  if(newEntry){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(newEntry));
    ul.appendChild(li);
    document.getElementById("addname").value=null;
  }

}