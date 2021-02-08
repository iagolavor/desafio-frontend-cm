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
    <v-snackbar v-model="snackbar" :timeoutr="timeout" :color="snackbarcolor">
      {{snackbartext}}
    </v-snackbar>
  </v-container>
</template>

<script>
import { insertProduct } from '@/services.js'

export default {
  name: 'ItemRegister',
  data: () => ({
    newProduct: false,
    snackbar: false,
    snackbartext: '',
    snackbarcolor: '',
    timeout: 1000,
    product:{
      id: '',
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
      if(this.product.descricao.length>0 && parseInt(this.product.id_secao)){
          insertProduct(this.product.descricao, parseInt(this.product.id_secao)
          ).then(res => {
            this.snackbarcolor = "primary";
            this.snackbartext = `Produto registrado com id: ${res.data}`;
            this.snackbar = true;
          }).catch(err => {
            this.snackbarcolor = "error";
            this.snackbartext = "Erro ao registrar o produto";
            this.snackbar = true;
            console.log(err);
          })
      }else{
        this.snackbarcolor = "error";
        this.snackbartext = "Preencha os campos descrição e id da seção.";
        this.snackbar = true;
      }
    }
  }
}
</script>