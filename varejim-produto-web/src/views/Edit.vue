<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="font-weight-light text-h4 pb-3">Editar items</div>
        <v-sheet class="rounded-lg" color="white">
          <ItemEdit :id="parseInt(id)" :descricao="descricao" :id_secao="parseInt(id_secao)" />
        </v-sheet>
      </v-col>
      <v-col>
        <div class="font-weight-light text-h4 pb-3">Cadastrar item</div>
        <v-sheet class="rounded-lg" color="white">
          <ItemRegister/>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ItemEdit from '@/components/ItemEdit.vue'
import ItemRegister from '@/components/ItemRegister.vue'
import { updateProduct } from '@/services.js'

export default {
  name: 'Edit',
  components:{
    ItemEdit,
    ItemRegister
  },
  data: () => ({}),
  props:{
    id:{
      type: String,
      default: ''
    },
    descricao: {
      type: String,
      default: ''
    },
    id_secao:{
      type: String,
      default: ''
    }
  },
  methods:{
    updateItem: function(id){
      updateProduct(id).then(res => {
        console.log(res);
      })
    }
  }
}
</script>