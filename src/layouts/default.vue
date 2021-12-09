<template>
  <v-app>
    <v-main>
      <v-container class="my-8">
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app padless absolute>
      <v-card flat tile class="primary white--text text-center w-100">
        <v-divider />
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Desafio InPeace</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style scoped>
.w-100 {
  width: 100% !important;
}
</style>
