import React from 'react';
import { useEffect } from 'react';

const row1 = [
  {
      "name": "Dates of Joining",
      "display":true,
      "rowSpan": 3,
      "colSpan": 1
  },
  {
      "name": "First Name",
      "display":true,
      "rowSpan": 3,
      "colSpan": 1
  },
  {
      "name": "Last Name",
      "display":true,
      "rowSpan": 3,
      "colSpan": 1
  },
  {
      "name": "User Name",
      "display":true,
      "rowSpan": 3,
      "colSpan": 1
  },
  {
      "name": "Phone No",
      "display":true,
      "rowSpan": 3,
      "colSpan": 1
  },
  {
      "name": "Parent Phone No",
      "display":true,
      "rowSpan": 3,
      "colSpan": 1
  },
  {
      "name": "Email ID",
      "display":true,
      "rowSpan": 3,
      "colSpan": 1
  },
  {
      "name": "Institute Name",
      "display":true,
      "rowSpan": 3,
      "colSpan": 1
  },
  {
      "name": "Language",
      "display":true,
      "rowSpan": 3,
      "colSpan": 1
  },
  {
      "name": "State",
      "display":true,
      "rowSpan": 3,
      "colSpan": 1
  },
  {
      "name": "City",
      "display":true,
      "rowSpan": 3,
      "colSpan": 1
  },
  {
      "name": "Age below 18",
      "display":true,
      "rowSpan": 3,
      "colSpan": 1
  },
  {
      "name": "Age above 18",
      "display":true,
      "rowSpan": 3,
      "colSpan": 1
  },
  {
      "name": "Gender",
      "display":true,
      "rowSpan": 3,
      "colSpan": 1
  },
  {
      "name": "Subscription Plan Points Purchased",
      "display":true,
      "rowSpan": 1,
      "colSpan": 3,
      "subColumns": [
          "Month",
          "Year",
          "Splash / Compliments"
      ]
  },
  {
      "name": "Referral Code",
      "display":true,
      "rowSpan": 1,
      "colSpan": 3,
      "subColumns": [
          "Month",
          "Year",
          "Splash / Compliments"
      ]
  },
  {
      "name": "Year",
      "display":true,
      "rowSpan": 3,
      "colSpan": 1
  },
  {
      "name": "Time of App Used",
      "display":true,
      "rowSpan": 1,
      "colSpan": 4,
      "subColumns": [
          "Year",
          "Splash / Compliments",
          "Live Games",
          "Planned (TIMETABLE)"
      ]
  },
  {
      "name": "Total Points History",
      "display":true,
      "rowSpan": 1,
      "colSpan": 22,
      "subColumns": [
          "Year",
          "Splash / Compliments",
          "Live Games",
          "Planned (TIMETABLE)",
          "Unplanned (TIC TOK)",
          "Streak",
          "Mindfulness",
          "Sleep",
          "Free",
          "Paid",
          "Date",
          "Reason",
          "Name of Admin",
          "Tired",
          "Stressed",
          "Panicked",
          "Lazy",
          "Angry",
          "Motivation",
          "10",
          "20",
          "30"
      ]
  },
  {
      "name": "Badges",
      "display":true,
      "rowSpan": 1,
      "colSpan": 4,
      "subColumns": [
          "Year",
          "Splash / Compliments",
          "Live Games",
          "Planned (TIMETABLE)"
      ]
  },
  {
      "name": "Date of Inactive",
      "display":true,
      "rowSpan": 3,
      "colSpan": 1
  },
  {
      "name": "History of Activities",
      "display":true,
      "rowSpan": 1,
      "colSpan": 72,
      "subColumns": [
          "Splash / Compliments",
          "Live Games",
          "Planned (TIMETABLE)",
          "Unplanned (TIC TOK)",
          "Streak",
          "Mindfulness",
          "Sleep",
          "Free",
          "Paid",
          "Date",
          "Reason",
          "Name of Admin",
          "Tired",
          "Stressed",
          "Panicked",
          "Lazy",
          "Angry",
          "Motivation",
          "10",
          "20",
          "30",
          "40",
          "50",
          "60",
          "70",
          "80",
          "90",
          "100",
          "Redeem coins",
          "Date of redemtion",
          "Amount paid",
          "Date of payment",
          "1",
          "2",
          "3",
          "4",
          "5",
          "Noise AVG",
          "High",
          "Medium",
          "Low",
          "Heart Rate Variation",
          "High",
          "Medium",
          "Low",
          "Mindfulness",
          "Sleep",
          "Tic Tock",
          "No. of Hours Planned Studies",
          "No. of Hours Unplanned Studies",
          "High",
          "Medium",
          "Low",
          "Already Created",
          "User Created"
      ]
  },
  {
      "name": "Date of Payment",
      "display":true,
      "rowSpan": 3,
      "colSpan": 1
  },
  {
      "name": "No. of Days of App Used",
      "display":true,
      "rowSpan": 1,
      "colSpan": 2,
      "subColumns": [
          "10",
          "20"
      ]
  },
  {
      "name": "Blocking",
      "display":true,
      "rowSpan": 1,
      "colSpan": 3,
      "subColumns": [
          "10",
          "20",
          "30"
      ]
  },
  {
      "name": "Audios of the Mood",
      "display":true,
      "rowSpan": 1,
      "colSpan": 30,
      "subColumns": [
          "10",
          "20",
          "30",
          "40",
          "50",
          "60",
          "70",
          "80",
          "90",
          "100",
          "Redeem coins",
          "Date of redemtion",
          "Amount paid",
          "Date of payment",
          "1",
          "2",
          "3",
          "4",
          "5",
          "Noise AVG",
          "High",
          "Medium",
          "Low",
          "Heart Rate Variation",
          "High",
          "Medium",
          "Low",
          "Mindfulness",
          "Sleep",
          "Tic Tock"
      ]
  },
  {
      "name": "Mood",
      "display":true,
      "rowSpan": 1,
      "colSpan": 5,
      "subColumns": [
          "10",
          "20",
          "30",
          "40",
          "50"
      ]
  },
  {
      "name": "Change in Mood",
      "display":true,
      "rowSpan": 1,
      "colSpan": 50,
      "subColumns": [
          "10",
          "20",
          "30",
          "40",
          "50",
          "60",
          "70",
          "80",
          "90",
          "100",
          "Redeem coins",
          "Date of redemtion",
          "Amount paid",
          "Date of payment",
          "1",
          "2",
          "3",
          "4",
          "5",
          "Noise AVG",
          "High",
          "Medium",
          "Low",
          "Heart Rate Variation",
          "High",
          "Medium",
          "Low",
          "Mindfulness",
          "Sleep",
          "Tic Tock",
          "No. of Hours Planned Studies",
          "No. of Hours Unplanned Studies",
          "High",
          "Medium",
          "Low",
          "Already Created",
          "User Created"
      ]
  },
  {
      "name": "Buying Through Stores",
      "display":true,
      "rowSpan": 1,
      "colSpan": 4,
      "subColumns": [
          "Date of payment",
          "1",
          "2",
          "3"
      ]
  },
  {
      "name": "Sounds",
      "display":true,
      "rowSpan": 1,
      "colSpan": 5,
      "subColumns": [
          "Date of payment",
          "1",
          "2",
          "3",
          "4"
      ]
  },
  {
      "name": "Distraction Levels",
      "display":true,
      "rowSpan": 1,
      "colSpan": 4,
      "subColumns": [
          "Date of payment",
          "1",
          "2",
          "3"
      ]
  },
  {
      "name": "Stress Levels",
      "display":true,
      "rowSpan": 1,
      "colSpan": 4,
      "subColumns": [
          "Date of payment",
          "1",
          "2",
          "3"
      ]
  },
  {
      "name": "Productive Hours",
      "display":true,
      "rowSpan": 1,
      "colSpan": 3,
      "subColumns": [
          "Date of payment",
          "1",
          "2"
      ]
  },
  {
      "name": "Focus Hours",
      "display":true,
      "rowSpan": 1,
      "colSpan": 5,
      "subColumns": [
          "Date of payment",
          "1",
          "2",
          "3",
          "4"
      ]
  },
  {
      "name": "Group",
      "display":true,
      "rowSpan": 1,
      "colSpan": 8,
      "subColumns": [
          "Date of payment",
          "1",
          "2",
          "3",
          "4",
          "5",
          "Noise AVG",
          "High"
      ]
  }
]

const row2 = [
  {
    "name": 'Total Amount Received',
    "display":true,
    "rowSpan": 2,
    "colSpan": 1,
    "parentColumn": 'Subscription Plan Points Purchased'
  },
  {
    "name": 'Subscription Plan Bought',
    "display":true,
    "rowSpan": 2,
    "colSpan": 1,
    "parentColumn": 'Subscription Plan Points Purchased'
  },
  {
    "name": 'Buying of Points',
    "display":true,
    "rowSpan": 2,
    "colSpan": 1,
    "parentColumn": 'Subscription Plan Points Purchased'
  },
  {
    "name": 'No. of Referrals Done',
    "display":true,
    "rowSpan": 2,
    "colSpan": 1,
    "parentColumn": 'Referral Code'
  },
  {
    "name": 'List of People Downloaded',
    "display":true,
    "rowSpan": 2,
    "colSpan": 1,
    "parentColumn": 'Referral Code'
  },
  {
    "name": 'Enrolled Through Which Code',
    "display":true,
    "rowSpan": 2,
    "colSpan": 1,
    "parentColumn": 'Referral Code'
  },
  {
    "name": 'Morning',
    "display":true,
    "rowSpan": 2,
    "colSpan": 1,
    "parentColumn": 'Time of App Used'
  },
  {
    "name": 'Afternoon',
    "display":true,
    "rowSpan": 2,
    "colSpan": 1,
    "parentColumn": 'Time of App Used'
  },
  {
    "name": 'Evening',
    "display":true,
    "rowSpan": 2,
    "colSpan": 1,
    "parentColumn": 'Time of App Used'
  },
  {
    "name": 'Night',
    "display":true,
    "rowSpan": 2,
    "colSpan": 1,
    "parentColumn": 'Time of App Used'
  },
  {
    "name": 'Collected',
    "display":true,
    "rowSpan": 1,
    "colSpan": 12,
    subColumns: [
      'Paid',
      'Days',
      'Week',
      'Month',
      'Year',
      'UnPaid',
      'Entering into app',
      'Tik Tok',
      'Games',
      'Sleep',
      'Mindfulness',
      'Referral'
    ],
    "parentColumn": 'Total Points History'
  },
  {
    "name": 'Redeemed',
    "display":true,
    "rowSpan": 1,
    "colSpan": 10,
    subColumns: [
      'Splash',
      'Unlock Identity',
      'Increase your name in others list',
      'Streak',
      'ICY',
      'Games',
      'Day',
      'Week',
      'Month',
      'Year'
    ],
    "parentColumn": 'Total Points History'
  },
  {
    "name": 'How Many Streaks Completed',
    "display":true,
    "rowSpan": 2,
    "colSpan": 1,
    "parentColumn": 'Badges'
  },
  { "name": 'Week', "display":true,"rowSpan": 2, "colSpan": 1, "parentColumn": 'Badges' },
  
  { "name": 'Month',"display":true, "rowSpan": 2, "colSpan": 1, "parentColumn": 'Badges' },
  
  { "name": 'Year', "display":true,"rowSpan": 2, "colSpan": 1, "parentColumn": 'Badges' },
  
  {
    "name": 'Splash / Compliments',
    "display":true,
    "rowSpan": 1,
    "colSpan": 11,
    subColumns: [
      'Time of using splash',
      'Date',
      'Morning',
      'Afternoon',
      'Evening',
      'Night',
      'No. of time used',
      'Day',
      'Week',
      'Month',
      'Year'
    ],
    "parentColumn": 'History of Activities'
  },
  {
    "name": 'Live Games',
    "display":true,
    "rowSpan": 1,
    "colSpan": 11,
    subColumns: [
      'Time of game played',
      'Date',
      'Morning',
      'Afternoon',
      'Evening',
      'Night',
      'No. of times games played',
      'Day',
      'Week',
      'Month',
      'Year'
    ],
    "parentColumn": 'History of Activities'
  },
  {
    "name": 'Planned (TIMETABLE)',
    "display":true,
    "rowSpan": 1,
    "colSpan": 9,
    subColumns: [
      'Total time',  'Breaks',
      'NO. OF TIME', 'Completed',
      'Incompleted', 'Day',
      'Week',        'Month',
      'Year'
    ],
    "parentColumn": 'History of Activities'
  },
  {
    "name": 'Unplanned (TIC TOK)',
    "display":true,
    "rowSpan": 1,
    "colSpan": 9,
    subColumns: [
      'Total time',  'Breaks',
      'NO. OF TIME', 'Completed',
      'Incompleted', 'Day',
      'Week',        'Month',
      'Year'
    ],
    "parentColumn": 'History of Activities'
  },
  {
    "name": 'Streak',
    "display":true,
    "rowSpan": 1,
    "colSpan": 10,
    subColumns: [
      'Completed',
      'Points Collected',
      'Game',
      'Sleep',
      'Mindfulness',
      'ICY used',
      'Sleep',
      'Points Used',
      'Incompleted',
      'Points Lose'
    ],
    "parentColumn": 'History of Activities'
  },
  {
    "name": 'Mindfulness',
    "display":true,
    "rowSpan": 1,
    "colSpan": 11,
    subColumns: [
      'Time of mindfulness',
      'Date',
      'Morning',
      'Afternoon',
      'Evening',
      'Night',
      'No. of times mindfulness',
      'Day',
      'Week',
      'Month',
      'Year'
    ],
    "parentColumn": 'History of Activities'
  },
  {
    "name": 'Sleep',
    "display":true,
    "rowSpan": 1,
    "colSpan": 11,
    subColumns: [
      'Time of using sleep activity',
      'Date',
      'Morning',
      'Afternoon',
      'Evening',
      'Night',
      'No. of times',
      'Day',
      'Week',
      'Month',
      'Year'
    ],
    "parentColumn": 'History of Activities'
  },
  {
    "name": 'Free',
    "display":true,
    "rowSpan": 2,
    "colSpan": 1,
    "parentColumn": 'No. of Days of App Used'
  },
  {
    "name": 'Paid',
    "display":true,
    "rowSpan": 2,
    "colSpan": 1,
    "parentColumn": 'No. of Days of App Used'
  },
  { "name": 'Date',"display":true, "rowSpan": 2, "colSpan": 1, "parentColumn": 'Blocking' },
  
  { "name": 'Reason',"display":true, "rowSpan": 2, "colSpan": 1, "parentColumn": 'Blocking' },
  
  {
    "name": 'Name of Admin',
    "display":true,
    "rowSpan": 2,
    "colSpan": 1,
    "parentColumn": 'Blocking'
  },
  {
    "name": 'Tired',
    "display":true,
    "rowSpan": 1,
    "colSpan": 6,
    subColumns: [
      'No. of completed',
      'No. of times SKIPPED',
      'Morning',
      'Afternoon',
      'Evening',
      'Night'
    ],
    "parentColumn": 'Audios of the Mood'
  },
  {
    "name": 'Stressed',
    "display":true,
    "rowSpan": 1,
    "colSpan": 6,
    subColumns: [
      'No. of completed',
      'No. of times SKIPPED',
      'Morning',
      'Afternoon',
      'Evening',
      'Night'
    ],
    "parentColumn": 'Audios of the Mood'
  },
  {
    "name": 'Panicked',
    "display":true,
    "rowSpan": 1,
    "colSpan": 6,
    subColumns: [
      'No. of completed',
      'No. of times SKIPPED',
      'Morning',
      'Afternoon',
      'Evening',
      'Night'
    ],
    "parentColumn": 'Audios of the Mood'
  },
  {
    "name": 'Lazy',
    "display":true,
    "rowSpan": 1,
    "colSpan": 6,
    subColumns: [
      'No. of completed',
      'No. of times SKIPPED',
      'Morning',
      'Afternoon',
      'Evening',
      'Night'
    ],
    "parentColumn": 'Audios of the Mood'
  },
  {
    "name": 'Angry',
    "display":true,
    "rowSpan": 1,
    "colSpan": 6,
    subColumns: [
      'No. of completed',
      'No. of times SKIPPED',
      'Morning',
      'Afternoon',
      'Evening',
      'Night'
    ],
    "parentColumn": 'Audios of the Mood'
  },
  {
    "name": 'Motivation',
    "display":true,
    "rowSpan": 1,
    "colSpan": 5,
    subColumns: [ 'Total no. of days', 'Morning', 'Afternoon', 'Evening', 'Night' ],
    "parentColumn": 'Mood'
  },
  {
    "name": '10',
    "display":true,
    "rowSpan": 1,
    "colSpan": 5,
    subColumns: [ 'Total no. of days', 'Morning', 'Afternoon', 'Evening', 'Night' ],
    "parentColumn": 'Change in Mood'
  },
  {
    "name": '20',
    "display":true,
    "rowSpan": 1,
    "colSpan": 5,
    subColumns: [ 'Total no. of days', 'Morning', 'Afternoon', 'Evening', 'Night' ],
    "parentColumn": 'Change in Mood'
  },
  {
    "name": '30',
    "display":true,
    "rowSpan": 1,
    "colSpan": 5,
    subColumns: [ 'Total no. of days', 'Morning', 'Afternoon', 'Evening', 'Night' ],
    "parentColumn": 'Change in Mood'
  },
  {
    "name": '40',
    "display":true,
    "rowSpan": 1,
    "colSpan": 5,
    subColumns: [ 'Total no. of days', 'Morning', 'Afternoon', 'Evening', 'Night' ],
    "parentColumn": 'Change in Mood'
  },
  {
    "name": '50',
    "display":true,
    "rowSpan": 1,
    "colSpan": 5,
    subColumns: [ 'Total no. of days', 'Morning', 'Afternoon', 'Evening', 'Night' ],
    "parentColumn": 'Change in Mood'
  },
  {
    "name": '60',
    "display":true,
    "rowSpan": 1,
    "colSpan": 5,
    subColumns: [ 'Total no. of days', 'Morning', 'Afternoon', 'Evening', 'Night' ],
    "parentColumn": 'Change in Mood'
  },
  {
    "name": '70',
    "display":true,
    "rowSpan": 1,
    "colSpan": 5,
    subColumns: [ 'Total no. of days', 'Morning', 'Afternoon', 'Evening', 'Night' ],
    "parentColumn": 'Change in Mood'
  },
  {
    "name": '80',
    "display":true,
    "rowSpan": 1,
    "colSpan": 5,
    subColumns: [ 'Total no. of days', 'Morning', 'Afternoon', 'Evening', 'Night' ],
    "parentColumn": 'Change in Mood'
  },
  {
    "name": '90',
    "display":true,
    "rowSpan": 1,
    "colSpan": 5,
    subColumns: [ 'Total no. of days', 'Morning', 'Afternoon', 'Evening', 'Night' ],
    "parentColumn": 'Change in Mood'
  },
  {
    "name": '100',
    "display":true,
    "rowSpan": 1,
    "colSpan": 5,
    subColumns: [ 'Total no. of days', 'Morning', 'Afternoon', 'Evening', 'Night' ],
    "parentColumn": 'Change in Mood'
  },
  {
    "name": 'Redeem coins',
    "display":true,
    "rowSpan": 2,
    "colSpan": 1,
    "parentColumn": 'Buying Through Stores'
  },
  {
    "name": 'Date of redemtion',
    "display":true,
    "rowSpan": 2,
    "colSpan": 1,
    "parentColumn": 'Buying Through Stores'
  },
  {
    "name": 'Amount paid',
    "display":true,
    "rowSpan": 2,
    "colSpan": 1,
    "parentColumn": 'Buying Through Stores'
  },
  {
    "name": 'Date of payment',
    "display":true,
    "rowSpan": 2,
    "colSpan": 1,
    "parentColumn": 'Buying Through Stores'
  },
  { "name": '1',"display":true, "rowSpan": 2, "colSpan": 1, "parentColumn": 'Sounds' },
  
  { "name": '2',"display":true, "rowSpan": 2, "colSpan": 1, "parentColumn": 'Sounds' },
  
  { "name": '3',"display":true, "rowSpan": 2, "colSpan": 1, "parentColumn": 'Sounds' },
  
  { "name": '4',"display":true, "rowSpan": 2, "colSpan": 1, "parentColumn": 'Sounds' },
  
  { "name": '5',"display":true, "rowSpan": 2, "colSpan": 1, "parentColumn": 'Sounds' },
  
  {
    "name": 'Noise AVG',
    "display":true,
    "rowSpan": 2,
    "colSpan": 1,
    "parentColumn": 'Distraction Levels'
  },
  {
    "name": 'High',
    "display":true,
    "rowSpan": 2,
    "colSpan": 1,
    "parentColumn": 'Distraction Levels'
  },
  {
    "name": 'Medium',
    "display":true,
    "rowSpan": 2,
    "colSpan": 1,
    "parentColumn": 'Distraction Levels'
  },
  {
    "name": 'Low',
    "display":true,
    "rowSpan": 2,
    "colSpan": 1,
    "parentColumn": 'Distraction Levels'
  },
  {
    "name": 'Heart Rate Variation',
    "display":true,
    "rowSpan": 2,
    "colSpan": 1,
    "parentColumn": 'Stress Levels'
  },
  {
    "name": 'High',
    "display":true,
    "rowSpan": 2,
    "colSpan": 1,
    "parentColumn": 'Stress Levels'
  },
  {
    "name": 'Medium',
    "display":true,
    "rowSpan": 2,
    "colSpan": 1,
    "parentColumn": 'Stress Levels'
  },
  {
    "name": 'Low',
    "display":true,
    "rowSpan": 2,
    "colSpan": 1,
    "parentColumn": 'Stress Levels'
  },
  {
    "name": 'Mindfulness',
    "display":true,
    "rowSpan": 2,
    "colSpan": 1,
    "parentColumn": 'Productive Hours'
  },
  {
    "name": 'Sleep',
    "display":true,
    "rowSpan": 2,
    "colSpan": 1,
    "parentColumn": 'Productive Hours'
  },
  {
    "name": 'Tik Tock',
    "display":true,
    "rowSpan": 2,
    "colSpan": 1,
    "parentColumn": 'Productive Hours'
  },
  {
    "name": 'No. of Hours Planned Studies',
    "display":true,
    "rowSpan": 2,
    "colSpan": 1,
    "parentColumn": 'Focus Hours'
  },
  {
    "name": 'No. of Hours Unplanned Studies',
    "display":true,
    "rowSpan": 2,
    "colSpan": 1,
    "parentColumn": 'Focus Hours'
  },
  { "name": 'High',"display":true, "rowSpan": 2, "colSpan": 1, "parentColumn": 'Focus Hours' },
  
  {
    "name": 'Medium',
    "display":true,
    "rowSpan": 2,
    "colSpan": 1,
    "parentColumn": 'Focus Hours'
  },
  { "name": 'Low',"display":true, "rowSpan": 2, "colSpan": 1, "parentColumn": 'Focus Hours' },

  {
    "name": 'Already Created',
    "display":true,
    "rowSpan": 1,
    "colSpan": 2,
    subColumns: [ 'No. of participants', 'Names' ],
    "parentColumn": 'Group'
  },
  {
    "name": 'User Created',
    "display":true,
    "rowSpan": 1,
    "colSpan": 6,
    subColumns: [
      'Temporary',
      'Admin details',
      'No. of participants and names',
      'Permanent groups',
      'Admin details',
      'No. of participants and names'
    ],
    "parentColumn": 'Group'
  }
]

const row3 = [
    {
    "name": "Paid",
    "display":true,
    "colSpan":1,
    "parentColumn": "Collected"
    },
    {
    "name": "Day",
    "display":true,
    "colSpan":1,
    "parentColumn": "Collected"
    },
    {
    "name": "Week",
    "display":true,
    "colSpan":1,
    "parentColumn": "Collected"
    },
    {
    "name": "Month",
    "display":true,
    "colSpan":1,
    "parentColumn": "Collected"
    },
    {
    "name": "Year",
    "display":true,
    "colSpan":1,
    "parentColumn": "Collected"
    },
    {
    "name": "UnPaid",
    "display":true,
    "colSpan":1,
    "parentColumn": "Collected"
    },
    {
    "name": "Entering into app",
    "display":true,
    "colSpan":1,
    "parentColumn": "Collected"
    },
    {
    "name": "Tik Tok",
    "display":true,
    "colSpan":1,
    "parentColumn": "Collected"
    },
    {
    "name": "Games",
    "display":true,
    "colSpan":1,
    "parentColumn": "Collected"
    },
    {
    "name": "Sleep",
    "display":true,
    "colSpan":1,
    "parentColumn": "Collected"
    },
    {
    "name": "Mindfulness",
    "display":true,
    "colSpan":1,
    "parentColumn": "Collected"
    },
    {
    "name": "Referral",
    "display":true,
    "colSpan":1,
    "parentColumn": "Collected"
    },
    {
    "name": "Splash",
    "display":true,
    "colSpan":1,
    "parentColumn": "Redeemed"
    },
    {
    "name": "Unlock Identity",
    "display":true,
    "colSpan":1,
    "parentColumn": "Redeemed"
    },
    {
    "name": "Increase your name in others list",
    "display":true,
    "colSpan":1,
    "parentColumn": "Redeemed"
    },
    {
    "name": "Streak",
    "display":true,
    "colSpan":1,
    "parentColumn": "Redeemed"
    },
    {
    "name": "ICY",
    "display":true,
    "colSpan":1,
    "parentColumn": "Redeemed"
    },
    {
    "name": "Games",
    "display":true,
    "colSpan":1,
    "parentColumn": "Redeemed"
    },
    {
    "name": "Day",
    "display":true,
    "colSpan":1,
    "parentColumn": "Redeemed"
    },
    {
    "name": "Week",
    "display":true,
    "colSpan":1,
    "parentColumn": "Redeemed"
    },
    {
    "name": "Month",
    "display":true,
    "colSpan":1,
    "parentColumn": "Redeemed"
    },
    {
    "name": "Year",
    "display":true,
    "colSpan":1,
    "parentColumn": "Redeemed"
    },
    {
    "name": "Time of using splash",
    "display":true,
    "colSpan":1,
    "parentColumn": "Splash / Compliments"
    },
    {
    "name": "Date",
    "display":true,
    "colSpan":1,
    "parentColumn": "Splash / Compliments"
    },
    {
    "name": "Morning",
    "display":true,
    "colSpan":1,
    "parentColumn": "Splash / Compliments"
    },
    {
    "name": "Afternoon",
    "display":true,
    "colSpan":1,
    "parentColumn": "Splash / Compliments"
    },
    {
    "name": "Evening",
    "display":true,
    "colSpan":1,
    "parentColumn": "Splash / Compliments"
    },
    {
    "name": "Night",
    "display":true,
    "colSpan":1,
    "parentColumn": "Splash / Compliments"
    },
    {
    "name": "No. of time used",
    "display":true,
    "colSpan":1,
    "parentColumn": "Splash / Compliments"
    },
    {
    "name": "Day",
    "display":true,
    "colSpan":1,
    "parentColumn": "Splash / Compliments"
    },
    {
    "name": "Month",
    "display":true,
    "colSpan":1,
    "parentColumn": "Splash / Compliments"
    },
    {
    "name": "Week",
    "display":true,
    "colSpan":1,
    "parentColumn": "Splash / Compliments"
    },
    {
    "name": "Year",
    "display":true,
    "colSpan":1,
    "parentColumn": "Splash / Compliments"
    },
    {
    "name": "Time of game played",
    "display":true,
    "colSpan":1,
    "parentColumn": "Live Games"
    },
    {
    "name": "Date",
    "display":true,
    "colSpan":1,
    "parentColumn": "Live Games"
    },
    {
    "name": "Morning",
    "display":true,
    "colSpan":1,
    "parentColumn": "Live Games"
    },
    {
    "name": "Afternoon",
    "display":true,
    "colSpan":1,
    "parentColumn": "Live Games"
    },
    {
    "name": "Evening",
    "display":true,
    "colSpan":1,
    "parentColumn": "Live Games"
    },
    {
    "name": "Night",
    "display":true,
    "colSpan":1,
    "parentColumn": "Live Games"
    },
    {
    "name": "No. of times games played",
    "display":true,
    "colSpan":1,
    "parentColumn": "Live Games"
    },
    {
    "name": "Day",
    "display":true,
    "colSpan":1,
    "parentColumn": "Live Games"
    },
    {
    "name": "Week",
    "display":true,
    "colSpan":1,
    "parentColumn": "Live Games"
    },
    {
    "name": "Month",
    "display":true,
    "colSpan":1,
    "parentColumn": "Live Games"
    },
    {
    "name": "Year",
    "display":true,
    "colSpan":1,
    "parentColumn": "Live Games"
    },
    {
    "name": "Total time",
    "display":true,
    "colSpan":1,
    "parentColumn": "Planned (TIMETABLE)"
    },
    {
    "name": "Breaks",
    "display":true,
    "colSpan":1,
    "parentColumn": "Planned (TIMETABLE)"
    },
    {
    "name": "no.of times used",
    "display":true,
    "colSpan":1,
    "parentColumn": "Planned (TIMETABLE)"
    },
    {
    "name": "Completed",
    "display":true,
    "colSpan":1,
    "parentColumn": "Planned (TIMETABLE)"
    },
    {
    "name": "Incompleted",
    "display":true,
    "colSpan":1,
    "parentColumn": "Planned (TIMETABLE)"
    },
    {
    "name": "Day",
    "display":true,
    "colSpan":1,
    "parentColumn": "Planned (TIMETABLE)"
    },
    {
    "name": "Week",
    "display":true,
    "colSpan":1,
    "parentColumn": "Planned (TIMETABLE)"
    },
    {
    "name": "Month",
    "display":true,
    "colSpan":1,
    "parentColumn": "Planned (TIMETABLE)"
    },
    {
    "name": "Year",
    "display":true,
    "colSpan":1,
    "parentColumn": "Planned (TIMETABLE)"
    },
    {
    "name": "Total time",
    "display":true,
    "colSpan":1,
    "parentColumn": "Unplanned (TIC TOK)"
    },
    {
    "name": "Breaks",
    "display":true,
    "colSpan":1,
    "parentColumn": "Unplanned (TIC TOK)"
    },
    {
    "name": "no.of times used",
    "display":true,
    "colSpan":1,
    "parentColumn": "Unplanned (TIC TOK)"
    },
    {
    "name": "Completed",
    "display":true,
    "colSpan":1,
    "parentColumn": "Unplanned (TIC TOK)"
    },
    {
    "name": "Incompleted",
    "display":true,
    "colSpan":1,
    "parentColumn": "Unplanned (TIC TOK)"
    },
    {
    "name": "Day",
    "display":true,
    "colSpan":1,
    "parentColumn": "Unplanned (TIC TOK)"
    },
    {
    "name": "Week",
    "display":true,
    "colSpan":1,
    "parentColumn": "Unplanned (TIC TOK)"
    },
    {
    "name": "Month",
    "display":true,
    "colSpan":1,
    "parentColumn": "Unplanned (TIC TOK)"
    },
    {
    "name": "Year",
    "display":true,
    "colSpan":1,
    "parentColumn": "Unplanned (TIC TOK)"
    },
    {
    "name": "Completed",
    "display":true,
    "colSpan":1,
    "parentColumn": "Streak"
    },
    {
    "name": "Points Collected",
    "display":true,
    "colSpan":1,
    "parentColumn": "Streak"
    },
    {
    "name": "tic tock",
    "display":true,
    "colSpan":1,
    "parentColumn": "Streak"
    },
    {
    "name": "Game",
    "display":true,
    "colSpan":1,
    "parentColumn": "Streak"
    },
    {
    "name": "Sleep",
    "display":true,
    "colSpan":1,
    "parentColumn": "Streak"
    },
    {
    "name": "Mindfulness",
    "display":true,
    "colSpan":1,
    "parentColumn": "Streak"
    },
    {
    "name": "ICY used",
    "display":true,
    "colSpan":1,
    "parentColumn": "Streak"
    },
    {
    "name": "Points Used",
    "display":true,
    "colSpan":1,
    "parentColumn": "Streak"
    },
    {
    "name": "Incompleted",
    "display":true,
    "colSpan":1,
    "parentColumn": "Streak"
    },
    {
    "name": "Points Lose",
    "display":true,
    "colSpan":1,
    "parentColumn": "Streak"
    },
    {
    "name": "Time of mindfulness",
    "display":true,
    "colSpan":1,
    "parentColumn": "Mindfulness"
    },
    {
    "name": "Date",
    "display":true,
    "colSpan":1,
    "parentColumn": "Mindfulness"
    },
    {
    "name": "Morning",
    "display":true,
    "colSpan":1,
    "parentColumn": "Mindfulness"
    },
    {
    "name": "Afternoon",
    "display":true,
    "colSpan":1,
    "parentColumn": "Mindfulness"
    },
    {
    "name": "Evening",
    "display":true,
    "colSpan":1,
    "parentColumn": "Mindfulness"
    },
    {
    "name": "Night",
    "display":true,
    "colSpan":1,
    "parentColumn": "Mindfulness"
    },
    {
    "name": "No. of times mindfulness",
    "display":true,
    "colSpan":1,
    "parentColumn": "Mindfulness"
    },
    {
    "name": "Day",
    "display":true,
    "colSpan":1,
    "parentColumn": "Mindfulness"
    },
    {
    "name": "Week",
    "display":true,
    "colSpan":1,
    "parentColumn": "Mindfulness"
    },
    {
    "name": "Month",
    "display":true,
    "colSpan":1,
    "parentColumn": "Mindfulness"
    },
    {
    "name": "Year",
    "display":true,
    "colSpan":1,
    "parentColumn": "Mindfulness"
    },
    {
    "name": "Time of using sleep activity",
    "display":true,
    "colSpan":1,
    "parentColumn": "Sleep"
    },
    {
    "name": "Date",
    "display":true,
    "colSpan":1,
    "parentColumn": "Sleep"
    },
    {
    "name": "Morning",
    "display":true,
    "colSpan":1,
    "parentColumn": "Sleep"
    },
    {
    "name": "Afternoon",
    "display":true,
    "colSpan":1,
    "parentColumn": "Sleep"
    },
    {
    "name": "Evening",
    "display":true,
    "colSpan":1,
    "parentColumn": "Sleep"
    },
    {
    "name": "Night",
    "display":true,
    "colSpan":1,
    "parentColumn": "Sleep"
    },
    {
    "name": "No. of times",
    "display":true,
    "colSpan":1,
    "parentColumn": "Sleep"
    },
    {
    "name": "Day",
    "display":true,
    "colSpan":1,
    "parentColumn": "Sleep"
    },
    {
    "name": "Week",
    "display":true,
    "colSpan":1,
    "parentColumn": "Sleep"
    },
    {
    "name": "Month",
    "display":true,
    "colSpan":1,
    "parentColumn": "Sleep"
    },
    {
    "name": "Year",
    "display":true,
    "colSpan":1,
    "parentColumn": "Sleep"
    },
    {
    "name": "No. of completed",
    "display":true,
    "colSpan":1,
    "parentColumn": "Tired"
    },
    {
    "name": "No. of times skipped",
    "display":true,
    "colSpan":1,
    "parentColumn": "Tired"
    },
    {
    "name": "Morning",
    "display":true,
    "colSpan":1,
    "parentColumn": "Tired"
    },
    {
    "name": "Afternoon",
    "display":true,
    "colSpan":1,
    "parentColumn": "Tired"
    },
    {
    "name": "Evening",
    "display":true,
    "colSpan":1,
    "parentColumn": "Tired"
    },
    {
    "name": "Night",
    "display":true,
    "colSpan":1,
    "parentColumn": "Tired"
    },
    {
    "name": "No. of completed",
    "display":true,
    "colSpan":1,
    "parentColumn": "Stressed"
    },
    {
    "name": "No. of times skipped",
    "display":true,
    "colSpan":1,
    "parentColumn": "Stressed"
    },
    {
    "name": "Morning",
    "display":true,
    "colSpan":1,
    "parentColumn": "Stressed"
    },
    {
    "name": "Afternoon",
    "display":true,
    "colSpan":1,
    "parentColumn": "Stressed"
    },
    {
    "name": "Evening",
    "display":true,
    "colSpan":1,
    "parentColumn": "Stressed"
    },
    {
    "name": "Night",
    "display":true,
    "colSpan":1,
    "parentColumn": "Stressed"
    },
    {
    "name": "No. of completed",
    "display":true,
    "colSpan":1,
    "parentColumn": "Panicked"
    },
    {
    "name": "No. of times skipped",
    "display":true,
    "colSpan":1,
    "parentColumn": "Panicked"
    },
    {
    "name": "Morning",
    "display":true,
    "colSpan":1,
    "parentColumn": "Panicked"
    },
    {
    "name": "Afternoon",
    "display":true,
    "colSpan":1,
    "parentColumn": "Panicked"
    },
    {
    "name": "Evening",
    "display":true,
    "colSpan":1,
    "parentColumn": "Panicked"
    },
    {
    "name": "Night",
    "display":true,
    "colSpan":1,
    "parentColumn": "Panicked"
    },
    {
    "name": "No. of completed",
    "display":true,
    "colSpan":1,
    "parentColumn": "Lazy"
    },
    {
    "name": "No. of times skipped",
    "display":true,
    "colSpan":1,
    "parentColumn": "Lazy"
    },
    {
    "name": "Morning",
    "display":true,
    "colSpan":1,
    "parentColumn": "Lazy"
    },
    {
    "name": "Afternoon",
    "display":true,
    "colSpan":1,
    "parentColumn": "Lazy"
    },
    {
    "name": "Evening",
    "display":true,
    "colSpan":1,
    "parentColumn": "Lazy"
    },
    {
    "name": "Night",
    "display":true,
    "colSpan":1,
    "parentColumn": "Lazy"
    },
    {
    "name": "No. of completed",
    "display":true,
    "colSpan":1,
    "parentColumn": "Angry"
    },
    {
    "name": "No. of times skipped",
    "display":true,
    "colSpan":1,
    "parentColumn": "Angry"
    },
    {
    "name": "Morning",
    "display":true,
    "colSpan":1,
    "parentColumn": "Angry"
    },
    {
    "name": "Afternoon",
    "display":true,
    "colSpan":1,
    "parentColumn": "Angry"
    },
    {
    "name": "Evening",
    "display":true,
    "colSpan":1,
    "parentColumn": "Angry"
    },
    {
    "name": "Night",
    "display":true,
    "colSpan":1,
    "parentColumn": "Angry"
    },
    {
    "name": "Total no. of days",
    "display":true,
    "colSpan":1,
    "parentColumn": "Motivation"
    },
    {
    "name": "Morning",
    "display":true,
    "colSpan":1,
    "parentColumn": "Motivation"
    },
    {
    "name": "Afternoon",
    "display":true,
    "colSpan":1,
    "parentColumn": "Motivation"
    },
    {
    "name": "Evening",
    "display":true,
    "colSpan":1,
    "parentColumn": "Motivation"
    },
    {
    "name": "Night",
    "display":true,
    "colSpan":1,
    "parentColumn": "Motivation"
    },
    {
    "name": "Total no. of days",
    "display":true,
    "colSpan":1,
    "parentColumn": "10"
    },
    {
    "name": "Morning",
    "display":true,
    "colSpan":1,
    "parentColumn": "10"
    },
    {
    "name": "Afternoon",
    "display":true,
    "colSpan":1,
    "parentColumn": "10"
    },
    {
    "name": "Evening",
    "display":true,
    "colSpan":1,
    "parentColumn": "10"
    },
    {
    "name": "Night",
    "display":true,
    "colSpan":1,
    "parentColumn": "10"
    },
    {
    "name": "Total no. of days",
    "display":true,
    "colSpan":1,
    "parentColumn": "20"
    },
    {
    "name": "Morning",
    "display":true,
    "colSpan":1,
    "parentColumn": "20"
    },
    {
    "name": "Afternoon",
    "display":true,
    "colSpan":1,
    "parentColumn": "20"
    },
    {
    "name": "Evening",
    "display":true,
    "colSpan":1,
    "parentColumn": "20"
    },
    {
    "name": "Night",
    "display":true,
    "colSpan":1,
    "parentColumn": "20"
    },
    {
    "name": "Total no. of days",
    "display":true,
    "colSpan":1,
    "parentColumn": "30"
    },
    {
    "name": "Morning",
    "display":true,
    "colSpan":1,
    "parentColumn": "30"
    },
    {
    "name": "Afternoon",
    "display":true,
    "colSpan":1,
    "parentColumn": "30"
    },
    {
    "name": "Evening",
    "display":true,
    "colSpan":1,
    "parentColumn": "30"
    },
    {
    "name": "Night",
    "display":true,
    "colSpan":1,
    "parentColumn": "30"
    },
    {
    "name": "Total no. of days",
    "display":true,
    "colSpan":1,
    "parentColumn": "40"
    },
    {
    "name": "Morning",
    "display":true,
    "colSpan":1,
    "parentColumn": "40"
    },
    {
    "name": "Afternoon",
    "display":true,
    "colSpan":1,
    "parentColumn": "40"
    },
    {
    "name": "Evening",
    "display":true,
    "colSpan":1,
    "parentColumn": "40"
    },
    {
    "name": "Night",
    "display":true,
    "colSpan":1,
    "parentColumn": "40"
    },
    {
    "name": "Total no. of days",
    "display":true,
    "colSpan":1,
    "parentColumn": "50"
    },
    {
    "name": "Morning",
    "display":true,
    "colSpan":1,
    "parentColumn": "50"
    },
    {
    "name": "Afternoon",
    "display":true,
    "colSpan":1,
    "parentColumn": "50"
    },
    {
    "name": "Evening",
    "display":true,
    "colSpan":1,
    "parentColumn": "50"
    },
    {
    "name": "Night",
    "display":true,
    "colSpan":1,
    "parentColumn": "50"
    },
    {
    "name": "Total no. of days",
    "display":true,
    "colSpan":1,
    "parentColumn": "60"
    },
    {
    "name": "Morning",
    "display":true,
    "colSpan":1,
    "parentColumn": "60"
    },
    {
    "name": "Afternoon",
    "display":true,
    "colSpan":1,
    "parentColumn": "60"
    },
    {
    "name": "Evening",
    "display":true,
    "colSpan":1,
    "parentColumn": "60"
    },
    {
    "name": "Night",
    "display":true,
    "colSpan":1,
    "parentColumn": "60"
    },
    {
    "name": "Total no. of days",
    "display":true,
    "colSpan":1,
    "parentColumn": "70"
    },
    {
    "name": "Morning",
    "display":true,
    "colSpan":1,
    "parentColumn": "70"
    },
    {
    "name": "Afternoon",
    "display":true,
    "colSpan":1,
    "parentColumn": "70"
    },
    {
    "name": "Evening",
    "display":true,
    "colSpan":1,
    "parentColumn": "70"
    },
    {
    "name": "Night",
    "display":true,
    "colSpan":1,
    "parentColumn": "70"
    },
    {
    "name": "Total no. of days",
    "display":true,
    "colSpan":1,
    "parentColumn": "80"
    },
    {
    "name": "Morning",
    "display":true,
    "colSpan":1,
    "parentColumn": "80"
    },
    {
    "name": "Afternoon",
    "display":true,
    "colSpan":1,
    "parentColumn": "80"
    },
    {
    "name": "Evening",
    "display":true,
    "colSpan":1,
    "parentColumn": "80"
    },
    {
    "name": "Night",
    "display":true,
    "colSpan":1,
    "parentColumn": "80"
    },
    {
    "name": "Total no. of days",
    "display":true,
    "colSpan":1,
    "parentColumn": "90"
    },
    {
    "name": "Morning",
    "display":true,
    "colSpan":1,
    "parentColumn": "90"
    },
    {
    "name": "Afternoon",
    "display":true,
    "colSpan":1,
    "parentColumn": "90"
    },
    {
    "name": "Evening",
    "display":true,
    "colSpan":1,
    "parentColumn": "90"
    },
    {
    "name": "Night",
    "display":true,
    "colSpan":1,
    "parentColumn": "90"
    },
    {
    "name": "Total no. of days",
    "display":true,
    "colSpan":1,
    "parentColumn": "100"
    },
    {
    "name": "Morning",
    "display":true,
    "colSpan":1,
    "parentColumn": "100"
    },
    {
    "name": "Afternoon",
    "display":true,
    "colSpan":1,
    "parentColumn": "100"
    },
    {
    "name": "Evening",
    "display":true,
    "colSpan":1,
    "parentColumn": "100"
    },
    {
    "name": "Night",
    "display":true,
    "colSpan":1,
    "parentColumn": "100"
    },
    {
    "name": "No. of participants",
    "display":true,
    "colSpan":1,
    "parentColumn": "Already Created"
    },
    {
    "name": "Names",
    "display":true,
    "colSpan":1,
    "parentColumn": "Already Created"
    },
    {
    "name": "Temporary",
    "display":true,
    "colSpan":1,
    "parentColumn": "User Created"
    },
    {
    "name": "Admin details",
    "display":true,
    "colSpan":1,
    "parentColumn": "User Created"
    },
    {
    "name": "No. of participants and names",
    "display":true,
    "colSpan":1,
    "parentColumn": "User Created"
    },
    {
    "name": "Permanent groups",
    "display":true,
    "colSpan":1,
    "parentColumn": "User Created"
    },
    {
    "name": "Admin details",
    "display":true,
    "colSpan":1,
    "parentColumn": "User Created"
    },
    {
    "name": "No. of participants and names",
    "display":true,
    "colSpan":1,
    "parentColumn": "User Created"
    }
    ]

    const options = {
        "Active user list": {
            "third_row": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 0
                },
                {
                    "name": "afternoon",
                    "is_empty": 0
                },
                {
                    "name": "evening ",
                    "is_empty": 0
                },
                {
                    "name": "night",
                    "is_empty": 0
                },
                {
                    "name": "collected",
                    "is_empty": 0
                },
                {
                    "name": "redeemed",
                    "is_empty": 0
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 1
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 1
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 1
                },
                {
                    "name": "streak",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 0
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "Inactive user list": {
            "third_row": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 1
                },
                {
                    "name": "buying of points",
                    "is_empty": 1
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 1
                },
                {
                    "name": "afternoon",
                    "is_empty": 1
                },
                {
                    "name": "evening ",
                    "is_empty": 1
                },
                {
                    "name": "night",
                    "is_empty": 1
                },
                {
                    "name": "collected",
                    "is_empty": 0
                },
                {
                    "name": "redeemed",
                    "is_empty": 0
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 0
                },
                {
                    "name": "live games",
                    "is_empty": 0
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 1
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 0
                },
                {
                    "name": "streak",
                    "is_empty": 0
                },
                {
                    "name": "mindfulness",
                    "is_empty": 0
                },
                {
                    "name": "sleep",
                    "is_empty": 0
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 0
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "Register user list": {
            "third_row": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 1
                },
                {
                    "name": "buying of points",
                    "is_empty": 1
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 1
                },
                {
                    "name": "afternoon",
                    "is_empty": 1
                },
                {
                    "name": "evening ",
                    "is_empty": 1
                },
                {
                    "name": "night",
                    "is_empty": 1
                },
                {
                    "name": "collected",
                    "is_empty": 0
                },
                {
                    "name": "redeemed",
                    "is_empty": 0
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 1
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 1
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 1
                },
                {
                    "name": "streak",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "Paid user list": {
            "third_row": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 1
                },
                {
                    "name": "buying of points",
                    "is_empty": 1
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 1
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 1
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 1
                },
                {
                    "name": "morning",
                    "is_empty": 1
                },
                {
                    "name": "afternoon",
                    "is_empty": 1
                },
                {
                    "name": "evening ",
                    "is_empty": 1
                },
                {
                    "name": "night",
                    "is_empty": 1
                },
                {
                    "name": "collected",
                    "is_empty": 0
                },
                {
                    "name": "redeemed",
                    "is_empty": 0
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 1
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 1
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 1
                },
                {
                    "name": "streak",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "free",
                    "is_empty": 0
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 0
                }
            ]
        },
        "Blocked user list": {
            "third_row": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 1
                },
                {
                    "name": "afternoon",
                    "is_empty": 1
                },
                {
                    "name": "evening ",
                    "is_empty": 1
                },
                {
                    "name": "night",
                    "is_empty": 1
                },
                {
                    "name": "collected",
                    "is_empty": 0
                },
                {
                    "name": "redeemed",
                    "is_empty": 0
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 0
                },
                {
                    "name": "live games",
                    "is_empty": 0
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 1
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 0
                },
                {
                    "name": "streak",
                    "is_empty": 0
                },
                {
                    "name": "mindfulness",
                    "is_empty": 0
                },
                {
                    "name": "sleep",
                    "is_empty": 0
                },
                {
                    "name": "free",
                    "is_empty": 0
                },
                {
                    "name": "paid",
                    "is_empty": 0
                },
                {
                    "name": "date",
                    "is_empty": 0
                },
                {
                    "name": "reason",
                    "is_empty": 0
                },
                {
                    "name": "name of admin",
                    "is_empty": 0
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "Compliments user list": {
            "third_row": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 1
                },
                {
                    "name": "afternoon",
                    "is_empty": 1
                },
                {
                    "name": "evening ",
                    "is_empty": 1
                },
                {
                    "name": "night",
                    "is_empty": 1
                },
                {
                    "name": "collected",
                    "is_empty": 0
                },
                {
                    "name": "redeemed",
                    "is_empty": 0
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 1
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 1
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 1
                },
                {
                    "name": "streak",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "free",
                    "is_empty": 0
                },
                {
                    "name": "paid",
                    "is_empty": 0
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "Live Games list": {
            "third_row": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 1
                },
                {
                    "name": "afternoon",
                    "is_empty": 1
                },
                {
                    "name": "evening ",
                    "is_empty": 1
                },
                {
                    "name": "night",
                    "is_empty": 1
                },
                {
                    "name": "collected",
                    "is_empty": 0
                },
                {
                    "name": "redeemed",
                    "is_empty": 0
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 0
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 1
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 1
                },
                {
                    "name": "streak",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "Direct tik tock list": {
            "third_row": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 1
                },
                {
                    "name": "afternoon",
                    "is_empty": 1
                },
                {
                    "name": "evening ",
                    "is_empty": 1
                },
                {
                    "name": "night",
                    "is_empty": 1
                },
                {
                    "name": "collected",
                    "is_empty": 0
                },
                {
                    "name": "redeemed",
                    "is_empty": 0
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 1
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 1
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 0
                },
                {
                    "name": "streak",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "Schedule tik tock list": {
            "third_row": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 1
                },
                {
                    "name": "afternoon",
                    "is_empty": 1
                },
                {
                    "name": "evening ",
                    "is_empty": 1
                },
                {
                    "name": "night",
                    "is_empty": 1
                },
                {
                    "name": "collected",
                    "is_empty": 0
                },
                {
                    "name": "redeemed",
                    "is_empty": 0
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 1
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 0
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 1
                },
                {
                    "name": "streak",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "Study pattern user list": {
            "third_row": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 1
                },
                {
                    "name": "afternoon",
                    "is_empty": 1
                },
                {
                    "name": "evening ",
                    "is_empty": 1
                },
                {
                    "name": "night",
                    "is_empty": 1
                },
                {
                    "name": "collected",
                    "is_empty": 0
                },
                {
                    "name": "redeemed",
                    "is_empty": 0
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 1
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 0
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 0
                },
                {
                    "name": "streak",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "Institute wise user list": {
            "third_row": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 1
                },
                {
                    "name": "afternoon",
                    "is_empty": 1
                },
                {
                    "name": "evening ",
                    "is_empty": 1
                },
                {
                    "name": "night",
                    "is_empty": 1
                },
                {
                    "name": "collected",
                    "is_empty": 0
                },
                {
                    "name": "redeemed",
                    "is_empty": 0
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 1
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 1
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 1
                },
                {
                    "name": "streak",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "State user list": {
            "third_row": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 1
                },
                {
                    "name": "afternoon",
                    "is_empty": 1
                },
                {
                    "name": "evening ",
                    "is_empty": 1
                },
                {
                    "name": "night",
                    "is_empty": 1
                },
                {
                    "name": "collected",
                    "is_empty": 0
                },
                {
                    "name": "redeemed",
                    "is_empty": 0
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 1
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 1
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 1
                },
                {
                    "name": "streak",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "City user list": {
            "third_row": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 1
                },
                {
                    "name": "afternoon",
                    "is_empty": 1
                },
                {
                    "name": "evening ",
                    "is_empty": 1
                },
                {
                    "name": "night",
                    "is_empty": 1
                },
                {
                    "name": "collected",
                    "is_empty": 0
                },
                {
                    "name": "redeemed",
                    "is_empty": 0
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 1
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 1
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 1
                },
                {
                    "name": "streak",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "Time slot user list": {
            "third_row": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 0
                },
                {
                    "name": "afternoon",
                    "is_empty": 0
                },
                {
                    "name": "evening ",
                    "is_empty": 0
                },
                {
                    "name": "night",
                    "is_empty": 0
                },
                {
                    "name": "collected",
                    "is_empty": 0
                },
                {
                    "name": "redeemed",
                    "is_empty": 0
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 0
                },
                {
                    "name": "live games",
                    "is_empty": 0
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 0
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 0
                },
                {
                    "name": "streak",
                    "is_empty": 0
                },
                {
                    "name": "mindfulness",
                    "is_empty": 0
                },
                {
                    "name": "sleep",
                    "is_empty": 0
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 0
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "Sleep activity user list": {
            "third_row": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 1
                },
                {
                    "name": "afternoon",
                    "is_empty": 1
                },
                {
                    "name": "evening ",
                    "is_empty": 1
                },
                {
                    "name": "night",
                    "is_empty": 1
                },
                {
                    "name": "collected",
                    "is_empty": 0
                },
                {
                    "name": "redeemed",
                    "is_empty": 0
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 1
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 1
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 1
                },
                {
                    "name": "streak",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 0
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "Mindfulness activity user list": {
            "third_row": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 1
                },
                {
                    "name": "afternoon",
                    "is_empty": 1
                },
                {
                    "name": "evening ",
                    "is_empty": 1
                },
                {
                    "name": "night",
                    "is_empty": 1
                },
                {
                    "name": "collected",
                    "is_empty": 0
                },
                {
                    "name": "redeemed",
                    "is_empty": 0
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 1
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 1
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 1
                },
                {
                    "name": "streak",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 0
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "Mood wise audio user list": {
            "third_row": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 1
                },
                {
                    "name": "afternoon",
                    "is_empty": 1
                },
                {
                    "name": "evening ",
                    "is_empty": 1
                },
                {
                    "name": "night",
                    "is_empty": 1
                },
                {
                    "name": "collected",
                    "is_empty": 0
                },
                {
                    "name": "redeemed",
                    "is_empty": 0
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 1
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 1
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 1
                },
                {
                    "name": "streak",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 0
                },
                {
                    "name": "stressed",
                    "is_empty": 0
                },
                {
                    "name": "panicked",
                    "is_empty": 0
                },
                {
                    "name": "lazy",
                    "is_empty": 0
                },
                {
                    "name": "angry",
                    "is_empty": 0
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "Mood selected list": {
            "third_row": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 1
                },
                {
                    "name": "afternoon",
                    "is_empty": 1
                },
                {
                    "name": "evening ",
                    "is_empty": 1
                },
                {
                    "name": "night",
                    "is_empty": 1
                },
                {
                    "name": "collected",
                    "is_empty": 0
                },
                {
                    "name": "redeemed",
                    "is_empty": 0
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 1
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 1
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 1
                },
                {
                    "name": "streak",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 0
                },
                {
                    "name": "stressed",
                    "is_empty": 0
                },
                {
                    "name": "panicked",
                    "is_empty": 0
                },
                {
                    "name": "lazy",
                    "is_empty": 0
                },
                {
                    "name": "angry",
                    "is_empty": 0
                },
                {
                    "name": "motivation",
                    "is_empty": 0
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "Change in mood user list": {
            "third_row": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 1
                },
                {
                    "name": "afternoon",
                    "is_empty": 1
                },
                {
                    "name": "evening ",
                    "is_empty": 1
                },
                {
                    "name": "night",
                    "is_empty": 1
                },
                {
                    "name": "collected",
                    "is_empty": 0
                },
                {
                    "name": "redeemed",
                    "is_empty": 0
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 1
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 1
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 1
                },
                {
                    "name": "streak",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 0
                },
                {
                    "name": "20",
                    "is_empty": 0
                },
                {
                    "name": "30",
                    "is_empty": 0
                },
                {
                    "name": "40",
                    "is_empty": 0
                },
                {
                    "name": "50",
                    "is_empty": 0
                },
                {
                    "name": "60",
                    "is_empty": 0
                },
                {
                    "name": "70",
                    "is_empty": 0
                },
                {
                    "name": "80",
                    "is_empty": 0
                },
                {
                    "name": "90",
                    "is_empty": 0
                },
                {
                    "name": "100",
                    "is_empty": 0
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "Wallet user list": {
            "third_row": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 1
                },
                {
                    "name": "afternoon",
                    "is_empty": 1
                },
                {
                    "name": "evening ",
                    "is_empty": 1
                },
                {
                    "name": "night",
                    "is_empty": 1
                },
                {
                    "name": "collected",
                    "is_empty": 0
                },
                {
                    "name": "redeemed",
                    "is_empty": 0
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 1
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 1
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 1
                },
                {
                    "name": "streak",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "Badges wise user list": {
            "third_row": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 1
                },
                {
                    "name": "afternoon",
                    "is_empty": 1
                },
                {
                    "name": "evening ",
                    "is_empty": 1
                },
                {
                    "name": "night",
                    "is_empty": 1
                },
                {
                    "name": "collected",
                    "is_empty": 0
                },
                {
                    "name": "redeemed",
                    "is_empty": 0
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 0
                },
                {
                    "name": "Week",
                    "is_empty": 0
                },
                {
                    "name": "Month",
                    "is_empty": 0
                },
                {
                    "name": "Year",
                    "is_empty": 0
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 1
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 1
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 1
                },
                {
                    "name": "streak",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "streak user list": {
            "third_row": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 1
                },
                {
                    "name": "afternoon",
                    "is_empty": 1
                },
                {
                    "name": "evening ",
                    "is_empty": 1
                },
                {
                    "name": "night",
                    "is_empty": 1
                },
                {
                    "name": "collected",
                    "is_empty": 0
                },
                {
                    "name": "redeemed",
                    "is_empty": 0
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 1
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 0
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 0
                },
                {
                    "name": "streak",
                    "is_empty": 0
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "Age groupwise user list ": {
            "third_row": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 0
                },
                {
                    "name": "afternoon",
                    "is_empty": 0
                },
                {
                    "name": "evening ",
                    "is_empty": 0
                },
                {
                    "name": "night",
                    "is_empty": 0
                },
                {
                    "name": "collected",
                    "is_empty": 0
                },
                {
                    "name": "redeemed",
                    "is_empty": 0
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 0
                },
                {
                    "name": "Week",
                    "is_empty": 0
                },
                {
                    "name": "Month",
                    "is_empty": 0
                },
                {
                    "name": "Year",
                    "is_empty": 0
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 0
                },
                {
                    "name": "live games",
                    "is_empty": 0
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 0
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 0
                },
                {
                    "name": "streak",
                    "is_empty": 0
                },
                {
                    "name": "mindfulness",
                    "is_empty": 0
                },
                {
                    "name": "sleep",
                    "is_empty": 0
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 0
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "Study / work user list": {
            "third_row": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 0
                },
                {
                    "name": "afternoon",
                    "is_empty": 0
                },
                {
                    "name": "evening ",
                    "is_empty": 0
                },
                {
                    "name": "night",
                    "is_empty": 0
                },
                {
                    "name": "collected",
                    "is_empty": 0
                },
                {
                    "name": "redeemed",
                    "is_empty": 0
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 0
                },
                {
                    "name": "Week",
                    "is_empty": 0
                },
                {
                    "name": "Month",
                    "is_empty": 0
                },
                {
                    "name": "Year",
                    "is_empty": 0
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 0
                },
                {
                    "name": "live games",
                    "is_empty": 0
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 0
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 0
                },
                {
                    "name": "streak",
                    "is_empty": 0
                },
                {
                    "name": "mindfulness",
                    "is_empty": 0
                },
                {
                    "name": "sleep",
                    "is_empty": 0
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 0
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "Paying extra for coins user list": {
            "third_row": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 1
                },
                {
                    "name": "afternoon",
                    "is_empty": 1
                },
                {
                    "name": "evening ",
                    "is_empty": 1
                },
                {
                    "name": "night",
                    "is_empty": 1
                },
                {
                    "name": "collected",
                    "is_empty": 0
                },
                {
                    "name": "redeemed",
                    "is_empty": 0
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 1
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 1
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 1
                },
                {
                    "name": "streak",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 0
                }
            ]
        },
        "Mindful gurukul store user list": {
            "third_row": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 1
                },
                {
                    "name": "afternoon",
                    "is_empty": 1
                },
                {
                    "name": "evening ",
                    "is_empty": 1
                },
                {
                    "name": "night",
                    "is_empty": 1
                },
                {
                    "name": "collected",
                    "is_empty": 0
                },
                {
                    "name": "redeemed",
                    "is_empty": 0
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 1
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 1
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 1
                },
                {
                    "name": "streak",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 0
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 0
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "Sending referrals user list": {
            "third_row": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 1
                },
                {
                    "name": "afternoon",
                    "is_empty": 1
                },
                {
                    "name": "evening ",
                    "is_empty": 1
                },
                {
                    "name": "night",
                    "is_empty": 1
                },
                {
                    "name": "collected",
                    "is_empty": 0
                },
                {
                    "name": "redeemed",
                    "is_empty": 0
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 1
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 1
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 1
                },
                {
                    "name": "streak",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 0
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "pause buttons user list": {
            "third_row": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 0
                },
                {
                    "name": "afternoon",
                    "is_empty": 0
                },
                {
                    "name": "evening ",
                    "is_empty": 0
                },
                {
                    "name": "night",
                    "is_empty": 0
                },
                {
                    "name": "collected",
                    "is_empty": 0
                },
                {
                    "name": "redeemed",
                    "is_empty": 0
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 1
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 0
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 0
                },
                {
                    "name": "streak",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "tiktok back ground sounds user list": {
            "third_row": [
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 0
                },
                {
                    "name": "afternoon",
                    "is_empty": 0
                },
                {
                    "name": "evening ",
                    "is_empty": 0
                },
                {
                    "name": "night",
                    "is_empty": 0
                },
                {
                    "name": "collected",
                    "is_empty": 1
                },
                {
                    "name": "redeemed",
                    "is_empty": 1
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 1
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 0
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 0
                },
                {
                    "name": "streak",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 0
                },
                {
                    "name": "2",
                    "is_empty": 0
                },
                {
                    "name": "3",
                    "is_empty": 0
                },
                {
                    "name": "4",
                    "is_empty": 0
                },
                {
                    "name": "5",
                    "is_empty": 0
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "aborting task user list": {
            "third_row": [
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 0
                },
                {
                    "name": "afternoon",
                    "is_empty": 0
                },
                {
                    "name": "evening ",
                    "is_empty": 0
                },
                {
                    "name": "night",
                    "is_empty": 0
                },
                {
                    "name": "collected",
                    "is_empty": 1
                },
                {
                    "name": "redeemed",
                    "is_empty": 1
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 1
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 0
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 0
                },
                {
                    "name": "streak",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "aborting mindfulness  audios user list": {
            "third_row": [
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 0
                },
                {
                    "name": "afternoon",
                    "is_empty": 0
                },
                {
                    "name": "evening ",
                    "is_empty": 0
                },
                {
                    "name": "night",
                    "is_empty": 0
                },
                {
                    "name": "collected",
                    "is_empty": 1
                },
                {
                    "name": "redeemed",
                    "is_empty": 1
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 1
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 1
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 1
                },
                {
                    "name": "streak",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 0
                },
                {
                    "name": "stressed",
                    "is_empty": 0
                },
                {
                    "name": "panicked",
                    "is_empty": 0
                },
                {
                    "name": "lazy",
                    "is_empty": 0
                },
                {
                    "name": "angry",
                    "is_empty": 0
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "incomplete planned tik tock user list": {
            "third_row": [
                1,
                1,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 0
                },
                {
                    "name": "afternoon",
                    "is_empty": 0
                },
                {
                    "name": "evening ",
                    "is_empty": 0
                },
                {
                    "name": "night",
                    "is_empty": 0
                },
                {
                    "name": "collected",
                    "is_empty": 1
                },
                {
                    "name": "redeemed",
                    "is_empty": 0
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 1
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 0
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 0
                },
                {
                    "name": "streak",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "fully Incomplete planned user list": {
            "third_row": [
                1,
                1,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 0
                },
                {
                    "name": "afternoon",
                    "is_empty": 0
                },
                {
                    "name": "evening ",
                    "is_empty": 0
                },
                {
                    "name": "night",
                    "is_empty": 0
                },
                {
                    "name": "collected",
                    "is_empty": 1
                },
                {
                    "name": "redeemed",
                    "is_empty": 0
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 1
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 0
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 0
                },
                {
                    "name": "streak",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "completed tik tock  task user list": {
            "third_row": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 0
                },
                {
                    "name": "afternoon",
                    "is_empty": 0
                },
                {
                    "name": "evening ",
                    "is_empty": 0
                },
                {
                    "name": "night",
                    "is_empty": 0
                },
                {
                    "name": "collected",
                    "is_empty": 0
                },
                {
                    "name": "redeemed",
                    "is_empty": 0
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 1
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 0
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 0
                },
                {
                    "name": "streak",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "completed audio of mindfulness  audios user list": {
            "third_row": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 1
                },
                {
                    "name": "afternoon",
                    "is_empty": 1
                },
                {
                    "name": "evening ",
                    "is_empty": 1
                },
                {
                    "name": "night",
                    "is_empty": 1
                },
                {
                    "name": "collected",
                    "is_empty": 0
                },
                {
                    "name": "redeemed",
                    "is_empty": 0
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 1
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 1
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 1
                },
                {
                    "name": "streak",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 0
                },
                {
                    "name": "stressed",
                    "is_empty": 0
                },
                {
                    "name": "panicked",
                    "is_empty": 0
                },
                {
                    "name": "lazy",
                    "is_empty": 0
                },
                {
                    "name": "angry",
                    "is_empty": 0
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "Individual user journey list through search, tik tock, compliments, live section, noise distraction, Heart rate variation, Purchase journey, task completed / uncompleted, time of the day 1. using app for tik tock, break time, average total time of the week, stretching time after completed tik tocks, 2. compliment, 3. live section, or 4. other activities.": {
            "third_row": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 0
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 0
                },
                {
                    "name": "afternoon",
                    "is_empty": 0
                },
                {
                    "name": "evening ",
                    "is_empty": 0
                },
                {
                    "name": "night",
                    "is_empty": 0
                },
                {
                    "name": "collected",
                    "is_empty": 0
                },
                {
                    "name": "redeemed",
                    "is_empty": 0
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 0
                },
                {
                    "name": "Week",
                    "is_empty": 0
                },
                {
                    "name": "Month",
                    "is_empty": 0
                },
                {
                    "name": "Year",
                    "is_empty": 0
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 0
                },
                {
                    "name": "live games",
                    "is_empty": 0
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 0
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 0
                },
                {
                    "name": "streak",
                    "is_empty": 0
                },
                {
                    "name": "mindfulness",
                    "is_empty": 0
                },
                {
                    "name": "sleep",
                    "is_empty": 0
                },
                {
                    "name": "free",
                    "is_empty": 0
                },
                {
                    "name": "paid",
                    "is_empty": 0
                },
                {
                    "name": "date",
                    "is_empty": 0
                },
                {
                    "name": "reason",
                    "is_empty": 0
                },
                {
                    "name": "name of admin",
                    "is_empty": 0
                },
                {
                    "name": "tired",
                    "is_empty": 0
                },
                {
                    "name": "stressed",
                    "is_empty": 0
                },
                {
                    "name": "panicked",
                    "is_empty": 0
                },
                {
                    "name": "lazy",
                    "is_empty": 0
                },
                {
                    "name": "angry",
                    "is_empty": 0
                },
                {
                    "name": "motivation",
                    "is_empty": 0
                },
                {
                    "name": "10",
                    "is_empty": 0
                },
                {
                    "name": "20",
                    "is_empty": 0
                },
                {
                    "name": "30",
                    "is_empty": 0
                },
                {
                    "name": "40",
                    "is_empty": 0
                },
                {
                    "name": "50",
                    "is_empty": 0
                },
                {
                    "name": "60",
                    "is_empty": 0
                },
                {
                    "name": "70",
                    "is_empty": 0
                },
                {
                    "name": "80",
                    "is_empty": 0
                },
                {
                    "name": "90",
                    "is_empty": 0
                },
                {
                    "name": "100",
                    "is_empty": 0
                },
                {
                    "name": "redeem coins",
                    "is_empty": 0
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 0
                },
                {
                    "name": "amount paid",
                    "is_empty": 0
                },
                {
                    "name": "date of payment",
                    "is_empty": 0
                },
                {
                    "name": "1",
                    "is_empty": 0
                },
                {
                    "name": "2",
                    "is_empty": 0
                },
                {
                    "name": "3",
                    "is_empty": 0
                },
                {
                    "name": "4",
                    "is_empty": 0
                },
                {
                    "name": "5",
                    "is_empty": 0
                },
                {
                    "name": "noise AVG",
                    "is_empty": 0
                },
                {
                    "name": "High",
                    "is_empty": 0
                },
                {
                    "name": "Medium",
                    "is_empty": 0
                },
                {
                    "name": "Low",
                    "is_empty": 0
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 0
                },
                {
                    "name": "High",
                    "is_empty": 0
                },
                {
                    "name": "Medium",
                    "is_empty": 0
                },
                {
                    "name": "Low",
                    "is_empty": 0
                },
                {
                    "name": "mindfulness",
                    "is_empty": 0
                },
                {
                    "name": "sleep",
                    "is_empty": 0
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 0
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 0
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 0
                },
                {
                    "name": "High",
                    "is_empty": 0
                },
                {
                    "name": "Medium",
                    "is_empty": 0
                },
                {
                    "name": "Low",
                    "is_empty": 0
                },
                {
                    "name": "already created",
                    "is_empty": 0
                },
                {
                    "name": "user created",
                    "is_empty": 0
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 0
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 0
                },
                {
                    "name": "date of inactive",
                    "is_empty": 0
                },
                {
                    "name": "date of payment",
                    "is_empty": 0
                }
            ]
        },
        "User list of people in a day according to time engaged on tik tock, compliments, live section, or activities.": {
            "third_row": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 0
                },
                {
                    "name": "afternoon",
                    "is_empty": 0
                },
                {
                    "name": "evening ",
                    "is_empty": 0
                },
                {
                    "name": "night",
                    "is_empty": 0
                },
                {
                    "name": "collected",
                    "is_empty": 0
                },
                {
                    "name": "redeemed",
                    "is_empty": 0
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 0
                },
                {
                    "name": "Week",
                    "is_empty": 0
                },
                {
                    "name": "Month",
                    "is_empty": 0
                },
                {
                    "name": "Year",
                    "is_empty": 0
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 0
                },
                {
                    "name": "live games",
                    "is_empty": 0
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 0
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 0
                },
                {
                    "name": "streak",
                    "is_empty": 0
                },
                {
                    "name": "mindfulness",
                    "is_empty": 0
                },
                {
                    "name": "sleep",
                    "is_empty": 0
                },
                {
                    "name": "free",
                    "is_empty": 0
                },
                {
                    "name": "paid",
                    "is_empty": 0
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 0
                },
                {
                    "name": "stressed",
                    "is_empty": 0
                },
                {
                    "name": "panicked",
                    "is_empty": 0
                },
                {
                    "name": "lazy",
                    "is_empty": 0
                },
                {
                    "name": "angry",
                    "is_empty": 0
                },
                {
                    "name": "motivation",
                    "is_empty": 0
                },
                {
                    "name": "10",
                    "is_empty": 0
                },
                {
                    "name": "20",
                    "is_empty": 0
                },
                {
                    "name": "30",
                    "is_empty": 0
                },
                {
                    "name": "40",
                    "is_empty": 0
                },
                {
                    "name": "50",
                    "is_empty": 0
                },
                {
                    "name": "60",
                    "is_empty": 0
                },
                {
                    "name": "70",
                    "is_empty": 0
                },
                {
                    "name": "80",
                    "is_empty": 0
                },
                {
                    "name": "90",
                    "is_empty": 0
                },
                {
                    "name": "100",
                    "is_empty": 0
                },
                {
                    "name": "redeem coins",
                    "is_empty": 0
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 0
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 0
                },
                {
                    "name": "2",
                    "is_empty": 0
                },
                {
                    "name": "3",
                    "is_empty": 0
                },
                {
                    "name": "4",
                    "is_empty": 0
                },
                {
                    "name": "5",
                    "is_empty": 0
                },
                {
                    "name": "noise AVG",
                    "is_empty": 0
                },
                {
                    "name": "High",
                    "is_empty": 0
                },
                {
                    "name": "Medium",
                    "is_empty": 0
                },
                {
                    "name": "Low",
                    "is_empty": 0
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 0
                },
                {
                    "name": "High",
                    "is_empty": 0
                },
                {
                    "name": "Medium",
                    "is_empty": 0
                },
                {
                    "name": "Low",
                    "is_empty": 0
                },
                {
                    "name": "mindfulness",
                    "is_empty": 0
                },
                {
                    "name": "sleep",
                    "is_empty": 0
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 0
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 0
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 0
                },
                {
                    "name": "High",
                    "is_empty": 0
                },
                {
                    "name": "Medium",
                    "is_empty": 0
                },
                {
                    "name": "Low",
                    "is_empty": 0
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 0
                },
                {
                    "name": "date of inactive",
                    "is_empty": 0
                },
                {
                    "name": "date of payment",
                    "is_empty": 0
                }
            ]
        },
        "High focused levels user list": {
            "third_row": [
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 1
                },
                {
                    "name": "afternoon",
                    "is_empty": 1
                },
                {
                    "name": "evening ",
                    "is_empty": 1
                },
                {
                    "name": "night",
                    "is_empty": 1
                },
                {
                    "name": "collected",
                    "is_empty": 1
                },
                {
                    "name": "redeemed",
                    "is_empty": 1
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 1
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 0
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 0
                },
                {
                    "name": "streak",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 0
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 0
                },
                {
                    "name": "High",
                    "is_empty": 0
                },
                {
                    "name": "Medium",
                    "is_empty": 0
                },
                {
                    "name": "Low",
                    "is_empty": 0
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "High anxiety levels user list.": {
            "third_row": [
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 1
                },
                {
                    "name": "afternoon",
                    "is_empty": 1
                },
                {
                    "name": "evening ",
                    "is_empty": 1
                },
                {
                    "name": "night",
                    "is_empty": 1
                },
                {
                    "name": "collected",
                    "is_empty": 1
                },
                {
                    "name": "redeemed",
                    "is_empty": 1
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 1
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 0
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 0
                },
                {
                    "name": "streak",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 0
                },
                {
                    "name": "High",
                    "is_empty": 0
                },
                {
                    "name": "Medium",
                    "is_empty": 0
                },
                {
                    "name": "Low",
                    "is_empty": 0
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "High distraction levels user list": {
            "third_row": [
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 1
                },
                {
                    "name": "afternoon",
                    "is_empty": 1
                },
                {
                    "name": "evening ",
                    "is_empty": 1
                },
                {
                    "name": "night",
                    "is_empty": 1
                },
                {
                    "name": "collected",
                    "is_empty": 1
                },
                {
                    "name": "redeemed",
                    "is_empty": 1
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 1
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 0
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 0
                },
                {
                    "name": "streak",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 0
                },
                {
                    "name": "High",
                    "is_empty": 0
                },
                {
                    "name": "Medium",
                    "is_empty": 0
                },
                {
                    "name": "Low",
                    "is_empty": 0
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "High productivity user list": {
            "third_row": [
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 1
                },
                {
                    "name": "afternoon",
                    "is_empty": 1
                },
                {
                    "name": "evening ",
                    "is_empty": 1
                },
                {
                    "name": "night",
                    "is_empty": 1
                },
                {
                    "name": "collected",
                    "is_empty": 1
                },
                {
                    "name": "redeemed",
                    "is_empty": 1
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 1
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 0
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 0
                },
                {
                    "name": "streak",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 0
                },
                {
                    "name": "sleep",
                    "is_empty": 0
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 0
                },
                {
                    "name": "sleep",
                    "is_empty": 0
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 0
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "List of users group": {
            "third_row": [
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 0
                },
                {
                    "name": "buying of points",
                    "is_empty": 0
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 0
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 0
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 0
                },
                {
                    "name": "morning",
                    "is_empty": 0
                },
                {
                    "name": "afternoon",
                    "is_empty": 0
                },
                {
                    "name": "evening ",
                    "is_empty": 0
                },
                {
                    "name": "night",
                    "is_empty": 0
                },
                {
                    "name": "collected",
                    "is_empty": 1
                },
                {
                    "name": "redeemed",
                    "is_empty": 1
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 1
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 1
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 1
                },
                {
                    "name": "streak",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 0
                },
                {
                    "name": "user created",
                    "is_empty": 0
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 0
                },
                {
                    "name": "first name",
                    "is_empty": 0
                },
                {
                    "name": "last name",
                    "is_empty": 0
                },
                {
                    "name": "user name",
                    "is_empty": 0
                },
                {
                    "name": "phone no",
                    "is_empty": 0
                },
                {
                    "name": "parent phone no",
                    "is_empty": 0
                },
                {
                    "name": "email id",
                    "is_empty": 0
                },
                {
                    "name": "institute name",
                    "is_empty": 0
                },
                {
                    "name": "language",
                    "is_empty": 0
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 0
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 0
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 0
                },
                {
                    "name": "gender",
                    "is_empty": 0
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "admins for group creators": {
            "third_row": [
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 1
                },
                {
                    "name": "buying of points",
                    "is_empty": 1
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 1
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 1
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 1
                },
                {
                    "name": "morning",
                    "is_empty": 1
                },
                {
                    "name": "afternoon",
                    "is_empty": 1
                },
                {
                    "name": "evening ",
                    "is_empty": 1
                },
                {
                    "name": "night",
                    "is_empty": 1
                },
                {
                    "name": "collected",
                    "is_empty": 1
                },
                {
                    "name": "redeemed",
                    "is_empty": 1
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 1
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 1
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 1
                },
                {
                    "name": "streak",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 1
                },
                {
                    "name": "first name",
                    "is_empty": 1
                },
                {
                    "name": "last name",
                    "is_empty": 1
                },
                {
                    "name": "user name",
                    "is_empty": 1
                },
                {
                    "name": "phone no",
                    "is_empty": 1
                },
                {
                    "name": "parent phone no",
                    "is_empty": 1
                },
                {
                    "name": "email id",
                    "is_empty": 1
                },
                {
                    "name": "institute name",
                    "is_empty": 1
                },
                {
                    "name": "language",
                    "is_empty": 1
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 1
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 1
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 1
                },
                {
                    "name": "gender",
                    "is_empty": 1
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        },
        "Streak users": {
            "third_row": [
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "second_row": [
                {
                    "name": "TOTAL AMOUNT RECEIVED",
                    "is_empty": 1
                },
                {
                    "name": "subscription plan bought",
                    "is_empty": 1
                },
                {
                    "name": "buying of points",
                    "is_empty": 1
                },
                {
                    "name": "no. of referral done",
                    "is_empty": 1
                },
                {
                    "name": "list of people downloaded",
                    "is_empty": 1
                },
                {
                    "name": "enrolled through which code",
                    "is_empty": 1
                },
                {
                    "name": "morning",
                    "is_empty": 1
                },
                {
                    "name": "afternoon",
                    "is_empty": 1
                },
                {
                    "name": "evening ",
                    "is_empty": 1
                },
                {
                    "name": "night",
                    "is_empty": 1
                },
                {
                    "name": "collected",
                    "is_empty": 1
                },
                {
                    "name": "redeemed",
                    "is_empty": 1
                },
                {
                    "name": "how many streaks completed",
                    "is_empty": 1
                },
                {
                    "name": "Week",
                    "is_empty": 1
                },
                {
                    "name": "Month",
                    "is_empty": 1
                },
                {
                    "name": "Year",
                    "is_empty": 1
                },
                {
                    "name": "splash / compliments",
                    "is_empty": 1
                },
                {
                    "name": "live games",
                    "is_empty": 1
                },
                {
                    "name": "planned (TIMETABLE)",
                    "is_empty": 1
                },
                {
                    "name": "unplanned (TIC TOK)",
                    "is_empty": 1
                },
                {
                    "name": "streak",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "free",
                    "is_empty": 1
                },
                {
                    "name": "paid",
                    "is_empty": 1
                },
                {
                    "name": "date",
                    "is_empty": 1
                },
                {
                    "name": "reason",
                    "is_empty": 1
                },
                {
                    "name": "name of admin",
                    "is_empty": 1
                },
                {
                    "name": "tired",
                    "is_empty": 1
                },
                {
                    "name": "stressed",
                    "is_empty": 1
                },
                {
                    "name": "panicked",
                    "is_empty": 1
                },
                {
                    "name": "lazy",
                    "is_empty": 1
                },
                {
                    "name": "angry",
                    "is_empty": 1
                },
                {
                    "name": "motivation",
                    "is_empty": 1
                },
                {
                    "name": "10",
                    "is_empty": 1
                },
                {
                    "name": "20",
                    "is_empty": 1
                },
                {
                    "name": "30",
                    "is_empty": 1
                },
                {
                    "name": "40",
                    "is_empty": 1
                },
                {
                    "name": "50",
                    "is_empty": 1
                },
                {
                    "name": "60",
                    "is_empty": 1
                },
                {
                    "name": "70",
                    "is_empty": 1
                },
                {
                    "name": "80",
                    "is_empty": 1
                },
                {
                    "name": "90",
                    "is_empty": 1
                },
                {
                    "name": "100",
                    "is_empty": 1
                },
                {
                    "name": "redeem coins",
                    "is_empty": 1
                },
                {
                    "name": "date of redemtion",
                    "is_empty": 1
                },
                {
                    "name": "amount paid",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                },
                {
                    "name": "1",
                    "is_empty": 1
                },
                {
                    "name": "2",
                    "is_empty": 1
                },
                {
                    "name": "3",
                    "is_empty": 1
                },
                {
                    "name": "4",
                    "is_empty": 1
                },
                {
                    "name": "5",
                    "is_empty": 1
                },
                {
                    "name": "noise AVG",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "Heart Rate Variation",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "mindfulness",
                    "is_empty": 1
                },
                {
                    "name": "sleep",
                    "is_empty": 1
                },
                {
                    "name": "Tik Tock",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Planned Studies",
                    "is_empty": 1
                },
                {
                    "name": "No. of Hours Unplanned Studies",
                    "is_empty": 1
                },
                {
                    "name": "High",
                    "is_empty": 1
                },
                {
                    "name": "Medium",
                    "is_empty": 1
                },
                {
                    "name": "Low",
                    "is_empty": 1
                },
                {
                    "name": "already created",
                    "is_empty": 1
                },
                {
                    "name": "user created",
                    "is_empty": 1
                }
            ],
            "first_row": [
                {
                    "name": "dates of joining",
                    "is_empty": 1
                },
                {
                    "name": "first name",
                    "is_empty": 1
                },
                {
                    "name": "last name",
                    "is_empty": 1
                },
                {
                    "name": "user name",
                    "is_empty": 1
                },
                {
                    "name": "phone no",
                    "is_empty": 1
                },
                {
                    "name": "parent phone no",
                    "is_empty": 1
                },
                {
                    "name": "email id",
                    "is_empty": 1
                },
                {
                    "name": "institute name",
                    "is_empty": 1
                },
                {
                    "name": "language",
                    "is_empty": 1
                },
                {
                    "name": "state",
                    "is_empty": 1
                },
                {
                    "name": "City",
                    "is_empty": 1
                },
                {
                    "name": "AGE below 18",
                    "is_empty": 1
                },
                {
                    "name": "AGE above 18",
                    "is_empty": 1
                },
                {
                    "name": "gender",
                    "is_empty": 1
                },
                {
                    "name": "year",
                    "is_empty": 1
                },
                {
                    "name": "date of inactive",
                    "is_empty": 1
                },
                {
                    "name": "date of payment",
                    "is_empty": 1
                }
            ]
        }
      }
      let workingRow1 = row1.map(item => ({ ...item }));
      let workingRow2 = row2.map(item => ({ ...item }));
      let workingRow3 = row3.map(item => ({ ...item }));

    //   let workingRow1 = row1
    //   let workingRow2 = row2
    //   let workingRow3 = row3



const TableRows = ({prop})=> {

    useEffect(()=>{
    console.log(workingRow1[14])
    workingRow1 = row1.map(item => ({ ...item }));
    workingRow2 = row2.map(item => ({ ...item }));
    workingRow3 = row3.map(item => ({ ...item }));
    console.log(workingRow1[14])

    const resetWorkingRows = () => {
        workingRow1.length = 0;
        workingRow2.length = 0;
        workingRow3.length = 0;
      };
  
      // Clean-up function to reset 'workingRow1' on component unmount
      return resetWorkingRows;

    },[prop]);


const rowArray = [workingRow1, workingRow2, workingRow3];

  // Function to set the display property of every object in workingRow1
  const setDisplayForWorkingRows = (nestedObject) => {

    if (nestedObject.third_row) {
        // Access the "third_row" array from the nested object
        const thirdRowArray = nestedObject.third_row;
        const secondRowArray = nestedObject.second_row;
        const firstRowArray = nestedObject.first_row;

        // Find all indices of 1 in the "third_row" array
        const indicesOfOnes = [];
        
        for (let i = 0; i < thirdRowArray.length; i++) {
          if (thirdRowArray[i] === 1) {
            indicesOfOnes.push(i);
        }
    }
        
        // Set the "display" property of the objects at the corresponding indices in "workingRow3"
        for (const index of indicesOfOnes) {
          if (index >= 0 && index < workingRow3.length) {
            // workingRow3[index].display = false; 
            workingRow3[index].display = false;


            for (const obj of workingRow2) {
                if (obj['name'].toLowerCase() === workingRow3[index].parentColumn.toLowerCase() ) {
                  obj['colSpan']-=1
                  if(obj['colSpan'] === 0 ){
                      obj['display'] = false;
                  }
                for (const obj1 of workingRow1) {
                    if (obj1['name'].toLowerCase() === obj['parentColumn'].toLowerCase() ) {
                      obj1['colSpan']-=1
                      if(obj1['colSpan'] === 0 ){
                          obj1['display'] = false;
                      }
                      
    
                      break;
                    }
                  }

                  break;
                }
              }
        }
        }

        secondRowArray.forEach((obj, index) => {
            if (obj['is_empty'] === 1 && typeof obj['name'] === 'string') {
              const matchingObj1 = workingRow2[index];
          
              if (typeof matchingObj1['name'] === 'string' && obj['name'].toLowerCase() === matchingObj1['name'].toLowerCase()) {
                matchingObj1['display'] = false;
          
                workingRow1.forEach((obj2) => {
                  if (obj2['name'].toLowerCase() === matchingObj1['parentColumn'].toLowerCase()) {
                    obj2['colSpan'] = obj2['colSpan']-matchingObj1['colSpan'];
          
                    if (obj2['colSpan'] === 0) {
                      obj2['display'] = false;
                    }
                  }
                });
              }
            }
          });
          
    
    
    for (const obj of firstRowArray){
        if(obj['is_empty'] === 1 ){
            for (const obj1 of workingRow1){
                if(typeof(obj['name'])==='string' && typeof(obj1['name'])==='string' ){
                if(obj['name'].toLowerCase() === obj1['name'].toLowerCase()){
                    obj1['display'] = false;
                }
            }
        }
    }
}

  };
};

        // Check if the current options object has the matching key (case-insensitive)
        for (let key in options) {
            if (key.toLowerCase() === prop.toLowerCase()) {
                console.log(key.toLowerCase())
                console.log(prop.toLowerCase())
                setDisplayForWorkingRows(options[key]) // Found the nested object, return it
            }}




  return (
  <thead>
    {rowArray.map((rowData, index) => {
      const className = `tr${index+1}`;

      return (
        <tr key={index} className={className}>
          {rowData.map((item, itemIndex) => (
            // Use ternary operator to conditionally render the <th> element
            item.display ? (
              <th key={itemIndex} rowSpan={item.rowSpan} colSpan={item.colSpan}>
                {item.name}
              </th>
            ) : null
          ))}
        </tr>
      );
    })}
  </thead>
);

}

export default TableRows;