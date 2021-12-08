<template>
  <v-data-table
    :headers="headers"
    :items="users"
    class="elevation-3"
    no-data-text="Nenhum usuário cadastrado no sistema"
  >
    <template #top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Usuários</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        />
        <v-spacer />
        <UserFormModal ref="form" v-model="dialogs.form" />
        <UserDetailsModal v-model="dialogs.details" :user="selectedUser" />
        <UserDeleteModal v-model="dialogs.delete" :user="selectedUser" />
      </v-toolbar>
    </template>
    <template #[`item.actions`]="{ item }">
      <v-icon
        dense
        class="mr-2"
        @click="showUser(item)"
      >
        mdi-account-search
      </v-icon>
      <v-icon
        dense
        class="mr-2"
        @click="editUser(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        dense
        @click="deleteUser(item)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
import UserFormModal from './UserFormModal'
import UserDeleteModal from './UserDeleteModal'
import UserDetailsModal from './UserDetailsModal'

export default {
  components: {
    UserFormModal,
    UserDetailsModal,
    UserDeleteModal
  },
  data: () => ({
    dialogs: {
      form: false,
      details: false,
      delete: false
    },
    headers: [
      {
        text: 'Nome',
        align: 'start',
        sortable: false,
        value: 'nome'
      },
      { text: 'CPF', value: 'cpf' },
      { text: 'Email', value: 'email' },
      { text: 'Ações', value: 'actions', sortable: false }
    ],
    users: [],
    selectedIndex: -1,
    selectedUser: {}
  }),
  created () {
    this.users = []
    for (let i = 1; i <= 5; i++) {
      this.users.push({
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
  },
  methods: {
    showUser (item) {
      this.selectedIndex = this.users.indexOf(item)
      this.selectedUser = Object.assign({}, item)
      this.dialogs.details = true
    },
    editUser (item) {
      this.selectedIndex = this.users.indexOf(item)
      this.selectedUser = Object.assign({}, item)
      this.$refs.form.modeEdition()
      this.$refs.form.fillForm(this.selectedUser)
      this.dialogs.form = true
    },
    deleteUser (item) {
      this.selectedIndex = this.users.indexOf(item)
      this.selectedUser = Object.assign({}, item)
      this.dialogs.delete = true
    }
  }
  /**
 * TODO: Implementar funções da store
 * TODO: Estudar a possibilidade de alterar o node:lts para node:alpine no Dockerfile
 * TODO: Refatorar as regras do formulário para um arquivo externo
 */
}
</script>
