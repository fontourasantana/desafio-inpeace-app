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
          :loading="processing"
          @click="submit"
        >
          Salvar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'
import { parserUser } from '@/utils'
import UserForm from '@/components/UserForm'

export default {
  name: 'UserFormModal',
  components: {
    UserForm
  },
  data: () => ({
    mode: 'creation',
    processing: false
  }),
  computed: {
    title () {
      return this.mode === 'creation' ? 'Novo' : 'Editar'
    }
  },
  methods: {
    ...mapActions('usuario', {
      saveUser: 'store',
      updateUser: 'update'
    }),
    submit () {
      this.$refs.form.submit()
    },
    async handler (form) {
      try {
        if (this.processing) {
          return
        }

        this.processing = true
        const { message } = (this.mode === 'creation') ? await this.saveUser(form) : await this.updateUser(form)
        this.$toast.success(message)
        this.$emit('input', false)
      } catch (error) {
        this.$toast.error(error.message)
      } finally {
        this.processing = false
      }
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
