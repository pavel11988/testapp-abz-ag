//libs/hooks
import { useEffect, useState } from "react";

//components
import Loader from "../Loader/Loader";

//components styled
import {
  FormContainer,
  FormInput,
  NumberLabel,
  PositionsContainer,
  PositionsTitle,
  ImageInput,
  ButtonForm,
  TextInputsContainer,
  ImageContainer,
  ImageLabel,
  ImageInputContainer,
  ButtonContainer,
  TitleSignInForm,
  SignInFormContainer,
  Label,
  Input,
  Position,
} from "./UsetForm.styled";

const UserForm = ({ positions, onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [photoFile, setPhotoFile] = useState(null);
  const [userPositionId, setUserPositionId] = useState(null);

  const [emptyFields, setEmptyFields] = useState(true);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === "" ||
      userPositionId === null ||
      photoFile === null
    ) {
      setEmptyFields(true);
    } else {
      setEmptyFields(false);
    }
  }, [name, email, phone, userPositionId, photoFile]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const handlePhoto = (e) => {
    const uploadPhoto = e.target.files[0];
    if (!uploadPhoto) {
      setPhotoFile(null);
      return;
    }
    const oFReader = new FileReader();
    oFReader.readAsDataURL(uploadPhoto);
    oFReader.onload = (event) => {
      var image = new Image();
      image.src = event.target.result;
      image.onload = function () {
        if (
          image.width < 70 ||
          image.height < 70 ||
          uploadPhoto.size > 5120000
        ) {
          setError(true);
        } else {
          setPhotoFile(uploadPhoto);
          setError(false);
        }
      };
    };
  };

  function resetForm() {
    setName("");
    setEmail("");
    setPhone("");
    setPhotoFile(null);
    setUserPositionId(null);
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const form = e.target;

    if (error === false || emptyFields === false) {
      const user = {
        photo: photoFile,
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        position_id: userPositionId,
      };
      await onSubmit(user, resetForm)
        .then(() => {
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }

  const BUTTON_SIGNIN = loading === false && error === false;
  const LOADING_SIGNIN =
    loading === true && error === false && emptyFields === false;

  const EMPTY_PHOTO = photoFile === null ? true : false;
  const ERROR_PHOTO = error === true ? true : false;

  return (
    <SignInFormContainer>
      <TitleSignInForm id="sign-up-form">
        Working with POST request
      </TitleSignInForm>

      <FormContainer onSubmit={handleFormSubmit}>
        <TextInputsContainer>
          <FormInput
            onChange={handleChange}
            value={name}
            name="name"
            type="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            autoComplete="off"
            placeholder="Your name"
            maxLength={60}
            minLength={2}
            required
          />

          <FormInput
            onChange={handleChange}
            value={email}
            name="email"
            type="email"
            min={2}
            minLength={2}
            max={100}
            maxLength={100}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            autoComplete="off"
            placeholder="Email"
            required
          />

          <NumberLabel>
            <FormInput
              onChange={handleChange}
              value={phone}
              type="tel"
              name="phone"
              pattern="^[\+]{1}380([0-9]{9})$"
              max={13}
              maxLength={13}
              autoComplete="off"
              placeholder="Phone"
              required
            />
            <p>+38 (XXX) XXX - XX - XX</p>
          </NumberLabel>
        </TextInputsContainer>

        <PositionsContainer>
          <PositionsTitle>Select your position</PositionsTitle>
          {positions &&
            positions.map(({ id, name }) => (
              <Position key={id}>
                <Label htmlFor={id}>
                  <Input
                    type="radio"
                    id={id}
                    value={id}
                    name="position"
                    required
                    onChange={() => setUserPositionId(id)}
                    checked={id === userPositionId}
                  />
                  <span>{name}</span>
                </Label>
              </Position>
            ))}
        </PositionsContainer>

        <div>
          <ImageContainer htmlFor="photo-file">
            <ImageInputContainer>
              <ImageInput
                type="file"
                name="photo"
                title="select"
                accept=".jpg, .jpeg"
                id="photo-file"
                onChange={handlePhoto}
              />
              <p>Upload</p>
            </ImageInputContainer>
            <ImageLabel>
              {!ERROR_PHOTO && photoFile !== null && photoFile.name}
              {EMPTY_PHOTO && !ERROR_PHOTO && "Select photo"}
              {ERROR_PHOTO &&
                "The photo must be <5 MB and resolution >70x70 pixels"}
            </ImageLabel>
          </ImageContainer>
        </div>
        <br />

        <ButtonContainer>
          {LOADING_SIGNIN && <Loader color="#00BDD3" />}
          {BUTTON_SIGNIN && (
            <ButtonForm
              type="submit"
              disabled={
                error === true || loading === true || emptyFields === true
              }
            >
              Sign up
            </ButtonForm>
          )}
        </ButtonContainer>
      </FormContainer>
    </SignInFormContainer>
  );
};

export default UserForm;
