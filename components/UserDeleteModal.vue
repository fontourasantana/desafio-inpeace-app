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
          @click="$emit('input', false)"
        >
          Deletar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
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
  }
}
</script>
