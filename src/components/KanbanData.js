import ListAltIcon from "@mui/icons-material/ListAlt";
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import PreviewIcon from '@mui/icons-material/Preview';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';

export const CandidatesData = [
  {
    id: "1",
    ticket: "TASK-97651",
    task: "Develop wireframes for the main page of the UI design, considering the placement of key elements, navigation structure, and overall visual hierarchy",
    assigned_To: 'Madhu',
    assignee: 'Joseph',
    Status: 'To-do',
    priority: 'Low',
    due_Date: "25-July-2023",
  },
  {
    id: "2",
    ticket: "TASK-25656",
    task: "Design homepage wireframe: Create a wireframe for the homepage layout, incorporating the main components and navigation structure",
    assigned_To: 'Rahul',
    assignee: 'Joseph',
    Status: 'To-do',
    priority: 'Low',
    due_Date: "26-July-2023",
  },
  {
    id: "3",
    ticket: "TASK-32342",
    task: "Implement responsive design for product listing page: Develop responsive styles for the product listing page to ensure optimal display on different devices and screen sizes.",
    assigned_To: 'John',
    assignee: 'Joseph',
    Status: 'To-do',
    priority: 'Low',
    due_Date: "27-July-2023",
  },
  {
    id: "4",
    ticket: "TASK-44537",
    task: "Refactor CSS code for header component: Review and optimize the CSS code for the header component to improve maintainability and performance.",
    assigned_To: 'Mila',
    assignee: 'Joseph',
    Status: 'Done',
    priority: 'High',
    due_Date: "23-Aug-2023",
  },
  {
    id: "5",
    ticket: "TASK-59724",
    task: "Create user registration form: Design and implement a user registration form with appropriate input fields and validation, considering usability and accessibility standards.",
    assigned_To: 'Binu',
    assignee: 'Joseph',
    Status: 'In Progress',
    priority: 'Medium',
    due_Date: "05-Sep-2023",
  },
  {
    id: "6",
    ticket: "TASK-87651",
    task: "Develop designs for the main page of the UI design, considering the placement of key elements, navigation structure, and overall visual hierarchy",
    assigned_To: 'Madhu',
    assignee: 'Joseph',
    Status: 'To-do',
    priority: 'High',
    due_Date: "25-July-2023",
  },
  {
    id: "7",
    ticket: "TASK-90656",
    task: "Create login page: Create a wireframe for the homepage layout, incorporating the main components and navigation structure",
    assigned_To: 'Rahul',
    assignee: 'Joseph',
    Status: 'To-do',
    priority: 'Medium',
    due_Date: "26-July-2023",
  },
  {
    id: "8",
    ticket: "TASK-76542",
    task: "Research upon responsive design for product listing page: Develop responsive styles for the product listing page to ensure optimal display on different devices and screen sizes.",
    assigned_To: 'John',
    assignee: 'Joseph',
    Status: 'To-do',
    priority: 'High',
    due_Date: "27-July-2023",
  },
  {
    id: "9",
    ticket: "TASK-46547",
    task: "Refactor the logic of registration: Review and optimize the CSS code for the header component to improve maintainability and performance.",
    assigned_To: 'Mila',
    assignee: 'Joseph',
    Status: 'Done',
    priority: 'Medium',
    due_Date: "23-Aug-2023",
  },
  {
    id: "10",
    ticket: "TASK-12624",
    task: "Create user registration form: Design and implement a user registration form with appropriate input fields and validation, considering usability and accessibility standards.",
    assigned_To: 'Binu',
    assignee: 'Joseph',
    Status: 'In Progress',
    priority: 'Low',
    due_Date: "05-Sep-2023",
  },
];


export const columnsFromBackend = {
  "column1": {
    title: 'To-Do',
    items: CandidatesData,
    icon: <ListAltIcon style={{
      color: "blue",
  }}/>
  
  },
  "column2": {
    title: 'In Progress',
    items: [],
    icon: <HourglassBottomIcon style={{
      color: "#ffbf00",
  }}/>
  
  },
  "column3": {
    title: 'Testing',
    items: [],
    icon: <PreviewIcon style={{
      color: "#800080",
  }}/>

  },
  "column4": {
    title: 'Done',
    items: [],
    icon: <LibraryAddCheckIcon style={{
      color: "#32CD32",
  }}/>

  },
};