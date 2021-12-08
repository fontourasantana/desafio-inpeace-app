<template>
  <v-card class="pa-4">
    <div class="d-flex flex-row justify-center">
      <v-avatar color="indigo" size="90">
        <v-icon dark x-large>
          mdi-account-circle
        </v-icon>
      </v-avatar>
    </div>
    <v-card-text>
      <b>Nome:</b> {{ user.nome }}<br>
      <b>CPF:</b> {{ user.cpf | formatarCPF }}<br>
      <b>Data de nascimento:</b> {{ user.dataNascimento | formatarData }}<br>
      <b>E-mail:</b> {{ user.email }}<br>
      <b>Telefone:</b> {{ user.telefone | formatarTelefone }}<br>
      <b>Endereço:</b> {{ user.logradouro }}, {{ user.cidade }} - {{ user.estado }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'UserDetails',
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
