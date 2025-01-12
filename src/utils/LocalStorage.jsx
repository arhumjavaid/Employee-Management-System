const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Project Report",
        taskDescription:
          "Compile all the project data and prepare the final report.",
        taskDate: "2025-01-15",
        category: "Documentation",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Client Details",
        taskDescription: "Update the latest client information in the system.",
        taskDate: "2025-01-10",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Login Issue",
        taskDescription: "Resolve the issue preventing users from logging in.",
        taskDate: "2025-01-12",
        category: "Bug Fix",
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Design Homepage",
        taskDescription:
          "Create a new layout and design for the website homepage.",
        taskDate: "2025-01-20",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Submit Timesheet",
        taskDescription: "Submit the weekly timesheet to HR.",
        taskDate: "2025-01-09",
        category: "HR",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Test Payment Gateway",
        taskDescription:
          "Perform QA testing on the new payment gateway integration.",
        taskDate: "2025-01-18",
        category: "QA",
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update API Documentation",
        taskDescription: "Add recent updates to the API documentation.",
        taskDate: "2025-01-11",
        category: "Documentation",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Training Material",
        taskDescription:
          "Create materials for the upcoming employee training session.",
        taskDate: "2025-01-22",
        category: "Training",
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Optimize Website Performance",
        taskDescription:
          "Improve website loading speed and overall performance.",
        taskDate: "2025-01-18",
        category: "Optimization",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix CSS Issues",
        taskDescription:
          "Resolve layout issues in the mobile version of the website.",
        taskDate: "2025-01-14",
        category: "Bug Fix",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Generate Monthly Reports",
        taskDescription:
          "Generate and send monthly sales reports to the management.",
        taskDate: "2025-01-05",
        category: "Reporting",
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Conduct User Testing",
        taskDescription: "Perform user testing for the new app feature.",
        taskDate: "2025-01-17",
        category: "Testing",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Product Listings",
        taskDescription:
          "Add new products and update existing listings in the catalog.",
        taskDate: "2025-01-16",
        category: "E-commerce",
      },
    ],
  },
];

const admin = {
  id: 1,
  email: "admin@example.com",
  password: "123",
};

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees= JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    
    console.log(employees, admin);
    
}
