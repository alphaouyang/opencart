<?php
class ControllerProductSlides extends Controller {
	public function index() {

		$this->load->model('design/banner');
		$this->load->model('tool/image');

		$this->document->addStyle('catalog/view/javascript/jquery/owl-carousel2/assets/owl.carousel.css');
		$this->document->addStyle('catalog/view/javascript/jquery/owl-carousel2/assets/owl.theme.default.min.css');
		$this->document->addScript('catalog/view/javascript/jquery/owl-carousel2/owl.carousel.min.js');

		if (isset($this->request->get['product_id'])) {
		 $product_id = (int)$this->request->get['product_id'];
		} else {
		 $product_id = 0;
		}

		$product_info = $this->model_catalog_product->getProduct($product_id);

		$title = $product_info['meta_title'];


		$data['banners'] = array();
		if (is_file(DIR_IMAGE . $product_info['image'])) {
			$data['banners'][] = array(
			  'title' => $title,
			  'link'  => $this->model_tool_image->resize($product_info['image'], $this->config->get('config_image_popup_width'), $this->config->get('config_image_popup_height')),
			  'image' => $this->model_tool_image->resize($product_info['image'], $this->config->get('config_image_thumb_width'), $this->config->get('config_image_thumb_height'))
			);
		}

		$results = $this->model_catalog_product->getProductImages($this->request->get['product_id']);

		foreach ($results as $result) {
			if (is_file(DIR_IMAGE . $result['image'])) {
				$data['banners'][] = array(
					'title' => $title,
					'link'  => $this->model_tool_image->resize($result['image'], $this->config->get('config_image_popup_width'), $this->config->get('config_image_popup_height')),
					'image' => $this->model_tool_image->resize($result['image'], $this->config->get('config_image_thumb_width'), $this->config->get('config_image_thumb_height'))
				);
			}
		}


		if (file_exists(DIR_TEMPLATE . $this->config->get('config_template') . '/template/product/slides.tpl')) {
			return $this->load->view($this->config->get('config_template') . '/template/product/slides.tpl', $data);
		} else {
			return $this->load->view('default/template/module/carousel.tpl', $data);
		}
	}
}