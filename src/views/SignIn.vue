<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="circle">
        <ion-grid class="py-60 ion-justify-content-center">
          <ion-row>
            <ion-col>
              <div class="sign__input">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"/>
                </svg>
                <input type="text" placeholder="Логин">
              </div>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <div class="sign__input">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"/>
                </svg>
                <input type="password" placeholder="Пароль">
              </div>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <div class="sign__submit">
                <button>
                  Вход
                </button>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {IonPage, IonGrid, IonContent, IonRow, IonCol} from '@ionic/vue';
import {} from 'ionicons/icons';

export default {
  name: "SignIn",
  components: {IonPage, IonGrid, IonContent, IonRow, IonCol},
  setup() {
    return {}
  }
}
</script>
<style scoped>
ion-grid::before {
  content: '';
  position: absolute;
  top: -200px;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#20b2aa, #C1FCF6);
  clip-path: circle(60% at right 50%);
}

.circle::before {
  content: '';
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#20b2aa, #C1FCF6);
  clip-path: circle(37% at left 50%);
}
</style>