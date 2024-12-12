<template>
    <Dialog v-model:visible="visible" maximizable modal :header="branchData.branch_name" :style="{ width: '120rem', height: '120rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <!-- <button @click="clear()">X</button> -->
        <div class="grid">
            <!-- today -->
            <div class="col-6">
                <div class="card">
                    <div class="header">
                        <div v-for="sum in deshboardModelData" :key="sum">
                            <p v-if="sum.account_type == 'CLIENT DEPOSIT' && sum.branch_id == branchData.branch_id" class="mt-3 mb-3 finalAmount">
                                Total Deposit :
                                <span style="color: yellow">{{ formatNumber(sum.current_balance_ccy) }}/-</span>
                            </p>
                        </div>

                        <div v-for="sum in deshboardModelData" :key="sum">
                            <p v-if="sum.account_type == 'CLIENT LOAN AND ADVANCE' && sum.branch_id == branchData.branch_id" class="mt-3 mb-3 finalAmount">
                                Total Loan :
                                <span style="color: yellow">{{ formatNumber(sum.current_balance_ccy) }}/-</span>
                            </p>
                        </div>
                        <!-- </div> -->
                    </div>
                    <br />
                    <!-- account type and number -->
                    <div class="grid weightBody">
                        <div class="col-12 lg:col-6 xl:col-3" v-for="(accType, index) in accountType" :key="accType">
                            <div class="card mb-0 accountTypr" :style="{ backgroundColor: gridColors[index].color }">
                                <div class="flex justify-content-between mb-3">
                                    <div>
                                        <span class="block mb-3 acctype" style="font-size: 16px"> {{ convertStringToNumber(accType) }}</span>
                                    </div>
                                    <!-- {{ accType }} -->
                                    <div>
                                        <div v-for="numberAcc in position_all_br" :key="numberAcc">
                                            <div v-if="numberAcc.branch_id == branchData.branch_id">
                                                <div v-if="numberAcc.application == accType">
                                                    <div class="text-900 p-2" style="font-size: 20px; font-weight: bold; margin-top: -12px; margin-left: 15px">
                                                        <p>{{ numberAcc.number_of_account }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-for="balanceData in position_all_br" :key="balanceData">
                                    <div v-if="balanceData.application == accType && balanceData.branch_id == branchData.branch_id">
                                        <p class="text-900 balance1">{{ formatNumber(balanceData.current_balance_ccy) }} tk.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- details account report -->
                    <div class="flex justify-content-between">
                        <div style="width: 700px">
                            <!-- deposite -->
                            <table>
                                <tr class="headerTable">
                                    <th colspan="3">Today Report</th>
                                </tr>
                                <tr class="headerTablee">
                                    <th colspan="3">CLIENT DEPOSIT</th>
                                </tr>

                                <tr>
                                    <th>Product</th>
                                    <th>No. of A/C</th>
                                    <th style="text-align: right">Current Balance (Tk.)</th>
                                </tr>
                                <tr v-for="data in todaySummeryAllBr" :key="data">
                                    <td v-if="data.branch_id == branchData.branch_id && data.account_type == 'CLIENT DEPOSIT'" style="width: 70%">{{ data.product_name }}</td>
                                    <td v-if="data.branch_id == branchData.branch_id && data.account_type == 'CLIENT DEPOSIT'" class="number_of_account" style="width: 11%">{{ data.number_of_account }}</td>
                                    <td v-if="data.branch_id == branchData.branch_id && data.account_type == 'CLIENT DEPOSIT'" class="account_amount">{{ formatNumber(data.current_balance_ccy) }}</td>
                                    <!-- <td>0</td> -->
                                </tr>
                            </table>
                            <br />
                            <!-- loan -->
                            <table>
                                <tr class="headerTable">
                                    <th colspan="3">Today Report</th>
                                </tr>
                                <tr class="headerTablee">
                                    <th colspan="3">LOAN AND ADVANCE</th>
                                </tr>

                                <tr>
                                    <th>Product</th>
                                    <th>No. of A/C</th>
                                    <th>Current Balance (Tk.)</th>
                                </tr>
                                <tr v-for="data in todaySummeryAllBr" :key="data">
                                    <td v-if="data.branch_id == branchData.branch_id && data.account_type == 'CLIENT LOAN AND ADVANCE'" style="width: 70%">{{ data.product_name }}</td>
                                    <td v-if="data.branch_id == branchData.branch_id && data.account_type == 'CLIENT LOAN AND ADVANCE'" class="number_of_account" style="width: 11%">{{ data.number_of_account }}</td>
                                    <td v-if="data.branch_id == branchData.branch_id && data.account_type == 'CLIENT LOAN AND ADVANCE'" class="account_amount">{{ formatNumber(data.current_balance_ccy) }}</td>
                                    <!-- <td>0</td> -->
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <!-- daily -->
            <div class="col-6">
                <div class="card">
                    <div class="headerCumilative">
                        <div v-for="sum in deshboardDataByCumulative" :key="sum">
                            <p v-if="sum.account_type == 'CLIENT DEPOSIT' && sum.branch_id == branchData.branch_id" style="color: white" class="mt-3 mb-3 finalAmount">
                                Total Deposit :
                                <span style="color: yellow">{{ formatNumber(sum.current_balance_ccy) }}/-</span>
                            </p>
                        </div>

                        <div v-for="sum in deshboardDataByCumulative" :key="sum">
                            <p v-if="sum.account_type == 'CLIENT LOAN AND ADVANCE' && sum.branch_id == branchData.branch_id" style="color: white" class="mt-3 mb-3 finalAmount">
                                Total Loan :
                                <span style="color: yellow">{{ formatNumber(sum.current_balance_ccy) }}/-</span>
                            </p>
                        </div>
                        <!-- </div> -->
                    </div>
                    <br />
                    <!-- account type and number -->
                    <div class="grid weightBody">
                        <div class="col-12 lg:col-6 xl:col-3" v-for="(accType, index) in accountType" :key="accType">
                            <div class="card mb-0 accountTypr" :style="{ backgroundColor: gridColors[index].color }">
                                <div class="flex justify-content-between mb-3">
                                    <div>
                                        <span class="block mb-3 acctype" style="font-size: 16px">{{ convertStringToNumber(accType) }}</span>
                                    </div>
                                    <!-- {{ accType }} -->
                                    <div>
                                        <div v-for="numberAcc in daily_position_all_br" :key="numberAcc">
                                            <div v-if="numberAcc.branch_id == branchData.branch_id">
                                                <div v-if="numberAcc.application == accType">
                                                    <div class="text-900 border-round p-2" style="font-size: 18px; font-weight: bold; margin-top: -12px; margin-left: 15px">
                                                        <p>{{ numberAcc.number_of_account }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-for="balanceData in daily_position_all_br" :key="balanceData">
                                    <div v-if="balanceData.application == accType && balanceData.branch_id == branchData.branch_id">
                                        <p class="text-900 balance1">{{ formatNumber(balanceData.current_balance_ccy) }} tk.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- details account report -->
                    <div>
                        <!-- deposite -->
                        <div class="table2">
                            <table>
                                <tr class="headerTable">
                                    <th colspan="3">Cumulative Report</th>
                                </tr>
                                <tr class="headerTablee">
                                    <th colspan="3">CLIENT DEPOSIT</th>
                                </tr>

                                <tr>
                                    <th>Product</th>
                                    <th>No. of A/C</th>
                                    <th style="text-align: right">Current Balance (Tk.)</th>
                                </tr>
                                <tr v-for="data in dailyData" :key="data">
                                    <td v-if="data.branch_id == branchData.branch_id && data.account_type == 'CLIENT DEPOSIT'" style="width: 61%">{{ data.product_name }}</td>
                                    <td v-if="data.branch_id == branchData.branch_id && data.account_type == 'CLIENT DEPOSIT'" class="number_of_account">{{ data.number_of_account }}</td>
                                    <td v-if="data.branch_id == branchData.branch_id && data.account_type == 'CLIENT DEPOSIT'" class="account_amount" style="width: 170px">{{ formatNumber(data.current_balance_ccy) }}</td>
                                </tr>
                            </table>
                        </div>
                        <br />
                        <!-- loan -->
                        <div class="table2">
                            <table>
                                <tr class="headerTable">
                                    <th colspan="3">Cumulative Report</th>
                                </tr>
                                <tr class="headerTablee">
                                    <th colspan="3">LOAN AND ADVANCE</th>
                                </tr>

                                <tr>
                                    <th>Product</th>
                                    <th>No. of A/C</th>
                                    <th>Current Balance (Tk.)</th>
                                </tr>
                                <tr v-for="data in dailyData" :key="data">
                                    <td v-if="data.branch_id == branchData.branch_id && data.account_type == 'CLIENT LOAN AND ADVANCE'" style="width: 61%">{{ data.product_name }}</td>
                                    <td v-if="data.branch_id == branchData.branch_id && data.account_type == 'CLIENT LOAN AND ADVANCE'" class="number_of_account">{{ data.number_of_account }}</td>
                                    <td v-if="data.branch_id == branchData.branch_id && data.account_type == 'CLIENT LOAN AND ADVANCE'" class="account_amount" style="width: 180px">{{ formatNumber(data.current_balance_ccy) }}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Dialog>
</template>
<script>
import dashboardData from '../service/deshboard';
import deshboardModelData from '../service/deshboardModel';
export default {
    data() {
        return {
            deshboardModelData: new deshboardModelData(),
            deshboardDataByCumulative: new deshboardModelData(),
            visible: false,
            branchData: '',
            accountType: '',
            today_sum_position: '',
            todaySummeryAllBr: '',
            position_all_br: '',
            daily_position_all_br: '',
            dailyData: '',
            colorLength: 4,
            number: '',
            count: 1,
            intervalId: '',
            gridColors: [{ color: '#DBEAFF' }, { color: '#CFFAFE' }, { color: '#F3E8FF' }, { color: '#FFEDD5' }]
        };
    },
    mounted() {
        this.fetchData();
        this.intervalId = setInterval(this.fetchData, 300000);
    },
    methods: {
        clear() {
            this.visible = true;
        },
        updatePermission(data) {
            this.visible = true;
            dashboardData.get_all_branch_list().then((Branchdata) => {
                let item = Branchdata.data;
                let bData = item.filter((item) => item.branch_id.toString().includes(data.branch_id));
                this.branchData = bData[0];
            });
        },
        convertStringToNumber(str) {
            const numbers = {
                DEMAND: 'CASA',
                TIME: 'FDR',
                SCHEMES: 'DPS',
                'LOAN & ADVANCE': 'LOAN'
            };
            return numbers[str] || 0;
        },
        fetchData() {
            dashboardData.get_all_account_type().then((data) => {
                this.accountType = data.data;
                // console.log(this.accountType);
            });
            dashboardData.get_today_sum_position_all_br().then((data) => {
                this.today_sum_position = data.data;
                this.deshboardModelData = this.today_sum_position;
            });
            dashboardData.get_daily_position_sum_br().then((data) => {
                this.daily_sum_position = data.data;
                this.deshboardDataByCumulative = this.daily_sum_position;
            });
            dashboardData.get_today_summery_position_all_br().then((data) => {
                this.todaySummeryAllBr = data.data;
            });
            dashboardData.get_daily_summery_position_all_br().then((data) => {
                this.dailyData = data.data;
            });
            dashboardData.get_today_ac_type_summery_position_all_br().then((data) => {
                this.position_all_br = data.data;
            });
            dashboardData.get_daily_ac_type_position_all_br().then((data) => {
                this.daily_position_all_br = data.data;
                // console.log(this.daily_position_all_br);
            });
        },
        formatNumber(data) {
            return data.toLocaleString();
        }
    }
};
</script>

<style scoped>
.accountTypr {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}
.backCardCumulative {
    background-color: #96d0ff;
}
.weightBody {
    border-radius: 5px;
    width: 104%;
    display: flex;
}
.balance1 {
    border: 1px solid rgb(214, 211, 211);
    border-radius: 5px;
    font-size: 12px;
    font-weight: bold;
    padding: 2px;
    width: 130%;
    margin-left: -15%;

    text-align: center;
}
.headerCumilative {
    display: flex;
    justify-content: space-between;
    background-color: #b4553d;
    border-radius: 5px;
}
.header {
    display: flex;
    justify-content: space-between;
    background-color: #492985;
    border-radius: 5px;
}
.headerP {
    padding: 5px;
    font-size: 18px;
    font-weight: 600;
    color: rgb(0, 0, 0);
    color: white;
}
.finalAmount {
    font-weight: 700;
    font-size: 16px;
    padding-left: 40px;
    padding-right: 0px;
    color: white;
}
.table2 {
    height: 600px;
    overflow: auto;
    margin-right: 30px;
}
.acctype {
    font-size: 12px;
    color: black;
    font-weight: 600;
}
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    font-size: 13px;
}

td,
th {
    border: 1px solid #eeeeee;
    padding: 6px;
}

.headerTable {
    background-color: #92d4d3;
    border: none;
    position: sticky;
    top: 0;
    font-size: 18px;
    font-family: 'Times New Roman', Times, serif;
}
.headerTablee {
    background-color: #cdf0ef;
    font-size: 12px;
    font-family: 'Times New Roman', Times, serif;
}
.headerTable th {
    text-align: center;
    position: sticky;
    top: 0;
}
.number_of_account {
    text-align: center;
}
.account_amount {
    text-align: right;
}
</style>
