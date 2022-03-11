import {Container, ContainerGrid, TitleSection} from "../../styles/CommonComponents";
import { WrapperCardsection } from "../../styles/HomeViewStyle";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import Url from "../../constants/apiUrl";
import { useParams } from "react-router-dom";
import Loader from "../../Components/modalDialogs/Loader";
import {useState, useEffect} from "react";

const SearchPage = () => {
    const param = useParams()
    const [products, setProducts] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const getData = async () => {
        const response = await fetch(`${Url.product.search}?query=${param.param}`);
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
    }
    useEffect(() => {
        getData();
    }, [param]);
    console.log(products);
    return (
        <Container>
            <ContainerGrid>
                {
                    isLoading ? <Loader /> :
                    products.ok ? products.product?.map(({ img_art, nombre, nombre_autor, precio, _id }) => (
                        <WrapperCardsection
                        key={_id}
                        margin="1.3rem 0rem"
                        width="100%"
                        >
                        <ProductCard
                            imageSrc={img_art}
                            altImage={nombre}
                            artName={nombre}
                            authorName={nombre_autor}
                            artPrice={precio}
                            loading={isLoading}
                        />
                        </WrapperCardsection>
                    )) :
                    <Container>
                        <TitleSection>No se encontraron resultados</TitleSection>
                    </Container>
                }
            </ContainerGrid>
        </Container>
    );
}

export default SearchPage;