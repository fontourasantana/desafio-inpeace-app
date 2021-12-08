import Vue from 'vue'
import { formatarCPF, formatarData, formatarTelefone } from '@/utils'

Vue.filter('formatarData', (value) => {
  if (/(\d{4})-(\d{2})-(\d{2})/.test(value)) {
    return formatarData(value)
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

  return formatarCPF(value)
})

Vue.filter('formatarTelefone', (value) => {
  if (typeof value !== 'string') {
    return value
  }

  if (!(/^\d{10}$/.test(value))) {
    return value
  }

  return formatarTelefone(value)
})
