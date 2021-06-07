import $ from "jquery";

let $nav = $('nav{date-nav}');
let isVisible = false;

$(".nav-btns").on("click", function(){

    if(isVisible === false){
        $nav.sshoow();
        isVisible = true;
    }
    else{
        $nav.hide();
        isVisible = false;
    }
})
