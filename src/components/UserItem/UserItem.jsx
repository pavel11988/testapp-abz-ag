//images
import photoDefault from "../../images/photo-cover.jpg";
import PropTypes from "prop-types";

//components styled
import {
  Item,
  Avatar,
  NameContainer,
  Position,
  EmailContainer,
  Phone,
  Tooltip,
} from "./UserItem.styled";

const UserItem = ({ email, name, phone, photo, position }) => {
  return (
    <Item>
      <Avatar
        src={photo}
        alt="user-avatar"
        width="70px"
        height="70px"
        onError={({ currentTarget }) => {
          currentTarget.onError = null;
          currentTarget.src = photoDefault;
        }}
      />
      <NameContainer>
        <p>{name}</p>
        <Tooltip>{name}</Tooltip>
      </NameContainer>
      <Position>{position}</Position>
      <EmailContainer>
        <p>{email}</p>
        <Tooltip>{email}</Tooltip>
      </EmailContainer>
      <Phone>{phone}</Phone>
    </Item>
  );
};

UserItem.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
  photo: PropTypes.string,
  position: PropTypes.string,
};

export default UserItem;
