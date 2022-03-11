import { useEffect, useState } from "react";
import styled from "styled-components";

const ContentFilter = styled.div`
  max-width: 150px;
  label {
    display: flex;
    flex-direction: column;
    select {
      margin-top: 1rem;
    }
  }
`;

export const FilterByPrice = ({ handleFilter }) => {
  const [selectValue, setSelectValue] = useState("lowPrice");

  useEffect(() => {
    handleFilter(selectValue);
  }, [selectValue]);

  const handlePriceFilter = (e) => {
    setSelectValue(e.target.value);
    e.preventDefault();
  };
  return (
    <ContentFilter>
      <form>
        <label>
          Filtrar por precio:
          <select
            onChange={handlePriceFilter}
            value={selectValue}
            name="filterByPrice"
          >
            <option value="lowPrice">Menor precio</option>
            <option value="highPrice">Mayor precio</option>
          </select>
        </label>
      </form>
    </ContentFilter>
  );
};
