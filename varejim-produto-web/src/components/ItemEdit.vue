<template>
  <v-container>
    <span class="ml-3 text-h6 font-weight-light">Editar produto</span>
    <v-row>
      <v-col>
        <v-text-field class="mx-3"
          v-model="id"
          label="id"
          disabled
          hide-details
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field class="mx-3"
          label="id_seção"
          v-model="id_secao"
          hide-details
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field class="mx-3"
          label="Descrição"
          v-model="descricao"
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
import { deleteProduct, updateProduct } from '@/services.js'

export default {
  name: 'ItemEdit',
  data: () => ({
    snackbar: false,
    timeout: 1000,
    snackbarcolor: '',
    snackbartext: '',
    dialog: false,
  }),
  methods:{
    deleteItem: function(id){
      this.dialog = false;
      deleteProduct(id).then(res => {
        this.snackbartext = 'Produto excluído com sucesso';
        this.snackbarcolor = 'primary';
        this.snackbar = true;
        console.log(res);
        this.id = 0;
        this.descricao = '';
        this.id_secao = 0;
      }).catch(err => {
        this.snackbartext = 'Erro na exclusão do item';
        this.snackbarcolor = 'error';
        this.snackbar = true;
        console.log(err);
      })
    },
    editItem: function(id){
      if(this.descricao.length > 0 && this.id_secao){
          updateProduct(id, this.descricao, this.id_secao).then(res => {
            console.log(res);
            this.snackbartext = 'Produto alterado com sucesso';
            this.snackbarcolor = 'primary';
            this.snackbar = true;
          }).catch(err => {
            this.snackbartext = 'Erro na exclusão do item';
            this.snackbarcolor = 'error';
            this.snackbar = true;
            console.log(err);
          })
      }else{
        this.snackbartext = 'Preencha os campos de edição';
        this.snackbarcolor = 'error';
        this.snackbar = true;
      }
    }
  },
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