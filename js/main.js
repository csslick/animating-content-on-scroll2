$(function() {
  // 캐릭터 정보 추가
  var $content = $(".content");
  console.log($content.length);

  for (var i = 0; i < $content.length; i++) {
    var img = char_info[i].img_url; 
    var title = char_info[i].name;
    var text = char_info[i].text;
    console.log(img);

    $(".content")
      .eq(i)
      .find("h2")
      .text(title);
    $(".content")
      .eq(i)
      .find("p")
      .text(text);
    $(".content")
      .eq(i)
      .find("img")
      .attr('src', img);
    console.log(i + ": " + title);
  }

  // 페이지 인디케이터
  $("#page-indicator a").on("click", function() {
    // 이동한 내부 링크의 위치값(hash)
    var target = $(this.hash);
    // 페이지 버튼 index
    var idx = $(this).index()
    console.log(target, idx);
    $("#page-indicator a").removeClass('active');
    $(this).addClass('active');

    $("html, body").animate({
      scrollTop: target.offset().top
    });
    return false; // 앵커태그 무효화
  });

  // 시작하면 강제로 첫페이지로
  $('#page-indicator a').eq(0).trigger('click')

  // 스크롤시 인디케이터 페이지 번호 감지
  /* 
    ## 미세한 스크롤 이동 영역 감지 애매하여
    ## 마우스 상하방향 감지 페이지 이동으로 수정 예정
    ## 감지는마우스, 터치 동시 지원
  */
  $(window).on('scroll', function(){
    var doc_height = $('.content').height();
    var scroll_top = $(window).scrollTop();
    var page_num = 0;
    var y_offset = doc_height / 2;
    // 페이지 위치(번호) 확인
    if(scroll_top >= doc_height*3 - y_offset ){
      page_num = 3
    } else if(scroll_top >= doc_height*2 - y_offset ){
      page_num = 2
    } else if(scroll_top >= doc_height*1 - y_offset ){
      page_num = 1
    } else{
      page_num = 0;
    }

    $("#page-indicator a").removeClass('active');
    $("#page-indicator a")
      .eq(page_num)
      .addClass('active');
    console.log('page_num: ' + page_num);
  }) // end on(scroll)


}); // end$()
