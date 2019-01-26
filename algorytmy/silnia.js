function silnia_I(ile)
{	var silnia = 1
	var ile 
	var licznik = 1
	
			if(ile>=0)
		{
			while(ile>=licznik)
			{
				silnia*=licznik;
				licznik+=1;
				
			}
			return silnia;	
		}
		return "chyba nie"
		
}


function oblicz()
{
	var x, silnia, text;
	
	x=document.getElementById("liczba").value;
	
	silnia = silnia_I(x);
	
	text="Silnia liczby " + x + " wynik : "+ silnia;
	
	document.getElementById("wynik").innerHTML = text;
	
}

function fib(num)
{
	var a = 1,b = 0, temp;

	while(num>=0)
		{
			temp = a;
			
			a+=b;
			b=temp;
			num--;
			
		}
	
	return b;
}




function foblicz()
{
	var y, b, text;
	
	y=document.getElementById("tak").value;
	
	b = fib(y);
	
	text="wynik f " + y + " : "+ b;
	
	document.getElementById("wynik").innerHTML = text;
	
}
