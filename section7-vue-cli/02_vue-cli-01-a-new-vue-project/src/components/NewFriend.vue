<template>
<!-- Davame zde prevent protoze nechceme aby se spustil normalni submit ale jen nas (aby se neudelal reload) -->
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="enteredName">
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="enteredPhone">
    </div>
    <div>
      <label>Email</label>
      <input type="email" v-model="enteredEmail">
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
// Tato komponenta nepotrebuje zadne props - jen bude vysilat eventy o nove pridanem friendovi
export default {
  emits: [
    'add-contact',
  ],
  data() {
    return {
      enteredName: '',
      enteredPhone: '',
      enteredEmail: '',
    }
  },
  methods: {
    submitData () { 
      // Muzeme takto emitnout 3 argumenty a nebo to groupnout jako jeden objekt a ten poslat { }
      this.$emit('add-contact', this.enteredName, this.enteredPhone, this.enteredEmail);
    },

  },
}
</script>
