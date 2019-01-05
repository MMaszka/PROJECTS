var penColor = "black";
var isHeader = 0;
const emptyRow =  '<div class="row"></div>';
const emptyColumn = '<div class="pixel" onclick="setPixelColor(this)"></div>';





function setPixelColor(pixel)
{
   pixel.style.backgroundColor = penColor;
}
function setPenColor(pen)
{
   penColor = pen;
   setCurrentColor(penColor);
}
function setCurrentColor(color)
{
   var currentColor = document.getElementById("currentColor");
   currentColor.style.backgroundColor = color;
}

function setText()
{
   if (isHeader == 0)
   {
      document.getElementById("palette").innerHTML = '<h1 id="paletteHeader">Paleta</h1>' +  document.getElementById("palette").innerHTML;
      isHeader = 1;
   }
   else
   {
      document.getElementById("paletteHeader").remove();
      isHeader = 0;
   }
}

function addRow()
{
   
   var rowCollection = document.getElementsByClassName("row");
   var rowCounter = rowCollection.length;

   var pixelCollection = document.getElementsByClassName("pixel");
   var pixelCounter = pixelCollection.length ;
   
   if (rowCounter <= 0)
   {
      countPixelsInRow = 8    
   }
   else
   {
      var countPixelsInRow = pixelCounter/rowCounter;
   }
   
   document.getElementById("art").innerHTML = document.getElementById("art").innerHTML + emptyRow;
   
   rowCollection = document.getElementsByClassName("row");
   //loop for columns inner "row loop"
   for (j=0;j<countPixelsInRow;j++) 
   {
         //adding columns for the last added row (actual value of "i" variable)
         rowCollection[rowCounter].innerHTML = rowCollection[rowCounter].innerHTML + emptyColumn;    
   }
   

}

function removeRow()
{
   var rowCollection = document.getElementsByClassName("row"); 
   var count = rowCollection.length;
   rowCollection[count-1].remove();
   
}

function addRowsAtLoad()
{
   //decalre variables
   var i,j;
   
   //loop for rows
   for (i=0; i<8; i++)
   {
      //adding row 
      document.getElementById("art").innerHTML = document.getElementById("art").innerHTML + emptyRow;
      
      //getting all rows
      var rowCollection = document.getElementsByClassName("row"); 
      
      //loop for columns inner "row loop"
      for (j=0;j<8;j++) 
      {
            //adding columns for the last added row (actual value of "i" variable)
            rowCollection[i].innerHTML = rowCollection[i].innerHTML + emptyColumn;    
      }    
   }
   
}


function addColumn()
{
      var rowCollection = document.getElementsByClassName("row"); 
      var count = rowCollection.length;
      for (j=0;j<count;j++) 
      {
            rowCollection[j].innerHTML = rowCollection[j].innerHTML + emptyColumn;    
      }   
   
}



function removeColumn()
{
   var rowCollection = document.getElementsByClassName("row");
   var rowCounter = rowCollection.length;

   var columnCollection = document.getElementsByClassName("pixel");
   var pixelCounter = columnCollection.length ;
   
   if(rowCounter>0 && pixelCounter>0)
   {
      var countColumnsInRow = pixelCounter/rowCounter;
      for(i=(rowCounter-1);i>(-1);i--)
      {
         var index =((i+1)*countColumnsInRow)-1
         columnCollection[index].remove();

      }
   }
   columnCollection = document.getElementsByClassName("pixel");
   pixelCounter = columnCollection.length ;

}

function paintAll()

{

		var pixelCollection = document.getElementsByClassName("pixel");
	var count = pixelCollection.length;
	
	for(j=0; j<count;j++)
	{
		pixel = pixelCollection[j];
		setPixelColor(pixel);
		
	}
	

	
}

