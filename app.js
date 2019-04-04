new Vue({
    el: '.robohash',
    data(){
        return{
            name: 'Vamshi Krishna',
            url: 'https://robohash.org/',
            avatar: '',
            set: ''
        }
    },
    computed:{
        returnRoboAvatar(){
            return this.url + this.avatar + "?set=set" + this.set ;
        }
    }
})