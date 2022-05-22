//libs/hooks
import { useEffect, useState } from "react";

//components
import Loader from "../Loader/Loader";

//components styled
import {
  FormContainer,
  FormInput,
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
  WarningText,
} from "./UsetForm.styled";

const UserForm = ({ positions, onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [photoFile, setPhotoFile] = useState(null);
  const [userPositionId, setUserPositionId] = useState(null);

  const [emptyFields, setEmptyFields] = useState(true);
  const [error, setError] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorNumber, setErrorNumber] = useState(false);

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
        setErrorName(false);
        break;
      case "email":
        setEmail(value.trim());
        setErrorEmail(false);
        break;
      case "phone":
        setPhone(value.trim());
        setErrorNumber(false);

        break;
      default:
        return;
    }
  };

  const validator = ({ type, value }) => {
    if (type === "name") {
      if ((value.length > 60 || value.length < 2) && value.length !== 0) {
        setErrorName(true);
      } else {
        setErrorName(false);
      }
    }

    if (type === "email") {
      if (value === "") {
        setErrorEmail(false);
        return;
      }
      if (
        value.indexOf("@") > 1 &&
        value.indexOf(".") > value.length - 4 &&
        value.indexOf(".") !== value.length - 1 &&
        value.length >= 2 &&
        value.length <= 100
      ) {
        setErrorEmail(false);
      } else {
        setErrorEmail(true);
      }
    }

    if (type === "phone") {
      if (value.trim() === "") {
        setErrorNumber(false);
        return;
      }

      if (
        value[0] === "+" &&
        value[1] === "3" &&
        value[2] === "8" &&
        value[3] === "0" &&
        value.length === 13
      ) {
        setErrorNumber(false);
      } else {
        setErrorNumber(true);
      }
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
          setPhotoFile(uploadPhoto);
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
    setErrorName(false);
    setErrorEmail(false);
    setErrorNumber(false);
  }

  async function handleFormSubmit(e) {
    e.preventDefault();

    const form = e.target;

    await validator({ type: "name", value: name });
    await validator({ type: "email", value: email });
    await validator({ type: "phone", value: phone });

    if (
      error === false &&
      emptyFields === false &&
      errorEmail === false &&
      errorName === false &&
      errorNumber === false
    ) {
      setLoading(true);

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

  const BUTTON_SIGNIN = loading === false;
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
            sx={{
              "& .MuiInputLabel-root": { color: "var(--grey-text-color)" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "" },
              },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "var(--secondary-color)",
                },
              },
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  borderColor: "var(--secondary-color)",
                },
              },
            }}
            label="Name"
            variant="outlined"
            onChange={handleChange}
            value={name}
            name="name"
            type="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            autoComplete="off"
            placeholder="Name"
            maxLength={60}
            minLength={2}
            error={errorName}
            inputProps={{
              style: { fontFamily: "nunito" },
            }}
            helperText={
              errorName === true && "Name must be between 2 and 60 characters."
            }
          />

          <FormInput
            sx={{
              "& .MuiInputLabel-root": { color: "var(--grey-text-color)" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "" },
              },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "var(--secondary-color)",
                },
              },
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  borderColor: "var(--secondary-color)",
                },
              },
            }}
            label="Email"
            variant="outlined"
            onChange={handleChange}
            value={email}
            name="email"
            autoComplete="off"
            placeholder="Email"
            error={errorEmail}
            inputProps={{
              style: { fontFamily: "nunito" },
              minLength: 2,
              maxLength: 100,
            }}
            helperText={errorEmail === true && "Invalid email."}
          />

          <FormInput
            sx={{
              "& .MuiInputLabel-root": { color: "var(--grey-text-color)" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "" },
              },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "var(--secondary-color)",
                },
              },
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  borderColor: "var(--secondary-color)",
                },
              },
            }}
            inputMode="numeric"
            label="Phone"
            variant="outlined"
            placeholder="Phone"
            onChange={handleChange}
            value={phone}
            name="phone"
            inputProps={{
              maxLength: 13,
              autoComplete: "off",
              type: "tel",
            }}
            error={errorNumber}
            helperText={
              errorNumber === true
                ? "Number must be +38(XXX)XXX-XX-XX. Max length 13 characters"
                : "+38(XXX)XXX-XX-XX"
            }
          />
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
            {photoFile !== null && photoFile.name}
            {EMPTY_PHOTO && !ERROR_PHOTO && "Select photo"}
          </ImageLabel>
        </ImageContainer>

        {ERROR_PHOTO && (
          <WarningText>
            The photo size should be smaller 5 MB and resolution more than 70x70
            pixels
          </WarningText>
        )}

        <ButtonContainer>
          {LOADING_SIGNIN && <Loader color="#00BDD3" />}
          {BUTTON_SIGNIN && (
            <ButtonForm
              type="submit"
              disabled={
                error ||
                loading ||
                emptyFields ||
                errorEmail ||
                errorName ||
                errorNumber
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
