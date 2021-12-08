export const state = () => ({
  users: []
})

export const getters = {}

function fakeAsync (minMs, maxMs) {
  const ms = Math.floor(Math.random() * maxMs) + minMs
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const actions = {
  async index ({ commit }) {
    await fakeAsync(400, 600)
    const users = []
    for (let i = 1; i <= 7; i++) {
      users.push({
        id: i,
        nome: `Nome Test${'e'.repeat(i)}`,
        cpf: `${i}`.repeat(11),
        dataNascimento: '2021-12-07',
        email: 'email@teste.br',
        telefone: '2712345678',
        estado: 'ES',
        cidade: 'Vitória',
        logradouro: 'Rua Vitória'
      })
    }

    commit('setUsers', users)
  },
  async store ({ state, commit }, payload) {
    await fakeAsync(400, 600)
    const user = { ...payload, id: state.users.length }
    commit('addUser', user)
  },
  async update ({ commit }, user) {
    await fakeAsync(400, 600)
    commit('updateUser', user)
  },
  async destroy ({ commit }, user) {
    await fakeAsync(400, 600)
    commit('removeUser', user)
  }
}

export const mutations = {
  setUsers (state, value) {
    state.users = value
  },
  addUser (state, user) {
    state.users.push(user)
  },
  updateUser (state, user) {
    const index = state.users.findIndex(item => item.id === user.id)

    if (index === -1) {
      return
    }

    state.users.splice(index, 1, user)
  },
  removeUser (state, user) {
    const index = state.users.findIndex(item => item.id === user.id)

    if (index === -1) {
      return
    }

    state.users.splice(index, 1)
  }
}
