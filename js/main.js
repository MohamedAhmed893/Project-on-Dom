var imageList =Array.from(document.querySelectorAll('.item img'))
var lightBox =document.querySelector('.light-box')
var lightItem=document.querySelector('.light-item')
var nextImage =document.getElementById('next')
var prevImage =document.getElementById('prev')
var closeImage =document.getElementById('close')


var imageIndex =0
for(var i =0; i < imageList.length; i++) {
    imageList[i].addEventListener('click', function(e){
        var imgSrc =e.target.getAttribute('src')
        imageIndex =imageList.indexOf(e.target)
        
        lightItem.style.backgroundImage=`url(${imgSrc})`
         lightBox.classList.remove('d-none')
        
    })
}

function next() {
    imageIndex++;
   if(imageIndex == imageList.length) {
    imageIndex = 0;
   }
    
    var imgSrc =imageList[imageIndex].getAttribute('src')
    lightItem.style.backgroundImage=`url(${imgSrc})`
}
function prev() {
    imageIndex--;
  if(imageIndex<0){
    imageIndex = imageList.length-1
  }
    var imgSrc =imageList[imageIndex].getAttribute('src')
    lightItem.style.backgroundImage=`url(${imgSrc})`
}

function close() {
    lightBox.classList.add('d-none')
}
nextImage.addEventListener('click' , next)
prevImage.addEventListener('click' , prev)
closeImage.addEventListener('click' , close)