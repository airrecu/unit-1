
//initialize function- purpose is to call cities and addEvents function,
// this will be called by the event listener definted at the very end of the script,
// which will run when the DOM is loaded.
function initialize(){
    cities();
	addEvents();
};

//cities function- purpose is to create a table with city names and populations
function cities(){
    
    //defines two arrays for cities and population
    	
	var cityPop = [
    { 
        city: 'Madison',
        population: 233209
    },
    {
        city: 'Milwaukee',
        population: 594833
    },
    {
        city: 'Green Bay',
        population: 104057
    },
    {
        city: 'Superior',
        population: 27244
    }]

	
    //create a table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" and "Population" columns to the header row
    headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")

    //add the row to the table
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for(var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        table.insertAdjacentHTML('beforeend',rowHtml);
    }

    // This method appends the table to the div (myDiv)
    document.querySelector("#myDiv").appendChild(table);
	addColumns(cityPop)}


//addColumns function - This function adds a column for category based on the size of the city using a loop and if statement
function addColumns(cityPop){
    
    document.querySelectorAll("tr").forEach(function(row, i){

    	if (i == 0){
        //insertAdjacnt  typo found
    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} else {

    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';   //citysize  typo found

    		} else {
    			citySize = 'Large';
    		};
      //insertAdjacnt typo found
			row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
    	};
    });
};

//addEvents function- the purpose of this is to add two event listeners to the DOM
//The first is a mouseover event that will run a loop that selects a random color to be 
// set to the table's style color property.  This changes the text color when the mouse
// is moved over a new table cell.
//The second is a popup alert box with text that occurs whe the table is clicked on
function addEvents(){

	document.querySelector("table").addEventListener("mouseover", function(){
		
		var color = "rgb(";

		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += random;

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
	    	};
        }
		document.querySelector("table").style.color = color;
	});

	function clickme(){

		alert('Hey, you clicked me!');
	};

	document.querySelector("table").addEventListener("click", clickme)
};


//This event listener runs the initialize function defined at the begining of the script
//This sets the whole script in motion
document.addEventListener('DOMContentLoaded', initialize)