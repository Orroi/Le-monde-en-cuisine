<template>
  <div id="NosRecettes">
    <ManageView/>
    <div>
      <v-img
        height="400"
        width="100%"
        src="../assets/photoPlats/Indian Kheer 6.jpeg"
      ></v-img>
    </div>
    <div class="Title">
        <h1 class="textColor">Nos Recettes</h1>
    </div>
    <h1 class="TextTemp">Ici, vous trouverez régulièrement des recettes qui ne feront pas partie de notre livre, mais qui sauront tout de même régaler vos papilles !</h1>
  <ManageBackView/>
  </div>
</template>

<script>
// @ is an alias to /src
import ManageView from '../components/ManageView'
import ManageBackView from '../components/ManageBackView.vue'

export default {
  name: 'NosRecttes',
  data () {
    return {
    }
  },
  components: {
    ManageView,
    ManageBackView
  }
}
</script>

<style>
.TextTemp {
  color:rgb(78,59,31);
  padding-top: 60px;
  font-size: 250%;
  font-weight: bold;
  font-family: "Century Gothic";
}
</style>