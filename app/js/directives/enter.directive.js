/**
 * Created by molot on 19/10/2016.
 */
function enterClicker(){
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function ( event ) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.enterClicker);
                });

                event.preventDefault();
            }
        });
    };
}

angular.module('chat')
    .directive('enterClicker', [enterClicker])
