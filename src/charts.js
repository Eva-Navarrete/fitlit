// USER GOALS CHART

const renderHydrationChart = (data) => {
  return new Chart(document.getElementById("hydroChart"), {
    type: 'bar',
    data: {
      labels: data.hydrationData.slice(-7).map(hydro => hydro.date),
      datasets: [{
        label: 'Ounces',
        backgroundColor: ['#191970'],
        data: data.getWeeklyOunces()
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        }
      }
    }

  });
}

const renderActivityChart = () => {
  return new Chart(document.getElementById("activityChart"), {
    type: 'bar',
    data: {
      labels: ["2019/06/01", "2019/06/02", "2019/06/03", "2019/06/04", "2019/06/05", "2019/06/06", "2019/06/07"],
      datasets: [{
        label: "Ounces",
        backgroundColor: ['blue', 'cyan', 'lime green', 'purple', 'pink', 'red', 'yellow'],
        data: [10, 20, 30, 40, 50, 60, 70]
      }]
    },
    options: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Weekly Hydration Log'
      }
    }
  })
}


// const allCharts [
//      hydrationChart()
// ];
// USER GOAL VS OTHERS Chart

//ACTIVITY USER STEPS/MILES/MINACTIVE PER DAY
export {
  renderHydrationChart,
  renderActivityChart
}
