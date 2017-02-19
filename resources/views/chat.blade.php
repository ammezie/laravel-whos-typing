@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Chats</div>

                <div class="panel-body">
                    <ul>
                        <li v-for="message in messages">
                            @{{ message.message }}
                        </li>
                    </ul>
                    <div>
                        <div class="input-group">
                            <input type="text" name="message" class="form-control" placeholder="Type your message here..." v-model="newMessage" @keydown="isTyping" @keyup="notTyping" @keyup.enter="sendMessage">
                            <span class="input-group-btn">
                                <button class="btn btn-primary" @click="sendMessage">
                                    Send
                                </button>
                            </span>
                        </div>
                        <span v-show="typing" class="help-block" style="font-style: italic;">
                            @{{ user }} is typing...
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
