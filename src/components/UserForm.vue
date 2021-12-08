<template>
  <v-form
    ref="form"
    v-model="formularioValido"
    lazy-validation
  >
    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model.trim="form.nome"
          :rules="regras.nome"
          :counter="60"
          label="Nome"
          required
          validate-on-blur
        />
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          v-model="form.cpf"
          v-mask="'###.###.###-##'"
          :rules="regras.cpf"
          name="CPF"
          label="CPF"
          required
          validate-on-blur
        />
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          v-model="form.dataNascimento"
          v-mask="'##/##/####'"
          :rules="regras.dataNascimento"
          name="data_nascimento"
          label="Data de nascimento"
          required
          validate-on-blur
        />
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field
          v-model.trim="form.email"
          :rules="regras.email"
          label="E-mail"
          required
          validate-on-blur
        />
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field
          v-model="form.telefone"
          v-mask="'(##) ####-####'"
          :rules="regras.telefone"
          label="Telefone"
          required
          validate-on-blur
        />
      </v-col>

      <v-col cols="12" sm="6">
        <v-select
          v-model="form.estado"
          :rules="regras.estado"
          :items="estados"
          item-text="nome"
          item-value="sigla"
          label="Estado"
          required
          validate-on-blur
          @change="buscarCidades(form.estado)"
        />
      </v-col>

      <v-col cols="12" sm="6">
        <v-select
          v-model="form.cidade"
          :rules="regras.cidade"
          :items="cidades"
          item-text="nome"
          item-value="nome"
          label="Cidade"
          :disabled="!estadoSelecionado"
          required
          validate-on-blur
        />
      </v-col>

      <v-col>
        <v-text-field
          v-model.trim="form.logradouro"
          :rules="regras.logradouro"
          label="Logradouro"
          :counter="100"
          required
          validate-on-blur
        />
      </v-col>
    </v-row>
    <v-row v-if="showControls" justify="end">
      <v-btn
        :disabled="!formularioValido"
        color="success"
        class="mr-4"
        @click="submit"
      >
        Salvar
      </v-btn>

      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Limpar
      </v-btn>
    </v-row>
  </v-form>
</template>

<script>
import { user as regras } from '@/validations'

export default {
  name: 'UserForm',
  props: {
    showControls: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    formularioValido: true,
    form: {},
    regras,
    estados: [],
    cidades: [],
    estadoSelecionado: false
  }),
  async mounted () {
    const response = await this.$axios.$get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    this.estados = response.map(({ sigla, nome }) => ({ sigla, nome }))
  },
  methods: {
    async buscarCidades (sigla) {
      try {
        const response = await this.$axios.$get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${sigla}/municipios`)
        this.cidades = response.map(({ nome }) => ({ nome }))
        this.estadoSelecionado = true
      } catch (error) {
        this.$toast.error(error.message)
      }
    },
    submit () {
      const valido = this.$refs.form.validate()

      if (!valido) {
        return
      }

      this.$emit('submit', this.form)
    },
    async fill (data) {
      await this.buscarCidades(data.estado)
      await this.$nextTick()
      this.form = Object.assign({}, data)
    },
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>

<style>

</style>
