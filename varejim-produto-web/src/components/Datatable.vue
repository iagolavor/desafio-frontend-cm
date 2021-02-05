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
    },
    items:{
      type: Array,
      default: () => []
    }
  }
}
</script>