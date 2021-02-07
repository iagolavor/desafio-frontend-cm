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
      <v-icon @click="deleteItem(item)"
      >mdi-delete-outline</v-icon>
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
//import { deleteProduct } from '@/services.js'

export default {
  name: 'Datatable',
  data: () => ({
    search: '',
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
    deleteItem: function(item){
      console.log(item)
    }
  }
}
</script>