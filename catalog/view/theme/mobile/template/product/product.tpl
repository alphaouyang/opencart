<?php echo $header; ?>
  <div class="row">
    <div id="content" class="col-sm-12 product-details-page" product-id="<?php echo $product_id; ?>">
      <!-- Slide start -->
      <div class="row widget first-widget">
      <?php echo $slides; ?>
      </div>
      <!-- Slide end -->
      <!-- Price start -->
      <div class="row widget">
        <div class="col-xs-12">
          <span class="product_name"><?php echo $heading_title; ?></span>
          <?php if (! $product_models) { ?>
          <div class="price">
            <?php if (!$special) { ?>  
            <span><?php echo $price; ?></span>
            <?php } else { ?>  
            <span><?php echo $special; ?></span>
            <span class="old_price"><?php echo $price; ?></span>
            <?php } ?>
          </div>
          <?php } ?>
        </div>      
      </div>
      <!-- Price end -->
      
      <!-- Quantity start -->
      <div class="row widget product_options">
        <div class="col-xs-12">
          <div id="options">
          <?php if (! $product_models) { ?>
            <div class="option_item">
              <div class="left_title">
                <span class="product_name"><?php echo $entry_qty; ?></span>
              </div>
              <div class="right_list">
                <div class="product-quantity spin">
                  <input type="button" class="qty_substract" value="-">
                  <input type="text" name="quantity" value="1" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" size="2" class="input_quantity">
                  <input type="button" class="qty_add" value="+">
                </div>
                <input type="hidden" name="product_id" value="<?php echo $product_id; ?>">
              </div>
            </div>
           <?php } ?>
           <?php foreach ($product_models as $product_model) { ?>
           <div class="option_item">
             <div class="left_title">
                <div class="product_name" ><?php echo $product_model['model']; ?></div>
                <div class="price" ><?php echo $product_model['price']; ?></div>
             </div>
              <div class="right_list">
                <div  class="product-quantity spin">
                  <input type="button" class="qty_substract" value="-">
                  <input type="text" name="quantity" value="0" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" size="2" class="input_quantity">
                  <input type="button" class="qty_add" value="+">
                </div>
                <input type="hidden" name="product_option_value_id" value="<?php echo $product_model['product_option_value_id']; ?>">
              </div>
           </div>
           <?php } ?>
        </div>      
      </div>
      <!-- Quantity end -->
     
    </div>
  </div>
<?php echo $footer; ?>
