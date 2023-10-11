import React, { useState } from 'react';
import '../App.css';

export default function AnalyticCard() {
  const [cardContent, setCardContent] = useState([
    {
      id: 1,
      name: 'Active Users',
      users: '220'
    },
    {
      id: 2,
      name: 'Paid Users',
      users: '110'
    },
    {
      id: 2,
      name: 'Streak',
      users: '1100'
    },
    {
      id: 2,
      name: 'Mindfullness',
      users: '100'
    },
    {
      id: 2,
      name: 'Sleep',
      users: '69'
    },
    {
      id: 2,
      name: 'Compliments',
      users: '69696'
    },
    {
      id: 2,
      name: 'Tick Tock',
      users: '0'
    },
    {
      id: 2,
      name: 'Live Section',
      users: '0'
    },
    {
      id: 2,
      name: 'Top 10 Users',
      users: '10'
    }
  ]);

  const [selectedChart, setSelectedChart] = useState('Daily');

  const handleChartClick = (chart) => {
    setSelectedChart(chart);
    // Update the users data based on the chart option clicked
    const updatedCardContent = cardContent.map((content) => {
      if (content.name === selectedChart) {
        // Assuming you have some logic to determine how the users data changes on each chart click
        // For example, incrementing/decrementing the users value
        // You can customize this logic based on your requirements
        if (selectedChart === 'Daily') {
          return { ...content, users: (+content.users + 10).toString() };
        } else if (selectedChart === 'Weekly') {
          return { ...content, users: (+content.users + 50).toString() };
        } else if (selectedChart === 'Monthly') {
          return { ...content, users: (+content.users - 30).toString() };
        } else if (selectedChart === 'Yearly') {
          return { ...content, users: (+content.users + 100).toString() };
        } else if (selectedChart === '13/19') {
          return { ...content, users: (+content.users - 5).toString() };
        } else if (selectedChart === '19 Onwards') {
          return { ...content, users: (+content.users + 20).toString() };
        }
      }
      return content;
    });
    setCardContent(updatedCardContent);
  };

  return (
    <div className='containerana'>
      {cardContent.map((content) => (
        <div className="boxheader" key={content.id}>
          <div className='chart'>
            <div className='chart-name'>{content.name}</div>
            <div className='userbuttoncontainer'>
              <div
                className={`chart-option ${selectedChart === 'Daily' ? 'selected' : ''}`}
                onClick={() => handleChartClick('Daily')}
              >
                Daily
              </div>
              <div
                className={`chart-option ${selectedChart === 'Weekly' ? 'selected' : ''}`}
                onClick={() => handleChartClick('Weekly')}
              >
                Weekly
              </div>
              <div
                className={`chart-option ${selectedChart === 'Monthly' ? 'selected' : ''}`}
                onClick={() => handleChartClick('Monthly')}
              >
                Monthly
              </div>
              <div
                className={`chart-option ${selectedChart === 'Yearly' ? 'selected' : ''}`}
                onClick={() => handleChartClick('Yearly')}
              >
                Yearly
              </div>
              <div
                className={`chart-option ${selectedChart === '13/19' ? 'selected' : ''}`}
                onClick={() => handleChartClick('13/19')}
              >
                13/19
              </div>
              <div
                className={`chart-option ${selectedChart === '19 Onwards' ? 'selected' : ''}`}
                onClick={() => handleChartClick('19 Onwards')}
              >
                19&nbsp;Onwards
              </div>
            </div>
          </div>
          <div className='boxbody'>
            <p>{content.users}</p>
          </div>
        </div>))}
    </div>
  )
}