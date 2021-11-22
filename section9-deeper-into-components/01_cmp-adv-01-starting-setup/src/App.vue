<template>
  <div>
    <!-- Zde muzeme pouzivat bud <the-header></the-header> nebo jako <TheHeader /> mebo jako <TheHeader></TheHeader> -->
    <the-header></the-header>
    <!-- <TheHeader></TheHeader> -->
    <!-- <TheHeader/> -->
    <!-- Nelze ale pouzit <the-header /> - kdyz tam je pomlcka tak to takto zkracene nejde -->
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
  </div>
</template>

<script>
// Timto zpusobem zde lokalne registrujeme komponentu - TheHeader a pote ji muzeme pouzit pouze v tomto template vyse a nikde jinde protoze 
// jsem to odebral z main.js kde se to globalne registrovalo pro cely app (app.component('the-header', TheHeader);)
// Takove komponenta nemuze byt pouzita nikde jinde ani v dcerine komponente 
import TheHeader from './components/TheHeader.vue'

// user-info a badge-list dame taky lokalne
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
export default {
  // Zde jsou lokalni komponenty 
  components: {
    // muzeme to registrovat taky jako TheHeader: TheHeader
    // Zaroven to umi moderni js taky jako TheHeader tedy: 
    // TheHeader, 
    // 'the-header': TheHeader,
    TheHeader,
    BadgeList,
    UserInfo,
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
/* Zde v Applikaci nam globalni styly vyhovuji ale v komponentach ne - proto pouzivame lokalni styly */
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>