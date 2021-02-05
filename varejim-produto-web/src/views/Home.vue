<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <v-sheet class="rounded-lg" color="white">
          <div>Produtos</div>
          <Datatable/>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="rounded-lg" color="white">
          <div>Seções</div>
          <Datatable/>
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
  }
}
</script>
