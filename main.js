document.getElementById("btn").onclick = function () {
  const distance = document.querySelector("#distance").value;
  const man = 3.6;
  const bike = 20.1;
  const car = 70;
  const plane = 800;
  function allTime(road, spead) {
    let results = road / spead
    return results
  }
  // console.log();
 let manResult = allTime(distance,man) 
  let bikeRusult = allTime(distance,bike)

  document.querySelector("#manResult").innerHTML = `${manResult}`;
  document.querySelector("#bikeResult").innerHTML = `${bikeRusult}`;
};
