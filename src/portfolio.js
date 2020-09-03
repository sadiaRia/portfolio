
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Sadia Chowdhury",
  title: "Hi, I'm Sadia",
  subTitle: "A Software Developer having an experience of building Web and Mobile applications with Java / PHP / JavaScript / React.js / Node.js / React Native and other programming languages, libraries and frameworks.",
  resumeLink: "https://drive.google.com/file/d/1wK_2tdGvDQtssTGI9aMvGS415yAq6Vx5/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/sadiaRia",
  linkedin: "https://www.linkedin.com/in/sadia-chowdhury-ria-75a2b69b/",
  gmail: "sadia.ria4@gmail.com",
  facebook: "https://www.facebook.com/riachowdhury11/",
  // medium: "https://medium.com/@sadiaria4",
  // stackoverflow: "https://stackoverflow.com/users/13207323/sadia-chowdhury"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡Experience of building MERN (MongoDB, Express.js, React.js, Node.js) Stack application."),
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡Experience of developing Mobile application with React-Native."),
    emoji("⚡Experience of developing SPA with React.js."),
    emoji("Using Hooks and Context-API."),
    emoji("⚡Back-end API structuring with Node.js and MongoDB."),
    emoji("⚡Working Experience with node scheduler to schedule jobs."),
    emoji("⚡Good knowledge of Git and GitHub for version control."),
    emoji("⚡Good understanding of Agile and other software development methodologies."),
    emoji("⚡Integration of third party services such as GoogleAPIs / ZoomAPIs / Firebase / Vimeo / SSL wireless sms APIs etc.")
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: require("./assets/icons/js.png")
    },
    {
      skillName: "node.js",
      fontAwesomeClassname: require("./assets/icons/node.png")
    },

    {
      skillName: "React.js / Native",
      fontAwesomeClassname: require("./assets/icons/react.png")
    },
    {
      skillName: "Redux",
      fontAwesomeClassname: require("./assets/icons/redux.png")
    },
    {
      skillName: "Jave",
      fontAwesomeClassname: require("./assets/icons/java.png")
    },
    {
      skillName: "Java spring",
      fontAwesomeClassname: require("./assets/icons/spring.png")
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: require("./assets/icons/php.png")
    },
    {
      skillName: "ASP.Net",
      fontAwesomeClassname: require("./assets/icons/asp.png")
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: require("./assets/icons/mongo.png")
    },
    {
      skillName: "MySql",
      fontAwesomeClassname: require("./assets/icons/mysql.png")
    },

    {
      skillName: "Python",
      fontAwesomeClassname: require("./assets/icons/python.png")
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: require("../src/assets/icons/firebase.png")
    },
    {
      skillName: "Android",
      fontAwesomeClassname: require("./assets/icons/android.png")
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Nodejs",
      progressPercentage: "80%"
    },

    {
      Stack: "ReactJs & Native",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Java",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    },
    {
      Stack: "PHP",
      progressPercentage: "65%"
    },
    {
      Stack: "ASP.Net",
      progressPercentage: "50%"
    }

  ]

  // viewSkillBars: true, //Set it to true to show Proficiency Section
  // experience: [
  //   {
  //     Stack: "Frontend/Design",  //Insert stack or technology you have experience in
  //     progressPercentage: "90%"  //Insert relative proficiency in percentage
  //   },
  //   {
  //     Stack: "Backend",
  //     progressPercentage: "70%"
  //   },
  //   {
  //     Stack: "Programming",
  //     progressPercentage: "60%"
  //   }

};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Netizen It Ltd.",
      companylogo: require("./assets/images/netizen.png"),
      date: "January 2018 – July 2018",
      desc: `Worked as and Software developer on different project like "Eduman", "DWS", and "Netiworld".Eduman is school management software.Netiworld is social community community site for education.`,
      descBullets: [
        "React.js for fornt-end development",
        "Java spring, Hibernate for back-end development"
      ]
    },
    {
      role: "Software Engineer",
      company: "Tech Hive Ltd.",
      companylogo: require("./assets/images/eduhive.png"),
      date: "April 2019 – Present",
      desc: `Worked as a Full-stack (web & android) developer on "EduHive" and "TextHive" project. EduHive is a product of Tech Hive Ltd, which is one of the leading e-learning platform in Bangladesh. TextHive is a Bulk SMS service`,
      descBullets: [
        "Reactjs for front-end web development",
        "Nodejs, MongoDB and Expressjs for back-end development",
        "React Native for android app development"
      ]
    }
  ]
};


const education = {
  viewEducation: true, //Set it to true to show workExperiences Section
  experience: [
    {
      degree: "Secondary School Certificate (S.S.C)",
      institute: "Savar Cantonment Public School & College",
      group: "Group - Science",
      result: "GPA - 4.75  (out of  5)",
      board: "Board - Dhaka",
      year: "Passing year - 2010",
    },
    {
      degree: "Higher secondary Certificate (H.S.C)",
      institute: "Savar Cantonment Public School & College",
      group: "Group - Science",
      result: "GPA - 5.00 (out of  5)",
      board: "Board - Dhaka",
      year: "Passing year - 2012",
    },
    {
      degree: "Bachelor of Science (BSc)",
      institute: "BRAC University",
      group: "Department - Computer Science & Engineering",
      result: "CGPA: 3.43 (out of  4)",
      year: "Passing year - September 2017",
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some large scale projects that I have contributed to",
  // projects: [
  //   {
  //     image: require("./assets/images/saayaHealthLogo.webp"),
  //     link: "http://saayahealth.com/"
  //   },
  //   {
  //     image: require("./assets/images/nextuLogo.webp"),
  //     link: "http://nextu.se/"
  //   }
  // ]
  // title: "Big Projects",
  // subtitle: "Some large scale projects that I have contributed to",
  projects: [

    {
      image: require("../src/assets/icons/eduhive.png"),
      link: "https://eduhive.com.bd/"
    },
    {
      image: require("../src/assets/icons/eduhiveapp.png"),
      link: "https://play.google.com/store/apps/details?id=com.techhive.eduhive"
    },
  ]

};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+8801688211524",
  email_address: "sadia.ria4@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName: "twitter"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo, twitterDetails, education };
