import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
// import axios from "axios";

const Input = styled.input`
  border: 1px solid ${(props) => (props.hasError ? "red" : "black")};
  background-color: ${(props) => (props.hasError ? "#FFCCCC" : "white")};
`;

const TextArea = styled.textarea`
  border: 1px solid ${(props) => (props.hasError ? "red" : "black")};
  background-color: ${(props) => (props.hasError ? "#FFCCCC" : "white")};
`;

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    reset();

    //wysylanie emaila
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Kontakt</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Input
          hasError={errors.email}
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
          })}
          placeholder="Email"
        />
        {errors.email && <p>{errors.email.message}</p>}

        <Input
          hasError={errors.name}
          {...register("name", { required: "Name is required" })}
          placeholder="Imię i nazwisko"
        />
        {errors.name && <p>{errors.name.message}</p>}

        <Input
          hasError={errors.phone}
          {...register("phone", {
            required: "Phone number is required",
            pattern: { value: /^[0-9]+$/, message: "Invalid phone number" },
          })}
          placeholder="Numer telefonu"
        />
        {errors.phone && <p>{errors.phone.message}</p>}

        <TextArea
          hasError={errors.message}
          {...register("message", { required: "Message is required" })}
          placeholder="Wiadomość"
        />
        {errors.message && <p>{errors.message.message}</p>}

        <input type="submit" value="Wyślij" />
      </form>

      <p>Volta Piotr Szczepański</p>
      <p>ul. Grunwaldzka 125</p>
      <p>38-422 Krościenko Wyżne</p>
      <p>Telefon: +48 505 967 935</p>
      <p>e-mail: volta.szczepanski@gmail.com</p>
    </div>
  );
};
