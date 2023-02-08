function weather() {
    let cityname = document.getElementById("cityname")
    let response1 = fetch("http://api.openweathermap.org/data/2.5/weather?q=" + cityname.value + "&appid=b7dec61b1bbc853df247809000a0e66e")
    // var temp = [];
    // var date = [];
    response1.then((res) => {
        res.json().then((data) => {
            let maxmin = document.getElementById("maxmin")
            maxmin.innerHTML = "current temp:" + data.main.temp + "<br>" + "maxtemp:" + data.main.temp_max + "<br>" + "mintemp:" + data.main.temp_min

        })
    })

    let response = fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + cityname.value + "&appid=b7dec61b1bbc853df247809000a0e66e")
    // var temp = [];
    // var date = [];
    response.then((res) => {
        res.json().then((data) => {
            let j = 0;
            var temp = [];
            var date = [];
            for (let i = 0; i < data.list.length; i = i + 8) {
                temp[j] = data.list[i].main.temp;
                a = data.list[i].dt_txt.split(" ")
                date[j] = a[0];
                console.log(temp[j], date[j])
                j++;
            }
            plotting(date, temp)

        })
    })


}
function plotting(date, temp) {

    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: date,
            datasets: [{
                label: 'weatherreport',
                data: temp,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

}