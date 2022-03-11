import { Container, ContainerFlex, Image } from "../../styles/CommonComponents";
import UserDefaultLogged from "../../public/images/userExampleSVG.svg";
import { ProfileName, BgPerfil, ArrowLeft, ArrowRight} from "./PerfilStyles";
import { useEffect, useRef, useState } from "react";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import { WrapperCardsection } from "../../styles/HomeViewStyle";
import { Navigate, useParams } from "react-router-dom";
import Loader from "../../Components/modalDialogs/Loader";
import Url from "../../constants/apiUrl";
import NotFoundPage from "../NotFoundPage";

const Perfil = () => {
    const {userId} = useParams()
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState();
    const [user, setUser] = useState();
    console.log(user);
    console.log(isLoading);
    const ref = useRef();
    const getUser = async () => {
        const response = await fetch(`${Url.user.all}/${userId}`);
        const data = await response.json();
        return data;
    }
    const getPosts = async () => {
        const response = await fetch(`${Url.product.specific}/${userId}`);
        const data = await response.json();
        return data;
    }
    const getData = async () => {
        const content = await Promise.all([getUser(), getPosts()]);
        const [user, posts] = content;
        setUser(user)
        setPosts(posts);
        setIsLoading(false);
        console.log(content);
    }
    useEffect(() => {
        getData();
    }, [])
    const slideLeft = () => {
        ref.current.scrollLeft -= 500;
    }
    const slideRight = () => {
        ref.current.scrollLeft += 500;
    }
    return (
        <>
                {isLoading ?
                    <ContainerFlex width="100vw" height="100vh">
                        <Loader />
                    </ContainerFlex>
                :
                    user.ok ?
                        <Container margin="50px auto">
                            <ContainerFlex direction="column">
                                <Image border="5px solid #F1EAEA" width="130px" height="130px" src={UserDefaultLogged} radius="50%" />
                                <ProfileName>{user && user?.userDetail?.nombre}</ProfileName>
                                <BgPerfil></BgPerfil>
                            </ContainerFlex>
                            <ContainerFlex width="100%" height="100%">
                                <ArrowLeft onClick={slideLeft}/>
                                <ContainerFlex overflowX="scroll" gap="20px" maxWidth="900px" minWidth="300px" justifyContent="space-between" ref={ref}>
                                    {posts &&
                                        posts.productUser?.map(({ img_art, nombre, nombre_autor, precio }) => (
                                            <WrapperCardsection
                                            key={nombre}
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
                                        ))
                                    }
                                </ContainerFlex>
                                <ArrowRight onClick={slideRight}/>
                            </ContainerFlex>
                        </Container>
                    :
                    <NotFoundPage />
                }
        </>
    );
}

export default Perfil;
