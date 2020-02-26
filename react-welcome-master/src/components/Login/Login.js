import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {PostData} from '../../services/PostData';
import './Login.css';

import {
  Alert,
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

class Login extends Component {

  constructor(){
    super();
   
    this.state = {
     user_name: '',
     password: '',
     redirectToReferrer: false,
     
     msg:null
    };

    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);

  }


  login() {

    if(this.state.user_name && this.state.password){
      PostData('login',this.state).then((result) => {
       let responseJson = result;
       console.log(result)
       if(responseJson.status===1){        
         sessionStorage.setItem('userData',JSON.stringify(responseJson));
         this.setState({redirectToReferrer: true});
       }
       else if(responseJson.status===0){
         this.setState({msg:'Invalid Username or Password'})

       }
       else if(responseJson.status===-1){
         this.setState({msg:'verify email'})
       }
       
      });
    }
    
   }


  onChange(e){
    this.setState({[e.target.name]:e.target.value});
   }

  render() {

     if (this.state.redirectToReferrer) {
      return (<Redirect to={'/home'}/>)
    }
   
    if(sessionStorage.getItem('userData')){
      return (<Redirect to={'/home'}/>)
    }

    return (
      <>
      <Col lg="5" md="7">
      <Card className="bg-secondary shadow border-0"> 
        <CardBody className="px-lg-5 py-lg-5">
          <div className="text-center text-muted mb-4">
            <h2>Log in</h2>
          </div>
        
          <Form role="form">
            {this.state.msg?<Alert color="danger">{this.state.msg}</Alert> : null}
      
            <FormGroup className="mb-3">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-hat-3" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Username" type="text" name="user_name" autoComplete="new-username" onChange={this.onChange}/>
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <InputGroup className="input-group-alternative">
              <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-lock-circle-open" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Password" type="password" name="password" autoComplete="new-password" onChange={this.onChange}/>
              </InputGroup>
            </FormGroup>

            <div className="text-center">
              <Button className="my-4" color="primary" type="button" value="Login"onClick={this.login}>
                Sign in
              </Button>
            </div>

          </Form>
        </CardBody>
      </Card>

      <Row className="mt-3">
        <Col className="text-center" xs="12">
            <small><a href="/signup">Create new account</a></small>
        </Col>
      </Row>
    </Col>
  </>

   
      // <div className="row" id="Body">
      //   <div className="medium-5 columns left">
      //   <h4>Login</h4>
      //   {this.state.msg?<Alert color="danger">{this.state.msg}</Alert> : null}


      //   <label>Username</label>
      //   <input type="text" name="user_name" placeholder="Username" onChange={this.onChange}/>
      //   <label>Password</label>
      //   <input type="password" name="password"  placeholder="Password" onChange={this.onChange}/>
      //   <input type="submit" className="button success" value="Login" onClick={this.login}/>
      //   <a href="/signup">Registration</a>
      //   </div>
      // </div>

    );
  }
}

export default Login;