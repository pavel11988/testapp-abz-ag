import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const SignInFormContainer = styled.div`
  text-align: center;
`;

export const TitleSignInForm = styled.h2`
  margin: 126px auto 50px;
  width: 70%;
  text-align: center;
  font-family: var(--font-title);
  font-weight: var(--weight-title);
  font-size: var(--size-title);
  line-height: var(--lineheight-title);
`;

export const FormContainer = styled.form`
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 767px) {
    padding-left: 16px;
    padding-right: 16px;
  }

  @media (min-width: 768px) {
    width: 380px;
  }
`;

export const TextInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormInput = styled(TextField)`
  width: 328px;
  height: 54px;
  margin-bottom: 50px;

  background-color: var(--background-color);
  border-radius: 4px;
  outline: transparent;

  &:hover,
  &:focus,
  &:active {
    border-color: var(--secondary-color);
  }

  @media (min-width: 768px) {
    width: 380px;
  }
`;
export const NumberLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  align-items: flex-start;

  & > p {
    margin-top: 4px;
    margin-left: 16px;
    color: var(--grey-text-color);
    font-size: 12px;
    line-height: 14px;
  }
`;

export const PositionsContainer = styled.div`
  text-align: left;
  margin-bottom: 45px;

  @media (min-width: 400px) and (max-width: 767px) {
    width: 330px;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const PositionsTitle = styled.p`
  margin-bottom: 11px;
`;

export const ImageContainer = styled.div`
  width: 328px;

  margin-left: auto;
  margin-right: auto;
  height: 54px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  display: flex;

  @media (min-width: 768px) {
    width: 380px;
  }
`;

export const Position = styled.div``;

export const Label = styled.label`
  height: 26px;

  &:not(:last-of-type) {
    margin-bottom: 7px;
  }

  & > input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  & > span {
    display: inline-flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
  }

  & > span::before {
    content: "";

    display: inline-block;

    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 50%;
    margin-right: 12px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;

    width: 20px;
    height: 20px;
  }

  & > input:not(:disabled):not(:checked) + span:hover::before {
    border-color: var(--secondary-color);
  }

  & > input:not(:disabled):active + span::before {
    border-color: var(--secondary-color);
  }

  & > input:focus + span::before {
    border-color: var(--secondary-color);
  }

  & > input:focus:not(:checked) + span::before {
    border-color: var(--secondary-color);
  }

  & > input:checked + span::before {
    border-color: var(--secondary-color);
    width: 20px;
    height: 20px;
    padding: 5px;
    display: block;
    position: relative;
    background-color: var(--secondary-color);
    box-shadow: 0px 0px 0px 4px var(--background-color) inset;
  }

  & > input:disabled + span::before {
    border-color: var(--border-color);
  }
`;
export const Input = styled.input`
  width: 20px;
  height: 20px;
`;

export const ImageInputContainer = styled.div`
  border: 1px solid var(--black-text-color);
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  width: 82px;
  height: 54px;
  position: relative;

  left: -1px;
  top: -1px;

  &:hover,
  &:focus,
  &:active {
    border-color: var(--secondary-color);
    color: var(--secondary-color);
  }

  & > p {
    pointer-events: none;
    position: absolute;
    left: 17%;
    top: 25%;
  }
`;

export const ImageInput = styled.input`
  width: 83px;
  height: 54px;
  color: transparent;
  position: absolute;

  left: -2px;
  top: -2px;

  &::file-selector-button {
    border-color: transparent;
    color: transparent;
    background-color: transparent;
    width: 83px;
    height: 54px;
    cursor: pointer;
  }
`;

export const ImageLabel = styled.div`
  margin-left: 16px;
  margin-right: auto;
  align-self: center;
  color: var(--grey-text-color);

  left: -2px;
  top: -2px;
`;

export const WarningText = styled.p`
  font-size: 10px;
  position: absolute;
  color: red;
`;

export const ButtonContainer = styled.div`
  margin-top: 25px;
  height: 48px;
  text-align: center;
  align-self: center;
`;

export const ButtonForm = styled.button`
  width: 100px;
  height: 34px;

  border-radius: 80px;
  border: transparent;

  background-color: var(--button-normal-color);
  color: var(--black-text-color);

  &:not(:disabled) {
    cursor: pointer;
  }

  &:hover {
    background-color: var(--button-hover-color);
    color: var(--black-text-color);
  }

  &:disabled {
    color: var(--white-text-color);
    background-color: var(--button-disabled-color);
  }
`;
