<template>
  <div class="PresentationProjet">
    <ManageView/>
    <div>
        <v-img
          height="400"
          width="100%"
          src="../assets/photoPlats/Piquillos.png"
        ></v-img>
    </div>
    <div class="Title">
        <h1 class="textColor" >NOTRE PROJET</h1>
    </div>
    <div class="alignText">
      <p class="firstText">Notre opération, appelée "<b style="color:rgb(210, 126, 54)">Le Monde en cuisine</b>”,
       consiste à créer un livre de recettes du monde, qui sont le fruit de nos expériences et rencontres personnelles.
      Cette idée est née du contexte actuel : comment partager notre goût pour l’<b style="color:rgb(213, 164, 85)">interculturalité</b>
      et la <b style="color:rgb(213, 164, 85)">cuisine</b>. Nous cherchions une manière de se rassembler autour d’une passion commune.
      C’est pourquoi nous avons choisi un livre de cuisine, accessible à tous, que nous pourrons diffuser sur l’ensemble du territoire.</p>
    </div>
    <div class="alignSecondText">
      <p class="firstText">
        Ce livre sera composé de <b style="color:rgb(213, 164, 85)">recettes traditionnelles et familiales du monde</b>, pour la plupart peu connues en France, et surtout simples de réalisation.
         Nous souhaitons respecter, dans la limite du possible, les différents régimes alimentaires afin de répondre au mieux aux attentes de chacun.
          Nous allons retravailler les recettes et les adapter aux ingrédients disponibles en France.
         Pour mieux illustrer leur élaboration, nous souhaitons réaliser des vidéos de certaines recettes.
         Elles seront visibles grâce à des QR-Codes, afin d’apporter plus de précisions sur des étapes techniques de la préparation.
         Nous voulons également proposer par la suite un format E-Book, pour plaire au plus grand nombre.
      </p>
      <div class="alignThirdText">
      <p class="firstText" style="color:rgb(213, 164, 85)">
        <b>Les bénéfices de la vente des livres de recettes, au format papier ou numérique, et de l’événement, seront reversés à l’association AVE (Aide au Vietnam et à l’Enfance).</b>
      </p>
      </div>
    </div>
    <hr class="ligne">
    <div style="padding: 5em" ></div>
    <div id="content">
        <v-img
          height="500"
          width="100%"
          src="../assets/plaquette LMEC-min.png"
        ></v-img>
    </div>
    <div style="padding: 1em" ></div>
    <a href="https://www.helloasso.com/associations/aide-au-vietnam-et-a-l-enfance/collectes/soutien-au-projet-le-monde-en-cuisine-et-pre-vente-du-livre-de-recettes">
      <button class="buttonPC">
        Pré-commande
      </button>
    </a>
    <div style="padding: 1em" ></div>
    <ManageBackView/>
  </div>
</template>

<script>
// @ is an alias to /src
import ManageView from '../components/ManageView'
import ManageBackView from '../components/ManageBackView.vue'

export default {
  name: 'PresentationProjet',
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
#content {
  background: rgb(213, 164, 85);
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  align-items: stretch;
}
.textColor {
    color: rgb(78, 68, 54);
    padding-top: 10px;
    font-size: 60px;
    font-weight: bold;
    font-family: "Century Gothic";
}
.Title {
  background-color: rgb(210, 126, 54);
  position: absolute;
  padding-top: 10px;
  left: 5%;
  top: 470px;
  height: 110px;
  width: 800px;
}
.alignText {
  padding-top: 100px;
  padding-left: 15%;
  padding-right: 15%;
}
.alignSecondText {
  padding-top: 50px;
  padding-left: 15%;
  padding-right: 15%;
}
.alignThirdText {
  padding-top: 20px;
  padding-left: 15%;
  padding-right: 15%;
}
.firstText {
  font-size: 20px;
  font-family: "Century Gothic";
  text-align: center;
}
.ligne {
  height:4px;
  color:rgb(210, 126, 54);
  background-color:rgb(210, 126, 54);
  width:15%;
  margin-top: 20px !important;
  margin-left:43% !important;
  margin-right:57% !important;
}
.buttonPC {
  background-color: rgb(210, 126, 54);
  margin-top: 10px;
  color: white;
  height: 40px;
  width: 200px;
  font-size: 28px;
}
.bandeau2 {
  justify-content: space-around;
  margin-top: 40px;
}
</style>
