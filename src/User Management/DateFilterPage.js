import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
// import { ExcelFile, ExcelSheet, ExcelColumn } from ' react-data-export';
import '../App.css';
import Exportexcel from '../Components/ExportExcel';

const DateFilterPage = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleFilterData = () => {

    console.log('Start Date:', startDate ? moment(startDate).format('YYYY-MM-DD') : null);
    console.log('End Date:', endDate ? moment(endDate).format('YYYY-MM-DD') : null);
  };

  const generateExcelData = () => {
    // Generate sample data for Excel
    const data = [
      { name: 'John Doe', age: 30, email: 'john@example.com' },
      { name: 'Jane Smith', age: 25, email: 'jane@example.com' },
      // Add more data objects here based on your data source
    ];
    return data;
  };

  return (
    <div className='date-filter-page'>
      
        <div>
          <label>Enter Start Date:</label>
          <DatePicker selected={startDate} onChange={handleStartDateChange} dateFormat='yyyy-MM-dd' />
        </div>
        <div>
          <label>Enter End Date:</label>
          <DatePicker selected={endDate} onChange={handleEndDateChange} dateFormat='yyyy-MM-dd' />
        </div>
      
      <button onClick={handleFilterData}>Filter Data</button>

      {/* <ExcelFile element={<button>Download Excel</button>}>
        <ExcelSheet data={generateExcelData()} name='Data'>
          <ExcelColumn label='Name' value='name' />
          <ExcelColumn label='Age' value='age' />
          <ExcelColumn label='Email' value='email' />
        </ExcelSheet>
      </ExcelFile> */}
    </div>
  );
};

export default DateFilterPage;
