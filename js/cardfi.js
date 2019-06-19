$(".des-bg-one").on('click',function () {
   var bg_color = $(this).attr('bg_color');
   $('#card-preview').css('background',bg_color);

});
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


// Notes Carousel
$('.notes-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: false
});


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

 //Color picker

 const pickr0 = new Pickr({
     el: '.bg-color-picker',

     default: '#42445A',

     swatches: [
         'rgba(244, 67, 54, 1)',
         'rgba(233, 30, 99, 0.95)',
         'rgba(156, 39, 176, 0.9)',
         'rgba(103, 58, 183, 0.85)',
         'rgba(63, 81, 181, 0.8)',
         'rgba(33, 150, 243, 0.75)',
         'rgba(3, 169, 244, 0.7)',
         'rgba(0, 188, 212, 0.7)',
         'rgba(0, 150, 136, 0.75)',
         'rgba(76, 175, 80, 0.8)',
         'rgba(139, 195, 74, 0.85)',
         'rgba(205, 220, 57, 0.9)',
         'rgba(255, 235, 59, 0.95)',
         'rgba(255, 193, 7, 1)'
     ],

     components: {

         preview: true,
         opacity: true,
         hue: true,

         interaction: {
             hex: true,
             rgba: false,
             hsva: false,
             input: true,
             clear: true,
             save: false
         }
     }
 });

 const pickr = new Pickr({
     el: '.primary-color-picker',

     default: '#42445A',

     swatches: [
         'rgba(244, 67, 54, 1)',
         'rgba(233, 30, 99, 0.95)',
         'rgba(156, 39, 176, 0.9)',
         'rgba(103, 58, 183, 0.85)',
         'rgba(63, 81, 181, 0.8)',
         'rgba(33, 150, 243, 0.75)',
         'rgba(3, 169, 244, 0.7)',
         'rgba(0, 188, 212, 0.7)',
         'rgba(0, 150, 136, 0.75)',
         'rgba(76, 175, 80, 0.8)',
         'rgba(139, 195, 74, 0.85)',
         'rgba(205, 220, 57, 0.9)',
         'rgba(255, 235, 59, 0.95)',
         'rgba(255, 193, 7, 1)'
     ],

     components: {

         preview: true,
         opacity: true,
         hue: true,

         interaction: {
             hex: true,
             rgba: false,
             hsva: false,
             input: true,
             clear: true,
             save: false
         }
     }
 });

 const pickr2 = new Pickr({
     el: '.secondary-color-picker',

     default: '#42445A',

     swatches: [
         'rgba(244, 67, 54, 1)',
         'rgba(233, 30, 99, 0.95)',
         'rgba(156, 39, 176, 0.9)',
         'rgba(103, 58, 183, 0.85)',
         'rgba(63, 81, 181, 0.8)',
         'rgba(33, 150, 243, 0.75)',
         'rgba(3, 169, 244, 0.7)',
         'rgba(0, 188, 212, 0.7)',
         'rgba(0, 150, 136, 0.75)',
         'rgba(76, 175, 80, 0.8)',
         'rgba(139, 195, 74, 0.85)',
         'rgba(205, 220, 57, 0.9)',
         'rgba(255, 235, 59, 0.95)',
         'rgba(255, 193, 7, 1)'
     ],

     components: {

         preview: true,
         opacity: true,
         hue: true,

         interaction: {
             hex: true,
             rgba: false,
             hsva: false,
             input: true,
             clear: true,
             save: false
         }
     }
 });

 pickr0.on('change',function(e,t){
    console.log(e.toHEXA().toString() );
    $('#card-preview').css("background-color", e.toHEXA().toString());
});

pickr.on('change',function(e,t){
   console.log(e.toHEXA().toString() );
   $('.primary-color-use').css("color", e.toHEXA().toString());
});
pickr2.on('change',function(e,t){
   console.log(e.toHEXA().toString() );
   $('.secondary-color-use').css("color", e.toHEXA().toString());
});
