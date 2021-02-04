import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Form } from "../Styled/Form";
import { FormLabel } from "../Styled/FormLabel";
import { FormInput } from "../Styled/FormInput";
import { FormButton } from "../Styled/FormButton";
import { Emoji } from "../Styled/Emoji";

const EmailForm = ({ nightMode }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.dir(e.target);
    const serviceID = "service_34k1sfr";
    const templateID = "contact_form";
    const userID = "user_8pVwxcE94b7Lk2N4BrafJ";

    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        console.log(result.text);
        setName("");
        setEmail("");
        setMessage("");
        setSuccess(true);
      },
      (error) => {
        console.log(error.text);
        setError(error);
      }
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error !== null && (
        <>
          <Emoji>🥴</Emoji>
          <p>Sorry, something went wrong. Please try again later.</p>
        </>
      )}
      {success && (
        <>
          <Emoji>💌</Emoji>
          <p>Thanks! I'll reply as soon as possible.</p>
        </>
      )}
      <FormLabel>
        Name:{" "}
        <FormInput
          type="text"
          value={name}
          name="user_name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          nightMode={nightMode}
        />
      </FormLabel>
      <FormLabel>
        Email Address:{" "}
        <FormInput
          type="text"
          value={email}
          name="user_email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          nightMode={nightMode}
        />
      </FormLabel>
      <FormLabel>
        Message:{" "}
        <FormInput
          value={message}
          name="message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          nightMode={nightMode}
        ></FormInput>
      </FormLabel>
      <FormButton nightMode={nightMode}>Send</FormButton>
    </Form>
  );
};

export default EmailForm;
