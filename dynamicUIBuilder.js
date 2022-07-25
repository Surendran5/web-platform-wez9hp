document.addEventListener("DOMContentLoaded", ready);

function ready() {
  // console.clear();
  console.log("DOM is ready");
  loadInputSlot1();
  loadInputSlot2();
  loadOutputSlot();
  loadKeys();
}
let keyPad = [
  [9, 8, 7, "&larr;"],
  [6, 5, 4, "tan"],
  [3, 2, 1, "x^y"],
  ["CE", 0, "sin", "cos"],
];

function loadKeys() {
  let str = "";

  for (let keys of keyPad) {
    str += `<div class="d-flex justify-content-between my-2">`;

    for (let key of keys) {
      if (key === "&larr;") {
        str += singleClearButton(key);
      } else if (key === "CE") {
        str += clearAllButton(key);
      } else if (
        key === "sin" ||
        key === "tan" ||
        key === "x^y" ||
        key === "cos"
      ) {
        str += operandButton(key);
      } else {
        str += numreicButton(key);
      }
    }
    str += `</div>`;
  }
  document.querySelector("#buttonContainer").innerHTML = str;
}
