
import React,{useEffect,useState} from 'react'
import {Form} from "react-bootstrap"
import {useDispatch} from 'react-redux'
import {singnIN} from '../../redux/actions/actions'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'






function Enregistrer() {


    const dispatch = useDispatch();

    let history = useHistory();

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const Submit = () => { 
        dispatch(singnIN({email,password},history))
      }



return(
    <div>
<Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicVille">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)}/>
        </Form.Group>
        

        <Link style={{textDecoration: 'none'}} to={'/Devis'} > <Form.Control onClick={()=> Submit()} type="text" className="btn btn-primary" defaultValue="Submit" /></Link>
        
      </Form>
    </div>
  )
}

export default Enregistrer