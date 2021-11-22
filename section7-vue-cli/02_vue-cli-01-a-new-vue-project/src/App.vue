<template>
  <section>
    <header>
      <h1>My friends</h1>
    </header>
    <new-friend
      @add-contact="addContact"
    ></new-friend>
    <ul>
      <!-- Props muzeme bindovat jako jakykoliv jiny HTML atribut (v-bind: nebo jen :) -->
      <!-- Tim v tomto pripade predame true a ne string true  -->
      <!-- <friend-contact
        name="Manuel Lorenz"
        phone-number="0123 45678 90"
        email-address="manuel@localhost.com"
        :is-favorite="true"
      ></friend-contact> -->
      <!-- Zde jiz muzeme is-favorite vynechat protoze to neni povinny atribut - viz definice props ve FriendContact.vue -->
      <!-- <friend-contact
        name="Julie Jones"
        phone-number="0999 45678 90"
        email-address="julie@localhost.com"
      ></friend-contact> -->


      <!-- PRO VLOZENI KOMPONENT MUZEME POUZIT V-FOR -->
      <!-- A TO PRIMO JAKO SOUCAST KOMPONENTY!!!  -->
      <!-- Stejne jde pouzit i v-if -->
      <!-- Pozor u v-for musi byt samozrejme key -->
      <!-- key i vsechny ostatni atributy musi byt predany pomoci v-bind (nebo :) -->
      <!-- Takto se predavaji dynamicke props ..nebo je statycky napiseme jako stringy jak to bylo vyse -->
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favorite="friend.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
        @delete="deleteContact"
      ></friend-contact>
      <!-- Timto @toogle-favorite="toggleFavoriteStatus" naslouchame eventu toggle-favorite ktery jsme emitnuli v child komponente 
      a jakmile tento event nastane tak provolame metodu toggleFavoriteStatus -->
    </ul>
  </section>
</template>

<script>
// Tenhle objekt je defaultni export tohoto souboru - pro import nekde jinde, v tomto pripade v main.js
// Muzeme si objekt ulozit i do nejake promenne a pak exportovat tu promennou
export default {
  data() {
    return {
      friends: [
        {
          // Abychom napriklad mohli posilat do DB jeslti friend is favorite tak jsme siFavorite presunuli sem do App z komponenty FriendContact 
          // A chceme aby kdyby nekdo kliknul v komponente na Favorite aby se ta hodnota propsala i sem (abychom to mohli treba odeslat do DB)
          // A to je komunikace child => parent
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
          isFavorite: true,
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0999 45678 90",
          email: "julie@localhost.com",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    // Metoda ktera se vola pri vyvolani (emit) custom eventu toggle-favorite z komponenty FriendContact
    // firendId je predavano pri eventu - viz FriendContact
    toggleFavoriteStatus(friendId) {
        const friend = this.friends.find(friend => friend.id === friendId);
        // Tim ze friendovi zmenime tento atribut a tento atribut je bindovany (:) do child komponenty jako props tak i tam se ta zmena projevi
        // Kvuli tomu ale musime prestat pouzivat tu mezipromennou friendIsFavorite a musime v te dcerine komponente pouzivat rovnou isFavorite
        friend.isFavorite = !friend.isFavorite;
    },
    addContact(name, phone, email) {
      const newFriendContact = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
        isFavorite: false
      };

      this.friends.push(newFriendContact);
    }, 
    deleteContact(friendId) {
      this.friends = this.friends.filter(friend => friend.id !== friendId);
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
