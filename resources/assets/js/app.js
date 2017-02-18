
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
        typing: false
    },

    created() {
        const channel = Echo.private('chat');
            channel.listenForWhisper('typing', (e) => {
               this.typing = e.typing;
            });
    },

    methods: {
        isTyping() {
            // check if a user is typing
            const channel = Echo.private('chat');
            // channel.listen('pusher:subscription_succeeded', (e) => {
                channel.whisper('typing', {
                    typing: true
                });
            // });
        },

        notTyping() {
            // check if a user is typing
            const channel = Echo.private('chat');
            // channel.listen('pusher:subscription_succeeded', (e) => {
                channel.whisper('typing', {
                    typing: false
                });
            // });
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
