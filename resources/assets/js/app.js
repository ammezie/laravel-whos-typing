
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',

    data: {
        messages: [],
        newMessage: '',
        user: '',
        typing: false
    },

    created() {
        const channel = Echo.private('chat');
            channel.listenForWhisper('typing', (e) => {
                this.user = e.user.name;
                this.typing = e.typing;
            });
    },

    methods: {
        isTyping() {
            const channel = Echo.private('chat');

            // setInterval(function() {
                channel.whisper('typing', {
                    user: Laravel.user,
                    typing: true
                });
            // }, 400);
        },

        notTyping() {
            const channel = Echo.private('chat');
            
            // setTimeout(function() {
                channel.whisper('typing', {
                    user: Laravel.user,
                    typing: false
                });
            // }, 400);
        },

        sendMessage() {
            // add new message to messages array
            this.messages.push({
                user: Laravel.user,
                message: this.newMessage
            });

            // clear input field
            this.newMessage = '';

            // persist to database
        }
    }
});
