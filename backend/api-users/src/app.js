import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import Cliente from './models/clientes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const dbURI = process.env.MONGODB_URI;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexão com o MongoDB estabelecida');
    app.listen(process.env.PORT, () => {
      console.log(`Servidor iniciado na porta ${process.env.PORT}`);
    });
  })
  .catch(error => {
    console.log('Erro ao conectar ao MongoDB:', error);
  });

app.post('/cadastrar', (req, res) => {
  const dadosCliente = req.body;

  const cliente = new Cliente(dadosCliente);

  cliente.save()
    .then(() => {
      console.log('Cliente salvo com sucesso');
      res.status(200).json({ message: 'Cliente salvo com sucesso' });
    })
    .catch(error => {
      console.error('Erro ao salvar o cliente:', error);
      res.status(500).json({ error: 'Erro ao salvar o cliente' });
    });
});


export default app;
