<template>
    <div class="card backchart">
        <Chart type="bar" :data="chartData" class="chartstyle" :options="chartOptions" />
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Chart from 'primevue/chart';
import dashboardData from '../service/deshboard';

export default {
    components: { Chart },
    setup() {
        const chartData = ref({
            labels: [],
            datasets: [
                { label: 'Deposit', backgroundColor: '#12436D', data: [] },
                { label: 'Loan', backgroundColor: '#F46A25', data: [] }
            ]
        });

        const chartOptions = ref({
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Client Deposit & Loan (Figure in Crore Taka)'

                    //   fontWeight: "bold"
                }
            },
            Deposite: {
                y: { beginAtZero: true }
            },
            Loan: {
                y: { beginAtZero: true }
            }
        });

        const fetchData = async () => {
            const response = await dashboardData.get_bar_chart_result();
            const data = await response.data;
            chartData.value.labels = data.transDate;
            chartData.value.datasets[0].data = data.depositAmount;
            chartData.value.datasets[1].data = data.loanAmount;
        };
        onMounted(() => {
            fetchData();
            setInterval(fetchData, 300000); // Fetch data every 5 min
        });
        return { chartData, chartOptions };
    }
};
</script>

<style>
.chartstyle {
    box-sizing: border-box;
    display: block;

    width: auto;
    height: auto;
}
.backchart {
    height: 370px;
    background-color: rgb(255, 255, 255);
}
</style>
