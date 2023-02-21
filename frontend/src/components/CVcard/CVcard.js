import React from "react"
import {Button , Card} from "react-bootstrap"
import { useDispatch } from "react-redux"
import { delete_cv, edit_cv} from "../../redux/actions/cvActions"
import { useState } from "react";
import Form from "react-bootstrap/Form"
import Modal from "react-bootstrap/Modal"


const CVcard = ({cv }) => {
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const dispacth = useDispatch()
  
  const [name, setNom] = useState("")
  const [telephone, setTelephone] = useState("")
  const [email, setEmail] = useState("")
  const [diplome, setDiplome] = useState("")
  const [competences, setExp] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(edit_cv(cv._id, {name,telephone,email,diplome,competences}))
    handleClose()
  }
  return (
    <div style={{ margin: "2rem" }}>
    <Card className="carte" style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Title>Nom:{cv.name}</Card.Title>
          <Card.Title>Telephone:{cv.telephone}</Card.Title>
          <Card.Title>Email:{cv.email}</Card.Title>
          <Card.Title>Diplome:{cv.diplome}</Card.Title>
          <Card.Title>Experiences:{cv.competences}</Card.Title>

            <Button
              variant="danger"
              onClick={() => dispacth(delete_cv(cv._id))}>
              Delete
            </Button>

            <Button variant="warning" onClick={handleShow}>
              Edit
            </Button>
        
          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title>Edit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setNom(e.target.value)}
                value={name}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Telephone</Form.Label>
              <Form.Control
                type="Number"
                onChange={(e) => setTelephone(e.target.value)}
                value={telephone}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Diplome</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setDiplome(e.target.value)}
                value={diplome}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Experiences</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setExp(e.target.value)}
                value={competences}
              />
            </Form.Group>
          </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="warning " onClick={handleSubmit}>
                Save Changes
              </Button>
              <Button variant="primary" type="submit" onClick={()=>window.print()}>
                Imprimer
              </Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CVcard