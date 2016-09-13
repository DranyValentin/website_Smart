(function()
{
	"use strict"

	console.log("Runing seo.js!")

// Color Background of Mobile Menu
    var $nav_menu = document.querySelector('.nav_menu')
    $nav_menu.className += ' bg_seo_menu'
// END Color Background of Mobile Menu

// Animation
    var step = 0.5
    var boxWidth = svgElementSeo.width.baseVal.value
    var boxHeight = svgElementSeo.height.baseVal.value

    var $seed = document.querySelector("#flySeeds")
    var $seeds = $seed.querySelectorAll('use')

    var translateX = -350,
        translateY = -20,
        currentTX = translateX,
        currentTY = translateY

        console.log(translateX)

    var rotate = 0,
        currentAngel = rotate

    var scale = 0.2,
        currentScale = scale

    var key = 0

    function $translate(tx,ty)
    {
        return `translate(${tx} ${ty}) `
    }

    function $scale(scale)
    {
        return `scale(${scale}) `
    }

    function $rotate(angel)
    {
        return `rotate(${angel}) `
    }    

    function initializeSeedsArray()
    {
        for ( var i = 0; i < $seeds.length; i++ )
        {
            $seeds[i].currentTX = translateX*(i+1)/4
            $seeds[i].currentTY = translateY*i/50
            $seeds[i].currentAngel = 0 + 100*i 
            $seeds[i].currentScale = 0.2

            // Setup begin values
            $seeds[i].setAttribute("transform", 
                $translate( $seeds[i].currentTX, $seeds[i].currentTY) + 
                $scale($seeds[i].currentScale) +
                $rotate($seeds[i].currentAngel))

            translateX = $seeds[i].currentTX
            console.log(translateX)
        }
    }

    function moveSeek(numSeek)
    {
        if ( $seeds[numSeek].currentTX > boxWidth/2 )
        {
            cancelAnimationFrame(requestAnimationFrameID)
            return
        }
       
        if ( $seeds[numSeek].currentScale < 1 )
        {
            $seeds[numSeek].setAttribute("transform", 
                $translate($seeds[numSeek].currentTX, $seeds[numSeek].currentTY) + 
                $scale($seeds[numSeek].currentScale) +
                $rotate($seeds[numSeek].currentAngel))

            $seeds[numSeek].currentScale += 0.005
        }
        else
        {
            $seeds[numSeek].setAttribute("transform", 
                $translate($seeds[numSeek].currentTX, $seeds[numSeek].currentTY) + 
                $rotate($seeds[numSeek].currentAngel))
        }

        $seeds[numSeek].currentTX += step/5 + numSeek/10
        $seeds[numSeek].currentTY -= step/5 + numSeek/10
        $seeds[numSeek].currentAngel += step*-2.5 + numSeek/30
    }

    initializeSeedsArray()
  
    var requestAnimationFrameID = requestAnimationFrame(doAnim1)

    setTimeout(function()
    {
        var requestAnimationFrameID = requestAnimationFrame(doAnim2)        
    },3000)

    setTimeout(function()
    {
        var requestAnimationFrameID = requestAnimationFrame(doAnim3)        
    },6000)

    setTimeout(function()
    {
        var requestAnimationFrameID = requestAnimationFrame(doAnim4)        
    },9000)

    setTimeout(function()
    {
        var requestAnimationFrameID = requestAnimationFrame(doAnim5)        
    },12000)

    setTimeout(function()
    {
        var requestAnimationFrameID = requestAnimationFrame(doAnim6)        
    },15000)

    setTimeout(function()
    {
        var requestAnimationFrameID = requestAnimationFrame(doAnim7)        
    },18000)

    function doAnim1()
    {
        moveSeek(0)
 
        requestAnimationFrameID = requestAnimationFrame(doAnim1)
    }

    function doAnim2()
    {
        moveSeek(1)
 
        requestAnimationFrameID = requestAnimationFrame(doAnim2)
    }

    function doAnim3()
    {
        moveSeek(2)
 
        requestAnimationFrameID = requestAnimationFrame(doAnim3)
    }

    function doAnim4()
    {
        moveSeek(3)
 
        requestAnimationFrameID = requestAnimationFrame(doAnim4)
    }

    function doAnim5()
    {
        moveSeek(4)
 
        requestAnimationFrameID = requestAnimationFrame(doAnim5)
    }

    function doAnim6()
    {
        moveSeek(5)
 
        requestAnimationFrameID = requestAnimationFrame(doAnim6)
    }

    function doAnim7()
    {
        moveSeek(6)
 
        requestAnimationFrameID = requestAnimationFrame(doAnim7)
    }
})()