//Expandable Columns
$('.double-up').click(function(){
  $('.cf-expandable-col').toggleClass('expanded-col');
});

//Fancy Select
$('.basic').fancySelect();

//Submenu Drop
$('.has-sub>a').click(function(){
  $(this).parent().toggleClass('expand');
});

//Search Fields
$('.search-part>input').click(function(){
  $(this).parent().addClass('extend-it');
});
$('.close-search').click(function(){
  $('.search-part').removeClass('extend-it');
});


// // Notes Carousel
// $('.notes-carousel').flickity({
//   // options
//   cellAlign: 'left',
//   contain: true,
//   pageDots: false
// });


//Contact Card Tools

$(".event-card-tools").click(function(){
  $(this).find('.tools-drop').toggleClass('show-up');

  $(this).parent().toggleClass('active');
  return false;
});

$(document).click(function(e){
  that = e.target;
  if ($(that).closest(".tools-drop").length < 1 && !$(that).hasClass("show-up")) $(".tools-drop").removeClass('show-up');
});


  // Column Scrolls
 // $('.col-scroll-pane').jScrollPane();
