<div id="slides" class="owl-carousel">
  <?php foreach ($banners as $banner) { ?>
  <div class="item">
    <?php if ($banner['link']) { ?>
    <a class="popups" href="<?php echo $banner['link']; ?>"><img src="<?php echo $banner['image']; ?>" alt="<?php echo $banner['title']; ?>" class="img-responsive" /></a>
    <?php } else { ?>
    <img src="<?php echo $banner['image']; ?>" alt="<?php echo $banner['title']; ?>" class="img-responsive" />
    <?php } ?>
  </div>  
  <?php } ?>
</div>
<script type="text/javascript"><!--
$('#slides').owlCarousel({
    items:2,
    center:true,
    margin:10,
    loop:true,
    lazyLoad:true,
    responsive: true
  });  
$(document).ready(function() {
  $('.popups').swipebox({
    useCSS : true,
    useSVG : true,
  });
});  
--></script>