<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="font-weight-light text-h4">Produtos</div>
        <v-sheet class="rounded-lg" color="white">
          <Datatable :headers="headers.product" :tipotabela="'produtos'" />
        </v-sheet>
      </v-col>
      <v-col>
        <div class="font-weight-light text-h4">Seções</div>
        <v-sheet class="rounded-lg" color="white">
          <Datatable :headers="headers.section" :tipotabela="'secoes'" />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Datatable from '@/components/Datatable.vue'

export default {
  name: 'Home',
  components: {
    Datatable
  },
  data: () => ({
    headers:{
      product:[
          {text: 'id'       , value: 'id', sortable: false},
          {text: 'id seção' , value:'secao_id', sortable: false},
          {text: 'Descrição', value:'descricao', sortable: false},
          {text: 'Editar'   , value: 'edit', sortable: false},
          {text: 'Excluir'  , value:'delete', sortable:false}
      ],
      section:[
        {text: 'id'       , value:'id', sortable: false},
        {text: 'Descrição', value:'descricao', sortable: false}
      ]
    }
  })
}
</script>

<style scoped>

</style>
