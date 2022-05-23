



function openNav() {
    document.getElementById("mySidenav").style.width = "540px";

    if (/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById("mySidenav").style.width = "300px";
        document.getElementById("main").style.marginLeft = "300px";
    }

}





function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

document.getElementById("year").innerHTML = new Date().getFullYear();


$(".menu-link").on("click", function (e) {
    $(".menu-link").removeClass("active");
    $(this).addClass("active");
});


projects=[
    {
        "Name": "Horizonpad",
        "Link": "https://horizonpad.io/",
        "Tech": "ReactJS",
        "Image": "../images/portfolio/horizonpad.png",
    },
    {
        "Name": "Gyr Falcon",
        "Link": "https://gyrf.io/",
        "Tech": "ReactJS",
        "Image": "../images/portfolio/gyrfalcon.png",
    },
    {
        "Name": "Aggreg",
        "Link": "https://aggreg8.finance/",
        "Tech": "ReactJS",
        "Image": "../images/portfolio/aggreg8.png",
    },
    {
        "Name": "Scamtoken",
        "Link": "https://www.scamlistcrypto.com/",
        "Tech": "ReactJS/HTML/CSS/JAVASCRIPT",
        "Image": "../images/portfolio/scamtoken.png",
    },
    {
        "Name": "Lasmeta",
        "Link": "https://www.lasmeta.io/",
        "Tech": "HTML/CSS/JAVASCRIPT",
        "Image": "../images/portfolio/LASMETA_ICO.png",
    },
    {
     "Name": "Prolognet",
     "Link": "https://prolognet.com/",
     "Tech": "HTML/CSS/JAVASCRIPT",
     "Image": "../images/portfolio/prolognet-small.png",
    },
    {
        "Name": "Messiah Freights",
        "Link": "https://messiahfreight.co.uk/",
        "Tech": "WordPress",
        "Image": "../images/portfolio/Messiah-Frieghts-small.png",
    },
    {
        "Name": "Cargoas",
        "Link": "https://cargoas.com/",
        "Tech": "WordPress",
        "Image": "../images/portfolio/Cargoas-small.png",
    },
    {
        "Name": "Theliltutu",
        "Link": "https://theliltutu.com/",
        "Tech": "WordPress",
        "Image": "../images/portfolio/liltutu-small.png",
    },
    {
        "Name": "Find Family Doctor",
        "Link": "http://www.findfamilydoctor.com/",
        "Tech": "WordPress",
        "Image": "../images/portfolio/findfamilydoctor-small.png",
    },
    {
        "Name": "Merus Capital",
        "Link": "https://www.meruscap.com/",
        "Tech": "HTML/CSS/JAVASCRIPT",
        "Image": "../images/portfolio/meruscapital-small.png",
    }
  
   
]




for (var i = 0; i < projects.length; i++) {

    $(".projects-row .row").append(

     '<div class="col-lg-4 col-md-6 projects-column">' +
     '<h3>' +
     '<a href="' + projects[i].Link + '" target="_blank">' + projects[i].Name + ' <i class="fas fa-external-link-alt"></i>' +
     '</a>' +
     '</h3>' +
     '<h6>' + projects[i].Tech + '</h6>' +
     '<div class="project" style="background-image:url(' + projects[i].Image + ')">' +
     '<img src="images/laptop.png" width="100%">' +
     '</div>' +
     '</div>'

    )
   
}




$(function () {
    x = 6;
    $('.projects-column').slice(0, 6).show();
    $('#loadMore').on('click', function (e) {
        e.preventDefault();
        x = x + 3;
        $('.projects-column').slice(0, x).slideDown();
    });
});



var typed = new Typed('.animate', {
    strings: [
        "Front End Developer",
        "CMS Developer",
        "Graphics Designer"],
    typeSpeed: 150,
    backspeed: 200,
    backDelay: 500,

    loop: true


}
);


new kursor({
    type: 1,
    color: '#dd6e42'
})



