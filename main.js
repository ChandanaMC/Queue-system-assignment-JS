let passengerName = document.querySelector("#name");
let enterBtn = document.querySelector("#enter");
let vipFastTrack = document.querySelector("#vipFastTrack");
let checkIn = document.querySelector("#checkIn");
let passengerList = document.querySelector("#list");

document.getElementById("mainHeading").style.border = "5px solid black ";
document.getElementById("heading").style.color = "blue ";

let queue = [];
let message = document.createElement("p");
message.innerHTML = "Currently no one in the list.";
document.querySelector("#message").appendChild(message);

message.style.fontWeight = "bold";
message.style.color = "red";
message.style.fontFamily = "Segoe UI";

//'Enter' button
enterBtn.addEventListener("click", () => {
  //Checks if passenger name contains only alphabets
  let name = /^[a-zA-Z]+$/.test(passengerName.value);
  if (name) {
    queue.push(passengerName.value);
    let listOfPeople = document.createElement("li");
    listOfPeople.innerHTML = passengerName.value;
    passengerList.appendChild(listOfPeople);
    passengerName.value = ""; // Empties the input field
    message.innerHTML = ""; //Clears the message when the name is entered
  } else {
    alert("Please enter a correct name."); // If the name entered contains other than alphabets
    passengerName.value = "";
  }
});

//'VIP fast track' button
vipFastTrack.addEventListener("click", () => {
  let name = /^[a-zA-Z]+$/.test(passengerName.value);
  if (name) {
    queue.unshift(passengerName.value);
    let listOfPeople = document.createElement("li");
    listOfPeople.innerHTML = passengerName.value;
    passengerList.prepend(listOfPeople);
    passengerName.value = "";
    message.innerHTML = "";
  } else {
    alert("Please enter a correct name.");
    passengerName.value = "";
  }
});

//'Check in' button
checkIn.addEventListener("click", (event) => {
  let check = event.target.nextElementSibling.firstChild;
  //If the list is empty(in absence of names)
  if (check === null) {
    message.innerHTML = "Currently no one in the list.";
    document.querySelector("#message").appendChild(message);
  } else {
    check.textContent = passengerName.value;
    document.body.appendChild(check);
    check.style.listStyleType = "none";
  }
});
