import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ArtistCard } from "../Components/ArtistCard/ArtistCard";
import { FeaturedItems } from "../Components/FeaturedItems/FeaturedItems";
import { ProductCard } from "../Components/ProductCard/ProductCard";
import useApi from "../hooks/useApi";
import {
  Container,
  SubTitleSection,
  TitleSection,
  ContainerGrid,
  Button,
} from "../styles/CommonComponents";
import {
  ContainerFlexHome,
  HomeSection,
  StatCardWrapper,
  WrapperCardsection,
  WrapperHeaderSection,
  WrapperHeroButton,
  WrapperHeroInfo,
} from "../styles/HomeViewStyle";
import { Loader } from "../styles/MarketplaceViewStyle";

const Home = () => {
  const [topImage, setTopImage] = useState({});
  const [featuredArtist, setfeaturedArtist] = useState([]);
  const { response, error, isLoading } = useApi(
    "https://c3-g62-6hag2f8eo-mendietasergio.vercel.app/api/products"
  );

  useEffect(() => {
    if (response) {
      let randomIndex = Math.round(Math.random() * response.length - 1);
      if (randomIndex < 0) {
        randomIndex = 0;
      }
      setTopImage(response.at(randomIndex));
    }
    const getArtist = async () => {
      try {
        const response = await fetch(
          "https://c3-g62-9uierc1l5-mendietasergio.vercel.app/api/users"
        );
        const results = await response.json();
        setfeaturedArtist(results.data);
      } catch (error) {
        console.log(error);
      }
    };
    getArtist().catch((error) => console.log(error));
  }, [response]);

  return (
    <Container>
      <ContainerFlexHome
        direction="column"
        padding="3rem 0rem"
        paddingDesktop="5rem 0rem"
        alignItems="center"
        alignItemsDesktop="flex-start"
        justifyContentDesktop="space-between"
      >
        <WrapperHeroInfo>
          <TitleSection lineHeight="4rem">
            Descubre y colecciona arte digital
          </TitleSection>
          <SubTitleSection fontSize="1.1rem" lineHeight="2.5rem">
            Marketplace de arte digital
          </SubTitleSection>
          <WrapperHeroButton>
            <Button primary>
              <Link to="/marketplace">Explorar</Link>
            </Button>
          </WrapperHeroButton>
        </WrapperHeroInfo>
        <WrapperCardsection width="50%">
          <ProductCard
            imageSrc={topImage.img_art}
            altImage={topImage.nombre}
            artName={topImage.nombre}
            authorName={topImage.nombre_autor}
            artPrice={topImage.precio}
            productID={topImage._id}
            authorID={topImage.autor_producto}
          />
        </WrapperCardsection>
      </ContainerFlexHome>

      <HomeSection padding={"6rem 0rem 6rem 0rem"}>
        <WrapperHeaderSection>
          <TitleSection
            fontSize="1.8rem"
            alignSelf="center"
            lineHeight="1.8rem"
            margin="0rem 0rem 1.5rem 0rem"
          >
            Nuestros números
          </TitleSection>
        </WrapperHeaderSection>
        <ContainerGrid>
          <StatCardWrapper margin="1.3rem 0rem" width="100%">
            <div>$20M</div>
            <div>Volumen de ventas</div>
          </StatCardWrapper>
          <StatCardWrapper margin="1.3rem 0rem" width="100%">
            <div>10K</div>
            <div>Total de usuarios</div>
          </StatCardWrapper>
          <StatCardWrapper margin="1.3rem 0rem" width="100%">
            <div>20K</div>
            <div>Obras de arte</div>
          </StatCardWrapper>
        </ContainerGrid>
      </HomeSection>

      <HomeSection padding={"3rem 0rem 3rem 0rem"}>
        <WrapperHeaderSection justify={"space-between"}>
          <TitleSection
            fontSize="1.5rem"
            alignSelf="flex-start"
            lineHeight="1.8rem"
          >
            Arte destacado
          </TitleSection>
          <Button>Ver mas</Button>
        </WrapperHeaderSection>
        <ContainerGrid>
          <FeaturedItems />
        </ContainerGrid>
      </HomeSection>

      <HomeSection padding={"3rem 0rem 3rem 0rem"}>
        <WrapperHeaderSection justify={"space-between"}>
          <TitleSection
            fontSize="1.5rem"
            alignSelf="flex-start"
            lineHeight="1.8rem"
          >
            Artistas destacados
          </TitleSection>
          <Button>Ver mas</Button>
        </WrapperHeaderSection>
        <ContainerGrid>
          {featuredArtist.slice(0, 3).map(({ nombre, _id }) => (
            <WrapperCardsection key={nombre} margin="1.3rem 0rem" width="100%">
              <ArtistCard artistName={nombre} _id={_id} />
            </WrapperCardsection>
          ))}
        </ContainerGrid>
      </HomeSection>

      <HomeSection padding={"3rem 0rem 3rem 0rem"}>
        <WrapperHeaderSection justify={"space-between"}>
          <TitleSection
            fontSize="1.5rem"
            alignSelf="flex-start"
            lineHeight="1.8rem"
          >
            Vendidos recientemente
          </TitleSection>
          <Button>Ver mas</Button>
        </WrapperHeaderSection>
        <ContainerGrid>
          <FeaturedItems />
        </ContainerGrid>
      </HomeSection>
    </Container>
  );
};

export default Home;
