'use strict';
var bwr = '/bower_components';
require.config({
  baseUrl: './app/',
  paths: {
    'angularAMD': bwr+'/angularAMD/angularAMD',
    'modernizr': bwr+'/modernizr/modernizr',
    'jquery': bwr+'/jquery/dist/jquery',
    'angular': bwr+'/angular/angular',
    'ngAnimate': bwr+'/angular-animate/angular-animate',
    'ngCookies': bwr+'/angular-cookies/angular-cookies',
    'ngTouch': bwr+'/angular-touch/angular-touch',
    'ngSanitize': bwr+'/angular-sanitize/angular-sanitize',
    'lodash': bwr+'/lodash/dist/lodash.compat',
    'restangular': bwr+'/restangular/dist/restangular',
    'uiRouter': bwr+'/angular-ui-router/release/angular-ui-router',
    'ngRoute': bwr+'/angular-route/angular-route',
    'nvd3': bwr+'/nvd3/nv.d3',
    'ngChart': bwr+'/angular-nvd3/dist/angular-nvd3',
    'd3': bwr+'/d3/d3',
    'ngload': bwr+'/angularAMD/ngload',
    'css': bwr+'/require-css/css',
    'foundation': bwr+'/foundation/js/foundation'
  },
  shim: {
    'angular': {
      'exports': 'angular'
    },
    'foundation':['jquery'],
    'ngChart':['angular','d3','nvd3'],
    'nvd3': ['d3'],
    'angularAMD':['angular'],
    'ngRoute': ['angular'],
    'ngAnimate': ['angular'],
    'ngCookies': ['angular'],
    'ngTouch': ['angular'],
    'ngSanitize': ['angular'],
    'ngload': ['angularAMD'],
    'angular-resource': ['angular'],
    'restangular': {
      deps: ['lodash', 'angular']
    },
    'uiRouter': ['angular']
  },
  priority: [
    "angular"
  ],
  waitSeconds: 90,
  deps: ['app']
});


