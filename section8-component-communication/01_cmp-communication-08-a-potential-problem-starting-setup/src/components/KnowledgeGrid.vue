<template>
  <ul>
    <!-- <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
      @select-topic="$emit('select-topic', $event)"
    ></knowledge-element> -->

    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  // zde jiz nepouzijeme props ale inject abychom mohli pouziy topics ktere jsme v App.vue providenuli
  // props: ['topics'],
  // Rekneme co v teto komponente pouzijeme z dat ktera poskytuje (provide) nejaky RODIC (jde to vzdycky dolu)
  inject: ['topics'],
  // Muzeme odebrat emits a taky zachytavani toho eventu a posilani dal v html 
  // emits: ['select-topic']
};
</script>