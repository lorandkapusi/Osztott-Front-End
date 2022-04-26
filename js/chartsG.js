
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

// const data = {
//   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//   datasets: [{
//     label: 'Results',
//     data: [18, 12, 6, 9, 12, 3, 9],
//     backgroundColor: colors,
//     borderColor: borderColors,
//     borderWidth: 1
//   }]
// };

// {
//   labels: json.map(x => x.Nev),
//   datasets: [
//     {
//       label: "Szavazasi eredmények",
//       data: json.map(x => x.Szavazastok),
//       backgroundColor: colors,
//       borderColor: borderColors,
//       borderWidth: 1
//     }
//   ]


// const config = {
//   type: 'bar',
//   data,
//   options: {
//     indexAxis: 'y',
//   }
// };


// const myChart = new Chart(barChart, config);

const userAction = async () => {
  const response = await fetch('http://example.com/movies.json');
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson
}

let json =
   [
   {
    "Nev":"Fidesz",
    "Szavazastok":2555
   },
   {
    "Nev":"DK",
    "Szavazastok":345
   },
   {
    "Nev":"Kutya",
    "Szavazastok":123
   },
   ]




new Chart(document.getElementById("bar-chart"), {
type: 'bar',
data: {
  labels: json.map(x => x.Nev),
  datasets: [
    {
      label: "Szavazasi eredmények",
      data: json.map(x => x.Szavazastok),
      backgroundColor: colors,
     borderColor: borderColors,
     borderWidth: 1
    }
  ]
},
options: {
  legend: { display: true },
  title: {
    display: true,
    text: 'Eredmények'
  }
}
});