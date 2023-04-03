import styled from "@emotion/styled";

export const DetailColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: start;
  padding: 15px;

  @media(max-width: 650px) {
    align-items: start;
  }
`
