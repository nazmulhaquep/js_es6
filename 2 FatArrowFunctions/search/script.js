const searchInput = document.querySelector(".search");
const display = document.querySelector(".result");
const thanks = document.querySelector(".thanks");

function show() {
	console.log(this);
    display.innerHTML = this.value;

    setTimeout(() => {
        thanks.innerHTML = `You have typed: ${this.value}`;
    }, 1000);
}

//arrow function this diea window k bujhe
//give error
// const show = ()=>{
// 	console.log(this);
// 	display.innerHTML = this.value;
// }

searchInput.addEventListener("keyup", show);
