import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  button {
    margin-left: auto;
    margin-top: 50px;
  }
`;

export const Descricao = styled.div`
  width: 150px
`;

export const AbsolutoX = styled.div`
  position: absolute;
  right: 10px;
  font-size: 20px
`

export const ImageContainer = styled.div`
  text-align: center;
  height: 250px;
  padding: 2px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const WarningContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`;

export const QuantityContainer = styled.div`
  display: flex;
  span {
    margin: 0 10px;
  }

  div {
    cursor: pointer;
  }
`;

export const Greater = styled.div`
  border: solid;
  width: 30px;
  border-radius: 23px;
  text-align: center;
`

export const Less = styled.div`
  border: solid;
  width: 30px;
  border-radius: 23px;
  text-align: center;
`