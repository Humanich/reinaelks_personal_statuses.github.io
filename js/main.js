let cl = console.log

class App {

    constructor() {
    }

}

window.onload = () => {
    new App();
}

function changeImage() { 
	// Look at folder and pick something randomly 
	// $images = glob('/path/to/image/dir/{*.jpg,*.png,*.gif}', GLOB_BRACE);


	var a = Math.floor(Math.random() * pics.length); 
	var img = pics[a]; 
	pic.style.backgroundImage = img; 
} 

setInterval(showImage, 1000); 