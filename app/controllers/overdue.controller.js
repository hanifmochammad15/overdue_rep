const Overdue = require("../models/overdue.model.js");

// Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {
    const title = req.query.title;

    Overdue.getAll(title, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving nota."
        });
      else res.send(data);
    });
};

exports.findAllLog = (req, res) => {
  const title = req.query.title;

  Overdue.getAllLog(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving logs."
      });
    else res.send(data);
  });
};

exports.findOneNota = (req, res) => {
  Overdue.getNotaById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Nota with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Nota with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

exports.findAllEmp = (req, res) => {
  const title = req.query.title;

  Overdue.getAllEmp(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving employee."
      });
    else res.send(data);
  });
};

exports.findAllCust = (req, res) => {
  const title = req.query.title;

  Overdue.getAllCust(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    else res.send(data);
  });
};

exports.findOneEmp = (req, res) => {
  Overdue.getEmployeeById(req.params.id, (err, data) => {
    console.log('req.params.id',req.params.id)
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Employee with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Employee with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

exports.findOneCust = (req, res) => {
  Overdue.getCustomerById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

exports.getAllReports = (req, res) => {
  const title = req.query.title;
  Overdue.getReports(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving reports."
      });
    else res.send(data);
  });
};

exports.getAllReportsByID = (req, res) => {
  Overdue.getReportsByID(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Reports with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Reports with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};