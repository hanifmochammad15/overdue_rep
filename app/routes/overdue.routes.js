const express = require('express')
//const app = express()
//const overdue = require("../controllers/overdue.controller.js");

// router.get('/', overdue.findAll)

// app.use('/api/overdue', router);

// module.exports = router;
module.exports = app => {
  const overdue = require("../controllers/overdue.controller.js");

  var router = require("express").Router();

  // Create a new Nota
  //router.post("/", nota.create);

  // Retrieve all Employee
  router.get("/employee", overdue.findAllEmp);

  // Retrieve Employee by ID
  router.get("/employee/:id", overdue.findOneEmp);

  // Retrieve all Customer
  router.get("/customer", overdue.findAllCust);

  // Retrieve Customer by ID
  router.get("/customer/:id", overdue.findOneCust);

  //Retrieve all Log
  router.get("/log", overdue.findAllLog);

  //Retrieve Reports
  router.get("/reports", overdue.getAllReports);

  //Retrieve Reports by ID
  router.get("/reports/:id", overdue.getAllReportsByID);

  // Retrieve all Nota
  router.get("/", overdue.findAll);

  // Retrieve Nota by ID
  router.get("/:id", overdue.findOneNota);


  // app.route('/')
  //       .get(overdue.findAll);

  app.use('/api/overdue', router);
};

