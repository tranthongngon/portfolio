import "./style.scss";

export type props = {
  img: string;
  name: string;
  respon: string;
  techs: string[];
  link: string;
  color: string;
};

export default function Project(props: props) {
  return (
    <div className="project__wrap">
      <div className="container">
        <div className="project__content">
          <div className="project__title">
            <h4> {props.name} </h4>
          </div>
          <div
            className="project__text"
            style={{ backgroundImage: `url(${props.img})` }}
          >
            <div className="project__text-wrap">
              <p className="project__text-res"> {props.respon} </p>
              <div className="project__text-tech">
                {props.techs.map((tech) => (
                  <span
                    className="project__text-item"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a href={props.link} className="project__text-btn" target="_blank" style={{backgroundColor: props.color}}>
                View more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
