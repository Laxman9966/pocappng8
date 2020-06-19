$(document).ready(function(){
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ["Train", "Test"],
        datasets: [{
          backgroundColor: [
            "#49b856",
            "#146093"
          ],
          data: [60, 40]
        }],
      }
    });
    });