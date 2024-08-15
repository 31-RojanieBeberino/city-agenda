



// Countdown Event

let launchDate = new Date("August 30, 2024 12:00:00").getTime();


let timer = setInterval(tick, 1000);

function tick () {

let now = new Date().getTime();

let t = launchDate - now;

if (t > 0) {
    
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    
    if (days < 10) { days = "0" + days; }
    
    
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10) { hours = "0" + hours; }

   
    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    if (mins < 10) { mins = "0" + mins; }

    
    let secs = Math.floor((t % (1000 * 60)) / 1000);
    if (secs < 10) { secs = "0" + secs; }

   
    let time = `
        <div class="countLabel"> <h3>${days}</h3> <span>Days</span></div> <hr>
        <div class="countLabel"><h3>${hours}</h3> <span>Hours</span></div> <hr> 
        <div class="countLabel"><h3>${mins}</h3> <span>Minutes</span></div> <hr> 
        <div class="countLabel"><h3>${secs}</h3> <span>Seconds</span></div>
    `;

    document.querySelector('.countdown').innerHTML = time;
    }
}




// Event with payment Counter

let counters = [0, 0, 0, 0, 0, 0, 0];

function updateCounter(index) {
    document.getElementById('counter' + (index + 1)).innerText = counters[index];
}

function incrementCounter(index) {
    counters[index]++;
    updateCounter(index);
}

function decrementCounter(index) {
    if (counters[index] > 0) {  // Check if the counter is greater than 0
        counters[index]--;
        updateCounter(index);
    }
}



// Carousel Slider


$(document).ready(function(){
    var carouselWidth = $('.carousel-inner')[0].scrollWidth;
    var cardWidth = $('.carousel-item').width();

    var scrollPosition = 0;

    $('.carousel-control-next').on('click', function(){
        if (scrollPosition < (carouselWidth - (cardWidth * 4))){
            scrollPosition = scrollPosition + cardWidth;
        $('.carousel-inner').animate({scrollLeft: scrollPosition}, 1000);
        }
    });

    $('.carousel-control-prev').on('click', function(){
        if (scrollPosition > 0){
            scrollPosition = scrollPosition - cardWidth ;
        $('.carousel-inner').animate({scrollLeft: scrollPosition}, 1000);
        }
    });



    $('input[name="collapseGroup"]').on('click', function() {
        var selectedSection = $(this).val();
        $('.collapse').not('#' + selectedSection).slideUp(); // Hide all other sections
        $('#' + selectedSection).slideDown(); // Show the selected section
    });



    


    // Upload Section

    $('#uploadInput').change(function(e){
        let reader = new FileReader();
        reader.onload = function(e) {
            $('#uploadBanner').css('background-image', 'url(' + e.target.result + ')');
            $('.upload-text').hide();  // Hide the upload text when an image is selected
        }
        reader.readAsDataURL(this.files[0]);
    });
});