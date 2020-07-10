/**
 *   Copyright (C) 2015 Kushagra Singh
 *   https://github.com/kush789/Unblur-Scribd/blob/master/Chrome_extension/unblur.js
 */

function unblurDoc() {
  $('.autogen_class_views_read2_page_blur_promo').remove();

  $('.promo').remove();
  $('.page_blur_promo_overlay').remove();

  // $('.page_blur_promo').remove();
  // $('.page_blur_promo_overlay').remove();

  $('.between_page_ads').remove();

  $('.text_layer').css('color', '#000');
  $('.absimg').css('opacity', '1.0');
  $('.text_layer').css('text-shadow', 'black 0px 0px 0px');
  $('.page_blur_promo').remove(); // Removes pesky ads.

  setTimeout(unblurDoc, 1000);
}

unblurDoc();
