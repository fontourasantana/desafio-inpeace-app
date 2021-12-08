<template>
  <v-dialog
    v-bind="$attrs"
    max-width="1000"
    v-on="$listeners"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        color="primary"
        dark
        v-bind="attrs"
        v-on="on"
      >
        Cadastrar
      </v-btn>
    </template>

    <v-card>
      <v-card-title>Novo usuário</v-card-title>
      <UserForm ref="form" class="pa-8" :show-controls="false" @submit="action" />
      <v-divider />
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
          text
          @click="$emit('input', false)"
        >
          Voltar
        </v-btn>
        <v-btn
          color="success"
          outlined
          @click="submit"
        >
          Salvar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import UserForm from '@/components/UserForm'

export default {
  name: 'UserFormModal',
  components: {
    UserForm
  },
  methods: {
    submit () {
      this.$refs.form.submit()
    },
    action (form) {
      console.log(form)
    }
  }
}
</script>
