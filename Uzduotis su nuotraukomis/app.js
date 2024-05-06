//Hide

document.querySelectorAll('.grid-item').forEach(function(element){    
    element.style.display = 'none';
});
//Show
document.getElementById('show').addEventListener('click',function() {
    document.querySelectorAll('.grid-item').forEach(function(element){
        element.style.display = 'block';
    }) 
})

//Random number

function randomNumber(){
    return Math.floor(Math.random() *10);
}

//Random image

function addRandomImage(){
    var images = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg', 'images/7.jpg', 'images/8.jpg', 'images/9.jpg', 'images/10.jpg',]
    var gridBox = document.querySelectorAll('.grid-item');

    gridBox.forEach(function(item){
        var img = document.createElement('img')
        var randomNmbrImg = randomNumber();

        img.src = images[randomNmbrImg];
        item.appendChild(img);

        img.addEventListener('click', function(){
            var randomNmbrImg = randomNumber();
            this.src = images[randomNmbrImg]
        });
    });
}

addRandomImage();