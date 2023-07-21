// const express = require('express');
// const cors = require('cors');
// const pg = require('pg');

// const app = express();
// const port = 3000;

// app.use(cors());
// app.use(express.json());

// const client = new pg.Client({
//   user: 'Eduardo',
//   host: 'localhost',
//   database: 'Formulario',
//   password: '12345',
//   port: 5432,
// });

// // API endpoint to handle user registration data
// app.post('/api/register', async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     await client.connect();
//     await client.query(
//       'INSERT INTO cadastro (nome, email, senha) VALUES ($1, $2, $3)',
//       [name, email, password]
//     );

//     console.log('Data inserted successfully');
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   } finally {
//     await client.end();
//   }
// });

// app.listen(port, () => {
//   console.log(`Server listening on http://localhost:${port}`);
// });
