import Vue from 'vue'

Vue.filter('formatarData', (value) => {
  if (/(\d{4})-(\d{2})-(\d{2})/.test(value)) {
    const [year, month, day] = value.split('-')
    const d = new Date(year, month - 1, day)
    return d.toLocaleDateString()
  }

  return value
})

Vue.filter('formatarCPF', (value) => {
  if (typeof value !== 'string') {
    return value
  }

  if (!(/^\d{11}$/.test(value))) {
    return value
  }

  return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
})

Vue.filter('formatarTelefone', (value) => {
  if (typeof value !== 'string') {
    return value
  }

  if (!(/^\d{10}$/.test(value))) {
    return value
  }

  return value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
})
