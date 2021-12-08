<template>
  <v-dialog
    width="500"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-card>
      <v-card-title>Deletar usuário</v-card-title>
      <UserDetails class="elevation-0" :user="user" />
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
          color="red"
          outlined
          :loading="processing"
          @click="handler(user)"
        >
          Deletar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'
import UserDetails from '@/components/UserDetails'

export default {
  name: 'UserDeleteModal',
  components: {
    UserDetails
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    processing: false
  }),
  methods: {
    ...mapActions('usuario', {
      deleteUser: 'destroy'
    }),
    async handler (user) {
      try {
        if (this.processing) {
          return
        }

        this.processing = true
        const { message } = await this.deleteUser(user)
        this.$toast.success(message)
        this.$emit('input', false)
      } catch (error) {
        this.$toast.error(error.message)
      } finally {
        this.processing = false
      }
    }
  }
}
</script>
