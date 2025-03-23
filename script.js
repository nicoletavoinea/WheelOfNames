let wheel = document.querySelector("ul.wheel-of-fortune");
console.log(wheel);
let currentRotation=0;
let numberOfElements=0;

function startSpinning() {
  let randomNumber = currentRotation + Math.floor(Math.random() * 2000);
  currentRotation = randomNumber;

  wheel.style.transformOrigin="center"
  wheel.style.transitionDuration = "2s"
  wheel.style.transform = 'rotate('+randomNumber+'deg)'; 

  setTimeout(() => {
    decideWinner();;
  }, 2000);
}

function decideWinner(){
  let angle= currentRotation%360;
  angle=angle/36;

  angle=parseInt(angle)

  console.log(angle)
  alert('Winner is ' + angle);
}

function addItemToTheList(){
  let newEntry= document.getElementById("addname").value; //new entry
  let ul = document.getElementById("list-of-names");      //list of names

  if(newEntry){ //if textbox not null
    let liList = document.createElement("li");
    liList.appendChild(document.createTextNode(newEntry));
    liList.style.setProperty('--_idx',numberOfElements); //set index for the new entry

    let liWheel = document.createElement("li");
    liWheel.appendChild(document.createTextNode(newEntry));
    liWheel.style.setProperty('--_idx',numberOfElements); //set index for the new entry

    ul.appendChild(liList);    //add new entry to the names list
    wheel.appendChild(liWheel); //add new entry to the wheel list

    numberOfElements++;
    wheel.style.setProperty('--_items', numberOfElements); //increase number of items

    document.getElementById("addname").value=""; //make textbox empty again
  }
  //console.log(listOnWheel);
}