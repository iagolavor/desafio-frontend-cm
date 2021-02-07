<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :search="search"
  >
    <template v-slot:top>
      <v-text-field
        v-model="search"
        class="mx-4"
        :label="`Filtrar ${tipotabela}`"
        append-icon="mdi-magnify"
      ></v-text-field>
    </template>
    <template v-slot:item.delete="{item}">
      <v-dialog :retain-focus="false" v-model="dialog" max-width="300">
        <template v-slot:activator="{ on , attrs}">
          <v-btn icon v-on="on" v-bind="attrs" @click="openDialog(item)">
            <v-icon>mdi-delete-outline</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>Excluir o item a seguir?</v-card-title>
          <v-card-text>{{selectedItem}}</v-card-text>
          <v-card-actions class="justify-space-between">
            <v-btn @click="dialog = false" text>Não</v-btn>
            <v-btn @click="deleteItem(selectedItem)" text>Sim</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>
    <template v-slot:item.edit="{item}">
      <v-btn icon :to="{path: '/edit',
        query: {id:`${item.id}`,
        descricao:`${item.descricao}`,
        id_secao:`${item.secao_id}`}}">
        <v-icon
        >mdi-pencil</v-icon>
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import { deleteProduct, getProducts } from '@/services.js'

export default {
  name: 'Datatable',
  data: () => ({
    search: '',
    dialog: false,
    selectedItem: null
  }),
  props:{
    headers:{
      type: Array,
      default: () => []
    },
    tipotabela:{
      type: String,
      default: ''
    },
    items:{
      type: Array,
      default: () => []
    }
  },
  methods:{
    openDialog: function(item){
      console.log(item);
      this.selectedItem = item;
      this.dialog = true;
    },
    deleteItem: function(item){
      deleteProduct(item.id).then(res => {
        console.log(res);
        this.loadProducts();
        this.dialog = false;
      }).catch(err => {
        console.log(err);
      })
    },
    loadProducts: function(){
      getProducts().then(res => {
        this.items = res.data.items;
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>