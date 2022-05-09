import React from "react";
import "../styles/App.css";

const Spinner = () => {
  const bgColors = {
    primary: "rgb(0, 112, 243)",
    secondary: "rgb(108, 117, 125)",
    success: "rgb(40, 167, 69)",
    danger: "rgb(220, 53, 69)",
    warning: "rgb(255, 193, 7)",
    info: "rgb(23, 162, 184)",
    light: "rgb(248, 249, 250)",
    dark: "rgb(52, 58, 64)",
  };
  return (<></>);
};

const App = () => {
  const [currentAnimtion, setCurrentAnimation] = React.useState("grow");
  const [currentVariant, setCurrentVariant] = React.useState("primary");
  const handleAnimationChange = (e) => {
    setCurrentAnimation(e.target.value);
  };
  const handleVariantChange = (e) => {
    setCurrentVariant(e.target.value);
  };
  return (
    <div id="main">
      <div className="cont">
        <h1>Select the spinner animation and variant</h1>
        <select
          onChange={handleVariantChange}
          className="dropdown"
          id="variant"
        >
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
          <option value="success">Success</option>
          <option value="danger">Danger</option>
          <option value="warning">Warning</option>
          <option value="info">Info</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        <select
          onChange={handleAnimationChange}
          className="dropdown"
          id="animation"
        >
          <option value="grow">Grow</option>
          <option value="border">Border</option>
        </select>
      </div>

      <div className="cont">
        <Spinner animation={currentAnimtion} variant={currentVariant} />
      </div>
    </div>
  );
};

export default App;
