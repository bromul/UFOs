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
    
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select('#datetime').property('value');
    let filteredData = tableData;

    // Check to see if a date was entered and fliter the data
    if (date) {
        // Apply filter to table -- only keep rows that match datetime
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    // Rebuild table using filtered data
    // @NOTE: If no date was entered, then filteredData === Original tableData
    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll('#filter-btn').on('click', handleClick);

// Build teh table when the page loads
buildTable(tableData);
