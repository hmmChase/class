import React, { useEffect, useContext } from 'react';
import useFetch from '../../../api/useFetch';
import { useHistory } from 'react-router-dom';
import getParameterByName from '../../../utils/getParameterByName';
import AppContext from '../../../context/app';
import * as sc from './SignupDiscordRedirect.style';

const SignupDiscordRedirect = () => {
  const { setCurrentUser } = useContext(AppContext);

  const history = useHistory();

  const [signupDiscord, loading, error] = useFetch('/discord/signup');

  useEffect(() => {
    (async () => {
      const code = getParameterByName('code');
      const state = getParameterByName('state');

      const user = await signupDiscord({ code, state });

      if (!loading && !error && user && user.user) setCurrentUser(user.user);

      history.push('/');
    })();

    // eslint-disable-next-line
  }, []);

  return <sc.Container></sc.Container>;
};

export default SignupDiscordRedirect;
