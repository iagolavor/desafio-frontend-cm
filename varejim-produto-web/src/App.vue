<template>
  <v-app>
    <v-app-bar
      app
      color="teal lighten-2"
      dark
    >
      <div class="d-flex align-center appbar pl-5" style="max-width:1200px;">
        <v-icon large>mdi-cash</v-icon>
        <span class="ml-3 text-h4 font-weight-light">O Varejim web</span>
      </div>
    </v-app-bar>

    <v-main class="main">
      <v-container class="wrapper">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.appbar{
  display: flex;
  align-items: center;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.main{
  background-color: #eeeeee;
}
.wrapper{
  width: 1200px;
  margin-right: auto;
  margin-left: auto;
}
</style>
