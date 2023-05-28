import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema({
  nome: String,
  sobrenome: String,
  cpf: String,
  rg: String,
  telefone: String,
  email: String,
  cep: String,
  endereco: String,
  numero: String,
  cidade: String,
  estado: String,
});

const Cliente = mongoose.model('Cliente', clienteSchema);

export default Cliente;
