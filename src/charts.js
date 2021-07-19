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

const renderActivityChart1 = (data, repoData) => {
  const date = data.activityData.slice(-1)[0].date
  return new Chart(document.getElementById("activityChart1"), {
    type: 'bar',
    data: {
      labels: ['My Steps', 'Avg Steps'],
      datasets: [{
        backgroundColor: ['#7FFF00', '#00FFFF'],
        data: [data.activityData.slice(-1)[0].numSteps, repoData.getAllAvgSteps(date)]
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        },
      }
    }
  })
}

const renderActivityChart2 = (data, repoData) => {
  const date = data.activityData.slice(-1)[0].date;
  return new Chart(document.getElementById("activityChart2"), {
    type: 'bar',
    data: {
      labels: ['My Activity', 'Avg Activity'], //Not Displaying Avg
      datasets: [{
        backgroundColor: ['#7FFF00', '#00FFFF'],
        data: [data.activityData.slice(-1)[0].minutesActive, repoData.getAllAvgMinutes(date)]
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        },
      }
    }
  })
}
const renderActivityChart3 = (data, repoData) => {
  const date = data.activityData.slice(-1)[0].date;
  return new Chart(document.getElementById("activityChart3"), {
    type: 'bar',
    data: {
      labels: ['My Stairs', 'Avg Stairs'],
      datasets: [{
        backgroundColor: ['#7FFF00', '#00FFFF'],
        data: [data.activityData.slice(-1)[0].flightsOfStairs, repoData.getAllAvgStairs(date)]
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        },
      }
    }
  })
}

// USER GOAL VS OTHERS Chart

//ACTIVITY USER STEPS/MILES/MINACTIVE PER DAY
export {
  renderHydrationChart,
  renderActivityChart1,
  renderActivityChart2,
  renderActivityChart3
}
