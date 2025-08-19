
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import jeetuImg from "./assets/images/jeetu.jpeg";
import Amansir from "./assets/images/amansir.jpeg";

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Suraj Khonde",
  title: "Hi all, I'm Suraj",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web  applications with JavaScript / Reactjs / Nodejs  and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1fR1ELy2vIatPAxyMGqouBZioUvXirv04/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SurajKhonde",
  linkedin: "https://www.linkedin.com/in/surajrkhonde/",
  gmail: "surajrkhonde@gmail.com",
  medium: "https://medium.com/@surajrkhonde",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as  AWS "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "Tailwindcss",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "NextJs",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },

    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "VTU University",
      logo: require("./assets/images/VTU-Logo-250x250-1.webp"),
      subHeader: "Mechanical Engineer",
      duration: "September 2013 - Jan 2018",
      desc: "Completed a Bachelor's degree in Mechanical Engineering with hands-on experience in design, thermodynamics, and project management. Developed strong analytical and problem-solving skills while working on academic and industrial projects.",
      descBullets: [
        "Designed and analyzed mechanical components using CAD software, improving efficiency and reducing material usage.",
        "Led a team project on renewable energy solutions, presenting findings at a university-level technical symposium."
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Rect,NextJs", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend/Node",
      progressPercentage: "70%"
    },
    {
      Stack: "Depolyment ",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "MERN Stack developer",
      company: "Technoloader Pvt Ltd - Blockchain Development Company",
      companylogo: require("./assets/images/technoloader.png"),
      date: "May 2024 – July 2025",
      desc: "I made significant improvements to a web application, reducing its size by 40% and cutting server response times from 25ms to 8ms. By optimizing performance, I helped ensure the app became faster, smoother, and more responsive, directly enhancing the user experience.",
      descBullets: [
      "Faster Load Times: I made the app load and update much faster by saving data it uses often, so it feels super quick and responsive.",
      "Smoother Experience: I got rid of annoying delays by making sure everything behind the scenes runs faster, so the app feels seamless and smooth.",
      "Better Data Handling: I made the app more efficient by organizing how it gets and updates data, which lowered server costs and kept everything running smoothly without unnecessary strain."
      ]
    },
    {
      role: "MERN Stack Engineer",
      company: "Avisirah Technologies Pvt Ltd ",
      companylogo: require("./assets/images/avrish.jpg"),
      date: "March 2022 – Feb 2024",
      desc: "I worked as a Junior Developer for 2 years, where I was part of a team building web apps for college students. It was a great learning experience where I got hands-on with both frontend and backend development. I helped create tools like admin panels and customer-facing websites based on what the users needed, all while making the experience smoother and more efficient.",
      descBullets: ['Built Full-Stack Applications: Worked on projects that helped students by developing both the front-end and back-end of web apps.',
        "Documented APIs: Learned how to use Swagger to write clear and easy-to-understand API documentation, helping teams work better together.",
        "Created Reusable Components: Designed small parts of the app that could be used across different sections, speeding up development and keeping things consistent."
                ]
           
    
    },
    {
      role: "Financial Advisor -Equity & Bond Investments",
      company: "Aditya Birla Capital",
      companylogo: require("./assets/images/AditaB.jpeg"),
      date: "Jan 2019 – Feb 2022",
      desc: "As a Financial Advisor at Aditya Birla Capital, I provided expert advice on equity and bond investments, helping clients achieve their financial goals. I managed a portfolio of over 33 clients, and successfully brought in more than 10 new clients. My role also involved creating detailed research reports on financial securities to help clients make informed investment decisions.",
      descBullets: [
    "Managed a diverse portfolio of over 33 clients, advising them on investment opportunities in equity and bonds.",
    "Onboarded more than 10 new clients, expanding the customer base and building long-term relationships.",
    "Created in-depth research reports on financial securities, providing clients with valuable insights to help them achieve their financial goals."
  ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/dyntech.png"),
      projectName: "Dyntech",
      projectDesc: "A trading platform that helps clients trade cryptocurrencies and assets seamlessly, providing a secure and user-friendly experience.",
      footerLink: [
        {
          name: "Dyntech",
          url: "https://dynamic.dyntech.io/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/mahadefi.png"),
      projectName: "mahadefi",
      projectDesc: "Madefi is a staking platform that helps clients with staking and operates as a centralized contract-based platform, featuring an automated system that handles all blockchain transactions without human interference",
      footerLink: [
        {
          name: "Mahadefi",
          url: "http://www.mahadefi.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};





// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 7348887772",
  email_address: "surajrkhonde@gmail.com"
};

const testimonialSection = {
  display: true,
  title: "Professional Recommendations",
  subtitle: "Endorsements from teammates & peers",
  testimonialCards: [
    {
      title: "Aman Faridi",
      description: "Excellent Developer! Delivered the project on time and exceeded expectations.",
      image:Amansir,
      imageAlt: "Aman Faridi",
      footer: [
        {
          url: "https://www.linkedin.com/in/aman-faridi-712402232/",
          name: "Read more on LinkedIn"
        }
      ]
    },
    {
      title: "Jeetu Kumawat",
      description:
        "He’s not only a great developer, but a teammate who genuinely cares.",
      image: jeetuImg, 
      imageAlt: "Jeetu Kumawat",
      footer: [
        {
          url: "https://www.linkedin.com/in/jeetu-kumawat-9a3061184/",
          name: "Read more on LinkedIn"
        }
      ]
    }
  ]
};


const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  isHireable,
  resumeSection,
  testimonialSection
};
