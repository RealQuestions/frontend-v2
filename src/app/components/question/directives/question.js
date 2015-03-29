'use strict';
define(['app'], function (app) {
    app.directive('bigBox',[function(){
        var question = function(scope, element, attrs){
            var $element = $(element);
            var height = $element.outerHeight();
            var $this = $(this);
            var diff = (isNaN(Number($this.css('paddingBottom')))?0:Number($(this).css('paddingBottom'))) + (isNaN(Number($this.css('paddingTop')))?0:Number($(this).css('paddingTop')));
            var lastHeight = 0;
            var paragraphs = 1;
            var question = "";
            $element.on('keyup',function(){
               var $this = $(this).parent();
               var $window = $(window);
               var currentScrollPos = $window.scrollTop();
               var currHeight = this.scrollHeight - diff;
               var value = $(this).val();
               if(value.split("\n").length > paragraphs){
                   //send to the reader api
                   if(value != question){
                       question = value;
                       console.log(value);
                   }
                   paragraphs = value.split("\n").length;
               }else if(value.split("\n").length<paragraphs){
                   paragraphs = value.split("\n").length;
                }

               if(currHeight > height || currHeight < lastHeight){
                    $this.height(0)
                        .height(currHeight);
                        $window.scrollTop(currentScrollPos);
                    lastHeight = currHeight;
               }
               
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
