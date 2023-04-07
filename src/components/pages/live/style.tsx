import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  gap: 50px;
  padding-top: 50px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 30px;
`;
export const BodyWrapper = styled.div`
  @media screen and (min-width: 650px) {
    padding: 30px;
  }
  padding: 90px 30px;
`;
export const LiveDay = styled.p`
  margin: 20px 0 10px;
  font-weight: 700;
`;
