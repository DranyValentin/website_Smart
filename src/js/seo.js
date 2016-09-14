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

    var translateX = [-60, -60, -80, -80, -110, -130, -155, -50],
        translateY = [-40, 0, -40, 40, -50, -40, -25, 20],
        currentTX = translateX,
        currentTY = translateY

        console.log(translateX)

    var rotate = [-200, -150, -200, -100, -250, -275, 60, -140],
        currentAngel = rotate

    var scale = 1

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
            $seeds[i].currentTX = translateX[i] //*(i+1)/4
            $seeds[i].currentTY = translateY[i] //*i/50
            $seeds[i].currentAngel = rotate[i]  //+ 100*i 
            $seeds[i].currentScale = scale

            // Setup begin values
            $seeds[i].setAttribute("transform", 
                $translate( $seeds[i].currentTX, $seeds[i].currentTY) + 
                $scale($seeds[i].currentScale) +
                $rotate($seeds[i].currentAngel))

           // translateX = $seeds[i].currentTX
            console.log(translateX)
        }
    }

    function moveSeek(numSeek)
    {
        if ( $seeds[numSeek].currentTX > boxWidth/1.5 )
        {
            cancelAnimationFrame(requestAnimationFrameID)
            return
        }
       
        if ( $seeds[numSeek].currentScale > 0 )
        {
            $seeds[numSeek].setAttribute("transform", 
                $translate($seeds[numSeek].currentTX, $seeds[numSeek].currentTY) + 
                $scale($seeds[numSeek].currentScale) +
                $rotate($seeds[numSeek].currentAngel))

            $seeds[numSeek].currentScale -= 0.0005
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

    // $seeds[0].setAttribute("stroke", "red")
    // $seeds[1].setAttribute("stroke", "orange")
    // $seeds[2].setAttribute("stroke", "yellow")
    // $seeds[3].setAttribute("stroke", "green")
    // $seeds[4].setAttribute("stroke", "blue")
    // $seeds[5].setAttribute("stroke", "navy")
    // $seeds[6].setAttribute("stroke", "magenta")
    // $seeds[7].setAttribute("stroke", "black")
    initializeSeedsArray()
  
    var requestAnimationFrameID1 = requestAnimationFrame(doAnim1)

    setTimeout(function()
    {
        var requestAnimationFrameID2 = requestAnimationFrame(doAnim2)        
    },3000)

    setTimeout(function()
    {
        var requestAnimationFrameID3 = requestAnimationFrame(doAnim3)        
    },6000)

    setTimeout(function()
    {
        var requestAnimationFrameID4 = requestAnimationFrame(doAnim4)        
    },9000)

    setTimeout(function()
    {
        var requestAnimationFrameID5 = requestAnimationFrame(doAnim5)        
    },12000)

    setTimeout(function()
    {
        var requestAnimationFrameID6 = requestAnimationFrame(doAnim6)        
    },15000)

    setTimeout(function()
    {
        var requestAnimationFrameID7 = requestAnimationFrame(doAnim7)        
    },18000)

    setTimeout(function()
    {
        var requestAnimationFrameID8 = requestAnimationFrame(doAnim8)        
    },21000)

    function doAnim1()
    {
        moveSeek(0)
 
        requestAnimationFrameID1 = requestAnimationFrame(doAnim1)
    }

    function doAnim2()
    {
        moveSeek(1)
 
        requestAnimationFrameID2 = requestAnimationFrame(doAnim2)
    }

    function doAnim3()
    {
        moveSeek(2)
 
        requestAnimationFrameID3 = requestAnimationFrame(doAnim3)
    }

    function doAnim4()
    {
        moveSeek(3)
 
        requestAnimationFrameID4 = requestAnimationFrame(doAnim4)
    }

    function doAnim5()
    {
        moveSeek(4)
 
        requestAnimationFrameID5 = requestAnimationFrame(doAnim5)
    }

    function doAnim6()
    {
        moveSeek(5)
 
        requestAnimationFrameID6 = requestAnimationFrame(doAnim6)
    }

    function doAnim7()
    {
        moveSeek(6)
 
        requestAnimationFrameID7 = requestAnimationFrame(doAnim7)
    }

    function doAnim8()
    {
        moveSeek(7)
 
        requestAnimationFrameID8 = requestAnimationFrame(doAnim8)
    }
})()