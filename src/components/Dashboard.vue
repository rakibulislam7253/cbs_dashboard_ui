<template>
    <div class="grid" style="margin-top: -30px">
        <!-- table -->
        <div class="col-12 xl:col-7">
            <div class="card backgroundTex">
                <div class="container">
                    <!-- <h3 style="text-align: center">CBS DASHBOARD</h3>
                  
                    <hr /> -->
                    <div class="tabledata">
                        <table>
                            <tr style="background-color: #950407; color: white">
                                <th>ID</th>
                                <th>Branch Name</th>
                                <th class="text-center">CASA</th>
                                <th class="text-center">FDR</th>
                                <th class="text-center">DPS</th>
                                <th class="text-center">Loan</th>
                                <th class="text-center">Deposit Amount</th>
                                <th class="text-center">Loan Amount</th>
                                <th>Details</th>
                            </tr>
                            <tr v-for="data in branchData" :key="data.branch_id">
                                <td>{{ data.branch_id }}</td>
                                <td>{{ data.branch_name }}</td>
                                <td class="text-center">{{ data.casa_ac_no }}</td>
                                <td class="text-center">{{ data.fdr_ac_no }}</td>
                                <td class="text-center">{{ data.dps_ac_no }}</td>
                                <td class="text-center">{{ data.loan_ac_no }}</td>
                                <td style="text-align: right">{{ formattedNumber(data.total_deposit) }}</td>
                                <td style="text-align: right">{{ formattedNumber(data.total_loan) }}</td>
                                <td><button class="details" @click="showData(data)">Details</button></td>
                            </tr>
                        </table>
                    </div>
                </div>
                <branchData ref="PermissionData" @whisperedSecret="hearSecret"></branchData>
            </div>
        </div>
        <div class="col-12 xl:col-5">
            <grapPage class="pr-2"></grapPage>

            <div>
                <div><pieChart></pieChart></div>
            </div>
        </div>
    </div>
</template>

<script>
import dashboardData from '../service/deshboard';
import grapPage from '../components/graph.vue';
import pieChart from '../components/pieChart.vue';
import branchData from './branchData.vue';

export default {
    components: { branchData, grapPage, pieChart },
    data() {
        return {
            branchData: [],
            visible: false
        };
    },
    mounted() {
        this.fetchData();
        this.intervalId = setInterval(this.fetchData, 300000);
    },
    methods: {
        fetchData() {
            dashboardData.get_dashboard_data().then((data) => {
                this.branchData = data.data;
            });
        },
        formattedNumber(data) {
            return data.toLocaleString();
        },
        showData(PermissionData) {
            this.visible = true;
            this.$refs.PermissionData.updatePermission(PermissionData);
        },
        hearSecret() {
            dashboardData.get_dashboard_data().then((data) => {
                console.log(data.data);
            });
        }
    }
};
</script>

<style scoped>
.tabledata {
    height: 550px;
    overflow: auto;
    /* scroll-behavior: smooth;/ */
}
tr:nth-child(even) {
    background-color: #dddddd;
}
table {
    border-collapse: collapse;
    width: 100%;
}

th {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    color: rgb(255, 255, 255);
}
td {
    padding: 9px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    color: black;
}

tr:hover {
    background-color: hsl(9, 50%, 69%);
}
.details {
    border: none;
    cursor: pointer;
}
.backgroundTex {
    background-image: url('../assets/Texture.JPG');
}
.piechart {
    background-color: tomato;
    display: flex;
}
</style>
