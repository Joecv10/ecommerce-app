import { Navigate, useNavigate } from "react-router-dom";
import {
  DirectoryContainer,
  BackgroundImage,
  Body,
} from "./directory-item.style.jsx";

const DirectoryItem = ({ Category }) => {
  const { title, img, route } = Category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <>
      <DirectoryContainer onClick={onNavigateHandler}>
        <BackgroundImage $img={img} />
        <Body>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Body>
      </DirectoryContainer>
    </>
  );
};

export default DirectoryItem;
