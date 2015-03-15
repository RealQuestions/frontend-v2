'use strict';
define(['app'], function (app) {
    app.directive('bigBox',[function(){
        var question = function(scope, element, attrs){
            var $element = $(element);
            var height = $element.outerHeight();
            var $this = $(this);
            var diff = (isNaN(Number($this.css('paddingBottom')))?0:Number($(this).css('paddingBottom'))) + (isNaN(Number($this.css('paddingTop')))?0:Number($(this).css('paddingTop')));
            $element.on('keyup',function(){
               var $this = $(this).parent();
               var $window = $(window);
               var currentScrollPos = $window.scrollTop();
               var currHeight = this.scrollHeight - diff;
               console.log(currHeight);
               console.log(Number(diff));
               if(currHeight > height){
                    $this.height(0)
                        .height(currHeight);
                        //$('.bigbox').css('height',currHeight);
                        $window.scrollTop(currentScrollPos);
               }
               console.log(currHeight);
            });
        }
        return {
            'restrict':'CA',
            link: question
        }
    }]);

    app.directive('projectFactors',function(){
       return {
        'restrict': 'CA',
        scope: {
            data: '='
        },
        templateUrl: 'app/components/project/directives/views/factors.html' 
       }
    });
    app.directive('projectConcerns',function(){
       return {
        'restrict': 'CA',
        scope: {
            data: '=',
            tags: '='
        },
        templateUrl: 'app/components/project/directives/views/concerns.html' 
       }
    });
    app.directive('projectQuickview',function(){
        return{
            'restrict': 'CA',
            scope:{
                data: '='
            },
            templateUrl: 'app/components/project/directives/views/quickview.html'
        }
    });
});
