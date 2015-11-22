$(document).ready(function() {
  var productId = $('#content').attr('product-id');
  
  $('#tab-description img').not('[img-responsive]').addClass('img-responsive'); // Make description image responsive

  $('.product-quantity .qty_substract').click(function(){
    qty_input = $(this).siblings('.input_quantity');
    if (qty_input.val() <= 0) {
      qty_input.val(0);
    } else {
      qty_input.val(qty_input.val() - 1);
    }
  });

  $('.product-quantity .qty_add').click(function(){
    qty_input = $(this).siblings('.input_quantity');
    qty_input.val(qty_input.val() * 1 + 1);
  });
  $('#add_to_wishlist').on('click', function(){
    wishlist.add(productId);
  });
  $('.add_to_cart').on('click', function() {
    $.ajax({
      url: 'index.php?route=checkout/cart/add',
      type: 'post',
      data: $('input[name=\'product_id\'], #options input[type=\'text\'], #options input[type=\'hidden\'], #options input[type=\'radio\']:checked, #options input[type=\'checkbox\']:checked, #options select, #options textarea'),
      dataType: 'json',
      beforeSend: function() {
        $('.add_to_cart').button('loading');
      },
      complete: function() {
        $('.add_to_cart').button('reset');
      },
      success: function(json) {   
        console.log(json);
        $('.right_list').removeClass('has_error');
        $('.text-danger').remove();
  
        if (json['error']) {
          $('html, body').animate({scrollTop: $("#options").parent().offset().top}, 0);
          $.Prompt('请选择选项！', '1500');
          if (json['error']['option']) {
            for (i in json['error']['option']) {
              var element = $('#option_item_' + i + ' .right_list');
              element.addClass('has_error');
              element.append('<div class="text-danger">' + json['error']['option'][i] + '</div>');
            }
          }
          
          if (json['error']['recurring']) {
            $('select[name=\'recurring_id\']').after('<div class="text-danger">' + json['error']['recurring'] + '</div>');
          }
        }
        
        if (json['success']) {
          $.Prompt('已添加至购物车！', '500');
          $('.cart_total').show();
        }
      }
    });
  });
  
  $('.buy_now').on('click', function() {
    $.ajax({
      url: 'index.php?route=checkout/cart/add',
      type: 'post',
      data: $('input[name=\'product_id\'], #options input[type=\'text\'], #options input[type=\'hidden\'], #options input[type=\'radio\']:checked, #options input[type=\'checkbox\']:checked, #options select, #options textarea'),
      dataType: 'json',
      beforeSend: function() {
        $('.buy_now').button('loading');
      },
      complete: function() {
        $('.buy_now').button('reset');
      },
      success: function(json) {      
        $('.right_list').removeClass('has_error');
        $('.text-danger').remove();
  
        if (json['error']) {
          $('html, body').animate({scrollTop: $("#options").parent().offset().top}, 0);
          $.Prompt('请选择选项！', '1500');
          if (json['error']['option']) {
            for (i in json['error']['option']) {
              var element = $('#option_item_' + i + ' .right_list');
              element.addClass('has_error');
              element.append('<div class="text-danger">' + json['error']['option'][i] + '</div>');
            }
          }
          
          if (json['error']['recurring']) {
            $('select[name=\'recurring_id\']').after('<div class="text-danger">' + json['error']['recurring'] + '</div>');
          }
        }
        
        if (json['success']) {
          $('.cart_total').show();
          $.Prompt('跳转至购物车...', '100000');
          location = 'index.php?route=checkout/cart';
        }
      }
    });
  });
  
  $('#review').delegate('.pagination a', 'click', function(e) {
    e.preventDefault();
  
      $('#review').fadeOut('slow');
  
      $('#review').load(this.href);
  
      $('#review').fadeIn('slow');
  });
  
  $('#review').load('index.php?route=product/product/review&product_id=' + productId);
  
  $('#button-review').on('click', function() {
    $.ajax({
      url: 'index.php?route=product/product/write&product_id=' + productId,
      type: 'post',
      dataType: 'json',
      data: 'name=' + encodeURIComponent($('input[name=\'name\']').val()) + '&text=' + encodeURIComponent($('textarea[name=\'text\']').val()) + '&rating=' + encodeURIComponent($('input[name=\'rating\']:checked').val() ? $('input[name=\'rating\']:checked').val() : '') + '&captcha=' + encodeURIComponent($('input[name=\'captcha\']').val()),
      beforeSend: function() {
        $('#button-review').button('loading');
      },
      complete: function() {
        $('#button-review').button('reset');
        $('#captcha').attr('src', 'index.php?route=tool/captcha#'+new Date().getTime());
        $('input[name=\'captcha\']').val('');
      },
      success: function(json) {
        $('.alert-success, .alert-danger').remove();
        
        if (json['error']) {
          $('#review').after('<div class="alert alert-danger"><i class="fa fa-exclamation-circle"></i> ' + json['error'] + '</div>');
        }
        
        if (json['success']) {
          $('#review').after('<div class="alert alert-success"><i class="fa fa-check-circle"></i> ' + json['success'] + '</div>');
          
          $('input[name=\'name\']').val('');
          $('textarea[name=\'text\']').val('');
          $('input[name=\'rating\']:checked').prop('checked', false);
          $('input[name=\'captcha\']').val('');
        }
      }
    });
  });
});
