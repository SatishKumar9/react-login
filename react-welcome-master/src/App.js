import React, { Component } from 'react';

import './styles/foundation.min.css';
//import './styles/custom.css';
import './assets/css/argon-dashboard-react.css';
import Routes from './routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { Container, Row, Col } from "reactstrap";

import MobileHeader from './components/MobileHeader/MobileHeader';


class App extends Component {

  constructor(){
    super();
    this.state={
      appName: "Banana",
      home: false
    }
  }

  render() {
    return (
      <>
      <div className="main-content" >
          <Header name={this.state.appName}/>
          <div className="header bg-gradient-info py-7 py-lg-7">
            <Container>
              <div className="header-body text-center mb-7">
                <Row className="justify-content-center">
                  <Col lg="5" md="6">
                    <h2 className="text-white"></h2>
                    <p className="text-lead text-light">
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>

            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-default"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>

          </div>  
          {/* Page content */}
          <Container className="mt--8 pb-5">
            <Row className="justify-content-center">
              <Routes name={this.state.appName}/>
            </Row>
          </Container>
        </div>
      </>


      // <div className="off-canvas-wrapper">
      //   <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
      //     <div className="off-canvas-content" data-off-canvas-content  style={{backgroundColor:"blue"}}>
      //       <MobileHeader name={this.state.appName}/>
      //       <Header name={this.state.appName}/>
      //       <Routes name={this.state.appName}/>
      //       <hr/>
      //       <Footer/>
      //     </div>
      //   </div>
      // </div>    
    );
  }
}

export default App;
