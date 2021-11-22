<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <!-- Abychom nemuseli v kazde nadrazene komponente zachytavat tento event a posilat ho dal tak jej tu zrusime a udelame to jinak -->
    <!-- <button @click="$emit('select-topic', id)">Learn More</button> -->
    <!-- Misto toho si sem z te hlavni aplikace App.vue providneme data nazvana selectTopic (bude to funkce) a zde ji budeme mit jako inject 
    a on click ji zavolame - ale ta funkce uz je v App.vue -->
    <button @click="selectTopic(id)">Learn More</button>
  </li>
</template>

<script>
export default {
  // Ackoliv je dobre pouzivane provide a inject tak bychom se co nejvice meli snazit drzet pouzivani props a emits (custom events) !!!!!!!!!
  // Pomoci inject a provide bychom meli resit jen pass through a ne vsechno - delaji totiz hure citelnejsi kod tyto veci 
  props: ['id', 'topicName', 'description'],
  emits: ['select-topic'],
  inject: ['selectTopic'],
};
</script>