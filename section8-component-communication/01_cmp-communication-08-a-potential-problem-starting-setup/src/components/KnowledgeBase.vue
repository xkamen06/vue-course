<template>
  <section>
    <h2>Select a Topic</h2>
    <!-- Ze vidime problem toho kdyz mame spoustu zanorenych komponent - tato komponenta jen zachyti event a posila ho dal - ale musi se to udelat -->
    <!-- To same topics - take se jen posilaji dal -->
    <!-- <knowledge-grid :topics="topics" @select-topic="$emit('select-topic', $event)"></knowledge-grid> -->
    <!-- Zde muzeme topics take dat pryc protoze jsou provide a zaroven muzeme dat pryc i ten custom event select-topic -->
    <knowledge-grid></knowledge-grid>
  </section>
</template>

<script>
export default {
  // props: ['topics'],
  // emits: ['select-topic'],
};
</script>