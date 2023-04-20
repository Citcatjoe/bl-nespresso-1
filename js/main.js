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
        // window.scrollTo(0, 0);
    }, 1000);

   // init controller
	var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

	// build scenes
	new ScrollMagic.Scene({triggerElement: "#parallax1"})
        .setTween("#parallax1 > div", {y: "50%", ease: Linear.easeNone}).triggerHook(0.8)
        //.addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#parallax2"})
        .setTween("#parallax2 > div", {y: "50%", ease: Linear.easeNone})
        // .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#parallax3"})
        .setTween("#parallax3 > div", {y: "50%", ease: Linear.easeNone})
        // .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#parallax4"})
        .setTween("#parallax4 > div", {y: "50%", ease: Linear.easeNone})
        // .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#parallax5"})
        .setTween("#parallax5 > div", {y: "50%", ease: Linear.easeNone})
        // .addIndicators()
        .addTo(controller);
    // videojs('player1', {autoplay: true}); 
    // videojs('player2', {autoplay: false}); 
    // videojs('player3', {autoplay: true}); 
	// videojs('player4', {autoplay: true}); 

    var controller2 = new ScrollMagic.Controller({globalSceneOptions: {duration: '100%'}});
    var svgCircleTl = new TimelineMax({ paused: true }),
        $svgCircle = $('#svg-circle'),
        $tasse = $svgCircle.find('#tasse'),

        $fleche14 = $svgCircle.find('#fleche-14'),

        $icon35 = $svgCircle.find('#icon-35'),
        
        $nb35 = $svgCircle.find('#nb-35'),
        $txt35 = $svgCircle.find('#txt-35'),
        $icon14 = $svgCircle.find('#icon-14'),
        $fleche14 = $svgCircle.find('#fleche-14'),
        $nb14 = $svgCircle.find('#nb-14'),
        $txt14 = $svgCircle.find('#txt-14'),
        $icon3 = $svgCircle.find('#icon-3'),
        $fleche3 = $svgCircle.find('#fleche-3'),
        $nb3 = $svgCircle.find('#nb-3'),
        $txt3 = $svgCircle.find('#txt-3'),
        $icon2 = $svgCircle.find('#icon-2'),
        $fleche2 = $svgCircle.find('#fleche-2'),
        $nb2 = $svgCircle.find('#nb-2'),
        $txt2 = $svgCircle.find('#txt-2'),
        $icon45 = $svgCircle.find('#icon-45'),
        $fleche45 = $svgCircle.find('#fleche-45'),
        $nb45 = $svgCircle.find('#nb-45'),
        $txt45 = $svgCircle.find('#txt-45'),
        $icon7 = $svgCircle.find('#icon-7'),
        $fleche7 = $svgCircle.find('#fleche-7'),
        $nb7 = $svgCircle.find('#nb-7'),
        $txt7 = $svgCircle.find('#txt-7'),
        $icon5 = $svgCircle.find('#icon-5'),
        $fleche5 = $svgCircle.find('#fleche-5'),
        $nb5 = $svgCircle.find('#nb-5'),
        $txt5 = $svgCircle.find('#txt-5');
        
        clearStage();
        function clearStage(){
            var clearSvgCircleTl = new TimelineMax();
            clearSvgCircleTl
                .set($tasse, { autoAlpha: 0, y: "-=80px", transformOrigin: "center center" })

                

                .set($icon35, { autoAlpha: 0, scale: 0, transformOrigin: "center center" })
                .set($nb35, { autoAlpha: 0, x: "+=30px", transformOrigin: "center center" })
                .set($txt35, { autoAlpha: 0, transformOrigin: "center center" })

                .set($fleche14, { autoAlpha: 0, transformOrigin: "center center" })
                .set($icon14, { autoAlpha: 0, scale: 0, transformOrigin: "center center" })
                .set($nb14, { autoAlpha: 0, x: "+=30px", transformOrigin: "center center" })
                .set($txt14, { autoAlpha: 0, transformOrigin: "center center" })
                
                .set($fleche3, { autoAlpha: 0, transformOrigin: "center center" })
                .set($icon3, { autoAlpha: 0, scale: 0, transformOrigin: "center center" })
                .set($nb3, { autoAlpha: 0, x: "+=30px", transformOrigin: "center center" })
                .set($txt3, { autoAlpha: 0, transformOrigin: "center center" })

                .set($fleche2, { autoAlpha: 0, transformOrigin: "center center" })
                .set($icon2, { autoAlpha: 0, scale: 0, transformOrigin: "center center" })
                .set($nb2, { autoAlpha: 0, x: "+=30px", transformOrigin: "center center" })
                .set($txt2, { autoAlpha: 0, transformOrigin: "center center" })
                
                .set($fleche45, { autoAlpha: 0, transformOrigin: "center center" })
                .set($icon45, { autoAlpha: 0, scale: 0, transformOrigin: "center center" })
                .set($nb45, { autoAlpha: 0, x: "+=30px", transformOrigin: "center center" })
                .set($txt45, { autoAlpha: 0, transformOrigin: "center center" })
                
                .set($fleche7, { autoAlpha: 0, transformOrigin: "center center" })
                .set($icon7, { autoAlpha: 0, scale: 0, transformOrigin: "center center" })
                .set($nb7, { autoAlpha: 0, x: "+=30px", transformOrigin: "center center" })
                .set($txt7, { autoAlpha: 0, transformOrigin: "center center" })
                
                .set($fleche5, { autoAlpha: 0, transformOrigin: "center center" })
                .set($icon5, { autoAlpha: 0, scale: 0, transformOrigin: "center center" })
                .set($nb5, { autoAlpha: 0, x: "+=30px", transformOrigin: "center center" })
                .set($txt5, { autoAlpha: 0, transformOrigin: "center center" });
                // .set($sceneBg, { autoAlpha: 0, transformOrigin: "center center" })
                // .set($scenePlant, { autoAlpha: 1, y: '-=50px', scale: 2.75, transformOrigin: "center center" })
                // .set($sceneGuy, { autoAlpha: 0, x: '-=80px', transformOrigin: "center center" })
                // .set($sceneBubble1, { autoAlpha: 1, y: "-=80px", scale: 0, transformOrigin: "center center" })
                // .set($sceneBubble2, { autoAlpha: 1, y: "-=80px", scale: 0, transformOrigin: "center center" })
                // .set($sceneBubble3, { autoAlpha: 1, y: "-=80px", scale: 0, transformOrigin: "center center" })
                // .set($sceneBubble4, { autoAlpha: 1, y: "-=80px", scale: 0, transformOrigin: "center center" })
                // .set($sceneBubble5, { autoAlpha: 1, y: "+=120px", scale: 0, transformOrigin: "center center" })
                // .set($sceneBubble6, { autoAlpha: 1, y: "+=120px", scale: 0, transformOrigin: "center center" })
                // .set($sceneBubble7, { autoAlpha: 1, y: "+=120px", scale: 0, transformOrigin: "center center" })
                // .set($sceneBubble8, { autoAlpha: 1, y: "+=120px", scale: 0, transformOrigin: "center center" })
                // .set($sceneBubble9, { autoAlpha: 1, y: "+=120px", scale: 0, transformOrigin: "center center" })
                // .set($sceneBubble10, { autoAlpha: 1, y: "+=120px", scale: 0, transformOrigin: "center center" })
                // .set($sceneFleche1, { autoAlpha: 0, transformOrigin: "center center" })
                // .set($sceneFleche2, { autoAlpha: 0, transformOrigin: "center center" })
                // .set($sceneFleche3, { autoAlpha: 0, transformOrigin: "center center" })
                // .set($sceneFleche4, { autoAlpha: 0, transformOrigin: "center center" })
                // .set($sceneFleche5, { autoAlpha: 0, transformOrigin: "center center" })
                // .set($sceneBullet1, { autoAlpha: 1, scale: 0, transformOrigin: "center center" })
                // .set($sceneBullet2, { autoAlpha: 1, scale: 0, transformOrigin: "center center" })
                // .set($sceneBullet3, { autoAlpha: 1, scale: 0, transformOrigin: "center center" })
                // .set($sceneBullet4, { autoAlpha: 1, scale: 0, transformOrigin: "center center" })
                // .set($sceneBullet5, { autoAlpha: 1, scale: 0, transformOrigin: "center center" })
                // .set($sceneTextBullet, { autoAlpha: 0, marginLeft: -50, scale: 0, transformOrigin: "center center" })
                // .set($sceneProgress, { autoAlpha: 0, transformOrigin: "center center" });
                
    
            return clearSvgCircleTl;
        }
        
        svgCircleTl
            .to($tasse, 1, { autoAlpha: 1, y: "0px", ease: Power4.easeOut })

            .to($icon35, .5, { autoAlpha: 1, scale: 1, ease: Power4.easeOut }, "-=0.250")
            .to($fleche14, .5, { autoAlpha: 1, ease: Power4.easeOut }, "-=0.4")
            .to($icon14, .5, { autoAlpha: 1, scale: 1, ease: Power4.easeOut }, "-=0.4")
            .to($fleche3, .5, { autoAlpha: 1, ease: Power4.easeOut }, "-=0.4")
            .to($icon3, .5, { autoAlpha: 1, scale: 1, ease: Power4.easeOut }, "-=0.4")
            .to($fleche2, .5, { autoAlpha: 1, ease: Power4.easeOut }, "-=0.4")
            .to($icon2, .5, { autoAlpha: 1, scale: 1, ease: Power4.easeOut }, "-=0.4")
            .to($fleche45, .5, { autoAlpha: 1, ease: Power4.easeOut }, "-=0.4")
            .to($icon45, .5, { autoAlpha: 1, scale: 1, ease: Power4.easeOut }, "-=0.4")
            .to($fleche7, .5, { autoAlpha: 1, ease: Power4.easeOut }, "-=0.4")
            .to($icon7, .5, { autoAlpha: 1, scale: 1, ease: Power4.easeOut }, "-=0.4")
            .to($fleche5, .5, { autoAlpha: 1, ease: Power4.easeOut }, "-=0.4")
            .to($icon5, .5, { autoAlpha: 1, scale: 1, ease: Power4.easeOut }, "-=0.4")

            .to($nb35, 1, { autoAlpha: 1, x: "-=30px", ease: Power4.easeOut })
            .to($txt35, 1, { autoAlpha: 1, ease: Power4.easeOut }, "-=0.6")
            
            
            .to($nb14, 1, { autoAlpha: 1,  x: "-=30px", ease: Power4.easeOut }, "-=0.4")
            .to($txt14, 1, { autoAlpha: 1, ease: Power4.easeOut }, "-=0.6")
            
            
            .to($nb3, 1, { autoAlpha: 1,  x: "-=30px", ease: Power4.easeOut }, "-=0.4")
            .to($txt3, 1, { autoAlpha: 1, ease: Power4.easeOut }, "-=0.6")
            
            
            .to($nb2, 1, { autoAlpha: 1,  x: "-=30px", ease: Power4.easeOut }, "-=0.4")
            .to($txt2, 1, { autoAlpha: 1, ease: Power4.easeOut }, "-=0.6")
            
            
            .to($nb45, 1, { autoAlpha: 1,  x: "-=30px", ease: Power4.easeOut }, "-=0.4")
            .to($txt45, 1, { autoAlpha: 1, ease: Power4.easeOut }, "-=0.6")
            
            
            .to($nb7, 1, { autoAlpha: 1,  x: "-=30px", ease: Power4.easeOut }, "-=0.4")
            .to($txt7, 1, { autoAlpha: 1, ease: Power4.easeOut }, "-=0.6")
            
            
            .to($nb5, 1, { autoAlpha: 1,  x: "-=30px", ease: Power4.easeOut }, "-=0.4")
            .to($txt5, 1, { autoAlpha: 1, ease: Power4.easeOut }, "-=0.6");
        
        
    //$scene = $('svg.scene-pesticides'),
    
    new ScrollMagic.Scene({triggerElement: "#svg-circle"})
    .on("enter", function (event) {
           svgCircleTl.play();
    }).triggerHook(0.4).addTo(controller2);


    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });


    new ScrollMagic.Scene({triggerElement: "#svg-steps"})
    .on("enter", function (event) {
           svgStepsTl.play();
    }).triggerHook(0.4).addTo(controller2);

    // numbersDone = false;
    // new ScrollMagic.Scene({triggerElement: "#numbers"})
    // .on("enter", function (event) {
    //     if (numbersDone ==false) {
    //         $('#numbers').find('.counter').counterUp({
    //           delay: 10, // the delay time in ms
    //           time: 3000 // the speed time in ms
    //       });
    //       numbersDone = true;
    //   }
    // }).triggerHook(0.4).addTo(controller2).addIndicators();

    var svgStepsTl = new TimelineMax({ paused: true }),
        $svgSteps = $('#svg-steps'),
        $st1icon = $svgSteps.find('#step1 img'),
        $st1txt = $svgSteps.find('#step1 div'),
        $st2icon = $svgSteps.find('#step2 img'),
        $st2txt = $svgSteps.find('#step2 div'),
        $st3icon = $svgSteps.find('#step3 img'),
        $st3txt = $svgSteps.find('#step3 div'),
        $st4icon = $svgSteps.find('#step4 img'),
        $st4txt = $svgSteps.find('#step4 div');
	
	
    clearStage2();
    function clearStage2(){
        var clearSvgSteps = new TimelineMax();
        clearSvgSteps
            .set($st1icon, { autoAlpha: 0, x: "-=30px", transformOrigin: "center center" })
            .set($st1txt, { autoAlpha: 0, x: "+=30px", transformOrigin: "center center" })
            .set($st2icon, { autoAlpha: 0, x: "-=30px", transformOrigin: "center center" })
            .set($st2txt, { autoAlpha: 0, x: "+=30px", transformOrigin: "center center" })
            .set($st3icon, { autoAlpha: 0, x: "-=30px", transformOrigin: "center center" })
            .set($st3txt, { autoAlpha: 0, x: "+=30px", transformOrigin: "center center" })
            .set($st4icon, { autoAlpha: 0, x: "-=30px", transformOrigin: "center center" })
            .set($st4txt, { autoAlpha: 0, x: "+=30px", transformOrigin: "center center" });
        return clearSvgSteps;
    }
                
    svgStepsTl
            .to($st1icon, .5, { autoAlpha: 1, x: "0px", ease: Power4.easeOut })
            .to($st1txt, .5, { autoAlpha: 1, x: "0px", ease: Power4.easeOut }, "-=0.250")
            .to($st2icon, .5, { autoAlpha: 1, x: "0px", ease: Power4.easeOut }, "-=0.250")
            .to($st2txt, .5, { autoAlpha: 1, x: "0px", ease: Power4.easeOut }, "-=0.250")
            .to($st3icon, .5, { autoAlpha: 1, x: "0px", ease: Power4.easeOut }, "-=0.250")
            .to($st3txt, .5, { autoAlpha: 1, x: "0px", ease: Power4.easeOut }, "-=0.250")
            .to($st4icon, .5, { autoAlpha: 1, x: "0px", ease: Power4.easeOut }, "-=0.250")
            .to($st4txt, .5, { autoAlpha: 1, x: "0px", ease: Power4.easeOut }, "-=0.250");
            







  
})(jQuery);