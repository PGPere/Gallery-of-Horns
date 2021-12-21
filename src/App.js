import React from "react";
import "./App.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from  "./Footer.js";
import beastImgs from  "./data.json";
import SelectedBeast from "./SelectedBeast";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selectedB:{}
    }
  }

  showModal = (beastTitle) => {
    const selectedB = beastImgs.find(beastObj => beastObj.title === beastTitle);
    this.setState({
      show: true,
      selectedB: selectedB
    });
  }

  handleClose = () => {
    this.setState({show: false});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SelectedBeast 
          show={this.state.show}
          handleClose={this.handleClose}
          selectedB={this.state.selectedB}
        />
        <Main 
        beastImgs={beastImgs}
        showModal={this.showModal}
        />
        <Footer />
      </div>
      );
  }
}

export default App;
