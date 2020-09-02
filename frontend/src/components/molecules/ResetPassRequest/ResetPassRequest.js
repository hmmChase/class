import React, { useState } from 'react';
import useFetch from '../../../api/useFetch';
import * as sc from './ResetPassRequest.style';

const ResetPassRequest = () => {
  const [email, setEmail] = useState('');
  const [getData] = useFetch('/users/reset-password');

  const onSubmit = async e => {
    e.preventDefault();

    await getData({ email });
  };

  return (
    <sc.Form onSubmit={onSubmit}>
      <sc.Label>
        Email:
        <input
          required
          type='email'
          value={email}
          placeholder='Email'
          onChange={e => setEmail(e.target.value)}
        />
      </sc.Label>

      <sc.Buttonn type='submit'>Request Password Reset</sc.Buttonn>
    </sc.Form>
  );
};

export default ResetPassRequest;