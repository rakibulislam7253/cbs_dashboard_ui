<template>
    <div class="piechartBody">
        <Chart type="pie" :data="chartData" class="Piesize" :options="chartOptions" />
        <Chart type="pie" :data="chartDataLH" class="PiesizeLH" :options="chartOptionsLH" />
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
            datasets: [{ backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', 'Purple'], data: [] }]
            // abc: []
        });

        const chartOptions = ref({
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    align: 'start'
                },
                title: {
                    display: true,
                    text: ' Product Wise Account Opening',
                    position: 'bottom'
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            return ` ${tooltipItem.raw}`;
                        }
                    }
                }
            }
        });

        // ----------------------sdgvseg--------------------
        const chartDataLH = ref({
            labels: [],

            datasets: [{ backgroundColor: ['#56E289', '#8A56E2'], data: [] }]
        });

        const chartOptionsLH = ref({
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Low & High Cost Deposit',
                    position: 'bottom',
                    fontWeight: 'bold'
                },
                legend: {
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            return ` ${tooltipItem.raw}`;
                        }
                    }
                }
            }
        });

        const fetchData = async () => {
            var sumD = 0;
            var sumT = 0;
            var sumS = 0;
            var sumL = 0;
            var sumDD = 0;
            var sumTT = 0;
            var sumSS = 0;
            var sumLL = 0;
            const response = await dashboardData.get_today_summery_position_all_br();
            const data = await response.data;
            //console.log(data);
            // ------------------------------All account number-----------------------------
            for (let i = 0; i < data.length; i++) {
                if (data[i].application == 'DEMAND') {
                    sumD = sumD + data[i].number_of_account;
                    sumDD = sumDD + data[i].current_balance_ccy;
                } else if (data[i].application == 'TIME') {
                    sumT = sumT + data[i].number_of_account;
                    sumTT = sumTT + data[i].current_balance_ccy;
                } else if (data[i].application == 'SCHEMES') {
                    sumSS = sumSS + data[i].current_balance_ccy;
                    sumS = sumS + data[i].number_of_account;
                } else if (data[i].application == 'LOAN & ADVANCE') {
                    sumL = sumL + data[i].number_of_account;
                }
                sumLL = sumTT + sumSS;
            }
            // chartData.value.labels_name = ['CASA ' , 'FDR ' , 'DPS ', 'LOAN '];
            chartData.value.labels = ['CASA - ' + sumD, 'FDR - ' + sumT, ' DPS  - ' + sumS, ' LOAN - ' + sumL];
            chartData.value.datasets[0].data = [sumD, sumT, sumS, sumL];

            // ------------------------------LOW HIGH-----------------------------
            console.log(chartDataLH.value.datasets[0].data);
            if (chartDataLH.value.datasets[0].data) {
                chartDataLH.value.labels = ['Low Cost - ' + sumDD, 'High Cost - ' + sumLL];
                chartDataLH.value.datasets[0].data = [sumDD, sumLL];
            } else {
                var sumDDD = 0;
                var sumLLL = 0;
                chartDataLH.value.labels = ['Low Cost - ' + sumDDD, 'High Cost - ' + sumLLL];
                chartDataLH.value.datasets[0].data = [sumDDD, sumLLL];
            }
        };
        onMounted(() => {
            fetchData();
            setInterval(fetchData, 300000); // Fetch data every 5 min
        });

        return { chartData, chartOptions, chartDataLH, chartOptionsLH };
    }
};
</script>
<style scoped>
.piechartBody {
    display: flex;
    margin-top: -20px;
    padding: 2px;
}
.Piesize {
    width: 40%;
}
.PiesizeLH {
    width: 40%;
    margin-left: 45px;
}
</style>
