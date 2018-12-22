var penlcolor="black"
var isHeader = 0
const emptyRow = '<div class="row"></div>';
const emptyColumn = '<div class="pixel" onclick="setPixelColor(this)"></div>';


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
	document.getElementById("Art").innerHTML = document.getElementById("Art").innerHTML + emptyRow ; // '<div class= "row">' +rowCollection[0].innerHTML + "</div>"
	addColumnToRow();
}
function removeRow()
{
	
	var rowCollection = document.getElementsByClassName("row");
	var count = rowCollection.length;
	rowCollection[count - 1].remove();
	
	
}



function addRowsAtLoad()
{
	var i , j;
	for(i=0;i<8;i++)
	{
		document.getElementById("Art").innerHTML = document.getElementById("Art").innerHTML +	emptyRow;
		
		var rowCollection = document.getElementsByClassName("row");
		for(j=0; j<8;j++)
		{
			rowCollection[i].innerHTML = rowCollection[i].innerHTML + emptyColumn;
			
		}
		
	}
	numberOfDiv();
	
}


function addColumn()
{
	var rowCollection = document.getElementsByClassName("row");
	var count = rowCollection.length;
	
	var i , j;
	for(i=0;i<count;i++)
	{
			rowCollection[i].innerHTML = rowCollection[i].innerHTML + emptyColumn;
		
	}
	numberOfDiv();
}

function addColumnToRow()
{
	
	var rowCollection = document.getElementsByClassName("row");
	var count = rowCollection.length;

	if( count > 1)
	{
		var columnCollection = document.getElementsByClassName("pixel");
		var countColumns = columnCollection.length /(count -1);
		var j;
	
		for(j=0; j<countColumns;j++)
		{
			rowCollection[count -1 ].innerHTML = rowCollection[count -1].innerHTML + emptyColumn;
			
		}
	}
	else
	{
				var j;
	
		for(j=0; j<8;j++)
			{
				rowCollection[count -1 ].innerHTML = rowCollection[count -1].innerHTML + emptyColumn;
				
			}
		
	}
}

function removeColumn()
{
	var rowCollection = document.getElementsByClassName("row");
	var rowCounter = rowCollection.length;
	
	var columnCollection = document.getElementsByClassName("pixel");
	var pixelCounter = columnCollection.length ;
	window.alert(pixelCounter);
	if(rowCounter>0 && pixelCounter>0)
	{
		var countColumnsInRow = pixelCounter/rowCounter;
		for(i=0;i<rowCounter;i++)
		{
			var index =((i+1)*countColumnsInRow)-1
			window.alert(index);
			columnCollection[index].remove();
		
		}
	
	
	}
	columnCollection = document.getElementsByClassName("pixel");
	pixelCounter = columnCollection.length ;
	window.alert(pixelCounter);
}

function numberOfDiv(){
	var columnCollection = document.getElementsByClassName("pixel");
	var i;
	for (i=0;i<columnCollection.length;i++)
	{
		columnCollection[i].innerHTML = i;
	}
}
	
	



