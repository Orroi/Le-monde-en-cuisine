<template>
  <div id="ManageView" class="backMainColor">
       <v-col
          margin-left="10px"
          cols="12"
          sm="4"
        >
        <router-link to="/Home">
          <v-img
            padding="0.35em, 1.2em"
            height="100"
            width="100"
            src="../assets/Logo-LMEC.png"
          ></v-img>
        </router-link>
      </v-col>
      <v-col
        cols="12"
        sm="8"
      >
        <v-tabs
          background-color="rgba(23,23,23,.0)"
          grow
        >
          <v-tab class="" to= "/PresentationProjet">
              Le Projet
          </v-tab>
          <v-tab to= "/QuiSommeNous">
              Qui sommes-nous ?
          </v-tab>
          <v-tab to= "/NosActions">
              Nos actions
          </v-tab>
          <v-tab to= "/NosRecettes">
              Nos recettes
          </v-tab>
          <v-tab to= "/NousAider">
              Nous aider
          </v-tab>
        </v-tabs>
        <router-view></router-view>
      </v-col>
    </div>
</template>

<script>
export default {
  name: 'ManageView',
  data () {
    return {
    }
  },
  methods: {

  }

}
</script>

<style>
.backMainColor {
  background: linear-gradient(90deg, rgb(255, 212, 0), rgb(210, 126, 54));
  height: 125px;
  width: 100%;
}
</style>
