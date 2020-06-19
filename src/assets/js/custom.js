$(document).ready(function(){
$('.aftrsave').hide();
  $('#btnmSbmt').click(function(){
    setTimeout(function(){
      $('#saveModal').modal('hide');
    }, 3000);
    $('div.modal-backdrop').hide();
    $('.befsave').hide();
    $('.aftrsave').show(1000);
});
});