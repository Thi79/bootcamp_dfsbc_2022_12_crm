import Cliente from '../models/cliente.js';

function salvarCliente(req, res) {
  const { nome, sobrenome, cpf, rg, telefone, email, cep, endereco, numero, cidade, estado } = req.body;

  const novoCliente = new Cliente({
    nome,
    sobrenome,
    cpf,
    rg,
    telefone,
    email,
    cep,
    endereco,
    numero,
    cidade,
    estado
  });

  novoCliente.save()
    .then(clienteSalvo => {
      res.json({ message: 'Cliente salvo com sucesso', cliente: clienteSalvo });
    })
    .catch(error => {
      res.status(500).json({ message: 'Erro ao salvar o cliente', error: error.message });
    });
}

export {
  salvarCliente
};
