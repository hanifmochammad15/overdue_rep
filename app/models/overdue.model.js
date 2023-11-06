const sql = require("./db.js");

// constructor
const Overdue = function(overdue) {
  this.title = overdue.title;
  this.description = overdue.description;
  this.published = overdue.published;
};

Overdue.getAll = (title, result) => {
  let query = "SELECT * FROM overdue.nota";

  //if (title) {
    //query += ` WHERE title LIKE '%${title}%'`;
  //}

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("overdue: ", res);
    result(null, res);
  });
};

Overdue.getAllLog = (title, result) => {
  let query = "SELECT * FROM overdue.log";

  //if (title) {
    //query += ` WHERE title LIKE '%${title}%'`;
  //}

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("log: ", res);
    result(null, res);
  });
};

Overdue.getNotaById = (id, result) => {

  sql.query(`SELECT * FROM overdue.nota WHERE DocNumber ='${id}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if(res.length){
      console.log("found Nota: ", res[0]);
      result(null, res[0]);
      return;
    }

    console.log("overdue: ", res);
    result(null, res);
  });
};

Overdue.getAllRR = (title, result) => {
  let query = "SELECT * FROM overdue.nota WHERE SOAType = 'RR'";

  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("overdue: ", res);
    result(null, res);
  });
};

Overdue.getAllEmp = (title, result) => {
  let query = "SELECT * FROM overdue.employee";

  //if (title) {
    //query += ` WHERE title LIKE '%${title}%'`;
  //}

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("overdue: ", res);
    result(null, res);
  });
};

Overdue.getAllCust = (title, result) => {
  let query = "SELECT * FROM overdue.customer";

  //if (title) {
    //query += ` WHERE title LIKE '%${title}%'`;
  //}

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("overdue: ", res);
    result(null, res);
  });
};

Overdue.getCustomerById = (id, result) => {

  sql.query(`SELECT CustObjectID, CustomerName FROM overdue.customer WHERE ClientID ='${id}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if(res.length){
      console.log("found customer: ", res[0]);
      result(null, res[0]);
      return;
    }

    console.log("overdue: ", res);
    result(null, res);
  });
};

Overdue.getEmployeeById = (id, result) => {

  sql.query(`SELECT EmployeeObjectID, EmployeeName FROM overdue.employee WHERE EmployeeID ='${id}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if(res.length){
      console.log("found employee: ", res[0]);
      result(null, res[0]);
      return;
    }

    console.log("overdue: ", res);
    result(null, res);
  });
};

Overdue.getReports = (title, result) => {
  let query = "select log.LogBookID, log.Collector, log.CollectorID, log.LogBookDate, log.Activitytype, log.AttendBy, log.Remark, log.NextFollowUp, overdue.nota.DocNumber, overdue.nota.HeadCollector, overdue.nota.HeadCollectorName, overdue.nota.InstallmentNumber, overdue.nota.DocType, overdue.nota.DueDate, overdue.nota.TransactionCode, overdue.nota.PolisNumber, overdue.nota.ClaimNbr, overdue.nota.InsuredId, overdue.nota.InsuredName, overdue.nota.CorrespondenceID, overdue.nota.CorrespondenceName, overdue.nota.InvoiceAmount, overdue.nota.AccountHolderID, overdue.nota.AccountHolder, overdue.nota.UnderwriterID, overdue.nota.UnderwriterName, overdue.nota.ClaimController, overdue.nota.ClaimCOntrollerName, overdue.nota.Currency FROM overdue.log INNER JOIN overdue.nota ON log.NotaNumber = overdue.nota.DocNumber";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("overdue reports: ", res);
    result(null, res);
  });
};

Overdue.getReportsByID = (id, result) => {

  sql.query(`select log.LogBookID, log.Collector, log.LogBookDate, log.Activitytype, log.AttendBy, log.Remark, log.NextFollowUp, overdue.nota.DocNumber, overdue.nota.InstallmentNumber, overdue.nota.DocType, overdue.nota.DueDate, overdue.nota.TransactionCode, overdue.nota.PolisNumber, overdue.nota.HeadCollector, overdue.nota.HeadCollectorName,
  overdue.nota.ClaimNbr, overdue.nota.InsuredId, overdue.nota.InsuredName, overdue.nota.CorrespondenceID, overdue.nota.CorrespondenceName, overdue.nota.InvoiceAmount, overdue.nota.AccountHolderID, overdue.nota.AccountHolder, overdue.nota.UnderwriterID, overdue.nota.UnderwriterName, 
  overdue.nota.ClaimController, overdue.nota.ClaimControllerName, overdue.nota.Currency FROM overdue.log 
  INNER JOIN overdue.nota ON log.NotaNumber = overdue.nota.DocNumber
  WHERE overdue.nota.DocNumber = '${id}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if(res.length){
      console.log("found Reports: ", res[0]);
      result(null, res[0]);
      return;
    }

    console.log("overdue reports by id: ", res);
    result(null, res);
  });
};

module.exports = Overdue;