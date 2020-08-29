$(document).ready(function() {
  // starters
  var date = new Date();
  const daysToExpire = 365
  date.setTime(date.getTime()+(daysToExpire*24*60*60*1000));
  $(".line_nc").addClass("hide_lnc")
  $(".final-opts").addClass("push-up")


  //defaults
  const language = "CurrentLanguage"
  const style = "CurrentStyle"
  const lnb = "LineNumber"
  const type = "LineNumberColor"
  const git = "GeneratorInitialText"
  const bdclr = "BorderColor"
  const bdwidth = "BorderWidth"
  const bdr = "BorderRadius"
  const pdd = "Padding"
  const cookie = "CookieVisible"


  //default declarations
  cookieMaker(type, "dark")
  cookieMaker(git, true)
  cookieMaker(lnb, false)
  cookieMaker(bdclr, "rgb(92, 77, 92);")
  cookieMaker(bdwidth, "1rem .1rem 1rem .1rem")
  cookieMaker(bdr, ".7rem")
  cookieMaker(pdd, "1rem")


  //default styling
  $(".stack_details").addClass("show-now");
  $(".stack").addClass("border-adder");
  
  //default functionality
  $(".clear-btn").on("click", function(){form.reset()})
  var colorPickerDefaultCustomAnchorInline = new ColorPicker.Default('#dc-ex6', {
    color: 'rgb(92, 77, 92)',
    inline: true,
    history: {
      colors: ['rgb(92, 77, 92)', 'black', 'pink', '#f8f0a5', '#71fbf2', 'gray']
    }
  });


  const current_lexer_id = getCookie(language)
  const current_style_id = getCookie(style)
  const all_stack  = $(".stack-items")
  const all_style = $(".style-items")

  function currentFinder(elem, getId){
    for(var i = 0; i < elem.length; i++) {
      const all_elem_object = $(elem[i])
      const available_elem_id = all_elem_object[0].id
      if(getId == available_elem_id){
        const current_id = available_elem_id
        $(`#${current_id}`).addClass("current")
      }
    }
  }
  
  currentFinder(all_stack, current_lexer_id)
  currentFinder(all_style, current_style_id)

  

  function slider(main, cls, i1, i2, int){
    $('body').on("change", `.${main}`, function() {
      const range = $(this).val();
      if(range == int){
         $(`.${cls} .${i1}`).removeClass(i1).addClass(i2)        
         if(main == "git_input"){
            cookieMaker(git, false)
         }else if(main == "lnb_input"){
            cookieMaker(lnb, true)
            $(".line_nc").removeClass("hide_lnc")         
            $(".final-opts").removeClass("push-up")
         }
      }else{
         $(`.${cls} i`).addClass(i1).removeClass(i2)
         if(main == "git_input"){
            cookieMaker(git, true)
         }else if(main == "lnb_input"){
            cookieMaker(lnb, false)
            $(".line_nc").addClass("hide_lnc")
            $(".final-opts").addClass("push-up")
            
         }        
      }
    });
  }
  
slider("git_input", "git", "fa-check-circle", "fa-minus-circle", 1)
slider("lnb_input", "lnb", "fa-minus-circle", "fa-check-circle", 2)
  
  

function lineNumberdarkMode(){
    $('body').on("change", ".lnc_input", function() {
      const range = $(this).val();
      if(range == 1){
         cookieMaker(type, "dark")
         $(".lnc_value").html("Dark")
      }else{
         cookieMaker(type, "light") 
         $(".lnc_value").html("Light")   
      }
    });
}

lineNumberdarkMode();



function borderColorChanger(){
  var target = document.querySelector('.colorpicker-circle-anchor__color')
  var observer = new MutationObserver(function(mutations){
    let style = $('.colorpicker-circle-anchor__color').attr('style')
    let style_clean = style.replace("background:", "").replace(" none repeat scroll 0% 0%", "").trim()
    cookieMaker(bdclr, style_clean)
  })
  var config = {attributes:true}
  observer.observe(target, config)

}

borderColorChanger();

 

function cookieMaker(cookieName, cookieValue){
   document.cookie = `${cookieName} = ${cookieValue}; ${cookieValue}; expires="${date.toGMTString()}; SameSite=Lax;`
}



function tagger(target){
  $( `.${target}` ).each(function( main_index, element ) {
    $(this).addClass(`${target}_${main_index}`)
    $(`.${target}_${main_index}`).on("click", function(){
    $( `.${target}` ).first().removeClass("current")
    const siblings_object = $(`.${target}_${main_index}`).siblings()       
    if ($(`.${target}_${main_index}`).next().length == 0){
        $(element).addClass("current")
        const cookieValue = $(element)[0].id
        if(`${target}` == "stack-items"){
          const cookieName = language
          cookieMaker(cookieName, cookieValue)
        }else{
          cookieMaker(style, cookieValue)
        }

     }else{
        const cookieValue = $(element)[0].id
        if(`${target}` == "stack-items"){
          const cookieName = language
          cookieMaker(cookieName, cookieValue)
        }else{
          cookieMaker(style, cookieValue)
        }
        $(`.${target}_${main_index}`).siblings().removeClass("current")
        $(element).removeClass("current") 
     }

    siblings_object.each(function( index, child_element ) {
    if(main_index === index){   
      $(`.${target}_${index}`).addClass("current") 
    }   
    else{
      $(`.${target}_${index}`).removeClass("current")  
    }   
    });

    })

  })
}

tagger("stack-items")
tagger("style-items")



function Controls(main, ctrl){
 $('body').on("change", `.${main}`, function() {
  const range = $(this).val();
  $(`.${ctrl}`).html(range);
  if(main == "btw" || main == "brw" || main == "bbw" || main == "blw" ){
    var borderTop = $(".btwv").text();
    var borderRight = $(".brwv").text();
    var borderLeft = $(".bbwv").text();
    var borderBottom = $(".blwv").text();
    const newBorderWidth = `${borderTop}rem ${borderRight}rem ${borderLeft}rem ${borderBottom}rem`
    cookieMaker(bdwidth, newBorderWidth)
  }else{
    var paddingTop = $(".ptv").text();
    var paddingRight = $(".prv").text();
    var paddingLeft = $(".pbv").text();
    var paddingBottom = $(".plv").text();
    const newPadding = `${paddingTop}rem ${paddingRight}rem ${paddingLeft}rem ${paddingBottom}rem`
    cookieMaker(pdd, newPadding)
  }
 

 });
}

Controls("btw", "btwv")
Controls("brw", "brwv")
Controls("bbw", "bbwv")
Controls("blw", "blwv")
Controls("pt", "ptv")
Controls("pr", "prv")
Controls("pb", "pbv")
Controls("pl", "plv")



function radiusControls(){
 $('body').on("change", ".bdr", function() {
    const range = $(this).val();
    $(".bdrv").html(range);
    const newBorderRadius = `${range}rem`
    cookieMaker(bdr, newBorderRadius)

 });
}

radiusControls();



function cleanUp(bdr, ob1, ob2, main, ot1, ot2){
  $(`.${bdr}`).addClass("border-adder");
  $(`.${ob1}`).removeClass("border-adder");
  $(`.${ob2}`).removeClass("border-adder");
  if(bdr == "a-opt") {
     $(`.${main}`).addClass("show-flex");
  }else{
    $(`.${main}`).addClass("show-now");
    $('.advance_opt').removeClass("show-flex");
    
  }
  $(`.${ot1}`).removeClass("show-now");
  $(`.${ot2}`).removeClass("show-now");
}

$(".stack").on("click", function(){
  cleanUp("stack","editor","a-opt", "stack_details", "style_details", "advance_opt" )
})

$(".editor").on("click", function(){
  cleanUp("editor","stack","a-opt", "style_details", "stack_details", "advance_opt" )
})

$(".a-opt").on("click", function(){
  cleanUp("a-opt", "stack","editor", "advance_opt", "stack_details", "style_details" )
})


$('.close').on("click", function(event){
  event.preventDefault()
  $('.modal-code').removeClass('show-modal')
  $('.shield').removeClass('show-modal').removeClass('overflow-stopped')
  $('body').removeClass('overflow-stopped')
})


$('#close-cookie-btn').on("click", function(event){
  event.preventDefault()
  cookieMaker(cookie, "false")
  $('#cookie-banner-container').addClass('hide-cookie-div')
})



window.smoothScroll = function(target) {
  target = document.getElementById(target)
  var scrollContainer = target;
  do { 
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);

  var targetY = 0;
  do { 
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
  } while (target = target.offsetParent);

  scroll = function(c, a, b, i) {
      i++; if (i > 30) return;
      c.scrollTop = a + (b - a) / 30 * i;
      setTimeout(function(){ scroll(c, a, b, i); }, 20);
  }
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}



function footerYear(){
  currentDate = new Date()
  const year = currentDate.getFullYear()
  $(".footer__year").html(year)
}

footerYear();
});



function getCookie(name) {
  var cookieArr = document.cookie.split(";");
  for(var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");
    if(name == cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
} 

let cookie_visible = getCookie("CookieVisible")

if(cookie_visible == "false"){
  $('#cookie-banner-container').addClass('hide-cookie-div')
}

