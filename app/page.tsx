'use client';

import { Formik, Form, Field, ErrorMessage, useField, useFormikContext } from 'formik';
import DatePicker from "react-datepicker";
import moment from "moment";
import * as Yup from "yup";



const FormSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(/^[\+]?[0-9]{0,3}\W?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im, 'Not a valid phone number'),
  numberOfPeople: Yup.number()
    .positive()
    .integer()
    .required('Required'),
});

export const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <DatePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={(val: any) => {
        setFieldValue(field.name, val);
      }}
    />
  );
};

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>
          Signup
          <div>{moment(new Date()).format("MM/DD/YYYY")}</div>
        </h1>
        <Formik
          className="font-mono text-sm/6 text-center sm:text-left"
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
          {({ isSubmitting }) => (
            <Form>
              <label htmlFor="date">Date</label>
              <DatePickerField name="date" />
              <label htmlFor="name">Name</label>
              <Field name="name" />
              <label htmlFor="address">Address</label>
              <Field name="address" />
              <ErrorMessage name="address" component="div" />
              <label htmlFor="city">City</label>
              <Field name="city" />
              <label htmlFor="phoneNumber">Phone Number</label>
              <Field name="phoneNumber" />
              <label htmlFor="numberOfPeople">Number of people in household: </label>
              <Field name="numberOfPeople" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Admin
        </a>
      </footer>
    </div>
  );
}
