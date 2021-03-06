import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.selectedB.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
          <Card style={{ width: "18rem" }}>
            <Card.Img 
            src={this.props.selectedB.image_url} 
            alt='alt coming soon...' 
            title='title coming soon...' 
           />
            <Card.Text>{this.props.selectedB.description}</Card.Text>
          </Card>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.props.handleClose}>Close</Button>
          </Modal.Footer>

        </Modal>
      </>
    )
  }
}

export default SelectedBeast;