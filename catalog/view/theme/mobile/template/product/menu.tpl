<nav id="bottom_add_to_cart">
  <ul class="list-unstyled">
    <li style="width:15%"><button id="add_to_wishlist"><i class="fa fa-heart"></i><div><?php echo $text_wishlist; ?></div></button></li>
    <li style="width:35%"><button data-loading-text="Loading..." class="add_to_cart">添加购物车</button></li>
    <li style="width:35%"><button data-loading-text="Loading..." class="buy_now">立即购买</button></li>
    <li style="width:15%"><a href="<?php echo $url_shopping_cart; ?>"><i class="iconfont icon-gouwuche2"><span class="cart_total" style="display:none;"></span></i><div class="name"><?php echo $text_shopping_cart; ?></div></a></li>
  </ul>
</nav>