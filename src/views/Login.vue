<template>
  <b-container>
    <b-row>
      <b-col>
        <div class="loginSection">
          <header-cmpnnt />
          <b-row>
            <alert-cmpnnt
              :alert="'Tu email o contraseña son incorrectos. Revisalos y vuelve a intentar.'"
              v-if="loginError"
            />
            <span-cmpnnt :title="'Email'" />
            <input-cmpnnt
              class="loginInput"
              :input-type="'email'"
              :phInput="'ej: usuario@mail.com'"
              :dataInput="emailGet"
              @dataInput="emailUpd"
            />
            <alert-cmpnnt :alert="'Necesitamos tu email.'" v-if="alertEmail" />
          </b-row>
          <b-row class="loginPass">
            <span-cmpnnt :title="'Contraseña'" />
            <input-cmpnnt
              class="loginInput"
              :input-type="'password'"
              :phInput="'Escribe tu contraseña'"
              :dataInput="passGet"
              @dataInput="passUpd"
            />
            <alert-cmpnnt
              :alert="'Necesitamos tu contraseña.'"
              v-if="alertPass"
            />
            <recover-cmpnnt :title="'¿Olvidaste tu contraseña?'" />
          </b-row>
          <b-row>
            <button-cmpnnt
              :comp-class="'loginBtn'"
              :title="'Ingresar a mi cuenta'"
              @btn-press="loginAction"
            />
          </b-row>
        </div>
      </b-col>
      <b-col class="createSection">
        <p-cmpnnt :title="'¿No tienes una cuenta en Wobiz?'" />
        <button-cmpnnt :comp-class="'createBtn'" :title="'Crea tu cuenta'" />
        <image-cmpnnt></image-cmpnnt>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import HeaderCmpnnt from "@/components/HeaderCmpnnt.vue";
import SpanCmpnnt from "@/components/SpanCmpnnt.vue";
import AlertCmpnnt from "@/components/AlertCmpnnt.vue";
import InputCmpnnt from "@/components/InputCmpnnt.vue";
import RecoverCmpnnt from "@/components/RecoverCmpnnt.vue";
import ButtonCmpnnt from "@/components/ButtonCmpnnt.vue";
import PCmpnnt from "@/components/PCmpnnt.vue";
import ImageCmpnnt from "@/components/ImageCmpnnt.vue";

export default {
  name: "Login",
  components: {
    HeaderCmpnnt,
    SpanCmpnnt,
    AlertCmpnnt,
    InputCmpnnt,
    RecoverCmpnnt,
    ButtonCmpnnt,
    PCmpnnt,
    ImageCmpnnt,
  },
  data() {
    return {
      alertEmail: false,
      alertPass: false,
    };
  },
  methods: {
    ...mapActions(["verifyEmail", "verifyPass", "verifyLogin"]),

    emailUpd(value) {
      this.verifyEmail(value);
    },

    passUpd(value) {
      this.verifyPass(value);
    },

    loginAction(data) {
      //eslint-disable-next-line
      const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      const emailConvert = reg.test(String(this.emailGet).toLowerCase());

      // Se verifica que los datos ingresados estén correctos.

      // Primero se verifica si los dos datos están bien, es decir, si el email es correcto y la contraseña tiene 6 o más caracteres.
      if (
        this.passGet &&
        this.passGet != "" &&
        this.passGet.length >= 6 &&
        emailConvert
      ) {
        // Si se cumple, se procedería al login, pero en este caso se muestra la alerta de login fallido y se ocultan las alertas de email y contraseña.
        this.verifyLogin(this.dataInput);
        this.alertEmail = false;
        this.alertPass = false;
      } else {
        // Si no se cumple se muestran las dos alertas.
        this.alertEmail = data;
        this.alertPass = data;
        // Luego se verifica si la contraseña es mayor, igual o menor a 6 caracteres.
        if (this.passGet.length < 6) {
          // Si no es igual o mayor a 6 caracteres se pregunta si el mail está ingresado correctamente.
          if (emailConvert && (this.emailGet || this.emailGet != "")) {
            // Si el mail está bien escrito se muestra la alerta de contraseña y se oculta la alerta del mail.
            this.alertPass = data;
            this.alertEmail = false;
          } else {
            // Si el mail está mal escrito se muestran las dos alertas.
            this.alertEmail = data;
            this.alertPass = data;
          }
        } else {
          // Si la contraseña tiene 6 o más caracteres se oculta la alerta de contraseña.
          this.alertPass = false;
        }
      }
    },
  },
  computed: {
    ...mapGetters(["userEmail", "userPassword", "dataInput", "loginAlert"]),
    emailGet() {
      return this.userEmail;
    },
    passGet() {
      return this.userPassword;
    },
    loginError() {
      if (this.loginAlert) return true;
      else return false;
    },
  },
};
</script>

<style lang="css" scoped>
.loginSection {
  position: relative;
  float: left;
  height: calc(100vh - 3px);
  width: 30vw;
  background-color: #fff;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.15);
  padding-right: 20px;
  padding-left: 20px;
}

.loginPass {
  display: inline-grid;
}

.loginPass a {
  color: #969696;
}

.createSection {
  height: calc(100vh - 3px);
  padding: 0;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
}

@media only screen and (max-width: 990px) {
  .loginSection {
    width: 100%;
  }
}
@media only screen and (max-width: 770px) {
  .loginSection {
    width: 100%;
  }
}
</style>
