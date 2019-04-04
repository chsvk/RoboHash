new Vue({
    el: '.robohash',
    data(){
        return{
            name: 'Vamshi Krishna',
            url: 'https://robohash.org/',
            avatar: '',
            set: '',
            tutorialLink: 'https://www.youtube.com/watch?v=27HLLkL2pm8'
        }
    },
    computed:{
        returnRoboAvatar(){
            return this.url + this.avatar + "?set=set" + this.set ;
        }
    }
})