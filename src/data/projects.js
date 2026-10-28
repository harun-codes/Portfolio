
export const projects = [
  // Project 1: Bazar Dor
  {
    slug: "bazar-dor",
    title: "বাজার দর",
   image: "/projects/bazar-dor-new.png",

    shortDescription:
      "A responsive product price tracking platform that helps users explore daily essential product prices, compare price changes, browse categories, and manage their accounts.",

    description:
      "বাজার দর is a full-stack web application designed to make essential product prices easier to explore. Users can browse products through category-based navigation, identify price increases and decreases, and sort products by price. The application also includes secure user authentication, protected pages, profile management, and social sign-in through Google and GitHub. Its responsive interface provides a consistent experience across mobile, tablet, and desktop devices.",

    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "Better Auth",
      "MongoDB",
      "MongoDB Atlas",
      "Google OAuth",
      "GitHub OAuth",
    ],

    liveUrl: "https://bazar-dor-weld.vercel.app/",
    clientRepoUrl: "https://github.com/harun-codes/Bazar-Dor",

    challenges: [
      "Integrating email/password authentication with Google and GitHub sign-in while supporting protected user-specific pages.",
      "Creating responsive product cards, category navigation, and price-sorting functionality for an intuitive browsing experience.",
      "Connecting user profile management and authentication states with the application's database and interface.",
    ],

    improvements: [
      "Introduce historical price charts to help users understand price movements over time.",
      "Add price alerts and watchlists so users can monitor products they care about.",
      "Expand product coverage and improve price comparison and filtering capabilities.",
    ],
  },

  // Project 2: FITLOG
  {
    slug: "fitlog",
    title: "FITLOG",
   image: "/projects/fitlog-new.png",

    shortDescription:
      "A workout planning application where users can explore exercises, review detailed workout instructions, organize daily plans, and save favorite workouts.",

    description:
      "FITLOG is a workout management application built with Next.js, React, and TypeScript. It provides a workout library covering different muscle groups, with information about equipment, duration, calories, ratings, difficulty, sets, and repetitions. Users can view detailed workout instructions, add exercises to their daily plan, mark workouts as completed, and save favorites. Browser LocalStorage preserves workout plans and saved workouts across page refreshes.",

    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "REST API",
      "LocalStorage",
      "React Icons",
      "React Toastify",
    ],

    liveUrl: "https://fit-log-nine-ebon.vercel.app/",
    clientRepoUrl: "https://github.com/harun-codes/Fit-Log",

    challenges: [
      "Managing workout selections, saved favorites, and completion status across multiple application views.",
      "Persisting workout plans and saved items with LocalStorage so user selections remain available after refreshing the browser.",
      "Presenting detailed workout information and instructions through a clear, responsive interface.",
    ],

    improvements: [
      "Add user accounts and cloud synchronization to make workout plans accessible across devices.",
      "Introduce workout history, progress charts, and weekly activity summaries.",
      "Add customizable training schedules and personal fitness goals.",
    ],
  },

  // Project 3: DevStack
  {
    slug: "devstack",
    title: "DevStack",
    image: "/projects/devstack-new.png",

    shortDescription:
      "An interactive technology discovery application that lets developers explore technologies and build a personalized technology stack.",

    description:
      "DevStack is a responsive React application that helps users explore different technologies and assemble a personal technology stack. Each technology card presents details such as its name, icon, category, difficulty level, rating, badges, and description. Users can add technologies to their stack, review the selected items, and remove individual technologies. Interactive toast notifications provide immediate feedback when the stack changes. The project demonstrates component-based development, TypeScript, state management, and reusable UI design.",

    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "DaisyUI",
      "React Toastify",
      "React Icons",
    ],

    liveUrl: "https://dev-stack-project-delta.vercel.app/",
    clientRepoUrl: "https://github.com/harun-codes/DevStack-Project",

    challenges: [
      "Managing the selected technology stack and keeping the displayed item count synchronized with user actions.",
      "Building reusable technology cards that present different categories, ratings, difficulty levels, and badges consistently.",
      "Providing clear interaction feedback when technologies are added or removed from the personal stack.",
    ],

    improvements: [
      "Add search, category filters, and sorting to make technology discovery easier.",
      "Introduce LocalStorage persistence so users can retain their selected stack after refreshing the page.",
      "Add technology recommendations and stack-sharing functionality.",
    ],
  },
];
