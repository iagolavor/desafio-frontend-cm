<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="font-weight-light text-h4">Produtos</div>
        <v-sheet class="rounded-lg" color="white">
          <Datatable :headers="headers.product" :items="productItems" :tipotabela="'produtos'" />
        </v-sheet>
      </v-col>
      <v-col>
        <div class="font-weight-light text-h4">Seções</div>
        <v-sheet class="rounded-lg" color="white">
          <Datatable :headers="headers.section" :items="sections" :tipotabela="'seções'" />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Datatable from '@/components/Datatable.vue'
import { getProducts, getSections } from '@/services.js'

export default {
  name: 'Home',
  components: {
    Datatable
  },
  data: () => ({
    productItems:[],
    sections:[],
    headers:{
      product:[
          {text: 'id'       , value: 'id'},
          {text: 'id seção' , value:'id_secao'},
          {text: 'Descrição', value:'descricao'},
          {text: 'Editar'   , value: 'edit', sortable: false},
          {text: 'Excluir'  , value:'delete', sortable:false}
      ],
      section:[
        {text: 'id'       , value:'id'},
        {text: 'Descrição', value:'descricao'},
        {text: 'Editar'   , value:'edit', sortable:false},
        {text: 'Excluir'  , value:'delete', sortable:false}
      ]
    }
  }),
  methods: {
    loadProducts: function(){
      getProducts().then(res => {
        this.productItems = res.data.items;
      })
    },
    loadSections: function(){
      getSections().then(res => {
        this.sections = res.data.items;
      })
    }
  },
  mounted(){
    this.loadProducts(); 
    this.loadSections(); 
  }
}
</script>

<style scoped>

</style>
