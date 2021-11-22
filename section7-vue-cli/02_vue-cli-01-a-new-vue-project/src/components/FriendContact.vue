<template>
  <li>
    <!-- <h2>{{ name }} {{ friendIsFavorite ? '(Favorite)' : '' }}</h2> -->
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <!-- <button @click="deleteFriend">Delete</button> -->
    <!-- Muzeme to emitnout rovnou z v-on:click neboli z @click -->
    <button @click="$emit('delete', id)">Delete</button>
  </li>

<!-- 
// NECO NAVIC 
//  muzeme mit takovouto komponentu: 
// <template>  
  // <button>
    // <slot></slot>
  // </button>
// </template>
// <script>export default {}</script>

// a muzeme ji pouzivat takto 
// <base-button type="submit" @click="doSomething">Click me</base-button>
// Pritom tato komponenta nema zadne prop type a zadny event click ale tomuto se rika props fallthrough a tyto props 
// a eventy se delguji na hlavni komponentu - tady button 


// DRUHY PRIPAD 
// mame takovouto komponentu: 
// <template>
  // <h2>{‌{ firstname }} {‌{ lastname }}</h2>
// </teemplate>
// <script>
  // export default {
    // props: ['firstname', 'lastname']
  // }
// </script>

// a muzeme ji pouzit takto 
// <template>
  // <user-data v-bind="person"></user-data>
// </template>
// v tom v-bind musi byt JS objekt ktery ma atributy firsname a lastname a pak to funguje 
 -->
</template>

<script>
export default {
  // Takto vyuzijeme props ktere jsou predany teto komponente - v App.vue
  // Nesmime mit stejne nazvy v data v props a v computed ...by to to tlouklo 
  // props: [
  //   'name',
  //   'phoneNumber',
  //   'emailAddress',
  //   'isFavorite',
  // ],
  // Abychom mohli props validovat tak props muze byt i objekt 
  props: {
    // Aby se na zadnou props pri pouziti teto komponenty nezapomnelo a abychom meli dane presne typy 
    // name: String,
    // prop muze byt take objekt abychom mohli uvest podrobnejsi validaci 
    // Typy props jsou nasledujici: String, Number, Boolean, Array, Object, Date, Function, Symbol ale take jine vestavene nebo custom constructory
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      // Muzeme pridat funkci validatoru  - musi vracet boolean
      // Meli jsme to jako typ String - od te doby co je to Boolean tak tento validator muzeme zakomentovat a nechat jej jen pro nazornost
      // validator: function(value) {
      //     return value === '0' || value === '1';
      // }
    },
  },
  // V emits poli rikame jake eventy muze tato komponenta vyvolat (emit) - neni to povinne ale je dobre to delat 
  // - pomuze to developerum lepe pochopit nasi komponentu
  // emits: [
  //   'toggle-favorite',
  // ],
  // Muzeme znovu pouzit objekt a mit detailnejsi konfiguraci 
  // Jako parametry funkce ktera predstavuje nas event muzeme uvest data ktera event predava - zde id 
  // Muzeme take provest validaci techto dat/atributu - treba jestli jsou v nejakem rozsahu atd atd ....
  emits: {
    'toggle-favorite' : function (id) {
      if (id) {
        return true;
      }
      console.log('id missing');
      return false;
    },
    'delete' : function (id) {
      if (id) {
        return true;
      }
      console.log('id missing');
      return false;
    },
  },
  data() {
    return {
      detailsAreVisible: false,
      // friendIsFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      return (this.detailsAreVisible = !this.detailsAreVisible);
    },
    toggleFavorite() {
      // Toto nelze - props nesmi byt upravovany
      // Muzeme vsak dat vedet parentovi (v tomto pripade App.vue ze ta data chceme zmenit a on je zmeni a posle nam je upravena) - to se naucime pozdeji 
      // if(this.isFavorite === "1") {
      //     this.isFavorite = "0";
      // } else {
      //     this.isFavorite = "1";
      // }
      // Nebo si ulozime prop do nejake data property (viz friendIsFavorite) a tu pak muzeme menit 
      
      
      // if(this.friendIsFavorite === "1") {
      //     this.friendIsFavorite = "0";
      // } else {
      //     this.friendIsFavorite = "1";
      // }
      // Uz to mame jako boolean 

      // this.friendIsFavorite = ! this.friendIsFavorite
      // Nyni uz nebudeme menit jestli je friend favorite nebo neni jenom uvnitr teto komponenty ale chceme to dat vedet i hlavnimu App ..komunikace 
      // child => parent 
      // k tomu emit-neme custom event 
      // Tento event budeme naslouchat z parent componenty/applikace v tomto pripade 
      // Muzeme predat kolik dat checeme - jako zde id (jen oddelujeme carkou)
      this.$emit('toggle-favorite', this.id);

      // firendIsFavorite rusime kvuli tomu aby se nam zmena promenne po eventu propsala i v dcerine komponente - s tou nasi mezipromennou by to neslo 
    },
  },
};

</script>