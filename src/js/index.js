// We includes modules and libraries here.

import $ from 'jquery/dist/jquery.min.js';

import welcome from './modules/welcome';
import preloader from './modules/preloader';

$('.frappe').on("click", function () {
  require.ensure([], function () {
    require('./modules/dynamic');
  });
});

welcome('Hello');

window.onload = preloader;
