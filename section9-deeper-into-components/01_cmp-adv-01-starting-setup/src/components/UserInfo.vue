<template>
  <!-- Zde i v Badge list mame <section> a zaroven take stylovani k tomu section -->
  <!-- Misto toho muzeme vytvorit komponentu BaseCard ktera bude obsahovat v template jenom toto section (zmenili jsme to na div) a k tomu
  stylovani a pro vyplneni obsahu v section (div) se pouzije slot -->
  <!-- Takto pouzijeme to base-card ktere jsme si globalne registrovali v main.js -->
  <base-card>
    <!-- <header>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </header>
    <p>{{ infoText }}</p> -->
    <!-- Vse fungovalo jak je zakomentovane vyse -->
    <!-- Ale ja chci mit 2 sloty (header a content)v tom wrapperu base-card
     - a tak jsem ty sloty pojmenoval a ted musime rict co ma jit do header slotu a co do druheho -->
    <!-- K tomu slouzi template a v-slot:jmeno_slotu -->
    <!-- Template se pouziva jako container protoze to nic nerenderuje na stranku -->
    <template v-slot:header>
      <!-- Npariklad fullName atribut neni dostupny v BaseCard ale pouze tady ...BaseCard to pouze vykresluje -->
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </template>
    <!-- Tento p pujde do defaultniho nepojmenovaneho slotu -->
    <!-- Muzeme to nechat takto nebo to muzeme dat taky do template a dat v-slot:default -->
    <p>{{ infoText }}</p>
  </base-card>
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>

<style scoped>
/* section {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
} */

/* Toto section header nema zadny vliv na <header> uvnitr zde pouziteho wrapperu pomoci slotu <base-badge> */
/* Proto musime section header dat do BaseCard componenty - tedy wrapperu */
/* section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
} */
</style>