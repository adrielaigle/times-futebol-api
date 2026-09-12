const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/', (req, res) => {
  res.redirect('/api/times');
});

const times = [
  { id: 1, nome: "Corithians", pais: "Brasil", liga: "Brasileirão", titulosLibertadores: 1 },
  { id: 2, nome: "Barcelona", pais: "Espanha", liga: "La Liga", titulosChampions: 5 }
];

app.get('/api/times', (req, res) => {
  res.status(200).json(times);
});

app.post('/api/times', (req, res) => {
  const { nome, pais, liga, titulosLibertadores, titulosChampions } = req.body;
  
  const novoTime = {
    id: times.length + 1,
    nome,
    pais,
    liga,
    ...(titulosLibertadores !== undefined && { titulosLibertadores }),
    ...(titulosChampions !== undefined && { titulosChampions })
  };

  times.push(novoTime);
  res.status(201).json(novoTime);
});


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/api/times`);
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/api/times`);
  });
}

module.exports = app;