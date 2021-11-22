const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastname: '',
      // Nesmi se jmenovat stejne computed property jako data property
      // fullname: '',
    };
  },
  methods: {
    // setName(event, lastName) {
    //   this.name = event.target.value;
    // },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
      this.lastname = '';
    },
    outputFullname() {
      console.log('outputFullname');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Kamensky'; 
    }
  },
  computed: {
    // Pouivaji se jako properties a proto se to nejmenuje inputFullname ale fullname
    // U computed properties Vue projde jake tam jsou zavislosti a navratovou hodnotu si da do cache a vola danou metodu jen kdyz se zmeni zavyslost
    // jinak vraci hodnotu z cache 
    // Nesmime mit stejny nazev data property a computed property
    
    fullname() {
      console.log('fullname');
      if (this.name === '' || this.lastname === '') {
        return '';
      }
      return this.name + ' ' + this.lastname; 
    }
  },
  watch: {
    // Watchers se jmenuji jako data property (treba name) a pokud se zmeni data property (jakkoliv a kdekoliv) tak se provola watcher
    // Watchers se nikde nevolaji a proto nevraci hodnotu - pouze vyjkonaji kod
    // Pro fullname ktere se sklada z name a lastname potrebujeme dva watchery (jeden pro kazdou data property) a to je moc kody ...lepsi je pouzit computed prop.
    // name(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + ' ' + this.lastname;
    //   }
    // },
    // lastname(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = this.name + ' ' + value;
    //   }
    // } 


    // Ale treba pro counter je lepsi pouzit watchera v tomto pripade
    counter() {
      if(this.counter > 50) {
        this.counter = 0;
      }
    }

    // SUMA SUMARUM ! - kdyz chceme cekat na zmenu nejake data property a podle toho nejak reagovat tak jsou lepsi watchers
    //                - kdyz chceme nejak dynamicky vypisovat a dopocitavat nejakou data property, tak jsou lepsi computed properties


    // methods - eventy a data binding a interpolace kdyz chceme aby se ta metoda volala pokazde kdyz se na strance cokoliv zmeni 
    // computed - data binding kdyz chceme aby se to provolalo jen kdyz se zmeni neco na cem je to zavisle a taky pokud nejaka property zavisi na jinych prop.
    // watch - nevolaji se, deje se automaticky, kdyz cekame na nejakou zmenu nebo interakci
  }
});

app.mount('#events');
