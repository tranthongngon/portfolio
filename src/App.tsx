import ReactFullpage from "@fullpage/react-fullpage";
import "./styles.scss";
import "./assets/scss/common.scss";
import Header from "./layout/header/Header";
import Home from "./components/home/Home";
import { dataProject } from "./components/data";
import Project from "./components/projects/Project";
import { useEffect, useState } from "react";
import About from "./components/about/About";

const App = () => {
  const [hagTag, setHagTag] = useState("#home");
  useEffect(() => {
    const href = window.location.hash;
    setHagTag(href.split("/")[0]);
    return () => {};
  }, []);
  const onLeave = (origin: any, destination: any, direction: any) => {
    setHagTag(`#${destination.anchor}`);
  };
  return (
    <div className="site__wrapper">
      <Header hagTag={hagTag} />
      <ReactFullpage
        debug={true}
        credits={{}}
        anchors={["home", "project", "about", "contact"]}
        navigationTooltips={["Home", "Projects", "About", "Contact"]}
        navigation={true}
        slidesNavigation={true}
        controlArrows={false}
        licenseKey=""
        onLeave={onLeave}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Home />
              </div>
              <div className="section section-project">
                {dataProject.map((data, index) => (
                  <div
                    className="slide"
                    style={{
                      backgroundImage: `linear-gradient(128deg, ${data.color},${data.color_2})`,
                    }}
                  >
                    <Project
                      key={index}
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
                <About/>
              </div>
              <div className="section">
                <h1>Contact</h1>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
};

export default App;
