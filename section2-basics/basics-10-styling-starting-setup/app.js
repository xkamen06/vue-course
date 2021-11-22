const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
            boxDSelected: false,
            boxESelected: false,
        }
    }, 
    methods: {
        boxSelected(box) {
            if(box === 'A') {
                this.boxASelected = !this.boxASelected;
            } else if(box === 'B') {
                this.boxBSelected = !this.boxBSelected;
            } else if(box === 'C') {
                this.boxCSelected = !this.boxCSelected;
            }  else if(box === 'D') {
                this.boxDSelected = !this.boxDSelected;
            } else if(box === 'E') {
                this.boxESelected = !this.boxESelected;
            }
        }   
    },
    computed: {
        boxEClasses() {
            // Pomoci computed properties sem muzeme dat treba vic logiky
            return { active: this.boxESelected };
        }
    }
});

app.mount('#styling');