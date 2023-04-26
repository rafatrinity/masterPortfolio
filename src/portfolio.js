/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Trindade's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Rafael Trindade Portfolio",
    type: "website",
    url: "https://rafatrinity.github.io/masterPortfolio/",
  },
};

//Home Page
const greeting = {
  title: "Rafael Trindade",
  logo_name: "RafaelTrindade",
  nickname: "RafaTrinity",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/15rlLhGmbz2O5BbH6LbrtNEr9uP8SFnO0/view?usp=sharing",
  portfolio_repository: "https://github.com/rafatrinity/masterPortfolio",
  githubProfile: "https://github.com/rafatrinity",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/rafatrinity",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/rafatrinity",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rafatrinity/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:rafaeltrindade649@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  {
    name: "Facebook",
    link: "https://www.facebook.com/fael.crazy/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/rafaeltrindade649/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using Angular 2+ and/or react",
        "⚡ Creating application backend in Node, Express & Nest",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Angular 2+",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#DD0031",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            backgroundColor: "#ffff",
            color: "#3178c6",
          },
        },
        // {
        //   skillName: "ReactJS",
        //   fontAwesomeClassname: "simple-icons:react",
        //   style: {
        //     color: "#61DAFB",
        //   },
        // },
        {
          skillName: "Nest",
          fontAwesomeClassname: "simple-icons:nestjs",
          style: {
            color: "#E0234E",
          },
        },
        {
          skillName: "RabbitMQ",
          fontAwesomeClassname: "simple-icons:rabbitmq",
          style: {
            color: "#fe6601",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        // {
        //   skillName: "NPM",
        //   fontAwesomeClassname: "simple-icons:npm",
        //   style: {
        //     color: "#CB3837",
        //   },
        // },
        // {
        //   skillName: "Yarn",
        //   fontAwesomeClassname: "simple-icons:yarn",
        //   style: {
        //     color: "#2C8EBB",
        //   },
        // },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "beecrowd",
      iconifyClassname: "simple-icons:codecademy",
      style: {
        color: "#1F4056",
      },
      profileLink:
        "https://www.beecrowd.com.br/judge/pt/users/statistics/191713",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Centro Universitário Carioca",
      subtitle: "Computer science",
      logo_path: "unicarioca.png",
      alt_name: "UniCarioca",
      duration: "2016 - 2019",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ In addition, I took courses in advanced programming techniques, participated in programming competitions and Full Stack Development.",
        "⚡ I was a scholarship student, I won a scholarship of 100% paid by the government, that students who finish high school take a test and the best earn scholarships according to the performance in the test (ENEM).",
      ],
      website_link: "https://unicarioca.edu.br/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "2017 CertificateTeamPlace",
      subtitle: "SABFP_379508 - ICPC",
      logo_path: "acm.png",
      certificate_link:
        "https://drive.google.com/open?id=1kv07skQl6TiQskfzapiq6XqX3Sal99gb",
      alt_name: "ICPC - ACM International Collegiate Programming Contest",
      color_code: "#fff",
    },
    {
      title: "2017 CertificateTeamHonorable",
      subtitle: "SABFP_366696 - ICPC",
      logo_path: "acm.png",
      certificate_link:
        "https://drive.google.com/open?id=1Vv9jn4ZS7VXbx67vwfSQ9suZX1awa1DT",
      alt_name: "ICPC - ACM International Collegiate Programming Contest",
      color_code: "#fff",
    },
    {
      title: "Projeto tardes do saber - Blockchain para o setor público",
      subtitle: "74642637-5dad-4840-a566-605c1a97bbf6 - ECG",
      logo_path: "tce.png",
      certificate_link:
        "https://drive.google.com/file/d/1rYCF1WintbgNCABCPZfB2QCXshHVtpIC/view",
      alt_name: "Tribunal de Contas do Estado do Rio de Janeiro",
      color_code: "#263145",
    },
    {
      title: "Scrum professional certificate",
      subtitle: "JLSRRKDSPS-VVZCNCVV-YBJDWQJTDJ - Scrum Foundation",
      logo_path: "scrum.png",
      certificate_link:
        "https://drive.google.com/file/d/1cuTIahPGbA_xrlsVGj9KPzAqT-zESagu/view?usp=sharing",
      alt_name: "Scrum Foundation",
      color_code: "#ffff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "As a full-stack developer with extensive experience in the area, I have skills in using the NodeJS platform as a basis for building robust and scalable web applications. In addition, I have advanced knowledge in Angular 2+ for frontend development. I have skills in deploying applications in cloud environment, as well as configuring Kubernetes on Linux servers. I am a professional committed to the success of projects, proposing innovative solutions and technologies, as well as assisting novices with their tasks, promoting learning and team growth.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Sr Full-Stack Develper",
          company: "Britania | Philco",
          company_url: "https://britania.com.br/",
          logo_path: "britania.png",
          duration: "Sep 2021 - Mar 2023",
          location: "Rio de Janeiro, Brasil",
          description:
            "In Britania, I worked for 1 year and 7 months as a senior developer on a CRM project that used modern techniques such as micro services and mono repo, and the technologies Node JS, React, Docker and Kubernetes. I led the team in some modules of the project, proposed innovative solutions and ensured the quality of the code produced. The result was a robust and scalable CRM system, which brought significant improvements to the company and its customers.",
          color: "#152942",
        },
        {
          title: "Full-Stack Develper",
          company: "Tagme food solutions",
          company_url: "https://landing.tagme.com.br/",
          logo_path: "tagme.png",
          duration: "Jun 2020 - Aug 2021",
          location: "Rio de Janeiro, Brasil",
          description:
            "At Tagme Food Solutions, I worked as a full-stack developer in the digital menu project using NodeJS and Angular 2+. My skills included development and maintenance of functionalities both in the backend and frontend, creation of RESTful APIs, integration of third-party services and quality assurance of the code produced. The end result was a functional and successful product.",
          color: "#fd803c",
        },
        {
          title: "Devops analyst",
          company: "Eleva | Salta's group",
          company_url: "https://gruposaltaedu.com/",
          logo_path: "eleva.png",
          duration: "Sep 2020 - May 2021",
          location: "Rio de Janeiro, Brasil",
          description:
            "As a DevOps analyst, I worked in the configuration of cloud environments, optimizing the infrastructure to ensure a fast and responsive system with low cost. Implemented CI/CD methodologies, managed AMIs and the tenant using Terraform and integrated Slack for monitoring. Everything was done following infrastructure practices as code.",
          color: "#409d91",
        },
        {
          title: "technology consultant",
          company: "Avanade",
          company_url: "https://www.avanade.com/",
          logo_path: "Avanade.png",
          duration: "June 2019 - Sep 2020",
          location: "Rio de Janeiro, Brasil",
          description:
            "As a developer/consultant at Avanade, I worked on projects for various companies, including TIM. Notable achievements include creating an RPA automation system for a call center, migrating the company's database to an internal server, and developing a web app (frontend) for project registration. I used various technologies, such as AWS, Node.js, JavaScript, .NET Core, SQL, Python 3, Oracle, and Angular 8. I also worked on other projects, such as breaking down a monolith into several microservices and developing an integration API for BTG Pactual.",
          color: "#ff890d",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Developer Intern",
          company: "TCE-RJ | Court of Auditors of Rio de Janeiro",
          company_url: "https://www.tcerj.tc.br/",
          logo_path: "tce.png",
          duration: "Aug 2017 - Feb 2019",
          location: "Rio de Janeiro, Brasil",
          description:
            "During his 1 year and 7 months internship at the Tribunal de Contas do Estado do Rio de Janeiro, the software development intern worked on three projects. The first project involved developing a Web Scraper / RPA to automate user registration on a website based on a CSV table, which saved time and reduced errors caused by manual data entry.Technologies used included JavaScript, Node.js, and CronTab. The second project involved creating a static webpage in WordPress to showcase the catalog of courses, projects, and improvements made by the Tribunal de Contas.Technologies used included WordPress, SEO, and CRO. The third project was to recreate the content display system using Angular 6, Node.js, .Net Core, TFS, GIT, SQL Server, and Windows Server, but this time with dynamic features, allowing users to interact with the page and log in .",
          color: "#409d91",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Developer Students Club Member",
          company: "UniCarioca",
          company_url:
            "https://www.linkedin.com/feed/update/urn:li:activity:6379775162937536513/",
          logo_path: "unicarioca.png",
          duration: "Feb 2017 - Dez 2018",
          location: "Rio de Janeiro, Brasil",
          description:
            "Transmit and add knowledge about advanced programming techniques with the competitive objective, under the command of the professor and doctor in artificial intelligence Ricardo Pires Mesquita we set up seminars and present contents related to the classes. We participated in several competitions, including the Brazilian programming marathon (ACM-ICPC). *C++ *C *Python",
          color: "#a42c24",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "0",
      name: "Strings 🎈 ",
      createdAt: "2018-24-03T16:26:54Z",
      description:
        "Subject: Manipulation algorithms and search for patterns in strings.",
      url: "https://www.linkedin.com/pulse/aula-de-strings-rafael-trindade/",
    },
    {
      id: "1",
      name: "AnoniBus 🚌 ",
      createdAt: "2020-04-03T16:26:54Z",
      description:
        "Anonibus Project, an application to which it is intended to hold casual meetings on public transport in order to establish contact between passengers, in anonymity between users. This project is part of the evaluation of the development of distributed applications and has the support and encouragement of Professor Antonio Podgorski of UniCarioca.",
      url:
        "https://www.linkedin.com/posts/rafatrinity_projeto-anonibus-com-thamires-vasconcelos-activity-6680267598434725888-IqYO?utm_source=share&utm_medium=member_desktop",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "eu2.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    // title: "Address",
    // subtitle:
    //   "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    // avatar_image_path: "address_image.svg",
    // location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "contato",
    subtitle: "+5521982083414",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
