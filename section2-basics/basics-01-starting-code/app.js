const app = Vue.createApp({
    // Jde to i takto ale v modernim JS se to dela jak je to nize 
    // data: function () {
    //     return {
    //         courseGoal: 'Finish the course an learn Vue!'
    //     }
    // }
    data() {
        return {
            // courseGoal: 'Finish the course an learn Vue!',
            courseGoalA: 'Finish the course an learn Vue!',
            courseGoalB: 'Master Vue and build amazing app!',
            // courseGoalB: '<h2>Master Vue and build amazing app!</h2>',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal: function () {
            const randomNumber = Math.random();    
            if(randomNumber < 0.5) {
                return this.courseGoalA;
                // return 'Learn Vue!';
            } else {
                return this.courseGoalB;
                // return 'Master Vue!';
            }
        }
    }
});
app.mount('#user-goal');