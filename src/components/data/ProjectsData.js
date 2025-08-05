// src/data/projectsData.js

const projects = [
  {
    id: 'project1',
    name: 'Portfolio Website',
    shortDesc: 'A personal portfolio built with React and Bootstrap.',
    longDesc: [
      {
        emoji: '📄',
        title: 'Overview',
        content: [
          'This portfolio showcases my skills, projects, and contact details.',
          'It’s fully responsive and animated using Framer Motion.',
          'Includes smooth page transitions and clean UI using Bootstrap.'
        ]
      },
      {
        emoji: '🔧',
        title: 'Tech Stack',
        content: [
          'React – For building the component-based UI',
          'Bootstrap – For responsive grid and UI elements',
          'Framer Motion – For elegant animations and transitions'
        ]
      },
      {
        emoji: '🎯',
        title: 'Purpose & Use Case',
        content: [
          'Serves as a digital resume to showcase my web development work.',
          'Ideal for job applications and freelance proposals.'
        ]
      }
    ],
    image: '/images/2.jpg',
    image1: '/images/portfolio.png',
    link: 'https://vigz-portfolio-web.vercel.app/',
    technologies: ['React Js', 'Bootstrap', 'Framer Motion', 'HTML', 'CSS']
  },
  {
    id: 'project2',
    name: 'Delux Supermarket',
    shortDesc: '👉 "Delux Supermarket" is a demo template online shopping platform',
    longDesc: [
      {
        emoji: '📄',
        title: 'Overview',
        content: [
          'Delux Supermarket is a comprehensive e-commerce template simulating a real-world supermarket store.',
          'It features products across categories like groceries, utensils, and toys with intuitive categorization.'
        ]
      },
      {
        emoji: '🔍',
        title: 'Key Features',
        content: [
          'Attractive banners, category sections, and deals like Flat 10% OFF.',
          'Fully responsive layout ensures usability across devices.',
          'Navigation is clean and user-friendly.'
        ]
      },
      {
        emoji: '🔧',
        title: 'Tech Stack',
        content: [
          'HTML – Page structure and content layout',
          'CSS – Styling and responsive design',
          'JavaScript – For interactions and navigation logic',
          'Bootstrap – For layout, grid, and UI components'
        ]
      }
    ],
    image: '/images/2.jpg',
    image1: '/images/Delux.png',
    link: 'https://delux-supermarket.vercel.app/',
    technologies: ['HTML', 'CSS', 'Javascript', 'Bootstrap']
  },
  {
    id: 'project3',
    name: 'Typing Speed Test',
    shortDesc: '👉 A responsive Typing Speed Test web app that helps users measure their typing speed and accuracy in real time',
    longDesc: [
      {
        emoji: '📄',
        title: 'Overview',
        content: [
          'This app tests typing speed and accuracy with real-time metrics.',
          'Great tool for students and professionals to improve typing efficiency.'
        ]
      },
      {
        emoji: '🔍',
        title: 'Key Features & Analysis',
        content: [
          'Real-time WPM and accuracy updates as user types.',
          'Highlights correct words in green, errors in red.',
          'Auto-start timer on typing and reset functionality.'
        ]
      },
      {
        emoji: '🔧',
        title: 'Tech Stack',
        content: [
          'HTML – For layout and structure.',
          'CSS – Styling for readability and responsiveness.',
          'JavaScript – DOM manipulation, logic, and real-time calculations.'
        ]
      }
    ],
    image: '/images/2.jpg',
    image1: '/images/typing.png',
    link: 'https://typing-speed-test-two-topaz.vercel.app/',
    technologies: ['HTML', 'CSS', 'Javascript']
  },
  {
    id: 'project4',
    name: 'Todo App',
    shortDesc: '👉 A simple and interactive To-Do List web app built using HTML, CSS, and JavaScript.',
    longDesc: [
      {
        emoji: '📄',
        title: 'Overview',
        content: [
          'A lightweight task management tool for organizing daily activities.',
          'Built using HTML, CSS, and vanilla JavaScript.'
        ]
      },
      {
        emoji: '🔍',
        title: 'Key Features & Analysis',
        content: [
          'Task creation & deletion with a single click.',
          'Mark tasks as completed with visual strikethrough.',
          'Responsive layout and intuitive UI.',
          'No external libraries – just raw DOM logic.'
        ]
      },
      {
        emoji: '🔧',
        title: 'Tech Stack',
        content: [
          'HTML5 – Semantic structure.',
          'CSS3 – Styling and responsiveness.',
          'JavaScript (ES6) – Task logic and state toggling.'
        ]
      },
      {
        emoji: '🎯',
        title: 'Use Cases',
        content: [
          'Helps users track daily tasks.',
          'Perfect for beginners to learn DOM and event handling.'
        ]
      }
    ],
    image: '/images/2.jpg',
    image1: '/images/todo.png',
    link: 'https://to-do-app-using-html-css-js-theta.vercel.app/',
    technologies: ['HTML', 'CSS', 'Javascript']
  },
  {
    id: 'project5',
    name: 'Admin Panel UI',
    shortDesc: '👉 A clean and responsive Admin Panel dashboard built using only HTML and CSS.',
    longDesc: [
      {
        emoji: '📄',
        title: 'Overview',
        content: [
          'This project is a static Admin Panel template that mimics real-world dashboards.',
          'It features multiple sections like sidebar navigation, top bar, widgets, and cards.',
          'Ideal for showcasing HTML & CSS layout skills and UI design understanding.'
        ]
      },
      {
        emoji: '🔍',
        title: 'Key Features & Design',
        content: [
          'Sidebar Navigation: Responsive vertical menu with icons and labels.',
          'Top Navbar: Includes profile section, search bar, and notifications layout.',
          'Widgets: Displays metrics like total users, sales, performance stats.',
          'Layout: Grid-based card layout for stats, charts, or quick links.'
        ]
      },
      {
        emoji: '🔧',
        title: 'Tech Stack',
        content: [
          'HTML5 – For clean, semantic page structure.',
          'CSS3 – For layout design, responsiveness, and styling.',
          'No frameworks or JS used – pure CSS for layout control and responsiveness.'
        ]
      },
      {
        emoji: '🎯',
        title: 'Use Cases & Learning Outcome',
        content: [
          'Great for UI/UX practice and building layout skills.',
          'Can serve as a base template for future dynamic admin dashboards.',
          'Demonstrates ability to build multi-section UI without JavaScript.'
        ]
      }
    ],
    image: '/images/2.jpg',
    image1: '/images/admin.png',
    link: 'https://demo-adminpanel-std.vercel.app/',
    technologies: ['HTML', 'CSS']
  }
  
];

export default projects;
