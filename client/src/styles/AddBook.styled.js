import styled from "styled-components";

export const FormWrapper = styled.form`
  background: #fff;
  padding: 20px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 400px;

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }

  label {
    text-align: right;
    padding: 6px;
  }

  select,
  input {
    margin: 4px;
    padding: 6px;
    box-sizing: border-box;
  }

  button {
    color: #fff;
    font-size: 2em;
    background: #ad1457;
    border: 0;
    padding: 0 10px;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    bottom: 10px;
    left: 10px;
  }
`;
