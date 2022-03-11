import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { ContainerGrid } from "../../styles/CommonComponents";
import { WrapperCardsection } from "../../styles/HomeViewStyle";
import { itemsPagination } from "../../utils/itemsPagination";
import { sliceArr } from "../../utils/sliceArr";
import { FilterByPrice } from "../FilterByPrice/FilterByPrice";
import { ProductCard } from "../ProductCard/ProductCard";
import {
  ContentPageCount,
  ContentPagination,
  PaginationItems,
} from "./PaginationStyle";

export const Pagination = ({ dataArr }) => {
  let itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);
  const [paginationItem, setPaginationItem] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (dataArr) {
      const numItemsPagination = itemsPagination(dataArr, itemsPerPage);
      const slicedataArr = sliceArr(currentPage, itemsPerPage, dataArr);
      setPaginationItem(numItemsPagination);
      setProducts(slicedataArr);
    }
  }, [currentPage]);

  const handleUpPage = (e) => {
    if (currentPage >= paginationItem.length - 1) {
      e.preventDefault();
      return;
    }
    setCurrentPage((prev) => prev + 1);
    e.preventDefault();
  };

  const handleDownPage = (e) => {
    if (currentPage === 0) {
      e.preventDefault();
      return;
    }
    setCurrentPage((prev) => prev - 1);
    e.preventDefault();
  };

  const handleNumberPagination = (e) => {
    const numberItemPagination = Number(e.target.dataset.item) - 1;
    setCurrentPage(numberItemPagination);
  };

  const handleFilter = (value) => {
    const newSortArr = [...products];
    if (value === "lowPrice") {
      newSortArr.sort((a, b) => a.precio - b.precio);
    } else if (value === "highPrice") {
      newSortArr.sort((a, b) => b.precio - a.precio);
    }
    setProducts(newSortArr);
  };

  return (
    <>
      <FilterByPrice handleFilter={handleFilter} />
      <ContainerGrid>
        {products.map(({ img_art, nombre, nombre_autor, precio }) => (
          <WrapperCardsection key={nombre} margin="1.3rem 0rem" width="100%">
            <ProductCard
              imageSrc={img_art}
              altImage={nombre}
              artName={nombre}
              authorName={nombre_autor}
              artPrice={precio}
            />
          </WrapperCardsection>
        ))}
      </ContainerGrid>
      <ContentPagination>
        <button onClick={handleDownPage}>
          <Icon icon="bi:chevron-double-left" height="20" />
        </button>
        <ContentPageCount>
          {paginationItem.map((item) => (
            <PaginationItems
              onClick={handleNumberPagination}
              active={Number(item) === currentPage + 1 ? true : false}
              data-item={item}
              key={item}
            >
              {item}
            </PaginationItems>
          ))}
        </ContentPageCount>
        <button onClick={handleUpPage}>
          <Icon icon="bi:chevron-double-right" height="20" />
        </button>
      </ContentPagination>
    </>
  );
};
