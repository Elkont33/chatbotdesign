    $('.add').on('click', add);
    $('.remove').on('click', remove);

function addt() {
  var new_chq_no = parseInt($('#total_chq').val()) + 1;
  var new_input = "<input type='text' id='new_" + new_chq_no + "'>";

  $('#new_chq').append(new_input);
  
  $('#total_chq').val(new_chq_no);
}

function removet() {
  var last_chq_no = $('#total_chq').val();

  if (last_chq_no > 1) {
    $('#new_' + last_chq_no).remove();
    $('#total_chq').val(last_chq_no - 1);
  }
}

function addq() {
  var new_chqq_no = parseInt($('#total_chqq').val()) + 1;
  var new_input = "<input placeholder='ask your question here' type='text'  id='newq_" + new_chqq_no + "'>";

  $('#new_chqq').append(new_input);
  
  $('#total_chqq').val(new_chqq_no);
}

function removeq() {
  var last_chqq_no = $('#total_chqq').val();

  if (last_chqq_no > 1) {
    $('#newq_' + last_chqq_no).remove();
    $('#total_chqq').val(last_chqq_no - 1);
  }
}
