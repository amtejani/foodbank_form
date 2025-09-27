'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Field, ErrorMessage, useField, useFormikContext } from 'formik';
import DatePicker from "react-datepicker";
import moment from "moment";
import * as Yup from "yup";
import Link from 'next/link';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { DatePickerField } from '../datepickerfield';


export default function Admin() {
  return (
    <Container>
      <Row>
        <Col>
         <h1> Admin </h1>
        </Col>
      </Row>
     <Row>
      <Col>
        <Formik
            className="font-mono text-sm/6 text-center sm:text-left"
            initialValues={{
              date: '',
              period: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
          {({ handleSubmit, values, handleChange }) => (
            <Form onSubmit={handleSubmit}>
               <Form.Group className="mb-3" controlId="startDate">
                    <Form.Label>Start date</Form.Label>
                    <DatePickerField name="date" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="period">
                    <Form.Label>Period</Form.Label>
                    <Form.Control type="number" placeholder="1" name="period" value={values.period}  onChange={handleChange} /> {/* Not sure if it's a number? */}
                    <Form.Text className="text-muted" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
              </Form>
            )}
          </Formik>
      </Col>
     </Row>
        
    </Container>
  );
}
