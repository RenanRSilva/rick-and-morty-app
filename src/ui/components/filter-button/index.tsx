import styled from "@emotion/styled";

export const FilterButton = styled.button`
  padding: 20px;
  background-color: #1d1d1f;
  color: #fff;
  font-size: 1.2rem;
  border: 1px solid #85a717;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #85a717;
    transition: ease-in-out 200ms;
  }

  @media (max-width: 650px) {
    padding: 15px;
  }
`;
