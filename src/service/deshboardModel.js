export default class deshboardModelData {
    constructor() {
        this.account_type = '';
        this.application = '';
        this.branch_name = '';
        this.branch_id = '';
        this.product_id = '';
        this.product_name = '';
        this.account_name = '';
        this.account_number = '';
        this.number_of_account = 0;
        this.current_balance_ccy = 0;
        this.Loan_balance_ccy = 0;
        this.current_balance_lcy = 0;
        this.total_balance_deposit = 0;
        this.total_balance_loan = 0;
    }

    loadModel(deshboardModelData) {
        this.account_type = deshboardModelData.account_type;
        this.application = deshboardModelData.application;
        this.branch_name = deshboardModelData.branch_name;
        this.branch_id = deshboardModelData.branch_id;
        this.product_id = deshboardModelData.product_id;
        this.product_name = deshboardModelData.product_name;
        this.account_name = deshboardModelData.account_name;
        this.account_number = deshboardModelData.account_number;
        this.number_of_account = deshboardModelData.number_of_account;
        this.current_balance_ccy = deshboardModelData.current_balance_ccy;
        this.Loan_balance_ccy = deshboardModelData.Loan_balance_ccy;
        this.current_balance_lcy = deshboardModelData.current_balance_lcy;
        this.total_balance_deposit = deshboardModelData.total_balance_deposit;
        this.total_balance_loan = deshboardModelData.total_balance_loan;
        // this.recieve_status = deshboardModelData.recieve_status;
    }
}
