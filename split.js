var xy = [
  [0, 0],
  [0, -1],
  [-1, 0],
  [-1, -1],
  [0, -2],
  [-1, -2],
  [-2, -2],
  [-2, 0],
  [-2, -1],
];

function split() {
  for (let i = 0; i < 4; i++) {
    var newArray = [];
    xy[i].forEach((element) => {
      newArray.push(element);
    });

    var x = newArray[0];
    var y = newArray[1];
  }
}
