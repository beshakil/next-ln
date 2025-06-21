import React, { Suspense } from 'react';
import Loading from '../../../components/Loading';
import LoginForm from '../../../components/LoginSignup/loginForm';
import FooterMain from '../../../components/Footer/FooterMain';

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <LoginForm />
      <FooterMain />
    </Suspense>
  );
};

export default page;