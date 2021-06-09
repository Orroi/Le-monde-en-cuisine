<template>
  <div class="NosActions">
    <ManageView/>
    <div>
        <v-img
          height="400"
          width="100%"
          src="../assets/photoPlats/Dahl 1.png"
        ></v-img>
    </div>
    <div class="Title">
        <h1 class="textColor">Nos Actions</h1>
    </div>
    <div class="textSecondTitle">
      <b>LE LIVRE</b>
    </div>
    <div class="bandeau">
      <v-row no-gutters>
        <v-col 
          cols="12"
          sm="5"
        >
          <v-img
            height="500"
            width="500"
            src="../assets/photoPlats/logo.png"></v-img>
        </v-col>
        <v-col
          cols="12"
          sm="7"
        >
          <p class="text-bandeau" style="padding-top: 100px"> Un <b> livre de cuisine</b>, c’est avant tout une histoire de partage, se retrouver en famille, entre amis, autour d’un bon repas.</p>
          <p class="text-bandeau">Un <b>livre de recettes du monde</b>, c’est aussi une aventure culinaire, un voyage gustatif aux confins de l’exotisme et de la gourmandise. </p>
          <p class="text-bandeau"><b style="color:rgb(78,59,31)">Notre livre</b>, c’est un délicieux mélange des deux, des recettes faciles et accessibles et surtout la promesse d’une expédition savoureuse. </p>
        </v-col>
      </v-row>
    </div>
    <div style="padding: 4em" ></div>
    <div class="textBody">
      <p>
      En raison de notre intérêt pour la cuisine, mais aussi de nos différentes connexions avec des pays étrangers, nous avons choisi de publier un livre de recettes du monde.
       Nous souhaitons également contribuer à <b style="color: rgb(213, 164, 85)">la découverte de la cuisine du monde </b> afin de défaire certains préjugés sur la cuisine du monde,
        grâce à des <b style="color:rgb(213, 164, 85)">recettes simples et accessibles à tous</b>.
      </p>
      <div style="padding: 1em" ></div>
      <p>
        C’est un livre composé d’une <b style="color:rgb(213, 164, 85)">soixantaine de recettes</b> sur environ 150 pages.
        Chacune d’entre elle sera composée d’une fiche recette contenant les ingrédients, les étapes de préparation ainsi qu’une photographie du rendu final.
        Nous souhaitons aussi renseigner sur chaque recette le niveau de difficulté,
        le temps de cuisson et de préparation, s’il s’agit d’une recette végétarienne, sans gluten, etc.
      </p>
      <div style="padding: 1em" ></div>
      <p>
        Des anecdotes ou conseils pourront apparaître tout au fil des recettes, notamment sur comment remplacer un ingrédient par un autre, ou comment rendre la recette végétarienne.
        Le livre sera également composé d’un sommaire indiquant la provenance des recettes,
        d’une page affichant des équivalences de mesures, et d’une partie indiquant les enseignes où trouver certains ingrédients spécifiques.
      </p>
      <div style="padding: 1em" ></div>
      <p>
      Nous souhaitons vendre le livre au prix de <b style="color:rgb(213, 164, 85)">15€</b>,
       afin de pouvoir vendre un produit de qualité tout en restant à un prix accessible pour la plupart des gens.
      </p>
    </div>
    <div style="padding: 1em" ></div>
    <a href="https://www.helloasso.com/associations/aide-au-vietnam-et-a-l-enfance/collectes/soutien-au-projet-le-monde-en-cuisine-et-pre-vente-du-livre-de-recettes">
      <button class="buttonPC">
        Pré-commande
      </button>
    </a>
    <div style="padding: 1em" ></div>
    <hr class="ligne">
    <div style="padding: 1em" ></div>
    <div class="textSecondTitle" style="  padding-top: 30px">
      <b>L'EVENEMENT</b>
    </div>
    <div class="bandeau2">
      <v-row no-gutters>
        <v-col
          cols="12"
          sm="7"
        >
          <p class="text-bandeau2" style="padding-top: 90px"> La <b>culture</b>, c’est avant tout une histoire de partage, se retrouver en famille, entre amis, autour d’un bon repas.
            Nous souhaitons vous emmener à <b>la découverte des cultures du monde</b>, éveiller vos sens, attiser votre curiosité.
            <b style="color:rgb(78,59,31)">Notre évènement</b>, c’est un cocktail savant à base d’ateliers et de conférences autour des multiples cultures à travers le monde</p>
        </v-col>
        <v-col 
          cols="12"
          sm="5"
        >
          <v-img
            position="right right"
            height="500"
            width="600"
            src="../assets/photoPlats/Melktert.png"></v-img>
        </v-col>
      </v-row>
    </div>
    <div style="padding: 2em" ></div>
    <div class="textBottom">
      <b>Informations complétementaires à venir ...</b>
    </div>
    <div style="padding: 3em" ></div>
  </div>
</template>

<script>
// @ is an alias to /src
import ManageView from '../components/ManageView'

export default {
  name: 'NosActions',
  data () {
    return {
    }
  },
  components: {
    ManageView,
  }
}
</script>

<style>
.textSecondTitle {
  color: rgb(210, 126, 54);
  text-align: left;
  font-size: 40px;
  padding-top: 150px;
  padding-left: 150px;
  padding-bottom: 20px;
}
.textBody {
  font-size: 26px;
  font-family: "Century Gothic";
  text-align: center;
  padding-left: 10%;
  padding-right: 10%;
}
.textBottom {
  font-size: 26px;
  font-family: "Century Gothic";
  text-align: center;
  color: rgb(210, 126, 54)
}
</style>