import React, { useState } from 'react';
import Button from '../../common/Button';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import PageWrapper from '../../common/PageWrapper';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);
  const submitHandler = () => {
    if (password.length > 10) {
      setHasError(false);
      console.log({ email, password });
    } else {
      setHasError(true);
      console.log('Error');
    }
  };
  return (
    <PageWrapper>
      <Form title="Авторизация">
        <Input title="Почта" id="email" placeholder="email" value={email} setValue={setEmail} type="text" />
        <Input title="Пароль" id="password" placeholder="******" value={password} setValue={setPassword} type="password" />
        {hasError && (
          <div>
            <span>Пароль слишком короткий!</span>
          </div>
        )}
        <Button title="Войти" onClick={submitHandler} />
      </Form>
    </PageWrapper>
  );
};

export default AuthPage;
