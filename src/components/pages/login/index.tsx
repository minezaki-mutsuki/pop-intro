import { useState } from "react";
import {
  BodyWrapper,
  ErrorText,
  InputWrapper,
  LoginButton,
  StyledInput,
} from "./style";
import { useNavigate } from "react-router-dom";
import { auth } from "https://pop-intro.netlify.app/src/firebase-config.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Header } from "../../projects/header";
import { Footer } from "../../projects/footer";

export const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const onChange = (e: any) => {
    if (e.target === null) return;
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmit = async (e: any) => {
    console.log("a");
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setError("入力内容が正しくありません");
    }
  };

  return (
    <>
      <Header />
      <BodyWrapper>
        <InputWrapper>
          <StyledInput
            placeholder="email"
            type="email"
            id="email"
            value={email}
            onChange={onChange}
          />
          <StyledInput
            placeholder="password"
            type="password"
            id="password"
            value={password}
            onChange={onChange}
          />
        </InputWrapper>
        <LoginButton onClick={onSubmit}>LOGIN</LoginButton>
        <ErrorText>{error}</ErrorText>
      </BodyWrapper>
      <Footer />
    </>
  );
};
