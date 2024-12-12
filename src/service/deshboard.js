import axios from 'axios';
const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

class dashboardData {
    get_dashboard_data() {
        return axios.get(BASE_URL + 'get_dashboard_data');
    }
    get_all_branch_list() {
        return axios.get(BASE_URL + 'get_all_branch_list');
    }
    get_today_sum_position_all_br() {
        return axios.get(BASE_URL + 'get_today_sum_position_all_br');
    }
    get_daily_position_sum_br() {
        return axios.get(BASE_URL + 'get_daily_position_sum_br');
    }
    get_all_account_type() {
        return axios.get(BASE_URL + 'get_all_account_type');
    }
    get_today_summery_position_all_br() {
        return axios.get(BASE_URL + 'get_today_summery_position_all_br');
    }
    get_today_ac_type_summery_position_all_br() {
        return axios.get(BASE_URL + 'get_today_ac_type_summery_position_all_br');
    }
    get_daily_summery_position_all_br() {
        return axios.get(BASE_URL + 'get_daily_summery_position_all_br');
    }
    get_daily_ac_type_position_all_br() {
        return axios.get(BASE_URL + 'get_daily_ac_type_position_all_br');
    }
    get_bar_chart_result() {
        return axios.get(BASE_URL + 'get_bar_chart_result');
    }
    get_bar_chart_result_by_id(data) {
        return axios.get(BASE_URL + 'get_bar_chart_result_by_id?_return_type=' + data);
    }
}

export default new dashboardData();
