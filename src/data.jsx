import { HiCheckCircle, HiClock, HiFlag, HiOutlineClock, HiOutlineEye, HiOutlineTrash, HiUser } from "react-icons/hi";
import profilePic from './assets/profileimg.jpg'
import profileimgtwo from './assets/profileimgtwo.jpg'
import profileimgthree from './assets/profileimgthree.jpg'
import profileimgFour from './assets/profileimgFour.jpg'
import profileimgFive from './assets/profileimgFive.jpg'
import profileimgnine from './assets/profileimgnine.jpg'
import profileimgseven from './assets/profileimgseven.jpg'
import profileimgeight from './assets/profileimgeight.jpg'
import profileimgten from './assets/profileimgten.jpg'


export const clientData = [
     { day: 'Monday', clients: 100 },
  { day: 'Tuesday', clients: 500 },
  { day: 'Wednesday', clients: 800 },
  { day: 'Thursday', clients:300 },
  { day: 'Friday', clients: 700 },
  { day: 'Saturday', clients: 300 },
  { day: 'Sunday', clients: 200 },
  ];
export const revenuData = [
     { day: 'Monday', $: 250 },
  { day: 'Tuesday', $: 180 },
  { day: 'Wednesday', $: 300 },
  { day: 'Thursday', $:320 },
  { day: 'Friday', $: 400 },
  { day: 'Saturday', $: 180 },
  { day: 'Sunday', $: 130 },
  ];
  
export const projectData = [
     { day: 'Monday', project: 1 },
  { day: 'Tuesday', project: 2 },
  { day: 'Wednesday', project: 1 },
  { day: 'Thursday', project:3 },
  { day: 'Friday', project: 4 },
  { day: 'Saturday', project: 5 },
  { day: 'Sunday', project: 3 },
  ];
  
  
export const usersData = [
     { day: 'Monday', user: 10 },
  { day: 'Tuesday', user: 30 },
  { day: 'Wednesday', user: 80 },
  { day: 'Thursday', user:40 },
  { day: 'Friday', user: 30 },
  { day: 'Saturday', user: 10 },
  { day: 'Sunday', user: 10 },
  ];
  
  export const projectListData = {
    title : "project",
    columns: [
      { field: 'project', header: 'Project' },
      { field: 'budget', header: 'Budget', align: 'right' },
      { field: 'client', header: 'Client', align: 'right' },
      { field: 'status', header: 'Status', align: 'right' },
      { field: 'techTools', header: 'Tech Tools Used', align: 'right' },
      { field: 'deadline', header: 'Deadline', align: 'right' }
    ],
    actions: [
      { icon: HiOutlineTrash, color: "#f76265", link: (row) => `/delete/${row.project}` },
      { icon: HiOutlineEye, color: "#626bf7", link: (row) => `/view/${row.project}` }
    ],
  
    data: [
      { project: 'FinancialApp', budget: 2500, client: 'Thomas C.', status: 'Done', techTools: 'React, Node.js, MongoDB', deadline: '2023-10-12' },
      { project: 'ManagApp', budget: 4500, client: 'Gokul C.', status: 'Working', techTools: 'Angular, Firebase', deadline: '2023-12-01' },
      { project: 'EcoSolutions', budget: 5200, client: 'Anna L.', status: 'In Review', techTools: 'Vue.js, Python, PostgreSQL', deadline: '2023-11-15' },
      { project: 'HealthTrack', budget: 3500, client: 'Emily R.', status: 'In Review', techTools: 'React Native, AWS', deadline: '2024-01-20' },
      { project: 'TravelEasy', budget: 4100, client: 'Raj S.', status: 'Done', techTools: 'Next.js, Tailwind CSS', deadline: '2023-09-10' },
      { project: 'EduFlex', budget: 3000, client: 'Sophia N.', status: 'In Review', techTools: 'Laravel, MySQL', deadline: '2023-12-10' },
      { project: 'Finanztext', budget: 5000, client: 'Thomas C.', status: 'Done', techTools: 'Ruby on Rails, PostgreSQL', deadline: '2023-08-25' },
      { project: 'SafePay', budget: 2900, client: 'John D.', status: 'Not Started', techTools: 'Java, Spring Boot', deadline: '2024-02-15' },
      { project: 'BuildWare', budget: 3700, client: 'James M.', status: 'Working', techTools: 'PHP, Laravel, Bootstrap', deadline: '2023-11-01' },
      { project: 'GoGreen', budget: 4200, client: 'Elena T.', status: 'In Review', techTools: 'React, Express, MongoDB', deadline: '2023-10-30' }
    ]
  };


  export const clientsDataList = {
    title: "clients",
    columns: [
        { field: 'image', header: 'Image' },
        { field: 'client', header: 'Client' },
        { field: 'country', header: 'Country', align: 'right' },
        { field: 'earning', header: 'Earning', align: 'right' },
        { field: 'project', header: 'Project', align: 'right' },
        { field: 'status', header: 'Status', align: 'right' },
    ],
    actions: [
        { icon: HiOutlineTrash, color: "#f76265", link: (row) => `/delete/${row.client}` },
        { icon: HiOutlineEye, color: "#626bf7", link: (row) => `/view/${row.client}` }
    ],
    
    data: [
      {
        "image":profileimgseven,
        "client": "Thomas C.",
        "country": "USA",
        "earning": 7500,
        "project": "FinancialApp",
        "status": "Working",
        "messageContent": "Thanks, I appreciate it!",
        "time": "5 min ago",
        "activeStatus": true,
        "messages": [
          { id: 1, message: "Hello Alex, I hope you're doing well. Any updates on the project?" },
          { id: 2, message: "Hi! Yes, I'm working on the final design touches." },
          { id: 3, message: "Great! Can you send me the latest mockups when you're done?" },
          { id: 4, message: "Sure! I'll share them shortly." },
          { id: 5, message: "Thanks, I appreciate it!" },
        ]
      },
      {
        "image": "",
        "client": "Gokul C.",
        "country": "India",
        "earning": 4500,
        "project": "ManagApp",
        "status": "Working",
        "messageContent": "Awesome! Really appreciate it.",
        "time": "10 min ago",
        "activeStatus": true,
        "messages": [
          { id: 1, message: "Hello Alex, any updates on the changes I requested?" },
          { id: 2, message: "I’ll be sharing the feedback with you soon!" },
          { id: 3, message: "Thanks! Looking forward to it." },
          { id: 4, message: "I'll also add the extra features you requested." },
          { id: 5, message: "Awesome! Really appreciate it." }
        ]
      },
      {
        "image":profileimgFive,
        "client": "Anna L.",
        "country": "Germany",
        "earning": 5200,
        "project": "EcoSolutions",
        "status": "Completed",
        "messageContent": "Will do. Take care!",
        "time": "15 min ago",
        "activeStatus": false,
        "messages": [
          { id: 1, message: "Hi Alex, just confirming the project is complete. Everything looks good." },
          { id: 2, message: "Great! I’m glad to hear it." },
          { id: 3, message: "Thanks again for your help on this!" },
          { id: 4, message: "You're welcome! Let me know if you need anything else." },
          { id: 5, message: "Will do. Take care!" }
        ]
      },
      {
        "image": profileimgFour,
        "client": "Emily R.",
        "country": "Canada",
        "earning": 3500,
        "project": "HealthTrack",
        "status": "Not-Started",
        "messageContent": "Looking forward to seeing them.",
        "time": "30 min ago",
        "activeStatus": false,
        "messages": [
          { id: 1, message: "Hi Alex, when can we start on the HealthTrack project?" },
          { id: 2, message: "We’re set to begin next week!" },
          { id: 3, message: "Perfect! I’ll be ready." },
          { id: 4, message: "Great! I'll send over the initial materials soon." },
          { id: 5, message: "Looking forward to seeing them." }
        ]
      },
      {
        "image": profileimgthree,
        "client": "Raj S.",
        "country": "Australia",
        "earning": 4100,
        "project": "TravelEasy",
        "status": "Working",
        "messageContent": "Let me know if you need any adjustments.",
        "time": "1 hour ago",
        "activeStatus": true,
        "messages": [
          { id: 1, message: "Hello Alex, could you confirm the updates on TravelEasy?" },
          { id: 2, message: "I’m reviewing them now, will update you shortly." },
          { id: 3, message: "Thanks, I appreciate it!" },
          { id: 4, message: "Also, the new features are almost done." },
          { id: 5, message: "That’s great news!" },
          { id: 6, message: "Let me know if you need any adjustments." }
        ]
      },
      {
        "image": profileimgtwo,
        "client": "Sophia N.",
        "country": "Brazil",
        "earning": 3000,
        "project": "EduFlex",
        "status": "Completed",
        "messageContent": "Will keep you in mind for future work.",
        "time": "2 hours ago",
        "activeStatus": true,
        "messages": [
          { id: 1, message: "Hi Alex, I just want to confirm the completion of EduFlex." },
          { id: 2, message: "Yes, everything is finished!" },
          { id: 3, message: "Thanks for all your hard work." },
          { id: 4, message: "You're welcome, Sophia! Glad to help." },
          { id: 5, message: "Will keep you in mind for future work." }
        ]
      },
      {
        "image": profileimgten,
        "client": "John D.",
        "country": "UK",
        "earning": 2900,
        "project": "SafePay",
        "status": "Completed",
        "messageContent": "Will do, thanks!",
        "time": "3 hours ago",
        "activeStatus": true,
        "messages": [
          { id: 1, message: "Hey Alex, the final report is ready for review." },
          { id: 2, message: "Got it, I’ll go through it." },
          { id: 3, message: "Thanks! Let me know if you need any changes." },
          { id: 4, message: "Will do, thanks!" },
          { id: 5, message: "You're welcome!" }
        ]
      },
      {
        "image": profileimgeight,
        "client": "James M.",
        "country": "South Africa",
        "earning": 3700,
        "project": "BuildWare",
        "status": "Working",
        "messageContent": "Me too, talk soon!",
        "time": "4 hours ago",
        "activeStatus": false,
        "messages": [
          { id: 1, message: "Hi Alex, can we schedule a meeting to discuss BuildWare?" },
          { id: 2, message: "Sure, how’s tomorrow at 10am?" },
          { id: 3, message: "That works for me. Thanks!" },
          { id: 4, message: "Great! Looking forward to it." },
          { id: 5, message: "Me too, talk soon!" }
        ]
      },
      {
        "image":profileimgnine,
        "client": "Elena T.",
        "country": "France",
        "earning": 4200,
        "project": "GoGreen",
        "status": "Completed",
        "messageContent": "Will do!...",
        "time": "5 hours ago",
        "activeStatus": true,
        "messages": [
          { id: 1, message: "Hi Alex, just wanted to say thanks for the great collaboration!" },
          { id: 2, message: "You're welcome! It was a pleasure working with you." },
          { id: 3, message: "Looking forward to future projects!" },
          { id: 4, message: "Same here! Keep in touch." },
          { id: 5, message: "Will do!" }
        ]
      }
    ]
}

  export const notificationsData = [

    {
      id: 1,
       icon: HiCheckCircle,
      title: 'FinancialApp Project',
      message: 'Congratulations, the FinancialApp project has been successfully completed!',
    },
    {
      id: 2,
      icon: HiFlag,
      title: 'HealthCare Platform',
      message: 'HealthCare Platform has reached its final testing phase!',
    },
    {
      id: 3,
      icon: HiClock,
      title: 'E-Commerce Redesign',
      message: 'E-Commerce Redesign project deadline is approaching in 2 days.',
    },
  ];
  

  export const inboxData = [
    {
      id: 1,
      src: profileimgFour ,
      sender: 'John Doe',
      time: '2 hours ago',
      subject: 'Meeting Reminder',
      message: 'Just a reminder for our meeting tomorrow at 10:00 AM. Looking forward to it!',
    },
    {
      id: 2,
      src: profileimgnine ,
      sender: 'Jane Smith',
      time: '1 day ago',
      subject: 'Project Update',
      message: 'The client provided feedback on the recent project. Please check the updated document for more details.',
    },
  ];
  

  export const tasksList = [
    {
      id: 1,
      Task: 'Create Landing Page Wireframe',
      Status: 'Not Started',
      Assigned: 'Miral',
      project: 'Marketing Website Redesign'
    },
    {
      id: 2,
      Task: 'Develop Blog Post Template',
      Status: 'Working',
      Assigned: 'John',
      Project: 'Content Management System'
    },
    {
      id: 3,
      Task: 'Implement Stripe Payment Gateway',
      Status: 'Done',
      Assigned: 'Sara',
      Project: 'E-commerce Platform'
    },
    {
      id: 4,
      Task: 'Optimize Mobile App Performance',
      Status: 'Not Started',
      Assigned: 'David',
      Project: 'Mobile App Revamp'
    },
    {
      id: 5,
      Task: 'Integrate Google Maps API',
      Status: 'In Review',
      Assigned: 'Emma',
      Project: 'Location-Based Services'
    }
  ];
  

  
/********Profile data */


export const profileData = [
  { day: 'Monday', clients: 2},
{ day: 'Tuesday', clients: 4 },
{ day: 'Wednesday', clients: 8 },
{ day: 'Thursday', clients:10 },
{ day: 'Friday', clients: 4 },
{ day: 'Saturday', clients: 6 },
{ day: 'Sunday', clients: 8 },
];
export const earnedData = [
  { day: 'Monday', $: 350 },
{ day: 'Tuesday', $: 400 },
{ day: 'Wednesday', $: 500 },
{ day: 'Thursday', $:580 },
{ day: 'Friday', $: 700 },
{ day: 'Saturday', $: 420 },
{ day: 'Sunday', $: 300 },
];

/* Events data */

export const EventsList = [
  {
    date:"28 Oct",
    day:'Monday',
    events: [
      {
        id:1,
        title:'User Journey Mapping Session',
        username:'Emily R.',
        image:profileimgFive,
        clock:'10:00',
        type:'Online',
        color:'blue'

      },
      {
        id:2,
        title:'Wireframes creatiion',
        username:'John Dave',
        image:profileimgten,
        clock:'02:00',
        type:'Offline',
        color:'red'

      },
    ]

  },

  {
    date:"04 Nov",
    day:'Monday',
    events: [
      {
        id:1,
        title:'User Journey Mapping Session',
        username:'Albert C.',
        image:profileimgtwo,
        clock:'10:00',
        type:'Online',
        color:'purple'
      },
      {
        id:2,
        title:'Wireframes creatiion',
        username:'Thomas G.',
        image:profileimgFour,
        clock:'02:00',
        type:'Offline',
        color:'green'


      },
    ]

  },

]


   // Notifications data array
   export const notifications = [
    { image: profileimgFive, title: 'Client provided feedback on the design', message: "'The layout is perfect! Thank you for the effort!'" },
    { image: profileimgnine, title: 'Project deadline update', message: "'Please ensure completion by the end of the month.'" },
    { image: profileimgthree, title: 'New task assigned', message: "'Can you add hover effects to the menu items?'" },
    { image: profilePic, title: 'Client reviewed the prototype', message: "'Amazing transitions! Just a few color tweaks needed.'" },
];