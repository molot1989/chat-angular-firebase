/**
 * Created by molot on 19/10/2016.
 */
function chatService($firebaseArray){

    var messagesRef = firebase.database().ref().child("messages");
    var chat = {};


    chat.getMessages = function(){
        return $firebaseArray(messagesRef);
    }

    chat.getMessagesToShow = function(){
        return $firebaseArray(messagesRef.limitToLast(15))
    }

    chat.addMessage = function(mess){
        chat.getMessages().$add(mess);
    }

    return chat;
}

angular.module('chat').factory('chatService', ['$firebaseArray', chatService])
