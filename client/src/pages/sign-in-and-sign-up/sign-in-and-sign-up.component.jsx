import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { SignInAndSignUpContainer, Devider } from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <Devider>
      <SignIn />
      <SignUp />
    </Devider>
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
