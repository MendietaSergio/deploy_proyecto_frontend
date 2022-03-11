import { Link } from "react-router-dom";
import styled from "styled-components";
import { Image } from "../../styles/CommonComponents";
import profileImg from "../../public/images/profile-img.png";

const WrapperCard = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  overflow: hidden;
  min-height: 100%;
  figure {
    border-radius: 50%;
    line-height: 0px;
    width: 70px;
    overflow: hidden;
  }
  div ~ div {
    align-self: flex-end;
  }
`;

const WrapperArtistName = styled.div`
  padding-left: .8rem;
  div:first-child {
    a {
      font-size: 1.3rem;
      font-weight: 500;
    }
  }
  div:last-child {
    display: flex;
    justify-content: space-between;
    span {
      margin-left: 0.5rem;
    }
  }
`;

export const ArtistCard = ({ imageSrc, artistName, alt, _id}) => {
  return (
    <WrapperCard>
      <figure>
        <Image height={"100%"} src={profileImg} alt={alt} />
      </figure>
      <WrapperArtistName>
        <div>
          <Link to={`/perfil/${_id}`}>{artistName}</Link>
        </div>
      </WrapperArtistName>
      <div>
        <Link to={`/perfil/${_id}`}>
          <span>Ver obras</span>
        </Link>
      </div>
    </WrapperCard>
  );
};
