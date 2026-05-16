// Document items (from html file)
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

// Images
const img1 = new Image();
const img2 = new Image();
const img3 = new Image();
const img4 = new Image();
const img5 = new Image();

// sets the image
img1.src = "DVD Logo (Blue).png";
img2.src = "DVD Logo (Red).png";
img3.src = "DVD Logo (Green).png";
img4.src = "DVD Logo (Purple).png";
img5.src = "DVD Logo (Yellow).png";

// Variables
let rectX = 10;
let rectY = 5;
let Xdirection = 1;
let Ydirection = 1;
let color = 1;
let pastcolor = 0;
let speed = 4;

// Main function
function Main()
{
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
    switch(Xdirection)
    {
        case 1:
            rectX += speed;
            break;
        case -1:
            rectX -= speed;
			break;
    }
    switch(Ydirection)
    {
		case 1:
			rectY += speed;
            break;
        case -1:
            rectY -= speed;
			break;
	}
    if (rectY + 141 > canvas.height)
    {
		rectY = canvas.height - 141;
        Ydirection = -1;
		pastcolor = color;
		while (color == pastcolor)
		{
			color = (Math.floor(Math.random() * 5)) + 1;
		}
    }
    if (rectX + 300 > canvas.width)
    {
		rectX = canvas.width - 300;
        Xdirection = -1;
		pastcolor = color;
		while (color == pastcolor)
		{
			color = (Math.floor(Math.random() * 5)) + 1;
		}
    }
    if (rectX < 0)
    {
		rectX = 0;
        Xdirection = 1;
		pastcolor = color;
		while (color == pastcolor)
		{
			color = (Math.floor(Math.random() * 5)) + 1;
		}
    }
    if (rectY < 0)
    {
		rectY = 0;
        Ydirection = 1;
		pastcolor = color;
		while (color == pastcolor)
		{
			color = (Math.floor(Math.random() * 5)) + 1;
		}
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	switch(color)
	{
		case 1:
			ctx.drawImage(img1, rectX, rectY, 300, 141);
			break;
		case 2:
			ctx.drawImage(img2, rectX, rectY, 300, 141);
			break;
		case 3:
			ctx.drawImage(img3, rectX, rectY, 300, 141);
			break;
		case 4:
			ctx.drawImage(img4, rectX, rectY, 300, 141);
			break;
		case 5:
			ctx.drawImage(img5, rectX, rectY, 300, 141);
			break;
	}
    requestAnimationFrame(Main);
}
Main()