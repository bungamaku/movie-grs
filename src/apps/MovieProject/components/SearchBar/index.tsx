import * as React from "react";
import styled from "styled-components";

import * as searchIcon from "../../../../../public/images/search-icon.png";

const SearchContainer = styled.div`
  width: 30%;
  height: 36px;
  margin-top: 17px;
  background: #2a2a2a;
  display: flex;
  justify-content: flex-start;
`;

const SearchInput = styled.input`
  width: 100%;
  font-weight: normal;
  font-size: 14px;
  border: none;
  border-color: transparent;
  background-color: transparent;
  color: white;
`;

const Icon = styled.img`
  margin: 10px 15px 5px;
  height: 16px;
`;

export default function SearchBar() {
  return (
    <SearchContainer>
      <Icon src={searchIcon} alt="search-icon" />
      <SearchInput type="text" placeholder="Search your favorite movies" />
    </SearchContainer>
  );
}
