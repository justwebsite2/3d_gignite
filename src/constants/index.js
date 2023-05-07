import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "infographic",
      title: "Mission",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "details",
      title: "Details",
    },
    {
      id: "feedbacks",
      title: "Testimonials",
    },
    {
      id: "faq",
      title: "FAQ",
    },
  ];
  
  const services = [
    {
      title: "Quick",
      info:"Description",
      icon: web,
    },
    {
      title: "Fast",
      info:"Description",
      icon: mobile,
    },
    {
      title: "Simple",
      info:"Description",
      icon: backend,
    },
    {
      title: "Streamline",
      info:"Description",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Brainstorm",
      company_name: "Gignite",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Dec 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Development",
      company_name: "Gignite",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - April 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Development",
      company_name: "Gignite",
      icon: shopify,
      iconBg: "#383E56",
      date: "April 2023 - May 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Development",
      company_name: "Gignite",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "May 2023 - Sept 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Gignite has completely transformed the way our team collaborates and manages projects. We've seen a significant increase in productivity since implementing the platform.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      information: "lovely day",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "The adaptive project management capabilities in Gignite have made a significant difference in our ability to respond to change and ensure project success.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      information: "lovely day",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "The AI-powered meeting assistant has revolutionized our meetings, making them more focused, efficient, and productive.",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      information: "lovely day",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Streamlined Documentation",
      description:
        "Effortlessly generate project documents, maintain consistency, and save time with Gignite's automated document generation feature, simplifying the documentation process for enhanced productivity. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "AI-powered Project Intelligence",
      description:
        "Harness the power of artificial intelligence to gain insights, make informed decisions, and optimize project workflows, empowering teams with advanced project intelligence capabilities.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Enhanced Collaboration",
      description:
        "Collaborate seamlessly with team members, clients, and partners in real-time, enabling efficient communication, feedback, and collaboration for better project outcomes",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };