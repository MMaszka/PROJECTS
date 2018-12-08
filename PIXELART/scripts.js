var penlcolor="black"

function setPixelColor(pixel)
{
	pixel.style.backgroundColor=pencolor;
	
	
}
function setPenColor(pen)

{
	pencolor=pen;
	setcurrentColor(pencolor);
	
}

function setcurrentColor(color)
{
	var currentcolor=document.getElementById("curentcolor");
	currentColor.style.backgroundColor=color;
	
	
}
