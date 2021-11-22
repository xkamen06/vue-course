const app = Vue.createApp({
  data() {
    return {
      counter: 5,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add: function (num) {
      this.counter += num;
    },

    // Muze to byt i takto zjednodusene - stejne jako data() {} a data: function() {}
    reduce() {
      this.counter--;
    },

    setName(event) {
      this.name = event.target.value;
    },

    setNameWithLastname(event, lastname) {
      this.name = event.target.value + ' ' + lastname;
    },

    submitForm() {
      alert('Submitted!');
    },

    confirmName() {
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
