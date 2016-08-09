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

    var translateX = -110,
        translateY = -20,
        currentTX = translateX,
        currentTY = translateY

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
            $seeds[i].currentTX = -110
            $seeds[i].currentTY = -20
            $seeds[i].currentAngel = 0 + 100*i 
            $seeds[i].currentScale = 0.2

            // Setup begin values
            $seeds[i].setAttribute("transform", 
                $translate( $seeds[i].currentTX, $seeds[i].currentTY) + 
                $scale($seeds[i].currentScale) +
                $rotate($seeds[i].currentAngel))
        }
    }
    initializeSeedsArray()
  
    var requestAnimationFrameID = requestAnimationFrame(doAnim)

    function doAnim()
    {
        if ( $seeds[0].currentTX > boxWidth/2 )
        {
            cancelAnimationFrame(requestAnimationFrameID)
            return
        }
        
        for (var i = 0; i < $seeds.length - key; i++)
        {

             if ( $seeds[i].currentTX > boxWidth/2 )
            {
                ++key
                break
            }

            if ( $seeds[i].currentScale < 1 )
            {
                $seeds[i].setAttribute("transform", 
                    $translate($seeds[i].currentTX, $seeds[i].currentTY) + 
                    $scale($seeds[i].currentScale) +
                    $rotate($seeds[i].currentAngel))

                $seeds[i].currentScale += 0.005
            }
            else
            {
                $seeds[i].setAttribute("transform", 
                    $translate($seeds[i].currentTX, $seeds[i].currentTY) + 
                    $rotate($seeds[i].currentAngel))
            }

            $seeds[i].currentTX += step/5 + i/10
            $seeds[i].currentTY -= step/5 + i/10
            $seeds[i].currentAngel += step*-2.5 + i/30
        }
  
        requestAnimationFrameID = requestAnimationFrame(doAnim)
    }
})()