import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Home.css';
import {PostData} from '../../services/PostData';
import UserFeed from "../UserFeed/UserFeed";
import ReactConfirmAlert, { confirmAlert } from 'react-confirm-alert'; 
import '../../styles/react-confirm-alert.css';

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

class Home extends Component {
 

  constructor(props) {
    super(props);

    this.state = {
      data:[],
      userFeed: '',
      redirectToReferrer: false,
      name:'',
    };


    this.onChange = this.onChange.bind(this);
    this.logout = this.logout.bind(this);
  }

  onChange(e){
    this.setState({userFeed:e.target.value});
   }
   logout(){
     sessionStorage.setItem("userData",'');
     sessionStorage.clear();
     this.setState({redirectToReferrer: true});
   }

  render() {
    if (this.state.redirectToReferrer) {
      return (<Redirect to={'/login'}/>)
    }

    return (
      <div className="row" id="Body" style={{paddingTop:"200px"}}>
        <div className="medium-12 columns">
          <h1>You have successfully logged in.</h1>
          <Col lg="7" md="7">
          <Row className="mt-3">
            <Col className="text-center" xs="12">
              <a href="#" onClick={this.logout} className="logout">Logout</a>        
            </Col>
          </Row>
          </Col>
        </div>
      </div>
    );
  }
}

export default Home;