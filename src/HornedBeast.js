import React from 'react';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "status":"Click Image If You Like It!"
    }
  }

  handleClick = () => {
    if (this.state.status === "Click Image If You Like It!") {
      this.setState({
        status: "💜 1"
      })
      } else {
        let temp = parseInt(this.state.status.replace(/[^0-9]/g, ''))+1;
        this.setState({
          status: "💜" +temp
        })
    
    };
    this.props.showModal(this.props.beast.title)
  }

    render() {
      return (
      <Card style={{ width: "18rem" }}>
        <Card.Title>{this.props.beast.title}</Card.Title>
        <Card.Img src={this.props.beast.image_url} alt='alt coming soon...' title={this.props.beast.title} onClick={this.handleClick} />
        <Card.Text>{this.props.beast.description}</Card.Text>
          <Card.Text>{this.state.status}</Card.Text>
        </Card>
    )
  }
}

export default HornedBeast;
