import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./styles.scss";
import "./assets/scss/common.scss";
import Header from "./layout/header/Header";
import Home from "./components/home/Home";

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
              <Home/>
            </div>
            <div className="section">
              <div className="slide">
                <h1>Project 1</h1>
              </div>
              <div className="slide">
                <h1>Project 2</h1>
              </div>
              <div className="slide">
                <h1>Project 3</h1>
              </div>
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
