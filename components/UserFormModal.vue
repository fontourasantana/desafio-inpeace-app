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
        @click="modeCreation"
      >
        Cadastrar
      </v-btn>
    </template>

    <v-card>
      <v-card-title>{{ title }} usuário</v-card-title>
      <UserForm ref="form" :key="mode" class="pa-8" :show-controls="false" @submit="handler" />
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
import { parserUser } from '@/utils'
import UserForm from '@/components/UserForm'

export default {
  name: 'UserFormModal',
  components: {
    UserForm
  },
  data: () => ({
    mode: 'creation'
  }),
  computed: {
    title () {
      return this.mode === 'creation' ? 'Novo' : 'Editar'
    }
  },
  methods: {
    submit () {
      this.$refs.form.submit()
    },
    handler (form) {
      console.log('submited', form)
    },
    modeCreation () {
      this.mode = 'creation'
    },
    modeEdition () {
      this.mode = 'edition'
    },
    fillForm (data) {
      this.$nextTick(() => {
        const parsedData = parserUser(data)
        this.$refs.form.fill(parsedData)
      })
    }
  }
}
</script>
