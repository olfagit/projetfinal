import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Card from "react-bootstrap/Card"
import { useDispatch } from "react-redux"
import { add_cv } from "../redux/actions/cvActions"
import { useNavigate } from "react-router-dom"

const AddCV = () => {
  const [name, setNom] = useState("")
  const [telephone, setTelephone] = useState("")
  const [email, setEmail] = useState("")
  const [diplome, setDiplome] = useState("")
  const [competences, setExp] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = () => {

    dispatch(add_cv({name,telephone,email,diplome,competences} ,navigate))
  }

  return (
    <div style={{ marginTop: "1rem" }}>
      <Card style={{ width: "500px", left: "35%" }}>
        <Card.Body>
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
              <Form.Label>Competencesces</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setExp(e.target.value)}
                value={competences}
              />
            </Form.Group>

            <Button variant="warning" onClick={handleSubmit}>
            save
            </Button>
            
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default AddCV
