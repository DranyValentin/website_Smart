(function()
{
	"use strict"

	console.log("Runing support.js")

// Color Background of Mobile Menu
    var $nav_menu = document.querySelector('.nav_menu')
    $nav_menu.className += ' bg_support_menu'
// END Color Background of Mobile Menu

// Animation
    var currentLight = 1
    var stepLight = 0.005

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

    var $sun = document.querySelector("#sun")

    var requestAnimationFrameSUN = requestAnimationFrame(doAnimSun)    
    function doAnimSun()
    {
        if ( currentLight > 1 || currentLight < 0 )
        {
            stepLight *= -1
        }
        else
        {
            stepLight
        }

        $sun.setAttribute("fill-opacity", currentLight)

        currentLight += stepLight

        requestAnimationFrameSUN = requestAnimationFrame(doAnimSun)
    }

 /// Bird   
    var bird1FirstX = 300,
        bird1FirstY = 150,
        bird2FirstX = 250,
        bird2FirstY = 100,
        bird3FirstX = 200,
        bird3FirstY = 50
    var stepBird = 0.005
    var alpha = 0
    var currentX,
        currentY

    var $bird1 = document.querySelector("#bird1"),
        $bird2 = document.querySelector("#bird2"),
        $bird3 = document.querySelector("#bird3")
    var $wingUpBird1 = $bird1.querySelector("#wingUpBird1"),
        $wingUpBird2 = $bird2.querySelector("#wingUpBird2"),
        $wingUpBird3 = $bird3.querySelector("#wingUpBird3")
    var $wingDownBird1 = $bird1.querySelector("#wingDownBird1"),
        $wingDownBird2 = $bird2.querySelector("#wingDownBird2"),
        $wingDownBird3 = $bird3.querySelector("#wingDownBird3")

    function startFly($bird, startX, startY, alphaX, alphaY, widthX, heightY)
    {
         var cx = startX + 25, 
            cy = startY,
            r = startX - cx

        currentX = cx + r * Math.cos(alpha*alphaX + stepBird)*widthX
        currentY = cy + r * Math.sin(alpha*alphaY + stepBird)*heightY
        $bird.setAttribute("transform", $translate(currentX,currentY))
    }
    
    startFly($bird1, bird1FirstX, bird1FirstY, 2, 1.5, 3, 2)
    startFly($bird2, bird2FirstX, bird2FirstY, 2, 1.5, 3, -2)
    startFly($bird3, bird3FirstX, bird3FirstY, 2, 1.5, -3,-2)

    var requestAnimationFrameBird = requestAnimationFrame(doAnimBird)

    function flightPath($bird, startX, startY, alphaX, alphaY, widthX, heightY)
    {
        var cx = startX + 25, 
            cy = startY,
            r = startX - cx

        currentX = cx + r * Math.cos(alpha*alphaX + stepBird)*widthX
        currentY = cy + r * Math.sin(alpha*alphaY + stepBird)*heightY
        alpha += stepBird

        $bird.setAttribute("transform", $translate(currentX,currentY))
    }


    function doAnimBird()
    {
       flightPath($bird1, bird1FirstX, bird1FirstY,   2, 1.5, 3, 2)
       flightPath($bird2, bird2FirstX, bird2FirstY, 1.2, 1.5, 3, -2)
       flightPath($bird3, bird3FirstX, bird3FirstY, 2, 1.5, -3, -2)


        var requestAnimationFrameBird = requestAnimationFrame(doAnimBird)
    }

    setInterval(function()
    {   
        $wingUpBird1.setAttribute("visibility", "hidden")
        $wingDownBird1.setAttribute("visibility", "visible")
    
        setTimeout(function()
        {   
            $wingUpBird1.setAttribute("visibility", "visible")
            $wingDownBird1.setAttribute("visibility", "hidden")
          }, 2500)
    }, 5000)
    
    setInterval(function()
    {   
        $wingUpBird2.setAttribute("visibility", "hidden")
        $wingDownBird2.setAttribute("visibility", "visible")
    
        setTimeout(function()
        {   
            $wingUpBird2.setAttribute("visibility", "visible")
            $wingDownBird2.setAttribute("visibility", "hidden")
        }, 2000)
    }, 4000)

     setInterval(function()
    {   
        $wingUpBird3.setAttribute("visibility", "hidden")
        $wingDownBird3.setAttribute("visibility", "visible")
    
        setTimeout(function()
        {   
            $wingUpBird3.setAttribute("visibility", "visible")
            $wingDownBird3.setAttribute("visibility", "hidden")
        }, 1500)
    }, 3000)

/// Ship
    var initTX = 285,
        initTY = 225
    var currentTX = initTX,
        currentTY = initTY

    var initScale = 0.15
    var currentScale = initScale
    var stepShip = 0.01

    var $ship = document.querySelector("#ship")

    $ship.setAttribute("transform", 
            $translate(currentTX, currentTY) + 
            $scale(currentScale))

    var requestAnimationFrameSHIP = requestAnimationFrame(doAnimShip)

    function doAnimShip()
    {
        if ( currentScale > 1 )
        {
            cancelAnimationFrame(requestAnimationFrame(doAnimShip))
            return
        }
        $ship.setAttribute("transform", 
            $translate(currentTX, currentTY) +
            $scale(currentScale))

        currentScale += stepShip
        currentTX -= 3.4
        currentTY -= 1.85

        requestAnimationFrameSHIP = requestAnimationFrame(doAnimShip)
    }
})()