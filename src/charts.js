// USER GOALS CHART
const renderHydrationChart = (data) => {
  return new Chart(document.getElementById("hydroChart"), {
    type: 'bar',
    data: {
      labels: data.hydrationData.slice(-7).map(hydro => hydro.date),
      datasets: [{
        label: 'Ounces',
        backgroundColor: ['#00FFFF'],
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

const renderWeeklyStepChart = (data) => {
  return new Chart(document.getElementById("weeklyStepChart"), {
    type: 'bar',
    data: {
      labels: data.activityData.slice(-7).map(active => active.date),
      datasets: [{
        label: 'Steps',
        backgroundColor: ['#7FFF00'],
        data: data.activityData.slice(-7).map(active => active.numSteps)
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

const renderSleepChart1 = (data) => {
  const date = data.sleepData.slice(-1)[0].date;
  return new Chart(document.getElementById("sleepChart1"), {
    type: 'bar',
    data: {
      labels: data.sleepData.slice(-7).map(sleep => sleep.date),
      datasets: [{
        label: 'Hours',
        backgroundColor: ['#00FFFF'],
        data: data.getWeeklySleepLog(date)
      },{
        label: 'Quality Score',
        backgroundColor: ['#7FFF00'],
        data: data.getWeeklySleepQualityLog(date)
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

const renderSleepChart2 = (data) => {
  const date = data.sleepData.slice(-1)[0].date;
  return new Chart(document.getElementById("sleepChart2"), {
    type: 'bar',
    data: {
      labels: data.sleepData.slice(-7).map(sleep => sleep.date),
      datasets: [{
        label: 'Quality Score',
        backgroundColor: ['#191970'],
        data: data.getWeeklySleepQualityLog(date)
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
      labels: ['My Activity', 'Avg Activity'],
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

const renderActivityChart4 = (data) => {
  const date = data.activityData.slice(-1)[0].date;
  return new Chart(document.getElementById("activityChart4"), {

    type: 'line',
    data: {
      labels: data.activityData.slice(-7).map(active => active.date),
      datasets: [{
        label: 'Steps',
        backgroundColor: ['#7FFF00'],
        data: data.activityData.slice(-7).map(active => active.numSteps)
      }]
    },
    options: {
      legend: {
        display: false
      },
    }
  })
}

const renderActivityChart5 = (data) => {
  const date = data.activityData.slice(-1)[0].date;
  return new Chart(document.getElementById("activityChart5"), {
    type: 'line',
    data: {
      labels: data.activityData.slice(-7).map(active => active.date),
      datasets: [{
        label: 'Stairs',
        backgroundColor: ['#7FFF00'],
        data: data.activityData.slice(-7).map(active => active.flightsOfStairs),
      }, {
        label: 'Minutes Active',
        backgroundColor: ['#00FFFF'],
        data: data.activityData.slice(-7).map(active => active.minutesActive),
      }]
    },
    options: {
      legend: {
        display: false
      },
    }
  })
}

export {
  renderHydrationChart,
  renderActivityChart1,
  renderActivityChart2,
  renderActivityChart3,
  renderActivityChart4,
  renderActivityChart5,
  renderSleepChart1,
  renderSleepChart2,
  renderWeeklyStepChart
}
