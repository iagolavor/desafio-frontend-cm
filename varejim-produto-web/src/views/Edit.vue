<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="font-weight-light text-h4 pb-3">Editar items</div>
        <v-sheet class="rounded-lg" color="white">
          <ItemEdit :id="parseInt(id)"/>
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
    }
  },
}
</script>