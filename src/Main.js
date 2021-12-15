import React from 'react';
import HornedBeast from './HornedBeast';
// import Img from './Img.js';

class Main extends React.Component {
  render() {
    return (
      <>
        <h2>A Very Special Collection</h2>
        <HornedBeast title={'Billy the Goat'} img_url={'https://upload.wikimedia.org/wikipedia/commons/b/b1/Goat_face.jpg'} description={'domestic goat'}/>
        <HornedBeast title={'Title coming soon'} description={'description coming soon'}/>
        <HornedBeast title={'Title coming soon'} description={'description coming soon'}/>
      </>
    )
  }
};

export default Main;