import styled from "@emotion/styled";

export const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #4d377b;
  background: linear-gradient(336deg, rgba(3,3,4,1) 25%, rgba(77,55,123,0.927608543417367) 80%);
`

export const Card = styled.div`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: #589a47;
  text-decoration: none;
  border: 1px solid #589a47;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;

  &:hover, &:focus, &:active {
    color: #36632b;
    border-color: #36632b;
  }

  p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`

export const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;

  @media(max-width: 650px) {
    font-size: 1.5rem;
    text-align: center;
    margin-top: 10px;
  }
`

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1rem;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
}
`

export const LinkGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1rem;


@media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
}
`

export const ItemValue = styled.span`
  font-weight: 400;
`
