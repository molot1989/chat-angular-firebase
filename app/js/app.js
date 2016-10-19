/**
 * Created by molot on 11/10/2016.
 */

var config = {
    apiKey: "AIzaSyA8hDQ0H_1LklUL698xv7oILoMlDiXUKnc",
    authDomain: "chatapp-49529.firebaseapp.com",
    databaseURL: "https://chatapp-49529.firebaseio.com",
    storageBucket: "chatapp-49529.appspot.com",
    messagingSenderId: "333949720828"
};
firebase.initializeApp(config);

angular.module('chat', ['firebase']);