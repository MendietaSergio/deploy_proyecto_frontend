import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useNearScreen } from "../../hooks/useLazyLoading";
import {
  ImageCard,
  InfoAuthorCard,
  Price,
  WrapperCard,
  WrapperProductDetail,
} from "../../styles/ProductCardStyle";

let options = {
  root: null,
  rootMargin: "0px 0px 100px 0px",
  threshold: 0,
};

export const ProductCard = ({
  imageSrc,
  altImage,
  artName,
  authorName,
  artPrice,
  productID,
  authorID
}) => {
  const [itemRef] = useNearScreen(imageSrc, options);

  return (
    <WrapperCard>
      <figure>
        <ImageCard ref={itemRef} height={"100%"} src={imageSrc} alt={altImage} />
      </figure>
      <WrapperProductDetail>
        <div>
          <Link to={`product-detail/${productID}`}>{artName}</Link>
        </div>

        <InfoAuthorCard>
          <Link to={`perfil/${authorID}`}>
            by <span>{authorName}</span>
          </Link>
        </InfoAuthorCard>
        <Price>
          <div>
            <span>Precio</span>
            <div>${artPrice}</div>
          </div>
          <div>
            <Icon icon="mdi:cards-heart-outline" color="#1b3d30" height="20" />
            <span>1</span>
          </div>
        </Price>
      </WrapperProductDetail>
    </WrapperCard>
  );
};
