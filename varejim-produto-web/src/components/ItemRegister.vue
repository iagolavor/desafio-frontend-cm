<template>
  <v-container>
    <span class="ml-3 text-h6 font-weight-light">Novo produto</span>
    <v-row class="align-baseline">
      <v-col>
        <v-select
          hide-details
          class="mx-3" label="id de seção do produto"
          v-model="product.id_secao"
          :items="items"
          :menu-props="{ bottom: true, offsetY: true}"
        ></v-select>
      </v-col>
      <v-col>
        <v-text-field class="mx-3"
          hide-details
          label="Descrição do produto"
          v-model="product.descricao"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="mx-3 mb-2">
      <v-btn color="primary" class="px-3" @click="saveProduct">
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
import { insertProduct, getSectionIds } from '@/services.js'

export default {
  name: 'ItemRegister',
  data: () => ({
    newProduct: false,
    snackbar: false,
    snackbartext: '',
    snackbarcolor: '',
    items: [],
    timeout: 1000,
    product:{
      descricao: '',
      id_secao: ''
    }
  }),
  mounted(){
    this.loadIdSections();
  },
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
    },
    loadIdSections: async function(){
      let res = await getSectionIds();
      //res != 0 (success)
      if(res){
        this.items = res;
      }
    }
  }
}
</script>