export default class module_setting {
    constructor() {
        this.ftp_flag1 = '';
        this.ftp_flag2 = '';
        this.ftp_flag3 = '';
    }
    loadModel(moduleSetting) {
        this.ftp_flag1 = moduleSetting.ftp_flag1;
        this.ftp_flag2 = moduleSetting.ftp_flag2;
        this.ftp_flag3 = moduleSetting.ftp_flag3;
    }
}
