import { formatarCPF, formatarData, formatarTelefone } from '../formatters'

export const parserUser = ({ cpf, dataNascimento, telefone, ...data }) => ({
  cpf: formatarCPF(cpf),
  dataNascimento: formatarData(dataNascimento),
  telefone: formatarTelefone(telefone),
  ...data
})
