const socket = io("http://localhost:3000");

function sendMessage(){

let input = document.getElementById("message");
let msg = input.value;

socket.emit("chat message", msg);

input.value="";
}

socket.on("chat message", function(msg){

let box = document.getElementById("chat-box");

let p = document.createElement("p");
p.textContent = msg;

box.appendChild(p);

});