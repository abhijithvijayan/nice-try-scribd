function unblur() {
  // **** Wrappers **** //
  // `You're Reading a Preview` card
  $('.promo').remove();
  // `Unlock full access by uploading documents` page divider
  $('.between_page_module').remove();

  // **** Styling **** //
  // Texts
  $('.text_layer').css('color', '#000');
  $('.text_layer').css('text-shadow', 'black 0px 0px 0px');
  // Images
  $('.absimg').css('opacity', '1.0');

  // call every 1 sec (as page is lazy-loaded)
  setTimeout(unblur, 1000);
}

unblur();
