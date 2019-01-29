// from data.js
var tableData = data;

// create a table variable
var tbody = d3.select("tbody");

// cycle through data and append to table
tableData.forEach((UFOsighting) => {
    var row = tbody.append("tr");
    Object.entries(UFOsighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
});

// select filter button
var filter = d3.select("#filter-btn");

// add in filter on button click
filter.on("click", function(){

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  console.log(inputElement)

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue)

  // Clear table
  tbody.html("");
  
  // Filter for user input
  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

  // Insert filtered data into table

  filteredData.forEach((UFOsighting) => {
      var row = tbody.append("tr");
      Object.entries(UFOsighting).forEach(([key, value]) =>{
          var cell = tbody.append("td");
          cell.text(value);
      });
  });

});
