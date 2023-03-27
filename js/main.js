(function($){

    window.scrollTo(0, 0);
	// data = [
    //     { 
    //         title: 'titre 1',
    //         chapeau: 'chapeau 1'
    //     },
    //     { 
    //         title: 'titre 2',
    //         chapeau: 'chapeau 2'
    //     }	
	// ];
	// console.log(data);

    // buildCards(data);
    // function buildCards(data){
    //     var source   = $("#card-template").html();
    //     var template = Handlebars.compile(source);
    //     var html = template({'card':data});
    //     $(".authors").prepend(html); 
    // }
    setTimeout(function() { 
        $('body').addClass('is-visible');
        window.scrollTo(0, 0);
    }, 1000);

    
    videojs('player1', {autoplay: true}); 
    videojs('player2', {autoplay: true}); 
    videojs('player3', {autoplay: true}); 
	videojs('player4', {autoplay: true}); 
    
  
})(jQuery);