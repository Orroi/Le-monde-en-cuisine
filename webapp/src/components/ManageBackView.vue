<template>
  <div id="ManageBackView">
    <v-footer
      color="rgb(210, 126, 54)"
      padless
    >
      <v-card-text class="white--text">
        <router-link to="/MentionsLegale">
          <button class="buttonML">
            Mentions légales
          </button>
        </router-link>        
        <router-link to="/RGPD">
          <button class="buttonML">
            RGPD
          </button>
        </router-link>   
      </v-card-text>
    </v-footer>
</div>
</template>

<script>
export default {
  name: 'ManageBackView',
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
  background-color: rgb(210, 126, 54);
}
.buttonML {
  color:black ;
  font-size:15px;
  padding-left:10px;
}
</style>
