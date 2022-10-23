$(function(){
    $(".slide_gambar li").hide()
    var imageSlide = $(".slide_gambar li").first();
    imageSlide.show()

    var imageList = 0;
    $(".button_Next").click(function next(){
        imageSlide.hide()
        if(imageList < $(".slide_gambar li").length-1){
            imageSlide = imageSlide.next()
            imageList++
        }
        else{
            imageSlide = $(".slide_gambar li").first()
            imageList = 0
        }
        imageSlide.fadeIn()
    })

    $(".button_Prev").click(function prev(){
        imageSlide.hide()
        if(imageList != 0){
            imageSlide = imageSlide.prev()
            imageList--
        }
        else{
            imageSlide = $(".slide_gambar li").last()
            imageList = $(".slide_gambar li").length-1
        }
        imageSlide.fadeIn()
    })  
})