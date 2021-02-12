<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :search="search"
    :options.sync="options"
    :loading="datatableDefaults.loading"
    :server-items-length="datatableDefaults.totalItems"
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
        query: {id:`${item.id}`}}">
        <v-icon
        >mdi-pencil</v-icon>
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import { deleteProduct, getProducts, getSections } from '@/services.js'

export default {
  name: 'Datatable',
  data: () => ({
    search: '',
    dialog: false,
    selectedItem: null,
    options: {},
    datatableDefaults:{
      page:0,
      totalItems:0,
      loading: false
    },
    items: []
  }),
  mounted(){
    if(this.tipotabela === 'produtos'){
      this.loadDefaultProducts();
    }else if(this.tipotabela === 'secoes'){
      this.loadDefaultSections();
    }
  },
  watch:{
    options:{
      handler(){
        this.loadPaginatedItems(this.tipotabela);
      }
    },
    search:{
      handler(){
        this.loadPaginatedItems(this.tipotabela);
      }
    }
  },
  props:{
    headers:{
      type: Array,
      default: () => []
    },
    tipotabela:{
      type: String,
      default: ''
    }
  },
  methods:{
    loadPaginatedItems: async function(tipotabela){
      this.loading = true;
      let query = {
        start: (this.options.page-1)*this.options.itemsPerPage,
        limit: this.options.itemsPerPage,
      };
      if(this.search.length>0){
        isNaN(this.search) ? query = { ...query, descricao: this.search } : query = { ...query, id: parseInt(this.search)}
      }
      if(tipotabela === 'produtos'){
        let res = await getProducts(query);
        this.items = res.data.items;
        this.loading = false;
      }else if(tipotabela === 'secoes'){
        let res = await getSections(query);
        this.items = res.data.items;
        this.loading = false;
      }
    },
    openDialog: function(item){
      this.selectedItem = item;
      this.dialog = true;
    },
    deleteItem: async function(item){
      let res = await deleteProduct(item.id);
      if(res.status === 200){
        await this.loadDefaultProducts();
        await this.loadPaginatedItems(this.tipotabela);
        this.dialog = false;
      }
    },
    loadDefaultProducts:async function(){
      this.datatableDefaults.loading = true;
      let res = await getProducts();
      this.items = res.data.items;
      this.datatableDefaults.totalItems = res.data.total;
      this.datatableDefaults.loading = false;
    },
    loadDefaultSections:async function(){
      this.datatableDefaults.loading = true;
      let res = await getSections();
      this.items = res.data.items;
      this.datatableDefaults.totalItems = res.data.total;
      this.datatableDefaults.loading = false;
    }
  }
}
</script>