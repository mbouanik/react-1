function addCommas(num) {
  let sNum = [...String(num)].reverse();
  let nCommas = Math.floor(sNum.length / 3);
  let n = [];
  while (nCommas && sNum.length) {
    if (sNum.length >= 3) {
      n.push(sNum.slice(0, 3));
      // console.log(sNum);
      sNum = sNum.slice(3);
      // console.log(sNum);
    } else {
    }
    nCommas -= 1;
    // console.log(sNum);
  }
  if (sNum.length) {
    n.push(sNum);
  }
  n.reverse();

  let res = "";
  for (let i = 0; i < n.length; i += 1) {
    res += n[i].reverse().join("");
    if (i < n.length - 1) {
      res += ",";
    }
  }
  return res;
  //
  //   for (let i = 0; i < n.length; i = +1) {
  //     res += n[i].reverse().join("");
  //     if (i < n.length - 1) {
  //       res += ",";
  //     }
  //   }
  // console.log(res);
}

module.exports = addCommas;

addCommas(340);
addCommas(3400);
addCommas(34000);
addCommas(3400000);
addCommas(340000);
addCommas(3400000000);
