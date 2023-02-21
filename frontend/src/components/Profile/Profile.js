import React , {useEffect, useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import Card from 'react-bootstrap/Card'
import "./Profile.css"
import { useDispatch, useSelector } from 'react-redux'
import { delet, edit, get_current } from '../../redux/actions/userActions'
import {Button,Modal} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
function Profile () {
  const [email,setEmail]=useState("")
  const [name,setName]=useState("")
  const dispatch = useDispatch();
  const navigate=useNavigate()
  useEffect(() => {
    dispatch(get_current());
  }, [dispatch]);
  const client = useSelector((state) => state.userReducers.client);

const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
  return (
    <Card style={{ width: '85rem' , height:'5rem' , justifyContent:"center"}}>
    {/* <Card.Img variant="top" src="https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg" /> */}
    <Card.Body>
      <Card.Title>welcome {client && client.name}</Card.Title>
  <div style={{display:"flex" ,justifyContent:"center"}}>
      <Button variant="light"><Link to="/CV">create CV</Link></Button>
    <Button variant="light" onClick={() => dispatch(delet(client._id),navigate("/CV"))}><Link>delete your account</Link></Button>
    <Button variant="primary" onClick={handleShow}>
        edit profile
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control onChange={(e)=>setName(e.target.value)}
                type="text"
                placeholder="name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control onChange={(e)=>setEmail(e.target.value)}
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>dispatch(edit(client._id,{name,email}),handleClose(),window.location.reload())}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </Card.Body>

  </Card>    
  );
}

export default Profile