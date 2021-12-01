import * as React from "react";
import {
  useNavigate,
  useLocation,
} from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useAuth from '../hooks/useAuth';

const FormSchema = Yup.object().shape({
  email: Yup.string().required('Please enter your email'),
  password: Yup.string().required('Please enter your password')
});

function SignupPage(): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  const initialValues: CreateFormFields= {
    email: '',
    password: '',
    password_confirmation: '',
  };

  const from = location.state?.from?.pathname || "/";

  async function handleSubmit(values: CreateFormFields) {
    await auth.signup(values, () => {
      navigate(from, { replace: true });
    });
  }

  return (
    <article>
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={handleSubmit}
      >
        {/* eslint-disable-next-line no-unused-vars */}
        {({errors, touched}) => (
          <Form>
            <Typography variant="h5">Sign Up</Typography>
            <Field name='email'>
              {({field, form: { setFieldValue }}) => (
                <TextField
                  variant="outlined"
                  label="Email"
                  type="email"
                  name="email"
                  onChange={(event: React.ChangeEventHandler, newValue: string) => {
                    const nextValue = newValue || '';
                    setFieldValue('email', nextValue);
                  }}
                  error={errors.email && touched.email}
                  {...field}
                />
              )}
            </Field>
            <br />
            <br />
            <Field name='password'>
              {({field, form: { setFieldValue }}) => (
                <TextField
                  variant="outlined"
                  label="Password"
                  type="password"
                  name="password"
                  onChange={(event: React.ChangeEventHandler, newValue: string) => {
                    const nextValue = newValue || '';
                    setFieldValue('password', nextValue);
                  }}
                  error={errors.password && touched.password}
                  {...field}
                />
              )}
            </Field>
            <Field name='password_confirmation'>
              {({field, form: { setFieldValue }}) => (
                  <TextField
                    variant="outlined"
                    label="Corfirm Password"
                    type="password"
                    name="password_confirmation"
                    onChange={(event: React.ChangeEventHandler, newValue: string) => {
                      const nextValue = newValue || '';
                      setFieldValue('password', nextValue);
                    }}
                    error={errors.password_confirmation && touched.password_confirmation}
                    {...field}
                  />
              )}
            </Field>
            <Button color="primary" type="submit" variant="contained">
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
    </article>
  );
}

export default SignupPage;