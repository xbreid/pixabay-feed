import * as React from "react";
import {
  useNavigate,
  useLocation,
} from "react-router-dom";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import useAuth from '../hooks/useAuth';
import FormField from "../components/FormField";
import SubmitButton from "../components/SubmitButton";

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

  // const from = location.state?.from?.pathname || "/";

  async function handleSubmit(values: CreateFormFields) {
    await auth.signup(values, () => {
      navigate('/feed', { replace: true });
    });
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
          backgroundColor: (t) => t.palette.grey[50],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
          height: 'calc(100% - 64px)',
        }}
        item
        xs={12}
        sm={8}
        md={5}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Signup
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
                    error={errors.email && touched.email}
                  />
                  <br />
                  <br />
                  <FormField
                    name="password"
                    type="password"
                    label="Password"
                    error={errors.password && touched.password}
                  />
                  <br />
                  <br />
                  <FormField
                    name="password_confirmation"
                    type="password"
                    label="Password Confirmation"
                    error={errors.password_confirmation && touched.password_confirmation}
                  />
                  <br />
                  <br />
                  <SubmitButton label="Signup" />
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default SignupPage;