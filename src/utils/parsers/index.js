import { formatarCPF, formatarData, formatarTelefone } from '../formatters'

export const parserUser = ({ cpf, dataNascimento, telefone, ...data }) => ({
  cpf: formatarCPF.toShow(cpf),
  dataNascimento: formatarData.toShow(dataNascimento),
  telefone: formatarTelefone.toShow(telefone),
  ...data
})

export const preparePayload = ({ cpf, dataNascimento, telefone, ...data }) => ({
  cpf: formatarCPF.toRequest(cpf),
  dataNascimento: formatarData.toRequest(dataNascimento),
  telefone: formatarTelefone.toRequest(telefone),
  ...data
})
