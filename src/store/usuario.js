import { preparePayload } from '@/utils'

export const state = () => ({
  users: []
})

export const getters = {}

export const actions = {
  async index ({ commit }) {
    const { data } = await this.$api.get('/usuarios')
    commit('setUsers', data.users)
  },
  async store ({ commit }, payload) {
    const { message, data } = await this.$api.post('/usuarios', preparePayload(payload))
    commit('addUser', data.user)
    return { message }
  },
  async update ({ commit }, { id, ...payload }) {
    const { message, data } = await this.$api.put(`/usuarios/${id}`, preparePayload(payload))
    commit('updateUser', data.user)
    return { message }
  },
  async destroy ({ commit }, user) {
    const { id } = user
    const { message } = await this.$api.delete(`/usuarios/${id}`)
    commit('removeUser', user)
    return { message }
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
