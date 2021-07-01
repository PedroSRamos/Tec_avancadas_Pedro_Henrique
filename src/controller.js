const { createBill, getBill, deleteBill } = require('./store');

function createcontroller(req, res){
    const {amount, product, paymentMethod, customer} = req.body;
  
    if(!amount || !product || !paymentMethod || !customer){
      res.status(400).json({message: 'formato invalido.'});
    } else {
      createBill(amount, product, paymentMethod, customer);
      res.sendStatus(201);
    }
  }
  
  function getController(req, res){
    const { customer } = req.query;
  
    if(!customer){
      res.status(400).json({message: 'erro'});
    } else {
      let bill = getBill(customer);
      if(!bill){
        res.status(404).json({message: 'Nao encontrou'});
      } else {
        res.status(200).json({bill})
      }
    }
  }
  
  function deleteController(req, res){
    const {id} = req.params;
  
    if(!id){
      res.status(400).json({message: 'Invalido'});
    } else {
      let deletedBill = deleteBill(id);
  
      if(deletedBill){
        res.sendStatus(204);
      } else {
        res.status(404).json({message: 'erro'})
      }
    }
  }

function base(req, res) {
    res.send ("Controller ok");
}

module.exports = {
    createcontroller,
    getController,
    deleteController,
    base,
}