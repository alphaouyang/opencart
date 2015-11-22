<?php
class ControllerCommonMenu extends Controller {
    public function index() {

		$this->load->language('common/header');

		$data['text_home'] = $this->language->get('text_home');
		$data['text_shopping_cart'] = $this->language->get('text_shopping_cart');
		$data['text_account'] = $this->language->get('text_account');
		$data['text_search'] = $this->language->get('text_search');
		$data['url_home'] = $this->url->link('common/home', '', 'SSL');
		$data['url_search'] = $this->url->link('common/search', '', 'SSL');
		$data['url_shopping_cart'] = $this->url->link('checkout/cart', '', 'SSL');
		$data['url_account'] = $this->url->link('account/account', '', 'SSL');

	  if (file_exists(DIR_TEMPLATE . $this->config->get('config_template') . '/template/common/menu.tpl')) {
			return $this->load->view($this->config->get('config_template') . '/template/common/menu.tpl', $data);
		} else {
			return $this->load->view('default/template/common/menu.tpl', $data);
		}
	}
}