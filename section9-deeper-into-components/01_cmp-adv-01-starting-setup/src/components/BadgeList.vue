<template>
<!-- Pridany wrapper - BaseCard je globalne registrovana komponenta ktere funguje jako wrapper - vyuziva slot -->
  <base-card>
    <!-- A vyuziva i pojmenovatny slot header -->
    <template v-slot:header>
      <h2>Available Badges</h2>
    </template>
    <!-- Default slot -->
    <template v-slot:default>
      <ul>
        <li>
          <base-badge type="admin" caption="ADMIN"></base-badge>
        </li>
        <li>
          <base-badge type="author" caption="AUTHOR"></base-badge>
        </li>
      </ul>
    </template>
  </base-card>
</template>

<style scoped>
/* <style> */
/* Takto definovane styly neovlivnuji pouze tento soubor ale uplne vsechny - vsechny komponenty i App.vue */
/* Jsou to totiz globalne definovane styly */
/* Coz nam treba vyhovuje v App.vue jako blobalni styly aplikace ale zde v komponentach nam to nevyhovuje */
/* Proto pouzijeme <style scoped> ktere ovlivnuji pouze a jenom pouze tento soubor - ani zadne potomky */
/* Toto scoped stylovani prida ruznym html elementum nejake identifikatory (data-v-...) a toto stylovani se tyka jen tech elementu s temi danymi identifikatory */
/* Toto je mozne videt v prohlizeci ...napriklad: <header data-v-9a9f6144=""><h1 data-v-9a9f6144="">More on Vue Components</h1></header> */


/* Misto section tady a v UserInfo se pouzije BaseCard a slot */
/* section {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
} */

section h2 {
  margin: 0.5rem 0;
  color: #3a3a3a;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li {
  margin-right: 1rem;
}
</style>