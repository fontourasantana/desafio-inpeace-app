export const formatarCPF = value => value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')

export const formatarData = value => value.split('-').reverse().join('/')

export const formatarTelefone = value => value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
