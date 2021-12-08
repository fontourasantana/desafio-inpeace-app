export const user = {
  nome: [
    v => !!v || 'O nome é obrigatório',
    v => /^[a-z áàãâéèêíìîóòõôúùûç]+$/i.test(v) || 'O nome possui caracters não permitidos',
    v => (v && v.length <= 60) || 'O nome deve ter menos de 60 caracters'
  ],
  cpf: [
    v => !!v || 'O CPF é obrigatório',
    v => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(v) || 'O CPF deve ser válido'
  ],
  dataNascimento: [
    v => !!v || 'A data de nascimento é obrigatória',
    v => /^\d{2}\/\d{2}\/\d{4}$/.test(v) || 'A data de nascimento deve ser válida'
  ],
  email: [
    v => !!v || 'O email é obrigatório',
    v => /.+@.+\..+/.test(v) || 'O email deve ser válido'
  ],
  telefone: [
    v => !!v || 'A telefone é obrigatório',
    v => /^\(\d{2}\) \d{4}-\d{4}$/.test(v) || 'O telefone deve ser válido'
  ],
  estado: [
    v => !!v || 'O estado é obrigatório'
  ],
  cidade: [
    v => !!v || 'A cidade é obrigatória'
  ],
  logradouro: [
    v => !!v || 'O logradouro é obrigatório',
    v => /^[a-z0-9 áàãâéèêíìîóòõôúùûç,.]+$/i.test(v) || 'O logradouro possui caracters não permitidos',
    v => (v && v.length <= 100) || 'O logradouro deve ter menos de 100 caracters'
  ]
}
