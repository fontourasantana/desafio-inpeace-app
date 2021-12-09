import { formatarCPF, formatarData, formatarTelefone } from '../formatters'

export const parserUser = ({ cpf, dataNascimento, telefone, ...data }) => ({
  cpf: formatarCPF(cpf),
  dataNascimento: formatarData(dataNascimento),
  telefone: formatarTelefone(telefone),
  ...data
})

export const preparePayload = ({ cpf, dataNascimento, telefone, ...data }) => ({
  cpf: cpf.replace(/\D/g, ''),
  dataNascimento: dataNascimento.split('/').reverse().join('-'),
  telefone: telefone.replace(/\D/g, ''),
  ...data
})
