function generateHeaderObjects() {
  // Find the header row with class 'tr1' and get all its <th> elements
  const headerRow = document.querySelector('tr.tr1');
  const headerCells = headerRow.querySelectorAll('th');

  // Find the sub-header row with class 'tr2' and get all its <th> elements
  const subHeaderRow = document.querySelector('tr.tr2');
  const subHeaderCells = subHeaderRow.querySelectorAll('th');

  // Array to store the final header objects
  const headerObjects = [];

  // Array to store the column headings in order
  const columnHeadings = [];

  // Index to keep track of the current position in the headerCells array
  let index = 0;

  // Loop through each <th> element in the header row
  for (const headerCell of headerCells) {
    // Get the colspan and rowspan attributes of the current header cell
    const colspan = parseInt(headerCell.getAttribute('colspan')) || 1;
    const rowspan = parseInt(headerCell.getAttribute('rowspan')) || 1;

    // Get the text content of the current header cell (the column name)
    const headerText = headerCell.textContent.trim();
    // Add the column name to the columnHeadings array
    columnHeadings.push(headerText);

    // Create an object for the current header cell with name, rowSpan, and colSpan properties
    const headerObj = { name: headerText, rowSpan: rowspan, colSpan: colspan };
    
    let tempColspan =headerObj.colSpan
    // If the current cell has colspan greater than one, it may have sub-columns
    if (colspan > 1) {
      // Array to store the names of the sub-columns
      const subColumns = [];

      // Loop through the next 'colspan' number of cells in the sub-header row
      for (let i = 0; i < tempColspan; i++) {
        for (const subHeaderCell of subHeaderCells) {
          // Get the colspan and rowspan attributes of the current header cell
          const subcolspan = parseInt(subHeaderCell.getAttribute('colspan')) || 1;
          const subrowspan = parseInt(subHeaderCell.getAttribute('rowspan')) || 1;
        }
        // Get the sub-header cell at the current index in the subHeaderCells array
        const subHeaderCell = subHeaderCells[index + i];
        // Check if the subHeaderCell exists (to avoid accessing undefined elements)
        if (subHeaderCell) {
          // Get the text content of the sub-header cell (sub-column name) and add it to the array
          const subHeaderText = subHeaderCell.textContent.trim();
          subColumns.push(subHeaderText);
        }
      }
      // Subtract the colSpan of subHeaderCell from the colSpan of headerCell to correctly account for columns with colSpan greater than one
      tempColspan -= subColumns.length;

      // If there are sub-columns, add the 'subColumns' property to the header object
      if (subColumns.length > 0) {
        headerObj.subColumns = subColumns;
      }
    }

    // Add the header object to the headerObjects array
    headerObjects.push(headerObj);

    // Move the index to the next position only if colspan is greater than one
    index += tempColspan;
  }

  // Print the final header objects array
  console.log(headerObjects);
}

// Call the function to generate the header objects
generateHeaderObjects();
