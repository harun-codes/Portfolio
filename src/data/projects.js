
export const projects = [

  // Project 1: Studio Space
  {
    slug: "studio-space",
    title: "StudioSpace",
    image: "/projects/studio-space.png",

    screenshots: [
      "/projects/studiospace-explore.png",
      "/projects/studiospace-booking.png",
    ],

    shortDescription:
      "A full-stack creative workspace booking platform where users can discover and reserve studios while studio owners manage their listings and bookings.",

    description:
      "StudioSpace is a full-stack creative workspace-sharing platform that connects studio owners with individuals and professionals looking for creative spaces. Users can explore photography studios, music studios, and other creative workspaces, view detailed studio information, and make reservations based on their preferred dates and times. Studio owners can add, update, and manage their studio listings. The platform features secure authentication with Better Auth and Google OAuth, JWT-protected backend APIs, MongoDB database integration, image uploads through ImgBB, and a booking management system with reservation conflict prevention. Its responsive interface supports both light and dark themes, providing a convenient experience across devices.",

    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Lucide React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MongoDB Atlas",
      "Better Auth",
      "Google OAuth 2.0",
      "JWT",
      "ImgBB API",
      "REST API",
    ],

    liveUrl:
      "https://studio-space-client-gules.vercel.app/",

    clientRepoUrl:
      "https://github.com/harun-codes/StudioSpace-Client",

    backendRepoUrl:
      "https://github.com/harun-codes/StudioSpace-Server",

    features: [
      "Explore creative studios by category and availability.",
      "Advanced search, filtering, and sorting.",
      "Detailed studio information with pricing, amenities, and location.",
      "Secure authentication with Better Auth and Google OAuth.",
      "Create, update, and manage studio listings.",
      "Upload studio images using ImgBB.",
      "Book studios with date and time selection.",
      "Manage reservations and cancel pending bookings.",
      "Prevent overlapping confirmed reservations.",
      "JWT-protected backend API operations.",
      "Responsive interface with light and dark themes.",
    ],

    challenges: [
      "Implementing secure authentication and protecting user-specific backend operations using Better Auth and JWT.",
      "Developing a booking system that checks existing confirmed reservations to prevent overlapping booking schedules.",
      "Managing studio listings, image uploads, availability, and booking information across the frontend and backend.",
      "Building a responsive studio discovery and management interface with advanced search, filtering, and sorting functionality.",
    ],

    improvements: [
      "Integrate an online payment gateway to support secure reservation payments.",
      "Introduce studio reviews and ratings to help users evaluate creative workspaces.",
      "Add booking notifications and email confirmations for users and studio owners.",
      "Develop an analytics dashboard for studio owners to monitor bookings and workspace performance.",
    ],
  },

  // Project 2: Bazar Dor
  {
    slug: "bazar-dor",
    title: "বাজার দর",
    image: "/projects/bazar-dor-new.png",

    
    screenshots: [
      "/projects/bazardor-category.png",
      "/projects/bazardor-details.png",
    ],

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
    features: [
      "Daily Market Price Dashboard",
      "Price Movement Indicators",
      "Category-Based Product Browsing",
      "Price Sorting (Default, Low to High, High to Low)",
      "Email and Password Authentication",
      "Google and GitHub OAuth Integration",
      "Protected User Routes",
      "User Profile Management",
      "Responsive Design for Mobile, Tablet, and Desktop",
    ],

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

  // Project 3: FITLOG
  {
    slug: "fitlog",
    title: "FITLOG",
    image: "/projects/fitlog-new.png",

    screenshots: [
      "/projects/fitlog-deatils.png",
      "/projects/fitlog-paln.png",
    ],

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

    features: [
      "Workout Library with Muscle Group Categories",
      "Detailed Exercise Information and Instructions",
      "Today's Workout Planning",
      "Workout Completion Tracking",
      "Add and Remove Planned Workouts",
      "Save Favorite Workouts for Later",
      "Persistent Data Management with LocalStorage",
      "REST API Integration for Workout Data",
      "Responsive Design for Mobile, Tablet, and Desktop",
    ],
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

];
