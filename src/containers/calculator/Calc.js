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
  state = {
    value: 0,
    sel: "Bitcoin",
    val: "RUB",
    convert: 0
  };

  handleNumber(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSelect(e) {
    this.setState({
      sel: e.target.value
    });
  }

  handleVal(e) {
    this.setState({
      val: e.target.value
    });
  }

  render() {
    const { value, sel, val, convert } = this.state;
    return (
      <CalcContainer>
        <Title>
          <p>Cryptocurrency Converter Calculator</p>
        </Title>
        <ConvertCont>
          <CryptoChoose>
            <input
              value={value}
              type="number"
              onChange={e => this.handleNumber(e)}
            />
            <select onChange={e => this.handleSelect(e)}>
              <option value="Bitcoin">Bitcoin</option>
              <option value="Ethereum">Ethereum</option>
              <option value="Ripple">Ripple</option>
              <option value="Bitcoin Cash">Bitcoin Cash</option>
              <option value="Litecoin">Litecoin</option>
            </select>
            <p>
              {value} {sel}
            </p>
          </CryptoChoose>
          <ButtonConvert>
            <button>Go</button>
          </ButtonConvert>
          <CryptoValue>
            <select onChange={e => this.handleVal(e)}>
              <option value="RUB">RUB</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
            <p>
              {convert} {val}
            </p>
          </CryptoValue>
        </ConvertCont>
      </CalcContainer>
    );
  }
}

export default Calc;
