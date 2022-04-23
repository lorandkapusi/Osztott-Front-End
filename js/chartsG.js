
let colors = [];
let borderColors = [];

const barChart = document.getElementById("bar-chart");

function randomColorGenerator(numberOfData){
  let r,g,b;

  for(let i = 0 ; i < numberOfData ; i++){
    r = Math.random()*226;
    g = Math.random()*226;
    b = Math.random()*226;
    colors.push("rgba("+r+","+g+","+b+",0.5)");
    borderColors.push("rgba("+r+","+g+","+b+",1)")
  }
}

randomColorGenerator(5);

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{
    label: 'Results',
    data: [18, 12, 6, 9, 12, 3, 9],
    backgroundColor: colors,
    borderColor: borderColors,
    borderWidth: 1
  }]
};


const config = {
  type: 'bar',
  data,
  options: {
    indexAxis: 'y',
  }
};


const myChart = new Chart(barChart, config);