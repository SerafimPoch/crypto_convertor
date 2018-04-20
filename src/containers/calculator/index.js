import styled from "styled-components";

export const CalcContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  height: 250px;
  width: 600px;
  border: 0.5px solid rgb(205, 202, 202);
  border-radius: 8px;
`;

export const Title = styled.div`
  width: 450px;
  font-size: 28px;
`;

export const ConvertCont = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 550px;
  height: 150px;
`;

export const CryptoChoose = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  height: 150px;
  width: 180px;
  p {
    text-align: center;
  }
`;

export const ButtonConvert = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  width: 20px;
  height: 150px;
`;

export const CryptoValue = CryptoChoose.extend`
  margin-top: 11px;
`;
