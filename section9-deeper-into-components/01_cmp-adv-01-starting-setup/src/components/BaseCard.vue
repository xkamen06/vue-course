<template>
<!-- Timto zpusobem jsme vytvorili novou komponentu jako wrapper -->
<!-- Tim budou mit vsechny komponente wrapnute ve sloty napriklad stejnou css tridu atd. (pokud bych tu pridel css tridu) -->
  <div>
    <!-- <slot></slot> -->
    <!-- Muzeme si vzykouset dat 2x slot pod sebe - pak se tam wrapnuty obsah touto komponentu (base-card) zdvoji -->
    <!-- <slot></slot> -->

    <!-- Ted tu mame 1 slot ale nekdy chceme tu mit vice rozdilnych slotu ve wrapperu - k tomu se pouzivaji pojmenovane sloty -->
    <!-- Napriklad slot pro header a pro content -->
    <!-- Namusime pojmenovat vsechny sloty - ten jediny nepojmenovany bude defaultni slot -->
    <header>
      <slot name="header"></slot>
    </header>
    <slot></slot>
  </div>
</template>

<script>

export default {
  
}
</script>


<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>