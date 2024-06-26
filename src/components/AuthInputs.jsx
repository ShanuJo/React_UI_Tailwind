import { useState } from 'react';
// import styled from 'styled-components';

import Input from './Input';
import Button from './Button';

// const ControlContainer = styled.div`
// display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
//   margin-bottom: 1.5rem;
// `

// const Button = styled.button`
//   padding: 1rem 2rem;
//   font-weight: 600;
//   text-transform: uppercase;
//   border-radius: 0.25rem;
//   color: #1f2937;
//   background-color: #f0b322;
//   border-radius: 6px;
//   border: none; 

//   &:hover {
//     background-color: #f0920e;
//   }
// `

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs" className='w-full max-w-sm mx-auto rounded p-8 shadow-md bg-gradient-to-b from-stone-700 to-stone-800'>
      <div className='flex flex-col mb-6 gap'>
        
          <Input
          label="Email"
            type="email"
            invalid={emailNotValid}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        
          <Input
          label="Password"
            type="password"
            invalid={emailNotValid}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        
      </div>
      <div className="flex justify-end gap-2">
        <button type="button" className="mx-2 text-amber-400 hover:text-amber-600">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
