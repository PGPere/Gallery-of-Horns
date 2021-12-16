import React from 'react';
class Main extends React.Component {
  render() {
    return (
      <>
        <img src= {this.props.imageURLs[0].image_url} alt={'coming soon'}/>
        <img src= {this.props.imageURLs[1].image_url} alt={'coming soon'}/>
        <img src= {this.props.imageURLs[2].image_url} alt={'coming soon'}/>
        <img src= {this.props.imageURLs[3].image_url} alt={'coming soon'}/>
        <img src= {this.props.imageURLs[4].image_url} alt={'coming soon'}/>
        <img src= {this.props.imageURLs[5].image_url} alt={'coming soon'}/>
        <img src= {this.props.imageURLs[6].image_url} alt={'coming soon'}/>
        <img src= {this.props.imageURLs[7].image_url} alt={'coming soon'}/>
      </>
    )
  }
};

export default Main;