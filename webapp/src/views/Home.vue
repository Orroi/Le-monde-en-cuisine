<template>
  <div id="home">
    <ManageView/>
    <div>
      <v-img
        height="400"
        width="100%"
        src="../assets/photoPlats/Mi Quang.png"
      ></v-img>
    </div>
    <h1 class="title-style">LE MONDE VOUS OUVRE SES CUISINES</h1>
    <p class="text"> Ce projet étudiant à but humanitaire est issu de deux passions communes : le Monde et la Cuisine.</p>
    <p class="text"> Nous souhaitons vous embarquer à la découverte des différentes cultures de la planète à travers leurs spécialités culinaires.</p>
    <div style="padding: 2em">
      <router-link to="/PresentationProjet">
        <button class="button1">
          Le Projet
        </button>
      </router-link>
    </div>
    <div class="bandeau">
      <v-row no-gutters>
        <v-col 
          cols="12"
          sm="4"
        >
          <v-img
            height="350"
            width="350"
            src="../assets/photoPlats/kachumbari.png"></v-img>
        </v-col>
        <v-col
          cols="12"
          sm="8"
        >
          <p class="text-bandeau" style="padding-top: 60px"> Un <b> livre de cuisine</b>, c’est avant tout une histoire de partage, se retrouver en famille, entre amis, autour d’un bon repas.</p>
          <p class="text-bandeau">Un <b>livre de recettes du monde</b>, c’est aussi une aventure culinaire, un voyage gustatif aux confins de l’exotisme et de la gourmandise. </p>
          <p class="text-bandeau"><b style="color:rgb(78,59,31)">Notre livre</b>, c’est un délicieux mélange des deux, des recettes faciles et accessibles et surtout la promesse d’une expédition savoureuse. </p>
        <router-link to="/NosActions">
          <button class="button1">
            Le Livre
          </button>
        </router-link>
        </v-col>
      </v-row>
    </div>
    <div style="padding: 4em" ></div>
    <div class="bandeau2">
      <v-row no-gutters>
        <v-col
          cols="12"
          sm="9"
        >
          <p class="text-bandeau2" style="padding-top: 60px"> Un <b> livre de cuisine</b>, c’est avant tout une histoire de partage, se retrouver en famille, entre amis, autour d’un bon repas.</p>
          <p class="text-bandeau2">Un <b>livre de recettes du monde</b>, c’est aussi une aventure culinaire, un voyage gustatif aux confins de l’exotisme et de la gourmandise. </p>
          <p class="text-bandeau2"><b style="color:rgb(78,59,31)">Notre livre</b>, c’est un délicieux mélange des deux, des recettes faciles et accessibles et surtout la promesse d’une expédition savoureuse. </p>
          <button class="button2">
            L'évènement
          </button>
        </v-col>
        <v-col 
          cols="12"
          sm="3"
        >
          <v-img
            position="right right"
            height="350"
            width="350"
            src="../assets/photoPlats/burritos.png"></v-img>
        </v-col>
      </v-row>
    </div>
    <div style="padding: 1em" ></div>
    <hr class="ligne">
    <p class="back-text"> Actualités</p>
    </div>
</template>

<script>
// @ is an alias to /src
import ManageView from '../components/ManageView'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    ManageView
  }
}
</script>

<style>
.color-hint {
  background: linear-gradient(yellow, 10%, rgb(210, 126, 54));
}
.title-style {
  color:rgb(78,59,31);
  font-size: 350%;
  font-weight: bold;
  font-family: "Century Gothic";
}
.bandeau {
  background: rgb(213, 164, 85);
}
.bandeau2 {
  background: rgb(213, 164, 85);
  justify-content: space-around;
  margin-top: 20px;
}
.text-bandeau {
  font-size: 26px;
  font-family: "Century Gothic";
  text-align: left;
  color: white;
}
.text-bandeau2 {
  font-size: 26px;
  font-family: "Century Gothic";
  text-align: left;
  color: white;
  padding-left: 2em
}
.text {
  font-size: 20px;
  font-family: "Century Gothic";
  text-align: center;
}
.button1 {
  background-color: rgb(210, 126, 54);
  color: white;
  height: 40px;
  width: 150px;
  font-size: 28px;
}
.button2 {
  background-color: rgb(210, 126, 54);
  color: white;
  height: 40px;
  width: 200px;
  font-size: 28px;
}
.back-text {
  font-size: 34px;
  color: rgb(210, 126, 54);
  padding: 0.5em
}
.ligne {
  height:4px;
  border-width:0;
  color:rgb(210, 126, 54);
  background-color:rgb(210, 126, 54);
  width:15%;
  margin-left:43% !important;
  margin-right:57% !important;
}
</style>