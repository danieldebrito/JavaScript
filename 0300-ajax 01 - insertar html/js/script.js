$(document).ready(function () {
    var elem = document.querySelectorAll("li");

    var tam = elem.length;

    for(var i = 0; i < tam ; i++){
        $(elem[i]).mouseover(insertImg);
        $(elem[i]).mouseout(quitImg);
    }
});


function insertImg(e){
    if(e.target==elem1){
        $("#elem1").addClass("destacar");
        $("img").attr("src","img/adios95.jpg");
    }
    if(e.target==elem2){
        $("#elem2").addClass("destacar");
        $("img").attr("src","img/end80.jpg");
    }
    if(e.target==elem3){
        $("#elem3").addClass("destacar");
        $("img").attr("src","img/leave77.jpg");
    }
    if(e.target==elem4){
        $("#elem4").addClass("destacar");
        $("img").attr("src","img/ramones76.jpg");
    }
}

function quitImg(e){
    if(e.target==elem1){
        $("#elem1").removeClass("destacar");
        $("img").removeAttr("src","img/adios95.jpg");
    }
    if(e.target==elem2){
        $("#elem2").removeClass("destacar");
        $("img").removeAttr("src","img/end80.jpg");
    }
    if(e.target==elem3){
        $("#elem3").removeClass("destacar");
        $("img").removeAttr("src","img/leave77.jpg");
    }
    if(e.target==elem4){
        $("#elem4").removeClass("destacar");
        $("img").removeAttr("src","img/ramones76.jpg");
    }
}