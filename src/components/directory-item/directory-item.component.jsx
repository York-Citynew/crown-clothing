import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles.jsx";
const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();
  const navigateToCategory = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={navigateToCategory}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};
export default DirectoryItem;
