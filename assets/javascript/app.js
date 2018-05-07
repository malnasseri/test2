
  function smoothScroll(target, time) {
  var margin = ($('#main-header').outerHeight() - 1);
  if (!time) { time = '1000'; }
  if (target === 'toTop') {
  $('html,body').animate({
  scrollTop: 0
  }, time);
  }
  else {
  $('html,body').animate({
  scrollTop: target.offset().top - margin
  }, time);
  }
  }
  // SCROLL DOWN ARROR BUTTON
  var count = 0;
  $('#pageOne').on("click", function(){
  var section = $('#one');
  //+55px to offset the margin-top
  var $this = $(this);
  
  var target;
 
  
  target = $(section);
 
  smoothScroll(target);
  

  });

  $('#pageTwo').on("click", function(){
  var section = $('#two');
  //+55px to offset the margin-top
  var $this = $(this);
 
  var target;
  
  
  target = $(section);
 
  smoothScroll(target);
  
  
  
  });
  
   $('#pageThree').on("click", function(){
  var section = $('#three');
  //+55px to offset the margin-top
  var $this = $(this);
 
  var target;
  
  
  target = $(section);
 
  smoothScroll(target);
  
  
  
  });

    $('#pageFour').on("click", function(){
  var section = $('#four');
  //+55px to offset the margin-top
  var $this = $(this);
 
  var target;
  
  
  target = $(section);
 
  smoothScroll(target);
  
  
  
  });

     $('#pageFive').on("click", function(){
  var section = $('#five');
  //+55px to offset the margin-top
  var $this = $(this);
 
  var target;
  
  
  target = $(section);
 
  smoothScroll(target);
  
  
  
  });











  