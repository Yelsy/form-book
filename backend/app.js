const mysql = require('mysql2');
const express = require('express');
const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bookdb'
});

connection.connect((error) => {
    if (error) {
        console.error(error);
    } else {
        console.log("Connected to the database");
    }
});

app.get('/booked', (request, response) => {
//   let rtn = {ok: true}
    connection.query(
        "SELECT * FROM data_book;", 
        (error, data) => {
            if (error) {
                console.error(error);
                response.status(500).send("Error retrieving products");
            } else {
                response.send(data);
            }
        }
    );
//   response.status(200).send(rtn);
});

app.post('/users', (request, response) => {
    const { name, dni, email, phone, total, message } = request.body;

    console.log(request);
    connection.query('INSERT INTO users (name, dni, email, phone, total, message) VALUES (?, ?, ?, ?, ?, ?)', 
        [name, dni, email, phone, total, message], (error) => {
      if (error) {
        console.error(error);
        response.status(500).send('Error creating user');
      } else {
        response.send('User created successfully');
      }
    });
  });

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});