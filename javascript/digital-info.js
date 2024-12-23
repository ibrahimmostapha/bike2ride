const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Mounthly earnings in 1000 euro',
            data: [19, 8, 13, 27, 15, 21, 10, 38, 19, 31, 15, 17],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
    }
});



const cty = document.getElementById('circle').getContext('2d');
const circle = new Chart(cty, {
    type: 'polarArea',
    data: {
        labels: ["Cannondale", "Asics", "Lampagnolo", "Cube", "Giro", "Scott", "Endoura", "Gorewaer"],
        datasets: [{
            label: 'top brands',
            data: [55, 49, 44, 24, 20, 17, 49, 44,],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(70, 170, 50)',
                'rgba(255, 159, 64)',
                'rgba(123, 60, 17)',
                'rgba(155, 9, 164)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(123, 60, 17)',
                'rgba(155, 9, 164)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
    }
})