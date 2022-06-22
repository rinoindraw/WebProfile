

let index = 0;
const totalWorkItems = $(".work-item").length; //buat hitung total work item di jquery
//console.log(totalWorkItems);

$(document).ready(function () {
    
    // Ini buat style img max height gambar lightbox
    const wHeight = $(window).height();
    $(".lightbox-img").css("max-height",wHeight + "px");

    // lightbox
    $(".work-item-inner").click(function(){ //buat klik di gambar work
        console.log($(this).parent(".work-item").index()) //buat index gambar
        index = $(this).parent(".work-item").index();
        $(".lightbox").addClass("open"); //ini buat nambah class open di html buat nampilin gambar
        lightboxSlideShow();
    })

    //buat button prev dan next di lightbox
    $(".lightbox .prev").click(function(){
        if(index == 0){
            index = totalWorkItems-1;
        }
        else{
            index--;
        }
        lightboxSlideShow();
    })

    $(".lightbox .next").click(function(){
        if(index == totalWorkItems-1){
            index = 0;
        }
        else{
            index++;
        }
        lightboxSlideShow();
    })

    //buat button close di lightbox
    $(".lightbox-close").click(function(){
        $(".lightbox").removeClass("open");
    })

    //buat close kalo mencet di luar gambar
    $(".lightbox").click(function(event){
        //console.log(event.target)
        if($(event.target).hasClass("lightbox")){
            $(this).removeClass("open")
        }
    })
})


function lightboxSlideShow(){
    const imgSrc = $(".work-item").eq(index).find("img").attr("data-large");
    const category = $(".work-item").eq(index).find("h4").html();
    //console.log(imgSrc);
    //console.log(category);
    $(".lightbox-img").attr("src",imgSrc);
    $(".lightbox-category").html(category); //buat caption/line category gambar
    $(".lightbox-counter").html((index+1) + "/" + totalWorkItems);
}

