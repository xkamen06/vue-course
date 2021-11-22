const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com',
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com',
                },
            ],
        };
    },
    // S tim jak to ted mame muzeme udelat data property isDetailsVisible a zaroven metodu toggleDetails() a ta bude nastavovat tuto property na true a false 
    // Potom muzeme to dane ul s detailama mit jako v-if isDetailsVisible a button mi :click a volani te metody toggleDetails()
    // Jenze to je na prd protoze jedno tlacitko nam bude zobrazovat a skryvat vsechny detaily vsech pratel 

    // Dalsi moznost je pouzit pri :click friend.id a to poslal do event handleru jenze zase musime mit dve property isDetailAVisible a isDetailBVisible 
    // Kdyz budeme mit vic pratel tak musime mit i vice property - to neni dobre :(
    // ===> toto se resi komponentami 
});

// Takto se vytvori komponenta - musim jako prvni parametr uvest nazev noveho custom html tagu a druhy parametr kterym je config objekt 
// Komponenta muze mit v config objektu vlastni data nebo methods 
// Komponenta potrebuje taky svuj template - hlavni app ma jako template sekci ktera ma id app - tedy sekci ke ktere je mountla 
// Komponenta tedy musi byt taky propojena s html - k tomu se pouziva template 
app.component('friend-contact', {
    // backthicks - multiline string ` ` 
    template: `
        <li>
            <h2>{{ friend.name }}</h2>
            <button @click="toggleDetails()">
                {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
            </button>
            <ul v-if="detailsAreVisible">
                <li><strong>Phone:</strong> {{ friend.phone }}</li>
                <li><strong>Email:</strong> {{ friend.email }}</li>
            </ul>
        </li>`,
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '01234 5678 991',
                email: 'manuel@localhost.com',
            },
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
    },
});
// Takto se vytvori nova mini-app ktera je ale pripojena k puvodni app - spada pod ni 

app.mount('#app');

// Samostatne app mezi sebou bemohou komunikovat ani si predavat data ani jedna app nemuze reagovat na udalost v jine app 
// K tomuto slouzi komponenty ktere spolu komunkovat mohou 

// Pokud tvorime jednu nezavislou cast kterou pote chceme treba vlozit do stranky tak pouzijeme app ..potom ve strance muzeme mit vice nazavislich app 

// Pokud tvorime treba Single Page App tak vytvorime jednu app a pod ni nekolik komunikujicich komponent