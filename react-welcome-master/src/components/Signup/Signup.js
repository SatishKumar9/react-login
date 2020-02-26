import React, {Component} from 'react';
import {PostData} from '../../services/PostData';
import {Redirect} from 'react-router-dom';
import './Signup.css';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

class Signup extends Component {

  constructor(props){
    super(props);
   
    this.state = {
     username:'',
     password:'',
     email:'',
     name:'',
     phone_no:'',
     aadhar_no:'',
     date_of_birth:'',
     redirectToReferrer: false
    };

    this.signup = this.signup.bind(this);
    this.onChange = this.onChange.bind(this);

  }
 

  signup() {
    if(this.state.username && this.state.password && this.state.email && this.state.name && this.state.phone_no && this.state.aadhar_no && this.state.date_of_birth){
    PostData('signup',this.state).then((result) => {
      let responseJson = result;
      if(responseJson.status){  
        //popup verify email
        // sessionStorage.setItem('userData',JSON.stringify(this.state));
        this.setState({redirectToReferrer: true});
      }
      
     });
    }
  }

 onChange(e){
   this.setState({[e.target.name]:e.target.value});
  }


  render() {
    if (this.state.redirectToReferrer){
      return(<Redirect to ={'/home'}/>)
    }
    if (this.state.redirectToReferrer || sessionStorage.getItem('userData')) {
      return (<Redirect to={'/home'}/>)
    }
   
  

    return (
      <>
      <Col lg="5" md="7">
      <Card className="bg-secondary shadow border-0"> 
        <CardBody className="px-lg-5 py-lg-5">
          <div className="text-center text-muted mb-4">
            <h3>Sign in</h3>
          </div>
          <Form role="form">
            <FormGroup className="mb-3">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-calendar-grid-58" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Name" type="text" name="name" onChange={this.onChange}/>
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-credit-card" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Aadhar Number" type="number" name="aadhar_no" onChange={this.onChange}/>
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-hat-3" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Username" type="text" name="username" onChange={this.onChange}/>
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-email-83" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Email" type="email" name="email" onChange={this.onChange}/>
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-lock-circle-open" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Password" type="password" name="password" onChange={this.onChange}/>
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-calendar-grid-58" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Date Of Birth" type="text" name="date_of_birth" onChange={this.onChange}/>
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-mobile-button" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Phone Number" type="number" name="phone_no" onChange={this.onChange}/>
              </InputGroup>
            </FormGroup>

            <div className="text-center">
              <Button className="my-4" color="primary" type="button" value="Sign Up" onClick={this.signup}>
                Sign Up
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
      <Row className="mt-3">
        <Col className="text-center" xs="12">
            <small><a href="/login">Already a user? Login here.</a></small>
        </Col>
      </Row>
    </Col>
  </>

      
      // <div className="row " id="Body">
      //   <div className="medium-5 columns left">
      //   <h4>Signup</h4>
      //   <label>Email</label>
      //   <input type="text" name="email"  placeholder="Email" onChange={this.onChange}/>
      //   <label>Name</label>
      //   <input type="text" name="name"  placeholder="Name" onChange={this.onChange}/>
      //   <label>Username</label>
      //   <input type="text" name="username" placeholder="Username" onChange={this.onChange}/>
      //   <label>Password</label>
      //   <input type="password" name="password"  placeholder="Password" onChange={this.onChange}/>
      //   <label>phone_no</label>
      //   <input type="number" name="phone_no"  placeholder="phone_id" onChange={this.onChange}/>
      //   <label>aadhar_no</label>
      //   <input type="number" name="aadhar_no"  placeholder="aadhar_no" onChange={this.onChange}/>
      //   <label>date_of_birth</label>
      //   <input type="text" name="date_of_birth"  placeholder="date_of_birth" onChange={this.onChange}/>
      //   <input type="submit" className="button" value="Sign Up" onClick={this.signup}/>
      //   <a href="/login">Login</a>
      //   </div>
        
      // </div>
    );
  }
}

export default Signup;