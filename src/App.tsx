import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <ReactFullpage
        debug={true}
        credits={{}}
        anchors={["firstPage", "secondPage", "3rdPage"]}
        navigationTooltips={[
          "First Section",
          "Second Section",
          "Third Section",
        ]}
        navigation={true}
        slidesNavigation={true}
        controlArrows={false}
        licenseKey=""
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section">
              <div className="intro">
                <h1>Navigation bullets</h1>
                <p>Create a vertical and horizontal navigation</p>
              </div>
            </div>
            <div className="section">
              <div className="slide">
                <h1>Section 2</h1>
              </div>
              <div className="slide">
                <h1>Slide 2.2</h1>
              </div>
              <div className="slide">
                <h1>Slide 2.3</h1>
              </div>
            </div>
            <div className="section">
              <h1>Section 3</h1>
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default App;
