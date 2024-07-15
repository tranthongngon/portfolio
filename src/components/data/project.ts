import { loadImage } from "../../utils";

export interface IProject {
  name: string;
  thumbnail: string;
  color: string;
  color_2: string;
  techs: string[];
  resppon: string;
  link: string;
}

export const dataProject: IProject[] = [
  {
    name: "Editor-X blog template",
    thumbnail: loadImage("editor.png"),
    color: "#265073",
    color_2: "#405D72",
    techs: ["HTML", "CSS", "Javascript", "Jquery", "OwlCarousel"],
    resppon: "Successfully build a responsive website template.",
    link: "https://editor-x-blog.netlify.app",
  },
  {
    name: "My Personal Diary Keeper",
    thumbnail: loadImage("diary.png"),
    color: "#561C24",
    color_2: "#A91D3A",
    techs: [
      "React",
      "Material UI",
      "Emotion",
      "Redux",
      "Google firebase",
      "React quill",
      "Masonry",
      "CSS",
      "Javascript",
    ],
    resppon:
      "Build a web app with the function create, read, update and delete diary. upload image for gallery. Login and register with github and google.",
    link: "https://diary-demo.netlify.app",
  },
  {
    name: "Website construction",
    thumbnail: loadImage("construct.png"),
    color: "#141E46",
    color_2: "#10439F",
    techs: [
      "React",
      " Material UI",
      " Emotion",
      " SCSS",
      " CSS",
      " Javascript",
      " Webpack",
      " Babel",
    ],
    resppon:
      "Design the theme, choose framework, setup project, deploy to netlify.",
    link: "https://construct2024.netlify.app/build",
  },
  {
    name: "Forter blog magazine",
    thumbnail: loadImage("forter.png"),
    color: "#12372A",
    color_2: "#003C43",
    techs: ["HTML", "CSS", "Javascript", "Jquery", "OwlCarousel", "PHP"],
    resppon: "Convert interface from design file to website interface. Synthesize the code, edit the interface of each member.Coordinate with the Backend to complete the website.",
    link: "https://themeproducers.com/forter/default",
  },
  {
    name: "Web app data Visualize",
    thumbnail: loadImage("visualize.png"),
    color: "#352F44",
    color_2: "#5F374B",
    techs: [
        "Angular",
        "Typescript",
        "React",
        "Antd",
        "SCSS",
        "Java",
        "MongoDB",
        "Python",
        "C++",
        "Webpack",
        "iNet-core",
        "Jquery"
    ],
    resppon: "Create, view, update, delete, publish an visualize corresponding to each hart type. Visualize data with each corresponding dataset, publish chart as template.",
    link: "https://analytics-dev.inetcloud.vn/analytics/vinaco/visualize/page/index.cpx",
  },
  {
    name: "Web app data Analytic",
    thumbnail: loadImage("analytic.png"),
    color: "#092635",
    color_2: "#1B3C73",
    techs: [
        "Angular",
        "Typescript",
        "React",
        "Antd",
        "SCSS",
        "Java",
        "MongoDB",
        "Python",
        "C++",
        "Webpack",
        "iNet-core",
        "Jquery"
    ],
    resppon: "Build frontend. Analyze business processes. Coordinate with backend to display data. Get single analytics library code from open source apache echarts.",
    link: "https://analytics-dev.inetcloud.vn/analytics/vinaco/analytics/page/index.cpx",
  },
  
];
