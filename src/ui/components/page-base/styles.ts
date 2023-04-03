import styled from "@emotion/styled";

export const PageContainer = styled.div`
  padding: 120px 20px;
  background-color: #0a0a14;

  @media(max-width: 650px) {
      padding: 150px 20px 20px 20px;

  }
`

export const PageNavigation = styled.div`
  padding: 15px 30px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
  position: fixed;
  background-color: #0a0a14;
  z-index: 999;

  @media(max-width: 650px) {
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 10px;
  }
`

export const CurrentPageTitle = styled.h1`
  color: #fff;
  margin: 0px 10px 0px 10px;

  @media(max-width: 650px) {
    font-size: 1.5rem;
  }
`

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  `
