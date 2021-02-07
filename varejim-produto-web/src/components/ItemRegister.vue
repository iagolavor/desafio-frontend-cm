<template>
  <v-container>
    <span class="text-h6 font-weight-light">Novo produto</span>
    <v-row class="align-baseline">
      <v-text-field class="mx-3"
        label="Descrição do produto"
        v-model="product.descricao"
      ></v-text-field>
      <v-text-field class="mx-3"
        label="id da seção do produto"
        v-model="product.id_secao"
      ></v-text-field>
      <v-btn color="primary" class="mr-3" @click="saveProduct">
        Salvar
        <v-icon right>mdi-content-save</v-icon>
      </v-btn>
    </v-row>
    <v-divider class="my-3"/>
    <span class="text-h6 font-weight-light">Nova seção</span>
    <v-row class="align-baseline">
      <v-text-field class="mx-3"
        label="Descrição da seção"
        v-model="section.descricao"
      ></v-text-field>
      <v-text-field class="mx-3"
        label="id da seção"
        v-model="section.id_secao"
      ></v-text-field>
      <v-btn color="primary" class="mr-3">
        Salvar
        <v-icon right>mdi-content-save</v-icon>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { insertProduct } from '@/services.js'

export default {
  name: 'ItemRegister',
  data: () => ({
    product:{
      descricao: '',
      id_secao: ''
    },
    section:{
      descricao: '',
      id_secao: ''
    }
  }),
  methods: {
    saveProduct: function(){
      insertProduct(
        this.product.descricao, parseInt(this.product.id_secao)
      ).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>