<template>
  <v-container>
    <span v-show="id_secao" class="ml-3">Editar produto</span>
    <span v-show="!id_secao">Editar seção</span>
    <v-row>
      <v-col>
        <v-text-field class="mx-3"
          v-model="id"
          label="id"
          disabled
          hide-details
        ></v-text-field>
      </v-col>
      <v-col v-show="id_secao">
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
      <v-dialog v-model="dialog" max-width="300">
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
            <v-btn text>Sim</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-btn color="primary">
        Salvar
        <v-icon right>mdi-content-save</v-icon>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { deleteProduct } from '@/services.js'

export default {
  name: 'ItemEdit',
  data: () => ({
    dialog: false
  }),
  methods:{
    deleteItem: function(id){
      deleteProduct(id).then(res => {
        console.log(res);
        this.id = 0;
        this.descricao = '';
        this.id_secao = 0;
      })
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