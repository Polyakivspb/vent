// $( document ).on("scroll", function () {
//     var top = $( document ).scrollTop();
    
//     if (top>= 300)
//     {
//       $(".special .block__header, .special .badge, .special .block__subheader").fadeIn(1000);
     
//     }
//     if (top >= 800)
//     {
//       $(".special__feature").fadeIn(1000);


//     }
// });

function input_filename(str)
{
filename="..."+str.substr(str.length - 30, str.length);

 $('.fake-button__text').text(filename);
 $('.fake-button').addClass("fake-button_green");
} 



$( document ).ready(function() {

   $('.flexslider').flexslider({
    animation: "slide",
  });
  
//    $(".special .block__header, .special .badge, .special .block__subheader").hide();
//   $(".special__feature").hide();
//     $(".first .heading").hide();
//     $(".first .heading").fadeIn(1000);
//     $('.first .subheading, .first__button').css({"margin-Top":"+=50px","opacity":"0.1"});
//     $('.first .subheading, .first__button').animate(
//   {
//     marginTop:"-=50px",
//     opacity:"1"
//   },
// 500);

  $(".popup__bg").click(function(e) {
    $(".popup__window").hide();
    $(".popup__bg").fadeOut();
  }); 
  $(".popup__window").click(function(e) {
    e.stopImmediatePropagation();
  });
    
  $(".object__thumb").click(function() {
    var $item=$(this);
    var $par=$(this).closest(".object__item");
    var $paritem=$par.find(".object__thumb");
    var i=$paritem.index($item);
    // 
    $par.find(".object__imgs .object__img").removeClass('object__img_active');
    $par.find(".object__imgs .object__img").fadeOut(200);
    $par.find(".object__imgs .object__img").eq(i).fadeIn(200);
    $par.find(".object__imgs .object__img").eq(i).addClass('object__img_active');
    $par.find(".object__thumb").removeClass("object__thumb_active");
    $item.addClass("object__thumb_active");
  });


  // Формы
    $(".popup__close").click(function() {
         $(".popup__window").fadeOut(200);
         $(".popup__thx").fadeOut(200);
         $(".popup__bg").fadeOut(200);
      });

    $(".call-popup-file").click(function() {
      $(".popup__bg").fadeIn(200);
      $("#popup-file").fadeIn(200);
      });

    $(".call-first-popup").click(function() {
      $(".popup__bg").fadeIn(200);
      $("#popup-window .CTA__heading").html('Подберём систему вентиляции');
      $("#popup-window .CTA__subtext").html("Мы перезвоним, уточним параметры<br>вашего объекта, ваши требования<br>и поможем подобрать систему вентиляции");
      $("#popup-window .form__button").val("Подобрать систему вентиляции");
      $("#popup-window").fadeIn(200);   
    });
    
    $(".call-special-popup").click(function() {
      $(".popup__bg").fadeIn(200);
      $("#popup-window .CTA__heading").html('Подробно расскажем о системе');
      $("#popup-window .CTA__subtext").html("Наш специалист перезвонит, даст<br>  полную информацию об объединенной системе,<br> рассчитает производителньость и стоимость");
      $("#popup-window .form__button").val("Получить подробную информацию");
      $("#popup-window").fadeIn(200);   
    });



  // Отправка форм
  $("#form-file").submit(function(event){  
    event.preventDefault();
    if ($(this).find("input[name='phone']").val()!="")
    {   
      var data = $(this).serialize();
      var formData = new FormData($(this)[0]);    
      $.ajax({
              method:'post',
              url: "SendFile.php",
              processData: false,
              contentType: false,
              data:  formData,
              success: function(html) {
              }
      });
      $(".popup__window").fadeOut(200);
      $(".popup__thx").fadeIn(200); 
      yaCounter38159410.reachGoal('form-file');
    }
    else
    {
      $(this).find("input[name='phone']").css("border","1px solid red");
      $(this).find("input[name='phone']").effect("shake", {times:4}, 1000 );
    }
  }); 

  $("#form-consult").submit(function(event){  
    event.preventDefault();
    if ($(this).find("input[name='phone']").val()!="")
    {   
      var data = $(this).serialize();
      $.ajax({
        method:'post',
        url: "SendData.php",
        data:  data,
        success: function(html) {
        }
      });   
      $(".popup__window").fadeOut(200);
      $(".popup__bg").fadeIn(200);
      $(".popup__thx").fadeIn(200);   
    }
    else
    {
      $(this).find("input[name='phone']").css("border","1px solid red");
      $(this).find("input[name='phone']").effect("shake", {times:4}, 1000 );
    }
  
  }); 

  $("#form-project").submit(function(event){    
    event.preventDefault();
    if ($(this).find("input[name='phone']").val()!="")
    {   
      var data = $(this).serialize();
      $.ajax({
        method:'post',
        url: "SendData.php",
        data:  data,
        success: function(html) {
        }
      });   
      $(".popup__window").fadeOut(200);
      $(".popup__bg").fadeIn(200);
      $(".popup__thx").fadeIn(200);   
    }
    else
    {
      $(this).find("input[name='phone']").css("border","1px solid red");
      $(this).find("input[name='phone']").effect("shake", {times:4}, 1000 );
    }
  }); 

  $("#form-popup").submit(function(event){    
    event.preventDefault();
    if ($(this).find("input[name='phone']").val()!="")
    {   
      var data = $(this).serialize();
      $.ajax({
        method:'post',
        url: "SendData.php",
        data:  data,
        success: function(html) {
        }
      });   
      $(".popup__window").fadeOut(200);
      $(".popup__bg").fadeIn(200);
      $(".popup__thx").fadeIn(200);   
    }
    else
    {
      $(this).find("input[name='phone']").css("border","1px solid red");
      $(this).find("input[name='phone']").effect("shake", {times:4}, 1000 );
    }     
    // yaCounter38159410.reachGoal('form-popup');
  }); 
  // Отправка форм  
  // Формы

});

// Карта
    function initialize() {
    var latlng = new google.maps.LatLng(59.86453161313982,30.4720051710555);
    var myOptions = {
      zoom: 16,
      center: latlng,
      scrollwheel: false,

      mapTypeId: google.maps.MapTypeId.ROADMAP,

       styles: [
      {
         stylers: [ {
                hue: "#0000ff"
            }, {
                saturation: -95
            } ]
          }]
    };

    var map = new google.maps.Map(document.getElementById("map"), myOptions);
    var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      title: 'Офис АльфаВент'
    });
 // Карта


  }