var penlcolor="black"
var isHeader = 0
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
function setText()
{
	if (isHeader==0)
	{
	document.getElementById("palette").innerHTML = '<h1 id="paletteHeater">Paleta</h1>' + document.getElementById("palette").innerHTML;
	isHeader=1;
	}
	else
	{
		document.getElementById("paletteHeater"). remove();
	isHeader=0;	
	}
}
function addRow()
{

	var rowCollection = document.getElementsByClassName("row");
	document.getElementById("Art").innerHTML = document.getElementById("Art").innerHTML + '<div class="row">' + rowCollection[0].innerHTML + '</div>';
	
}
function removeRow()
{
	
	var rowCollection = document.getElementsByClassName("row");
	rowCollection[0].remove();
	
	
}
