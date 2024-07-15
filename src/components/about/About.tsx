import "./style.scss";
import Program from "../../assets/images/program.png";
import { formatDistanceToNow } from "date-fns";
export default function About() {
  console.log(formatDistanceToNow(new Date(2020, 9, 20)));

  return (
    <div className="about__wrap">
      <div className="container">
        <div className="about__content">
          <div className="about__text">
            <p>
              Is a Frontend Developer, has experience building web applications,
              has {formatDistanceToNow(new Date(2020, 9, 20))} of experience
              using
              <strong style={{ color: "#FFDDBF" }}>
                {" "}
                Javascript, ReactJS, Typescript, HTML, CSS
              </strong>{" "}
              has skills in analyzing requirements, proposing technical
              solutions and communicating with other members of the team.
            </p>
            <p>
              Graduated from{" "}
              <strong style={{ color: "#FFDDBF" }}>
                University of Information Technology – Vietnam National
                University HCMC (2016 - 2021)
              </strong>
              , major{" "}
              <strong style={{ color: "#FFDDBF" }}>Information System</strong>.
            </p>
            <p>
              Experienced with{" "}
              <strong style={{ color: "#FFDDBF" }}>
                Jquery, SCSS, RESTful API, Angular, Docker, Webpack, Babel, Git,
                Svn, MySQL, Wordpress, Adobe XD, Figma.
              </strong>
            </p>
          </div>
          <div className="about__thumnail">
            <img src={Program} alt="ngontt" />
          </div>
        </div>
      </div>
    </div>
  );
}
