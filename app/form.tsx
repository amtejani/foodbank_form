import { Formik, ErrorMessage} from 'formik';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import moment from "moment";
import * as Yup from "yup";
import { FormGroup } from 'react-bootstrap';
import { DatePickerField } from './datepickerfield';



const FormSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(/^[\+]?[0-9]{0,3}\W?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im, 'Not a valid phone number'),
  numberOfPeople: Yup.number()
    .transform((value, originalValue) =>
        originalValue === '' ? undefined : Number(originalValue)
    )
    .positive('Must be greater than zero')
    .integer('Must be an integer')
    .required('Required'),
  date: Yup.date()
    .transform((value, originalValue) => {
        return originalValue ? new Date(originalValue) : value;
    })
    .required("Date is required"),
});

/* This is a React Form component (to get the styling) wrapped inside a Formik component (to get the validationschema) */
/* Rn I only added ErrorMessage on phone and num people bc they have some input validations. Date field defaults to today's date so it should be fine
/* https://react-bootstrap.netlify.app/docs/forms/validation */
export default function EventForm() {
    return (
        <Formik
          initialValues={{
            date: moment(new Date()),
            name: '',
            address: '',
            city: '',
            phoneNumber: '',
            numberOfPeople: ''
          }}
          validationSchema={FormSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ handleSubmit, values, handleChange }) => (
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="date">
                    <Form.Label>Date</Form.Label>
                    <DatePickerField name="date" />
                </Form.Group>

                <FormGroup className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="John Doe" name="name" value={values.name} onChange={handleChange} />
                    <Form.Text className="text-muted"/>
                </FormGroup>
              
                <FormGroup className="mb-3" controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="123 Street" name="address" value={values.address} onChange={handleChange} />
                    <Form.Text className="text-muted" />
                </FormGroup>

                <FormGroup className="mb-3" controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City" name="city" value={values.city} onChange={handleChange} />
                    <Form.Text className="text-muted" />
                </FormGroup>

                <FormGroup className="mb-3" controlId="phone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" name="phoneNumber" placeholder="1234567890" value={values.phoneNumber} onChange={handleChange} />
                    <Form.Text className="text-muted" />
                    <ErrorMessage name="phoneNumber" component="div" className="text-danger small" />
                </FormGroup>

                <FormGroup className="mb-3" controlId="num-people">
                    <Form.Label>Number of People</Form.Label>
                    <Form.Control type="number" name="numberOfPeople" placeholder="1" value={values.numberOfPeople} onChange={handleChange} />
                    <Form.Text className="text-muted" />
                    <ErrorMessage name="numberOfPeople" component="div" className="text-danger small" />
                </FormGroup>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
          )}
        </Formik>
    );
}