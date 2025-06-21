import React, { Suspense } from 'react';
import Loading from '../../../components/Loading';
import SignupForm from '../../../components/LoginSignup/SignupForm';
import FooterMain from '../../../components/Footer/FooterMain';

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <SignupForm />
      <FooterMain />
    </Suspense>
  );
};

export default page;