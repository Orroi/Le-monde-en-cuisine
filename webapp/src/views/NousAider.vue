<template>
  <div class="NousAider">
    <ManageView/>
    <div>
        <v-img
          height="400"
          width="100%"
          src="../assets/photoPlats/Cilbir 3.png"
        ></v-img>
    </div>
    <div class="Title">
        <h1 class="textColor">Nous Aider</h1>
    </div>
        <div id="content1">
      <div class="box1" >
        <div class="titleInBox">
            <b>FAIRE UN DON</b>
            <p class="textInBox">
                Publication du livre,<br> organisation de l’événement,<br> vos dons nous permettent<br> de faire avancer notre projet,<br>
                 afin de collecter un maximum<br> de bénéfices pour l’association AVE.
            </p>
            <a style="color: rgb(210, 126, 54)" href="https://www.helloasso.com/associations/aide-au-vietnam-et-a-l-enfance/collectes/soutien-au-projet-le-monde-en-cuisine-et-pre-vente-du-livre-de-recettes">
              <u class="titleBottomBox">
                Je fais un don
              </u>
            </a>
        </div>
      </div>
      <div class="box1" >
        <div class="titleInBox">
          <b>DEVENIR PARTENAIRE</b>
          <p class="textInBox">
              Professionnel ou particulier,<br> vous souhaitez nous <br>apporter votre soutien matériel,<br> financier ou autre.<br> 
              Nous serions ravies de vous<br> compter parmi nos partenaires !
          </p>
            <a style="color: rgb(210, 126, 54)" href="https://drive.google.com/file/d/1nHnvyeZTRz0ipnVeAwwFJ1iYcYiG7oV3/view?usp=drivesdk">
              <u class="titleBottomBox">
                Voir notre dossier de <br>partenariat
              </u>
            </a>
        </div>
      </div>
      <div class="box1" >
        <div class="titleInBox">
          <b>NOUS CONTACTER</b>
          <p class="textInBox">
            Une demande d’informations<br> ou une question,<br> un partenariat ou un soutien<br> en tant qu’entreprise ou fondation ?<br>
            Nous vous invitons à <br>nous contacter à l’adresse suivante:
          </p>
            <a style="color: rgb(210, 126, 54)">
              <u class="titleBottomBox">
                lemondeencuisine.mpi<br>@gmail.com
              </u>
            </a>
        </div>
      </div>
      <div class="box1" >
        <div class="titleInBox">
          <b>NOUS SUIVRE</b>
          <div class="posLogo1">
            <a href="https://instagram.com/lemonde.encuisine?igshid=6cbu01r3fbh6">
              <br>
              <img src="../assets/logoReso/insta logo.png" width="50" height="50">
            </a>
            <a href="https://www.facebook.com/lemondeencuisinempi/">
              <img src="../assets/logoReso/logo-fb.png" width="50" height="50">
            </a>
            <a href="https://www.linkedin.com/company/lemonde-encuisine">
              <img src="../assets/logoReso/linkedin logo.png" width="50" height="50">
            </a>
          </div>
        </div>
      </div>
    <div style="padding: 1em" ></div>
      <hr class="ligneDeFin">
    <div style="padding: 1em" ></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ManageView from '../components/ManageView'

export default {
  name: 'NousAider',
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
#content1 {
  padding-top: 150px;
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  align-items: stretch;
}
.titleInBox {
  color: rgb(78, 68, 54);
  text-align: center;
  font-size: 28px;
  font-family: "Century Gothic";
}
.textInBox {
  text-align: left;
  font-size: 20px;
  font-family: "Century Gothic";
}
.box1 {
  flex-grow: 1;
  display: flex;
  justify-content: space-evenly;
  border: 10px solid rgba(0,0,0,.0);
}
.posLogo1 {
  justify-content: space-evenly;
}
.titelBottomBox {
  font-size: 20px;
  position: center;
  font-family: "Century Gothic";

}
.ligneDeFin {
  height:4px;
  color:rgb(210, 126, 54);
  background-color:rgb(210, 126, 54);
  width:15%;
  margin-top: 20px !important;
  margin-left:43% !important;
  margin-right:57% !important;
}
</style>