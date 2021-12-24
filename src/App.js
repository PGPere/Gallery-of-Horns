import React from "react";
import "./App.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from  "./Footer.js";
import beastImgs from  "./data.json";
import SelectedBeast from "./SelectedBeast";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";


const allHornOptions = [1,2,3,100];
class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selectedB:{},
      numerals: allHornOptions
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

  handleChange = (event) => {
    const selection = event.target.value;

    if (selection === 'One Horn') {
      this.setState({ numerals: 1});
    } else if (selection === 'Two Horns') {
      this.setState({ numerals: 2 });
    } else if (selection === 'Three Horns') {
      this.setState({ numerals: 3 });
    } else if (selection === 'One Hundred Horns') {
      this.setState({ numerals: 100});   
    // } else {
    //   this.setState({ numerals: allHornOptions});
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        {/* This is to open Modal */}
        <SelectedBeast 
          show={this.state.show}
          handleClose={this.handleClose}
          selectedB={this.state.selectedB}
        />
        {/* This creates form  */}
        <Container>
        <Form>
        <Form.Label>Filter by # of Horns</Form.Label>
          <Form.Select
            onChange={this.handleChange}
            helvetica-label="Default select example"
          >
            <option value="none">Make a Selection</option>
            <option value="One Horn">1</option>
            <option value="Two Horns">2</option>
            <option value="Three Horns">3</option>
            <option value="One Hundred Horns">100</option>
          </Form.Select>        
        </Form>
        <p>{this.state.numerals}</p>
        </Container>
        <Main 
        beastImgs={beastImgs.filter(obj => {
          return obj.horns === this.state.numerals;
        })}
        // beastImgs={beastImgs}
        showModal={this.showModal}
        />
        <Footer />
      </div>
      );
  }
}

export default App;
