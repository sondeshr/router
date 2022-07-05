import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

function MovieAdd({movies, setMovies}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newMovie, setNewMovie]= useState({
    name:"",
    posterurl:"",
    description:"",
    rating:"",
});
    const handleAdd=()=>{ setMovies([newMovie,...movies])}

  
  return (
    <div> 
        <>

    <Button variant="dark" onClick={handleShow}>
      +
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Name</Form.Label>
        <Form.Control type="text" placeholder="Enter the movie name" onChange={(e)=>setNewMovie({...newMovie, name: e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Image</Form.Label>
        <Form.Control type="text" placeholder="Enter the movie image url" onChange={(e)=>setNewMovie({...newMovie, posterurl: e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Description</Form.Label>
        <Form.Control type="text" placeholder="Enter the movie description" onChange={(e)=>setNewMovie({...newMovie, description: e.target.value})} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie rating</Form.Label>
        <Form.Control type="text" placeholder="Enter the movie rating" onChange={(e)=>setNewMovie({...newMovie, rating: e.target.value})}  />
      </Form.Group>
 
    </Form></Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="dark" onClick={handleAdd}>
          Add movie
        </Button>
      </Modal.Footer>
    </Modal>
  </></div>
  )
}

export default MovieAdd