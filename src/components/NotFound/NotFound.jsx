//images
import notFoundImage from "../../images/not-found-image.jpg";

//components styled

const NotFound = () => {
  <div>
    <h2>Service error. Please reload the page.</h2>
    <img src={notFoundImage} alt="not-found-error" />
  </div>;
};

export default NotFound;
