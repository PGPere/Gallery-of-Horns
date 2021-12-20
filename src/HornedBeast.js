import React from 'react';
import Image from 'react-bootstrap/Image'

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "status":"Click If You Like It!"
    }
  }

  handleClick = () => {
    if (this.state.status === "Click If You Like It!") {
      this.setState({
        status: "💜 1"
      })
      } else {
        let temp = parseInt(this.state.status.replace(/[^0-9]/g, ''))+1;
        this.setState({
          status: "💜" +temp
        })
    
    };
  }

    render() {
      return (
        <div onClick={this.handleClick}>
        <Image src= {this.props.image_url} alt="coming soon" rounded fluid/>
        <h4>
          {this.state.status}
        </h4>
      </div>
    );
  }
}

export default HornedBeast;
