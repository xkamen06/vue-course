const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      // Misto tohoto muzeme pouzit refs ktere jsme uvedli v HTML
      this.message = this.$refs.userText.value;
      // Timto: this.$refs.userText ziskame cely HTML element - vypsat si ho muzeme naslednovne
      console.dir(this.$refs.userText);
    },
  },
  // Vue app lifecycle - ruzne metody ktere se provolaji pri nejake udealosti - create, update, mounted, unmounted, ...
  // u beforeCreate a created a beforeMount() si muzeme dat v prohlizeci sources a dat si breakpoint na radek console logu (klikneme v sources 
  // pred cislo toho radku) a tim se nam zastavi renderovani strany a vidime ze v techto metodach nejsou zadne vyrenderovane elemetny 
  // - jenom to favorite meal a to proto, ze to neni app ale app2 
  beforeCreate() {
    console.log('beforeCreate()');
  },
  created() {
    console.log('created()');
  },
  beforeMount() {
    console.log('beforeMount()');
  },
  // Pokud si dame breakpoint na mounted tak vidime ze elementy uz jsou vykreslene vcetne hodnot z Vue - jsou tedy mounted - templat byl zkompilovan a byla 
  // doplnena data 
  mounted() {
    console.log('mounted()');
  },
  // Update - u before jeste nevidime zadnou zmenu, u updated uz ano 
  beforeUpdate() {
    console.log('beforeUpdate()');
  },
  updated() {
    console.log('updated()');
  },
  // Unmount
  beforeUnmount() {
    console.log('beforeUnmount()');
  },
  unmounted() {
    console.log('unmounted()');
  }
});

app.mount('#app');

// Unmount Vue app - moc se timto zpusobem nepouziva - dela se spis jinak a to bude rozebirano v budoucnu 
// app.unmount();
// Po 3s se app unmountne a odebere data z elementu a provolaji se beforeUnmount a unmouted metody
// Pizza zustava protoze je z app2 
setTimeout(function() {
  app.unmount();
}, 3000);

/************************************************************************
 VUE REACTIVITY 
 ************************************************************************/

// Vue mergne vsechny data property a vsechny metody do jednoho objektu (proto v metodach muzeme pouzivat this).
// Kazdou data property obali jako proxy (vyuziva proxies) a pokud nastane nejaka zmena teto property (prirazeni ...) 
// tak Vue vyhleda kde se tata property pouziva v sablone a tuto hodnotu upravi v realnem HTML kodu 

// ......

let message = 'Hello!';

let longMessage = message + ' World!';

console.log(longMessage);

message = 'Hello!!!!!!';

// Zde to bude porad Hello! World! - JS totiz neni defaultne reactivni
console.log(longMessage);
// Ve Vue by to bylo Hello!!!!!! World! - ma totiz vestaveny mechanismus pro reactvitu => proxies


// ........


// Ukazeme si jak udelat reactivitu ve Vanilla JS - s vyuzitim proxies

const data = {
  message: 'Hello!',
  longMessage: 'Hello! World!',
}

const handler = {
  set(target, key, value) {
    // console.log(target);
    // console.log(key);
    // console.log(value);
    if(key === 'message') {
      target.longMessage = value + ' World!';
    }
    target.mssage = value;
  }
}

// Proxy wrapuje data objekt
const proxy = new Proxy(data, handler);

// Vzdy kdyz se do property objektu ktery je zapouzdreny v Proxy neco setne tak se provola ta metoda set() handleru 
proxy.message = 'Hello!!!!!';

// Zde uvidime ze jsme pomoci Proxy dosahli reactivity - zmenili jsme message ale zmeni se i longMessage
console.log(proxy.longMessage);

// ======> takto to Vue dela na pozadi!!!!! + tedy najde kde ta property je pouzita v HTML a nahradi hodnotu za novou hodnotu 



/************************************************************************
 VUE MULTIPLE APPS
 ************************************************************************/

const app2 = Vue.createApp({
  data() {
    return {
      favoriteMeal: 'Pizza',
    };
  }
});

app2.mount('#app2');

// Nelze pomoci jedine app ridit vice HTML casti - mountnute to je pouze na jednu vzdycky



/************************************************************************
 VUE TEMPLATES
 ************************************************************************/

// Tim ze nejakou app mountneme na nejakou cast HTML tak se z te casti stava TEMPLATE te dane Vue app!!!!!!!


// Zaroven vsak muzeme vytvorit template primo uvnitr Vue app 

const app3 = Vue.createApp({
  template: `
    <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal: 'Hamburger',
    };
  }
});

// I kdyz mame template promi v app tak stejne to musime nekam mountnout abychom vedeli kde se to ma vykreslit
app3.mount('#app3');


// Nepouzivat tyto string-based templates v apps - lepsi to je v HTML primo - zvyrazneni syntaxe atd ...