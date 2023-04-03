import styled from "@emotion/styled";

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  `

export const DetailContainer = styled.div`
  border-radius: 15px;
  margin: 10px;
  display: flex;
  background: #1d1d1f;
  padding: 15px;
  justify-content: space-around;
  align-items: center;
  max-width: 60%;

  @media(max-width: 650px) {
    flex-direction: column;
    max-width: 98%;
    margin: 5px;
    align-items: start;
  }
`

export const PageDetailContainer = styled.div`
  padding: 120px 20px;
  display: flex;
  justify-content: center;
  width: 100%;

  @media(max-width: 650px) {
    flex-direction: column;
    align-items: start;
    padding: 80px 10px 10px 10px;
  }
`
