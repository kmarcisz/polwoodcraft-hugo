$(document).ready(function() {
  var em = "852doowlop".split("").reverse().join("") + "@" + "yahoo." + "com";
  $('.e-mail').html('<a href="mailto:' + em + '">' + em + '</a>');
})
