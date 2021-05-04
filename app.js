const app = Vue.createApp({
    //template: '<h1>Hello {{firstName}}</h1>',
    data () {
        return {
            firstName: "Ayush",
            lastName: "Sri",
            email: "ayush@akstechies.com",
            picture: "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
            gender: "male"
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api/')

            const { results } = await res.json()
            console.log(results);

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.picture = results[0].picture.medium
            this.gender = results[0].gender
        }
    }
})

app.mount("#app")