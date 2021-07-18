new Chart(document.getElementById("myChart"), {
  type: 'bar',
  data: {
    labels: ["2019/06/01", "2019/06/02","2019/06/03","2019/06/04","2019/06/05","2019/06/06","2019/06/07"],
    datasets: [
      {
        label: "Ounces",
        backgroundColor: ['blue','cyan', 'lime green','purple','pink', 'red', 'yellow'],
        data: [10, 20, 30, 40, 50, 60, 70]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Weekly Hydration Log'
    }
  }
});
