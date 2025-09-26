'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import moment from "moment";
import EventForm from './form';


export default function Home() {
  return (
   <Container>
        <Row>
          <Col>
            <h1>Signup {moment(new Date()).format("MM/DD/YYYY")}</h1>
          </Col> 
        </Row>
        <Row>
          <Col>
           <EventForm></EventForm>
          </Col>
        </Row>
    </Container>
   
     );
}
