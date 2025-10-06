        var slides = $('.slide');
        var currentSlide = 1;

        function changeSlide(){
            $('.slide').css('opacity', '0');
            var cssObj = {opacity: '1'};
            $('#slide'+currentSlide).animate(cssObj, 500);
            var totalSlides = $('.slide').length;
            var progress = (currentSlide/totalSlides) * 100;
            var obj = {width: progress + '%'};
            $('.progress-bar').animate(obj, 500);
        }
        changeSlide();

        function next(){
            if(currentSlide < slides.length){
                currentSlide = currentSlide + 1;
            }
            else{
                currentSlide = 1;
            }
            changeSlide();
            time();
        }
        $("#next-icon").click(next);

        function time(){
            var timer =  setTimeout(next, 7000);
        }


        function previous(){
            if(currentSlide > 1){
                currentSlide = currentSlide - 1;
            }
            else{
                currentSlide = slides.length;
            }
            changeSlide();
        }
        $('#previous-icon').click(previous);

        function goTo(event){
            var clicked = event.currentTarget;
            var someText = $(clicked).text();
            currentSlide = parseInt(someText);
            changeSlide();
        }
        $('button').click(goTo);
