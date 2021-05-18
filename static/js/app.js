// import the data from data.js 
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select('tbody');

// Function to build table 
function buildTable(data) {
    // Clear out existing data 
    tbody.html('');

    // Loop through each object in the data
    // Append a row and cells for each value
    data.forEach((dataRow) => {
        // Append row to table body
        let row = tbody.append('tr');

        // Loop through each field in teh dataRow
        // Add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
        let cell = row.append('td');
        cell.text(val);
        })
    })
};