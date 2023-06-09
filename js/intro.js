(function($){


    $hero = $('.hero');
	$gradient = $hero.find('.gradient');
    $h1 = $hero.find('h1');
    $h1p1 = $hero.find('.part1');
    $h1p2 = $hero.find('.part2');
    $h2 = $hero.find('h2');
    $scroller = $hero.find('.scroller');
    $heroVW = $hero.find('.video-wrapper');


    tlIntroduction =  new TimelineMax({ paused: false });

    tlIntroduction
        .set([$h1p1], {autoAlpha: 0})
        .set([$h1p2], {autoAlpha: 0})
        .set([$gradient], {autoAlpha: 0})
        .set([$scroller], {autoAlpha: 0})
        .set([$h2], {autoAlpha: 0, yPercent: '+10', onComplete: test})

        //&.set([$heroVW], {css:{className:'+=is-blurred'}}, '+=3.0') 
		.to([$gradient], 1, {autoAlpha: .5}, '+=5.0')
        .to([$h1p1], 0, {autoAlpha: 1, ease: Power4.easeOut}, '+=1.0')
        .to([$h1p2], 0, {autoAlpha: 1, ease: Power4.easeOut}, '+=0.3')
        .to([$h2], 2, {autoAlpha: 1, yPercent: '-10', ease: Power4.easeOut}, '+=1.0')
        .to([$scroller], 1, {autoAlpha: 1, ease: Power4.easeOut}, '+=2.0')
        ;
    function test()
    {
        setTimeout(function() { 
            $heroVW.addClass('is-blurry');
        }, 7000);
        
    }

})(jQuery);