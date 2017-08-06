let BarChart = document.querySelector('#bar-chart').getContext('2d');
let HBarChart = document.querySelector('#hbar-chart').getContext('2d');
let PieChart = document.querySelector('#pie-chart').getContext('2d');
let PolarAreaChart = document.querySelector('#polararea-chart').getContext('2d');
let LineChart = document.querySelector('#line-chart').getContext('2d');
// create a bar chart 
function createChart(domElement, typeOfChart){
    let populationChart = new Chart(domElement, {
    type: typeOfChart, // bar, horizontal bar, pie, line, polarArea
    data: {
      labels: [
        'Delhi',
        'Mumbai',
        'Kolkata',
        'Chennai',
        'Hyderabad',
        'Noida',
        'Gurgaon'
      ],
      datasets: [
        {
          label: 'Population',
          data: [
            11.034555,
            12.442373,
            4.496694,
            4.646732,
            6.731790,
            0.642381,
            0.876824
          ],
          backgroundColor: [
            '#B71C1C',
            '#880E4F',
            '#4A148C',
            '#0D47A1',
            '#1A237E',
            '#006064',
            '#1B5E20'
          ],
          borderWidth: 1,
          borderColor: 'black',
          hoverBorderWidth: 2,
          hoverBorderColor: 'black'
        },
        {
          label: 'Literacy',
          data: [
            8.634,
            8.291,
            7.708,
            8.033,
            6.65,
            6.972,
            6.572
          ],
          backgroundColor: [
            '#FF8A80',
            '#FF80AB',
            '#EA80FC',
            '#82B1FF',
            '#8C9EFF',
            '#84FFFF',
            '#B9F6CA'
          ],
          borderWidth: 1,
          borderColor: 'black',
          hoverBorderWidth: 2,
          hoverBorderColor: 'black'
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: '',
        fontSize: 30
      },
      legend: {
        position: 'right',
        color: 'green',
        labels: {
          fontColor: 'black',
          fontSize: 18
        }
      }
    }
  });
}

createChart(BarChart, 'bar');
createChart(HBarChart, 'horizontalBar');
createChart(PieChart, 'pie');
createChart(PolarAreaChart, 'polarArea');
createChart(LineChart, 'line');
