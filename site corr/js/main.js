
document.getElementById("bold").addEventListener("click",function(){
    if (document.getElementById("text").style.fontWeight=="normal"){
        document.getElementById("text").style.fontWeight="bold"
    }
    else{
        document.getElementById("text").style.fontWeight="normal"
    }
})

document.getElementById("italic").addEventListener("click",function(){
    if (document.getElementById("text").style.fontStyle=="normal"){
        document.getElementById("text").style.fontStyle="italic"
    }
    else{
        document.getElementById("text").style.fontStyle="normal"
    }
})

document.getElementById("Underline").addEventListener("click",function(){
    if (document.getElementById("text").style.textDecoration=="none"){
        document.getElementById("text").style.textDecoration="underline"
    }
    else{
        document.getElementById("text").style.textDecoration="none"}
    })

    function changeFontSize(fontSize){
 document.getElementById("text").style.fontSize=fontSize.value + "px"
   
    
    }
    
    function changeFontFamily(fontFamily){
        document.getElementById("text").style.fontFamily=fontFamily.value
    }

    $(".image").hover(function(){
        $(this).css("opacity",0.5);
        $(this).find("button").show();
    },function(){
        $(this).css("opacity",1);
        $(this).find("button").hide();
    })
    