const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require('cors');
app.use(cors());


app.use(express.json());

const dba = mysql.createPool({
  connectionLimit : 100,
  user: "b7571143594ad5",
  host: "us-cdbr-east-05.cleardb.net",
  password: "8ecf477d",
  database: "heroku_27f903256fef471",
});



console.log({dba});

app.post("/create", (req, res) => {
  dba.getConnection(function(err,db){
    if(err) throw err
    console.log('connected as id ' + db.threadId)
    const name = req.body.name;
    const email = req.body.email;
    db.query(
      "INSERT INTO emloyee (name, email) VALUES (?,?)",
      [name, email],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  })
  
});

app.get("/employees", (req, res) => {
 
  dba.getConnection(function(err,db){
    console.log(db);
    db.query("SELECT * FROM emloyee", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
})

});

app.put("/update", (req, res) => {
  
  dba.getConnection(function(err,db) {
    console.log(req);
    if(err) throw err
    const name = req.body.name;
    console.log(name)
    const email = req.body.email;
    console.log(email)
    const id   = req.body.id;
    console.log(id)
    db.query(
    "UPDATE emloyee SET emloyee.name ='"+name+"'  , emloyee.email = '"+email+"' WHERE id = ?",
    [ id],
    (err, result) => {
      if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
    });})
  });
  
  

app.delete("/delete/:id", (req, res) => {
  console.log(req.query)
  console.log(req.params)
  const id= req.params.id;
  dba.getConnection (function(err,db){
    db.query("DELETE FROM emloyee WHERE id= ?", [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });})
});


app.get('/', function (req, res) {
  res.send('hello world')
  })

  
  
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Credentials', true);
  req.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  req.setHeader('Access-Control-Allow-Origin', '*');
  req.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  req.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.listen(process.env.PORT || 3006, () => {
  console.log("Yey, your server is running on port 3006");
});