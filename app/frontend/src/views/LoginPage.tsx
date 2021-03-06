import * as React from "react";
import {useNavigate, useLocation} from "react-router-dom";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import useAuth from '../hooks/useAuth';
import SubmitButton from "../components/SubmitButton";
import FormField from "../components/FormField";

const FormSchema = Yup.object().shape({
  email: Yup
    .string()
    .required('Please enter your email')
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Must be a valid email address."
    )
  ,
  password: Yup.string().required('Please enter your password')
});

function LoginPage(): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  const initialValues: LoginFormFields = {
    email: '',
    password: '',
  };

  // const from = location.state?.from?.pathname || "/";

  async function handleSubmit(values: LoginFormFields) {
    try {
      await auth.signin(values, () => {
        navigate('/feed', { replace: true });
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Grid container sx={{ height: 'calc(100vh - 64px)' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1508185706820-a0e323b337f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: 'calc(100% - 64px)',
      }} item xs={12} sm={8} md={5}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <br />
          <Box sx={{ mt: 1, boxShadow: 'none', width: '100%' }}>
            <Formik
              initialValues={initialValues}
              validationSchema={FormSchema}
              onSubmit={handleSubmit}
            >
              {/* eslint-disable-next-line no-unused-vars */}
              {({errors, touched}) => (
                <Form>
                  <FormField
                    name="email"
                    type="email"
                    label="Email"
                    message={errors.email || ''}
                    error={errors.email && touched.email}
                  />
                  <br />
                  <br />
                  <FormField
                    name="password"
                    type="password"
                    label="Password"
                    message={errors.password || ''}
                    error={errors.password && touched.password}
                  />
                  <br />
                  <br />
                  <SubmitButton label="Login" />
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default LoginPage;