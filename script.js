//$(document).ready(function() {
  var fs = require('fs');
  const wd_homedir = require('os').homedir();
  var wd_dir = wd_homedir + '/WebDesk-top/';
  var wd_url_string = window.location.href;
  var wd_url = new URL(wd_url_string);
  var wd_app = wd_url.searchParams.get("wd_app");
  var wd_sec = wd_url.searchParams.get("wd_sec");
  require(wd_dir + 'Apps/' + wd_app + '/' + wd_sec);
//});