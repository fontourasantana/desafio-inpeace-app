class ApiError extends Error {
  constructor (message, data) {
    super(message)
    this.data = data
  }
}

export default function (ctx, inject) {
  const { $axios } = ctx

  const api = {}

  for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
    api[method] = function () { return $axios['$' + method].apply(null, arguments) }
  }

  ctx.$api = api
  inject('api', api)

  $axios.onError((error) => {
    if (error.message === 'Network Error') {
      throw new Error('Falha ao comunicar com o servidor')
    }

    const { data } = error.response

    throw new ApiError(data.message, data.data)
  })
}
