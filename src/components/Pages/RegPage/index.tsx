import React, { useState } from 'react';
import Button from '../../common/Button';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import PageWrapper from '../../common/PageWrapper';

const RegPage = () => {
  const [name, setName] = useState('');
  const [email1, setEmail1] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  return (
    <PageWrapper>
      <Form title="Регистрация">
        <Input title="Ваше имя" id="name" placeholder="ФИО" value={name} setValue={setName} type="text" />
        <Input title="Почта" id="email1" placeholder="email" value={email1} setValue={setEmail1} type="text" />
        <Input title="Пароль" id="password1" placeholder="******" value={password1} setValue={setPassword1} type="password" />
        <Input title="Повторите пароль" id="password2" placeholder="******" value={password2} setValue={setPassword2} type="password" />
        <Button title="Зарегистрироваться" onClick={() => console.log('reg')} />
      </Form>
    </PageWrapper>
  );
};

export default RegPage;
