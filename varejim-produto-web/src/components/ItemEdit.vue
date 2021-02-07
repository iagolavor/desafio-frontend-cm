<template>
  <v-container>
    <span v-show="id_secao">Editar produto</span>
    <span v-show="!id_secao">Editar seção</span>
    <v-row>
      <v-col>
        <v-text-field class="mx-3"
          v-model="id"
          label="id"
          disabled
        ></v-text-field>
      </v-col>
      <v-col v-show="id_secao">
        <v-text-field class="mx-3"
          label="id_seção"
          v-model="id_secao"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field class="mx-3"
          label="Descrição"
          v-model="descricao"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="justify-end">
      <v-btn color="primary">
        Salvar
        <v-icon right></v-icon>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ItemEdit',
  data: () => ({
  }),
  props: {
    id:{
      type: Number,
      default: 0
    },
    descricao:{
      type: String,
      default: ''
    },
    id_secao:{
      type: Number,
      default: 0
    }
  }
}
</script>