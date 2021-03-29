$(function(){      

  let subSmarLeft = 0;
  let subSlider = $('.sub_slider');
  let subPrev = $('#sub_prev');
  let subNext = $('#sub_next');
  let subPagination = $('.sub_pagination');
  let poLeft = 0;

  function navHide(){
    $('.sub_menu').slideUp(300);
  };        
  function navColor(){
    $('.main_menu>li>span').removeClass('active');
  };
  function fnPrev(){
    if(poLeft < 0){
      poLeft += 100;
    }
    $('.slider_images').stop().animate({left:poLeft + 'vw'});
  };
  function fnNext(){
    if(poLeft > -400){
      poLeft -= 100;
    }
    $('.slider_images').stop().animate({left:poLeft + 'vw'});
  };
  function prev_next_pagination(){
    $('.pagination').removeClass('active');
    if(poLeft == 0){
      $('#page01').addClass('active');
    }else if(poLeft == -100){
      $('#page02').addClass('active');
    }else if(poLeft == -200){
      $('#page03').addClass('active');
    }else if(poLeft == -300){
      $('#page04').addClass('active');
    }else{
      $('#page05').addClass('active');
    }
  }
  function setHeaderColor(sTop){
    if(sTop >= 20){
      $('.header').addClass('active');
    }else{
      $('.header').removeClass('active');
    }
  }
  function resetHeader(sTop){
    let headerHeight = $('.header').outerHeight() + $('.sub_menu').outerHeight();
    if(sTop > headerHeight){
      navColor();
      navHide();
    } 
  }
  function tmp(self){
    let thisPage = $(self);
    let getId = thisPage.attr('id');
    $('.pagination').removeClass('active');
    thisPage.addClass('active');
    if(getId == 'page01'){
      poLeft = 0;          
    }else if(getId == 'page02'){
      poLeft = -100;
    }else if(getId == 'page03'){
      poLeft = -200;
    }else if(getId == 'page04'){
      poLeft = -300;
    }else if(getId == 'page05'){
      poLeft = -400;
    }
    $('.slider_images').stop().animate({left:poLeft + 'vw'});
  }
  function fnNext1(){
    if(subSmarLeft > -200){
      subSmarLeft -= 100;
    }
    subSlider.css({
      marginLeft:subSmarLeft + 'vw',
    })   
    fnpagination();     
  }
  function fnPrev1(){
    if(subSmarLeft < 0){
      subSmarLeft += 100;
    }
    subSlider.css({
      marginLeft:subSmarLeft + 'vw',
    })
    fnpagination();
  }
  function fnpagination(){
    $('.sub_pagination').removeClass('active');
    if(subSmarLeft == 0){
      $('#sub_pagination01').addClass('active');
    }else if(subSmarLeft == -100){
      $('#sub_pagination02').addClass('active');
    }else{
      $('#sub_pagination03').addClass('active');
    }
  }

  navHide();

  $('.btn_nav').on('click',function(){
    $(this).toggleClass('active');
    $('.nav').toggleClass('active');
    $('html').toggleClass('hide');
    if($(this).hasClass('active') == false){
      navHide();
      navColor();
    };
  });
  $('.langs div a').on('click',function(){
    $('.langs div a').removeClass('active');
    $(this).addClass('active');
    return false;
  });
  $('.main_menu>li').on('click',function(){
    if($(this).children('span').hasClass('active')){
      navColor();
      navHide();
    }else{
      navColor();
      $(this).children('span').addClass('active');
      navHide();
      $(this).children('ul').slideDown(300);
    }
  });
  $('.sub_menu a').on('click',function(){
    return false;
  });
  $('.skip_menu a').on('focus',function(){
    $('.skip_menu').css({
      top:0,
    });
  });
  $('.skip_menu a').on('focusout',function(){
    $('.skip_menu').css({
      top:'-100px',
    });
  });
  $('#next').on('click',function(){
    fnNext();
    prev_next_pagination();
  }); 
  $('#prev').on('click',function(){
    fnPrev();
    prev_next_pagination();
  });
  $('.pagination').on('click',function(){
    tmp(this);
  })
  $(window).on('scroll',function(){
    let scrTop = $(document).scrollTop();
    setHeaderColor(scrTop);
    resetHeader(scrTop);
  })
  subPrev.on('click',fnPrev1);
  // 서브 슬라이더 다음버튼 클릭 이벤트
  subNext.on('click',fnNext1);
  // 서브 슬라이더 패이지이동 클릭 이벤트
  subPagination.on('click',function(){
    let targetPage = $(this);
    let targetPageId = targetPage.attr('id');
    subPagination.removeClass('active');
    targetPage.addClass('active');
    if(targetPageId == 'sub_pagination01'){
      subSmarLeft = 0;
      subSlider.css({
        marginLeft:subSmarLeft + 'vw',
      })
    }else if(targetPageId == 'sub_pagination02'){
      subSmarLeft = -100;
      subSlider.css({
        marginLeft:subSmarLeft + 'vw',
      })
    }else{
      subSmarLeft = -200;
      subSlider.css({
        marginLeft:subSmarLeft + 'vw',
      })
    }
  })
  $('#location01').on('click',function(){
    // location.href = 'https://www.naver.com';
    alert('공사중');
  })
  $('#location02').on('click',function(){
    // location.href = 'https://www.daum.net';
    alert('다음에 봐요');
  })
})