// Navbar Collapse
$(".button-collapse").sideNav();

//Parallax
$(document).ready(function(){
  $('.parallax').parallax();
});

//Collapsible
  $(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });

//Flickity
$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true
});


//Modal Trigger
  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });