import React , {useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/actions/userActions';
import "./Register.css"

function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }, navigate));
  }
  return (
    <section className="h-100 h-custom" style={{backgroundColor: '#8fc4b7'}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <div className="card rounded-3">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp" className="w-100" style={{borderTopLeftRadius: '.3rem', borderTopRightRadius: '.3rem'}} alt="Sample " />
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>
                  <form className="px-md-2">
                    <div className="form-outline mb-4">
                      <input type="text" id="form3Example1q" className="form-control"  onChange={(e) => setName(e.target.value)} value={name} />
                      <label className="form-label" htmlFor="form3Example1q" >Name</label>
                    </div>
                    <div className="form-outline mb-4">
                      <input type="text" id="form3Example1q" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} />
                      <label className="form-label" htmlFor="form3Example1q"  >Email</label>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        
                      </div>
                     
                    </div>
                    
                    <div className="row mb-4 pb-2 pb-md-0 mb-md-5">
                      <div className="col-md-6">
                        <div className="form-outline">
                          <input type="password" id="form3Example1w" className="form-control"  onChange={(e) => setPassword(e.target.value)} value={password}/>
                          <label className="form-label" htmlFor="form3Example1w" >Password</label>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-success btn-lg mb-1"  onClick={handleRegister}>Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )}

export default Register