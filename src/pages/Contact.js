import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

export const Contact = () => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    message: yup.string().required(),
  });

  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>Volta Piotr Szczepański</h1>
      <div>
        <p>ul. Grunwaldzka 125</p>
        <p>38-422 Krościenko Wyżne</p>
        <p>Telefon: +48 505 967 935</p>
        <p>e-mail: volta.szczepanski@gmail.com</p>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="name"
          placeholder="Imię i nazwisko"
          ref={register({ required: true })}
        />
        {errors.name && <p>To pole jest wymagane</p>}
        <Input
          name="email"
          placeholder="Adres email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <p>Podaj prawidłowy adres email</p>}
        <Input
          name="phone"
          placeholder="Numer telefonu"
          ref={register({ required: true })}
        />
        {errors.phone && <p>Podaj prawidłowy numer telefonu</p>}
        <TextArea
          name="message"
          rows="4"
          placeholder="Wiadomość"
          ref={register({ required: true })}
        />
        {errors.message && <p>To pole jest wymagane</p>}
        <Button type="submit">Wyślij</Button>
      </Form>
    </>
  );
};
