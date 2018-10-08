function showPic(link){
    console.log(link.getAttribute('href'));
    document.getElementById('image').src = link.getAttribute('href')

}