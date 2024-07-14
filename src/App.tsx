import ReactFullpage from "@fullpage/react-fullpage";
import "./styles.scss";
import "./assets/scss/common.scss";
import Header from "./layout/header/Header";
import Home from "./components/home/Home";
import { dataProject } from "./components/data";
import Project from "./components/projects/Project";

const App = () => {
  return (
    <div className="site__wrapper">
      <Header />
      <ReactFullpage
        debug={true}
        credits={{}}
        anchors={["home", "project", "about", "contact"]}
        navigationTooltips={["Home", "Projects", "About", "Contact"]}
        navigation={true}
        slidesNavigation={true}
        controlArrows={false}
        licenseKey=""
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Home />
            </div>
            <div className="section section-project">
              {dataProject.map((data) => (
                <div className="slide" style={{backgroundColor: data.color}}>
                  <Project
                    name={data.name}
                    img={data.thumbnail}
                    respon={data.resppon}
                    techs={data.techs}
                    link={data.link}
                    color={data.color}
                  />
                </div>
              ))}
            </div>
            <div className="section">
              <h1>About </h1>
            </div>
            <div className="section">
              <h1>Contact</h1>
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default App;
