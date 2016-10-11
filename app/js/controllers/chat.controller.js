/**
 * Created by molot on 11/10/2016.
 */

function chatCtrl() {
    var vm = this;
    vm.test = 'blya'
}


angular.module('chat')
    .controller('chatCtrl',[chatCtrl])
