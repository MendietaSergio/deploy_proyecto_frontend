import {
  Button,
  Image,
  SubTitleSection,
  TitleSection,
} from "../../styles/CommonComponents";
import styled from "styled-components";
import useApi from "../../hooks/useApi";
import { useParams } from "react-router-dom";
import Url from "../../constants/apiUrl";

const MainContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 80px;
  min-height: 80vh;
  width: 100%;
  max-width: 1100px;
  height: fit-content;
  display: flex;
  justify-content: center;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    min-height: 40vh;
  }
`;

const DetailContainer = styled.div`
  margin-right: 16px;
  margin-left: 16px;
  min-height: 80vh;
  padding: 8px;
  line-height: 1.6rem;
  width:35%;
  @media (max-width: 960px) {
    width:70%;
    min-height: 38vh;
  }
`;


const ProductDetail = () => {
  const {productID} = useParams()
  const { response, error, isLoading } = useApi(`${Url.product.detail}/${productID}`);
  console.log(response);
  console.log(error);
  return (
    <MainContainer>
      <DetailContainer width="40%">
        <Image
          src={response?.productUpdate?.img_art}
          alt="product detail"
          width="100%"
          height="auto"
          radius="5px"
        />
      </DetailContainer>

      <DetailContainer width="33%">
        <div>
          <TitleSection fontSize="1.2rem" lineHeight="1.6rem">
            {response?.productUpdate?.nombre}{" "}
          </TitleSection>

          <h3>{response?.productUpdate?.nombre_autor}</h3>
          <h3> $ {response?.productUpdate?.precio}</h3>

          <br />

          <SubTitleSection fontSize="1rem" lineHeight="1.6rem">
            Description
          </SubTitleSection>
          <p>{response?.productUpdate?.descripcion}</p>

          <div className="btn-container">
            <Button
              primary="PrimaryButton"
              margin="8px 0 8px 0"
              radius="4px"
              border="none"
              background="rgb(92, 159, 217)"
              width="100%"
            >
              {" "}
              Add to basket
            </Button>
          </div>
        </div>
      </DetailContainer>
    </MainContainer>
  );
};

export default ProductDetail;
