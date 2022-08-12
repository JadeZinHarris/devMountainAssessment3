console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("You have submitted");
}
document.getElementById("Ducky").addEventListener("mouseover",mouseOver)
function mouseOver(){
	alert("You found me! HI, you look beautiful today")
};

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);