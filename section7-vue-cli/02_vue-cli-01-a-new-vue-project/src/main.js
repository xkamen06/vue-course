import { createApp } from 'vue';
// Importujeme objekt (ktery musi byt exportovany) ze souboru App.vue - export je export default {...}
// Tim App jsme si ten objekt jen pojmenovali, neco jako import objekt z App.vue jako (pod nazvem) App
import App from './App.vue';

import FriendContact from './components/FriendContact.vue';
import NewFriend from './components/NewFriend.vue';

const app = createApp(App)

// Komponenty by meli byt alespon dvou nazvove tagy psane v kebab case
app.component('friend-contact', FriendContact);
app.component('new-friend', NewFriend);

app.mount('#app');
