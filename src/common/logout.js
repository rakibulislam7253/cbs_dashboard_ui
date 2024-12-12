const BASE_URL = import.meta.env.VITE_APP_CONTROL_CENTER_API;
const API_URL = BASE_URL + 'api/';
import axios from 'axios';
import router from '../router';
class GlobalFormetAllData {
    logOutData() {
        return axios.post(API_URL + 'Login/logout');
    }
    LogoutStoreClear() {
        localStorage.clear();
        this.logOutData();
        router.push('/logout');
    }
}
export default new GlobalFormetAllData();
