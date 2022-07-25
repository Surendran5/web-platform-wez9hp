// one way of declaring objects

let myCalc = {
  input1: "",
  input2: "",
  currentOperation: "",
  result: "",
  // intentionally return to show ES6 way of writing JS methods
  strToNumConvert(val) {
    return parseInt(val);
  },
  sin1() {
    let temp1 = this.strToNumConvert(this.input1),
      temp2 = this.strToNumConvert(this.input2);
    return (this.result = Math.sin(temp1));
  },
  cos() {
    let temp1 = this.strToNumConvert(this.input1),
      temp2 = this.strToNumConvert(this.input2);
    return (this.result = Math.cos(temp1 + temp2));
  },
  tan1() {
    let temp1 = this.strToNumConvert(this.input1),
      temp2 = this.strToNumConvert(this.input2);
    return (this.result = Math.tan(temp1 + temp2));
  },
  pow() {
    let temp1 = this.strToNumConvert(this.input1),
      temp2 = this.strToNumConvert(this.input2);
    return (this.result = Math.pow(temp1, temp2));
  },
};

//other way of declaring object

function myCalcFunction() {
  this.input1 = "";
  this.input2 = "";
  this.currentOperation = "";
  this.result = "";
  this.strToNumConvert = function (val) {
    return parseInt(val);
  };
  this.sin1 = function () {
    let temp1 = this.strToNumConvert(this.input1);
    // temp2 = this.strToNumConvert(this.input2);
    return (this.result = Math.sin(temp1));
  };
  this.cos = function () {
    let temp1 = this.strToNumConvert(this.input1),
      temp2 = this.strToNumConvert(this.input2);
    return (this.result = Math.cos(temp1 + temp2));
  };
  this.tan1 = function () {
    let temp1 = this.strToNumConvert(this.input1),
      temp2 = this.strToNumConvert(this.input2);
    return (this.result = Math.tan(temp1 + temp2));
  };
  this.pow = function () {
    let temp1 = this.strToNumConvert(this.input1),
      temp2 = this.strToNumConvert(this.input2);
    return (this.result = Math.pow(temp1, temp2));
  };
}

myCalc = new myCalcFunction();
