import React, { Component } from "react";
import { conncet } from "react-redux";
import {
  CalcContainer,
  Title,
  ConvertCont,
  CryptoChoose,
  ButtonConvert,
  CryptoValue
} from "./index";

class Calc extends Component {
  render() {
    return (
      <CalcContainer>
        <Title>
          <p>Cryptocurrency Converter Calculator</p>
        </Title>
        <ConvertCont>
          <CryptoChoose>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
          </CryptoChoose>
          <ButtonConvert>hello</ButtonConvert>
          <CryptoValue>hello</CryptoValue>
        </ConvertCont>
      </CalcContainer>
    );
  }
}

export default Calc;
