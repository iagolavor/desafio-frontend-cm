<template>
  <v-data-table
    :headers="headers"
    :search="search"
  >
    <template v-slot:top>
      <v-text-field
        v-model="search"
        class="mx-4"
        :label="`Pesquise ${tipotabela}`"
      ></v-text-field>
    </template>
  </v-data-table>
</template>

<script>
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
    }
  }
}
</script>