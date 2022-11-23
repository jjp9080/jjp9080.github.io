function imagefun() {
    var Image_Id = document.getElementById('mydiv');
    if (Image_Id.src.match("whoareyou.png")) {
        Image_Id.src = "invert.png";
    }
    else {
        Image_Id.src = "whoareyou.png";
    }
}      