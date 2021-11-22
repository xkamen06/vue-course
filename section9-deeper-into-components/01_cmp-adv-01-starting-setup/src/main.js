import { createApp } from 'vue';

import App from './App.vue';
// import TheHeader from './components/TheHeader.vue';
import BaseBadge from './components/BaseBadge.vue';
import BaseCard from './components/BaseCard.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';

const app = createApp(App);

// Komponenty muzeme registrovat takto - tim jsou tyto komponenty globalni (muzeme je pouzit kdekoliv)
// Vyhodou je ze si to tu vse globalne neresime a pouzivame je a neresime kde co muzeme pouzit 
// Komponenty maji bajty kodu a takto se musi vsechny zavest na zacatku a pokud to bude obrovska aplikace tak to bude neco trvat na zacatku
// a to zbytecne - kdyz nejakou komponentu pouzivam jen na jednom miste tak je zbytecne ji registrovat globalne 
// app.component('the-header', TheHeader);
// base-badge nechame globalne - pouzivame ho na vice mistech (slo by to pridat i jako lokalni komponenta do vice komponent kde se to pouziva - to je na nas)
app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);
// user-info a badge-list dame taky lokalne
// app.component('badge-list', BadgeList);
// app.component('user-info', UserInfo);
// Muzeme vsak komponenty registrovat lokalne v komponentach kde je chceme pouzit - napriklad zde TheHeader - ktery pouzivame jen v App.vue 
// Tak jej lokalne registrujeme tam 

app.mount('#app');
