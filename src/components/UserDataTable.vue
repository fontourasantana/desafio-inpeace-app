<template>
  <v-data-table
    :headers="headers"
    :items="users"
    :search="search"
    class="elevation-3"
    no-data-text="Nenhum usuário cadastrado no sistema"
    no-results-text="Nenhum registro correspondente encontrado"
    loading-text="Carregando usuários do sistema"
    :loading="processing"
  >
    <template #top>
      <v-card elevation="0">
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
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Pesquisar"
            single-line
            hide-details
          />
        </v-toolbar>
        <v-card-text class="text-right">
          <UserFormModal ref="form" v-model="dialogs.form" />
        </v-card-text>
      </v-card>
      <UserDetailsModal v-model="dialogs.details" :user="selectedUser" />
      <UserDeleteModal v-model="dialogs.delete" :user="selectedUser" />
    </template>
    <template #[`item.actions`]="{ item }">
      <v-icon
        dense
        class="mr-2"
        @click="openDetailsDialog(item)"
      >
        mdi-account-search
      </v-icon>
      <v-icon
        dense
        class="mr-2"
        @click="openFormDialog(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        dense
        @click="openDeleteDialog(item)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
import { mapActions, mapState } from 'vuex'
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
    processing: false,
    dialogs: {
      form: false,
      details: false,
      delete: false
    },
    search: '',
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
    selectedUser: {}
  }),
  computed: {
    ...mapState('usuario', ['users'])
  },
  created () {
    this.loadUsers()
  },
  methods: {
    ...mapActions('usuario', {
      getAllUsers: 'index'
    }),
    async loadUsers () {
      try {
        if (this.processing) {
          return
        }

        this.processing = true
        await this.getAllUsers()
      } catch (error) {
        this.$toast.error(error.message)
      } finally {
        this.processing = false
      }
    },
    openDetailsDialog (user) {
      this.selectedUser = Object.assign({}, user)
      this.dialogs.details = true
    },
    openFormDialog (user) {
      this.selectedUser = Object.assign({}, user)
      this.$refs.form.modeEdition()
      this.$refs.form.fillForm(this.selectedUser)
      this.dialogs.form = true
    },
    openDeleteDialog (user) {
      this.selectedUser = Object.assign({}, user)
      this.dialogs.delete = true
    }
  }
}
</script>
