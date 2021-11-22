<template>
  <div>
    <active-element
      :topic-title="activeTopic && activeTopic.title"
      :text="activeTopic && activeTopic.fullText"
    ></active-element>
    <!-- Jak jsem psal v KnowledgeBase - je tu problem ze pokud mame zanorene komponenty tak napriklad topics musime pass throug (posilat skrz)
    protoze je potrebujeme v KnowledgeGrid a tak je musime poslat do KnowledgeBase a odtamtud do KnowledgeGrid -->
    <!-- <knowledge-base :topics="topics" @select-topic="activateTopic"></knowledge-base> -->
    <!-- Lze to vsak udelat i jinak a tim si usetrime kod -->
    <!-- Zde muzeme v-bind (:) smazat a pouzijeme provide ve Vue objektu -->
    <!-- <knowledge-base @select-topic="activateTopic"></knowledge-base> -->

    <!-- Dale take nechceme od te nejnizsi komponenty posilat nahoru custom event jako tady - odchytavame event select-topic ktery vychazi az z KnowledgeElement -->
    <knowledge-base></knowledge-base>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: [
        {
          id: 'basics',
          title: 'The Basics',
          description: 'Core Vue basics you have to know',
          fullText:
            'Vue is a great framework and it has a couple of key concepts: Data binding, events, components and reactivity - that should tell you something!',
        },
        {
          id: 'components',
          title: 'Components',
          description:
            'Components are a core concept for building Vue UIs and apps',
          fullText:
            'With components, you can split logic (and markup) into separate building blocks and then combine those building blocks (and re-use them) to build powerful user interfaces.',
        },
      ],
      activeTopic: null,
    };
  },
  // Pouziti provide - nekde jinde je musime injectnout (pouzit)
  // Problemem je nyni to ze mame toto pole topics zde 2x - v data a v provide a to se nam samozrejme nelibi 
  // Resenim je ppouzit provide jako function ktera vraci objekt a ten objekt bude mit v sobe zase topics ale uz to budou ty z data 
  // provide: {
  //   topics: [
  //     {
  //         id: 'basics',
  //         title: 'The Basics',
  //         description: 'Core Vue basics you have to know',
  //         fullText:
  //           'Vue is a great framework and it has a couple of key concepts: Data binding, events, components and reactivity - that should tell you something!',
  //       },
  //       {
  //         id: 'components',
  //         title: 'Components',
  //         description:
  //           'Components are a core concept for building Vue UIs and apps',
  //         fullText:
  //           'With components, you can split logic (and markup) into separate building blocks and then combine those building blocks (and re-use them) to build powerful user interfaces.',
  //       },
  //   ]
  // },
  provide() {
    return {
      // Timto mame i zaruceno ze pokud se neco zmeni v data topics tak se to zmeni i v techto provide a rovnou se to promitne v komponente ktera to ma jako inject
      topics: this.topics,
      // Providneme funkci selectTopic a tim ji posleme uplne dolu do KnowledgeElement a tam se onclick provola tato funkce 
      // Respektive tento provide atribut obsahuje nasi metodu 
      selectTopic: this.activateTopic,
    };
  },
  methods: {
    activateTopic(topicId) {
      this.activeTopic = this.topics.find((topic) => topic.id === topicId);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
section {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 2rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

li {
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
  width: 15rem;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h2 {
  margin: 0.75rem 0;
  text-align: center;
}

button {
  font: inherit;
  border: 1px solid #c70053;
  background-color: #c70053;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #e24d8b;
  border-color: #e24d8b;
}
</style>