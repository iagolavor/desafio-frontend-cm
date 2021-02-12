<template>
  <v-container>
    <span class="ml-3 text-h6 font-weight-light">Editar produto</span>
    <v-row>
      <v-col>
        <v-select class="mx-3"
          hide-details
          label="id"
          v-model="idModel"
          :items="ids"
        ></v-select>
      </v-col>
      <v-col>
        <v-select class="mx-3"
          label="id seção"
          v-model="idSecaoModel"
          hide-details
          :items="sectionIds"
        ></v-select>
      </v-col>
      <v-col>
        <v-text-field class="mx-3"
          label="Descrição"
          v-model="descricaoModel"
          hide-details
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="justify-space-between mx-3 mb-2">
      <v-dialog :retain-focus="false" v-model="dialog" max-width="300">
        <template v-slot:activator="{ on , attrs}">
          <v-btn color="error" v-on="on" v-bind="attrs">
            Excluir
            <v-icon right>mdi-delete</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>Excluir item com id {{id}}?</v-card-title>
          <v-card-actions class="justify-space-between">
            <v-btn @click="dialog = false" text>Não</v-btn>
            <v-btn @click="deleteItem(id)" text>Sim</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-btn color="primary" @click="editItem(id)">
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
import { deleteProduct, updateProduct, getProductIds, getSectionIds, getProducts } from '@/services.js'

export default {
  name: 'ItemEdit',
  data: () => ({
    snackbar: false,
    timeout: 1000,
    snackbarcolor: '',
    snackbartext: '',
    dialog: false,
    idModel: null,
    idSecaoModel: null,
    descricaoModel: null,
    ids: [],
    sectionIds: [],
  }),
  mounted(){
    this.loadIdProducts();
    this.loadIdSections();
  },
  watch:{
    idModel:{
      handler(){
        this.findProduct(this.idModel);
      }
    },
    id:{
      handler(){
        if(!isNaN(this.id))
          this.findProduct(this.id);
      },
      deep: true,
      immediate: true
    }
  },
  methods:{
    findProduct: async function(id){
      let res = await getProducts({id: id});
      this.idModel = res.data.items[0].id;
      this.idSecaoModel = res.data.items[0].secao_id;
      this.descricaoModel = res.data.items[0].descricao;
    },
    loadIdProducts: async function(){
      let res = await getProductIds();
      if(res){
        this.ids = res;
      }
    },
    loadIdSections: async function(){
      let res = await getSectionIds();
      //res != 0 (success)
      if(res){
        this.sectionIds = res;
      }
    },
    deleteItem: async function(id){
      if(this.checkEmptyFields()){
        let res = await deleteProduct(id);
        if(res.status === 200){
          this.snackbartext = 'Produto excluído com sucesso';
          this.snackbarcolor = 'primary';
          this.snackbar = true;
          this.idModel = null;
          this.descricaoModel = '';
          this.idSecaoModel = null;
        }else{
          this.snackbartext = 'Erro na exclusão do item';
          this.snackbarcolor = 'error';
          this.snackbar = true;
        }
      }else{
        this.snackbartext = 'Preencha os campos de exclusão';
        this.snackbarcolor = 'error';
        this.snackbar = true;
      }
    },
    editItem: async function(){
      if(this.checkEmptyFields()){
        let res = await updateProduct(this.idModel, this.descricaoModel, this.idSecaoModel);
        if(res.status === 200){
          this.snackbartext = 'Produto alterado com sucesso';
          this.snackbarcolor = 'primary';
          this.snackbar = true;
        }else{
          this.snackbartext = 'Erro na exclusão do item';
          this.snackbarcolor = 'error';
          this.snackbar = true;
        }
      }else{
        this.snackbartext = 'Preencha os campos de edição';
        this.snackbarcolor = 'error';
        this.snackbar = true;
      }
    },
    checkEmptyFields: function(){
      if(this.idModel && this.idSecaoModel && this.descricaoModel.length>0){
        return true;
      }else{
        return false;
      }
    }
  },
  props: {
    id:{
      type: Number,
      default: 0
    }
  }
}
</script>