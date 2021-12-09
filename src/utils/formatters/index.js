export const formatarCPF = {
  toShow: value => value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'),
  toRequest: value => value.replace(/\D/g, '')
}

export const formatarData = {
  toShow: value => value.split('-').reverse().join('/'),
  toRequest: value => value.split('/').reverse().join('-')
}

export const formatarTelefone = {
  toShow: value => value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3'),
  toRequest: value => value.replace(/\D/g, '')
}
