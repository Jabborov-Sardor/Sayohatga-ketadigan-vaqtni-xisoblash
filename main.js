document.getElementById("btn").onclick = function () {
  const distance = document.querySelector("#distance").value;
  const man = 3.6;
  const bike = 20.1;
  const car = 70;
  const plane = 800;
  function allTime(road, spead) {
    let results = road / spead
    let hours = Math.floor ( results)
    let minut = Math.round ((results- hours) * 60 )
    // let secund = Math.round((results - minut) * 60);
    return {hours,minut}
  }
 let manResult = allTime(distance,man) 
  let bikeResult = allTime(distance,bike)
  let carResult = allTime(distance,car)
  let planeResult = allTime(distance,plane)
 if( distance > 0 ) {
  document.querySelector("#manResult").innerHTML = `${manResult.hours} soat ${manResult.minut} minut`;
  document.querySelector("#bikeResult").innerHTML = `${bikeResult.hours} soat ${bikeResult.minut} minut`;
  document.querySelector("#carResult").innerHTML = `${carResult.hours} soat ${carResult.minut} minut`;
  document.querySelector("#planeResult").innerHTML = `${planeResult.hours} soat ${planeResult.minut} minut`;

 }else if (distance === '' ) {
  document.querySelector("#manResult").innerHTML = 'Masofani kiriting';
  document.querySelector("#bikeResult").innerHTML = 'Masofani kiriting';
  document.querySelector("#carResult").innerHTML = 'Masofani kiriting';
  document.querySelector("#planeResult").innerHTML = 'Masofani kiriting';
 } else{
  document.querySelector("#manResult").innerHTML = 'Notugri masofa kiritdingiz';
  document.querySelector("#bikeResult").innerHTML = 'Notugri masofa kiritdingiz';
  document.querySelector("#carResult").innerHTML = 'Notugri masofa kiritdingiz';
  document.querySelector("#planeResult").innerHTML = 'Notugri masofa kiritdingiz';
 }
};
