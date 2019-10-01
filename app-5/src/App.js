import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//components
import Image from "./components/Image";

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  
  render() {
    return (
      <div className="App">
        <Image myImage={"https://cdn.vox-cdn.com/thumbor/ZWw7uzzvD48jp2gfH-aoPV6gwfk=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10838073/pogchamp.png"} />
      </div>
    );
  }
}

export default App;
