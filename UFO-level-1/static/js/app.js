// from data.js
var tableData = data;

//locate table body in html 
var tbody = d3.select("tbody");

// create table with data set
tableData.forEach((sitingdata) => {

    // Append one table row per student/grade
    var row = tbody.append("tr");

    // append one cell for the student and one cell for the grade
    Object.values(sitingdata).forEach((value) => {
        row.append("td").text(value);
    })
});
  

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);

// Create the function to run for both events
function runEnter(){
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // clear table body
    d3.selectAll("tbody").html("")

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Test
    // console.log(inputValue);

    // Create a custom filtering function
    function selectDate(dates) {
        return dates.datetime <= inputValue;
    }
    
    // filter() uses the custom function as its argument
    var filteredata = tableData.filter(selectDate);
    
    // Test
    // console.log(filteredata);

    // Use D3 to select the table body
    var tbody = d3.select("tbody");

    // Use D3 to select the table
    var table = d3.select("table");

    // Use D3 to set the table class to `table table-striped`
    table.attr("class", "table table-striped");

    // Iterate through each row of the data set
    filteredata.forEach((sitingdata) => {

        // Append one table row per row of data
        var row = tbody.append("tr");
    
        // append one cell for each of the items in the data set
        Object.values(sitingdata).forEach((value) => {
            row.append("td").text(value);
        })
    });
  
}
