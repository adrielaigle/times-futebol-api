const request = require('supertest');
const app = require('./server');

describe('Testes das rotas da API de Times', () => {
  it('Deve retornar a lista de times na rota GET /api/times', async () => {
    const res = await request(app).get('/api/times');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it('Deve redirecionar a rota raiz GET / para /api/times', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(302);
  });

  it('Deve cadastrar um novo time na rota POST /api/times', async () => {
    const novoTime = {
      nome: "Santos",
      pais: "Brasil",
      liga: "Brasileirão",
      titulosLibertadores: 3
    };
    const res = await request(app).post('/api/times').send(novoTime);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.nome).toBe('Santos');
  });
});