import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import { WrapperCardsection } from "../../styles/HomeViewStyle";
import { Loader } from "../../styles/MarketplaceViewStyle";
import { ProductCard } from "../ProductCard/ProductCard";
import Url from "../../constants/apiUrl";

export const FeaturedItems = () => {
  const [item, setItem] = useState([])
  const { response, error, isLoading } = useApi(Url.product.all);

  useEffect(() => {
    if (response) {
      let randomIndex = Math.round(Math.random() * response.length - 1);
      if (randomIndex < 0) {
        randomIndex = 0;
      }
      let start = randomIndex
      let end = start + 3
      if(start >= response.length - 2) {
        start = response.length - 3
      } 
      const sliceArr = response.slice(start, end)
      setItem(sliceArr)
    }

  }, [response]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        item
          .map(({ img_art, nombre, nombre_autor, precio, _id, autor_producto }) => (
            <WrapperCardsection key={nombre} margin="1.3rem 0rem" width="100%">
              <ProductCard
                imageSrc={img_art}
                altImage={nombre}
                artName={nombre}
                authorName={nombre_autor}
                artPrice={precio}
                productID={_id}
                authorID={autor_producto}
              />
            </WrapperCardsection>
          ))
      )}
    </>
  );
};
