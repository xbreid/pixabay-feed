import * as React from 'react';
import { Link } from 'react-router-dom';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from "@mui/material/styles";

const HomeHeadline = styled(Typography)(() => ({
  fontSize: '4rem'
}));

const HomeSubtitle = styled(Typography)(() => ({
  fontSize: '2.2rem',
  marginTop: 24
}));

const HomeButton = styled(Button)(() => ({
  borderRadius: 1,
  padding: '12px 32px',
  '& > a': {
    textDecoration: 'none'
  }
}));

function HomePage(): JSX.Element {
  return (
    <div className="Container">
      <article
        style={{ height: 'calc(100% - 56px)'}}
        className="flex flex--column flex--align-center flex--justify-center"
      >
        <section>
          <HomeHeadline variant="h1">
            Welcome to the <b style={{ fontWeight: 500, color: '#1976d2' }}>Feed.</b>
          </HomeHeadline>
          <HomeSubtitle variant="h2">
            Providing a simple and elegant solution for browsing Pixabay Images and Video content.
          </HomeSubtitle>
          <Stack sx={{ mt: 3 }} direction="row" spacing={2}>
            <HomeButton variant="outlined">
              <Link to="/feed">Go to Feed</Link>
            </HomeButton>
            <HomeButton variant="outlined">
              <Link to="/signup">Sign Up</Link>
            </HomeButton>
          </Stack>
        </section>
      </article>
    </div>
  );
}

export default HomePage;