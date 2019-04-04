new Vue({
    el: '.robohash',
    data(){
        return{
            name: 'Vamshi Krishna',
            url: 'https://robohash.org/',
            avatar: '',
            set: '',
            tutorialLink: ''
        }
    },
    computed:{
        returnRoboAvatar(){
            return this.url + this.avatar + "?set=set" + this.set ;
        }
    }
})