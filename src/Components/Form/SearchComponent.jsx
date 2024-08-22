// import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";

// const SearchBar = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 20px;
// `;

// const SearchInput = styled.input`
//   padding: 10px;
//   font-size: 16px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   width: 300px;
// `;

// const SearchButton = styled.button`
//   padding: 10px;
//   margin-left: 10px;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const SearchIcon = styled(FontAwesomeIcon)`
//   margin-right: 5px;
// `;

// function SearchComponent({ onSearch }) {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSearchClick = () => {
//     onSearch(searchTerm);
//   };

//   return (
//     <SearchBar>
//       <SearchInput
//         type="text"
//         value={searchTerm}
//         onChange={handleInputChange}
//         placeholder="Nhập địa điểm hoặc loại hình du lịch..."
//       />
//       <SearchButton onClick={handleSearchClick}>
//         <SearchIcon icon={faSearch} />
//         Tìm kiếm
//       </SearchButton>
//     </SearchBar>
//   );
// }

// export default SearchComponent;

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SearchBar = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 572px;
  height: 36px;
  border-radius: 10px;
  padding: 10px;
  background-color: #ddd;

  &:hover {
    background-color: #d3d3d3;
  }
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: 14px;
  border: none;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  background-color: white;
  color: #666;
  height: 100%;
  background-color: transparent;
  outline: none;
  margin-right: 10px;
`;

const SearchButton = styled.button`
  background-color: #046cb8;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  font-size: 12px;
  color: #fff;
  margin: 5px;
  margin-left: auto;
  border-radius: 10px;
  cursor: pointer;
  border: none;
`;

const SearchIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
  color: #666;
`;

function SearchComponent({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    setSearchTerm(""); // Clear the search input after submission
  };

  return (
    <SearchBar onSubmit={handleSearchClick}>
      <SearchIcon icon={faSearch} />
      <SearchInput
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Nhập địa điểm hoặc loại hình du lịch..."
      />
      <SearchButton type="submit">Khám phá</SearchButton>
    </SearchBar>
  );
}

export default SearchComponent;
