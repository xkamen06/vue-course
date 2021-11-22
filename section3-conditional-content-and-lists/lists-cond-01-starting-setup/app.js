const app = Vue.createApp({
  data() {
    return { 
      enteredGoalValue: '',
      goals: [], 
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
      this.enteredGoalValue = '';
    },

    // Timto zpusobem muzeme mazat prvky seznamu - s vyuzitim eventu v-on:click a tedy @click ktery muze vyuzit ten index z toho v-for
    // Vue neprerenderuje v tom v-for cely seznam ale pouze odebere jeden element a to je super - to je optimalni 
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
  },
});

// Nepouzivat v-for a v-if na stejnem elementu - radeji vytvorit wrapper element a na nej dat v-if a na syna v-for

app.mount('#user-goals');
