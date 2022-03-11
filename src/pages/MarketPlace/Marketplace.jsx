import useApi from "../../hooks/useApi";
import Url from "../../constants/apiUrl";

import { Container, TitleSection } from "../../styles/CommonComponents";
import { HomeSection } from "../../styles/HomeViewStyle";
import {
  Loader,
  WrapperHeaderSectionMarket,
} from "../../styles/MarketplaceViewStyle";

import { Pagination } from "../../Components/Pagination/Pagination";

export const Marketplace = () => {
  const { response, error, isLoading } = useApi(`${Url.product.all}`);

  return (
    <Container>
      <HomeSection padding={"3rem 0rem 3rem 0rem"}>
        <WrapperHeaderSectionMarket
          direction={"column"}
          justify={"space-between"}
        >
          <TitleSection
            fontSize="1.8rem"
            alignSelf="flex-start"
            lineHeight="1.8rem"
            margin="0rem 0rem 2rem 0rem"
          >
            Marketplace
          </TitleSection>
        </WrapperHeaderSectionMarket>
        {isLoading ? (
          <Loader>
            <span></span>
          </Loader>
        ) : (
          <Pagination dataArr={response} />
        )}
      </HomeSection>
    </Container>
  );
};
