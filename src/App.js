import React from "react";
import Container from "react-bootstrap/Container";
import "./App.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from  "./Footer.js";
import beasImgs from  "./data.json";

class App extends React.Component {
  render() {
    return (
      <Container className="App">
        <Header title='Unique Horned Beasts'/>
        <Main imageURLs={beasImgs}/>
        <Footer text='Author: Pedro G. Perez' />
      </Container>
      );
  }
}

export default App;
