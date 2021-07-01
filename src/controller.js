const {createBill} = require ('./store');

function createBillcontroller(req, res) {
    if(req.body)
    createBill
}

function getBillController(req, res) {
    const {customer} = req.query;
        if (!customer)
}

function base(req, res) {
    res.send ("Controller ok");
}

module.exports = {
    base,
    createBillcontroller
}