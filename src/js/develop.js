(function()
{
	"use strict"

	console.log("Runing develop.js")

// Color Background of Mobile Menu
    var $nav_menu = document.querySelector('.nav_menu')
    $nav_menu.className += ' bg_develop_menu'
// END Color Background of Mobile Menu
// Animation
    var step = 0.5,
    	initialAngel = 0,
    	initialCordX1Line1 = 112,
    	initialCordY1Line1 = 139,
    	initialCordX2Line1 = 111,
    	initialCordY2Line1 = 110,
    	initialCordX1Line2 = 104,
    	initialCordY1Line2 = 139,
    	initialCordX2Line2 = 104,
    	initialCordY2Line2 = 110,
    	deltaCoordX = 4,
    	deltaCoordY = 0


    var $gearwheel1 = document.querySelector("#gearwheel1")
	var $gearwheel2 = document.querySelector("#gearwheel2")
	var $gearwheel3 = document.querySelector("#gearwheel3")
	var $bigGear = document.querySelector("#big_gear")
	var $line1 = document.querySelector("#line1")
	var $line2 = document.querySelector("#line2")														

    // function $translate(tx,ty)
    // {
    //     return `translate(${tx} ${ty}) `
    // }

    // function $scale(scale)
    // {
    //     return `scale(${scale}) `
    // }

    function rotate(angel)
    {
         return `rotate(${angel}) `
    }    


  
    $gearwheel1.currentAngel = initialAngel
    $gearwheel2.currentAngel = initialAngel
    $gearwheel3.currentAngel = initialAngel
    $bigGear.currentAngel = initialAngel
    $line1.currentAngel = initialAngel
    $line2.currentAngel = initialAngel
    $line1.coordX1 = initialCordX1Line1
    $line1.coordY1 = initialCordY1Line1
    $line1.coordX2 = 49 + 61 * Math.cos($line1.currentAngel)
	$line1.coordY2 = 108 + 61 * Math.sin($line1.currentAngel)
    $line2.coordX1 = initialCordX1Line2
    $line2.coordY1 = initialCordY1Line2
    $line2.coordX2 = 49 + 61 * Math.cos($line2.currentAngel)
	$line2.coordY2 = 108 + 61 * Math.sin($line2.currentAngel)
    $line1.deltaX = deltaCoordX
	$line1.deltaY = deltaCoordY
	$line2.deltaX = -deltaCoordX
	$line2.deltaY = deltaCoordY
	    



    var requestAnimationFrameID = requestAnimationFrame(doAnim)
 
    function doAnim()
    {
		if ( $gearwheel1.currentAngel < -360 )
        {
            $gearwheel1.currentAngel += 360
        }        
        if ( $gearwheel2.currentAngel > 360 )
        {
            $gearwheel2.currentAngel -= 360
        }
        if ( $gearwheel3.currentAngel < -360 )
        {
            $gearwheel3.currentAngel += 360
        }
        
        if ( $bigGear.currentAngel > 360 )
        {
            $bigGear.currentAngel -= 360
            $line1.currentAngel = 0
			$line2.currentAngel = 0


			console.log($line1.coordX1)
			console.log($line1.coordY1)
			console.log($line2.coordX1)
			console.log($line2.coordY1)

			$line1.coordX1 = initialCordX1Line1
    		$line1.coordY1 = initialCordY1Line1	
    	    $line2.coordX1 = initialCordX1Line2
    		$line2.coordY1 = initialCordY1Line2
			$line1.deltaX = deltaCoordX
			$line1.deltaY = deltaCoordY
			$line2.deltaX = -deltaCoordX
    		$line2.deltaY = deltaCoordY
        }

        //Move gearwheel
        $gearwheel1.setAttribute("transform", rotate($gearwheel1.currentAngel))
        $gearwheel2.setAttribute("transform", rotate($gearwheel2.currentAngel))
        $gearwheel3.setAttribute("transform", rotate($gearwheel3.currentAngel))
        $gearwheel1.currentAngel -= step * 3
        $gearwheel2.currentAngel += step
        $gearwheel3.currentAngel -= step
 	    //End Move gearwheel
 	    
 	    //Move big cicle
 	    $bigGear.setAttribute("transform", rotate($bigGear.currentAngel))
 	    $bigGear.currentAngel += step
 	    //End Move big cicle

 	    // Change coordinates of line1 and line2
		$line1.setAttribute("x1", $line1.coordX1) 
		$line1.setAttribute("y1", $line1.coordY1) 
		$line2.setAttribute("x1", $line2.coordX1) 
		$line2.setAttribute("y1", $line2.coordY1) 

		$line1.setAttribute("x2", $line1.coordX2 + $line1.deltaX ) 
		$line1.setAttribute("y2", $line1.coordY2 + $line1.deltaY ) 
		$line2.setAttribute("x2", $line2.coordX2 + $line2.deltaX ) 
		$line2.setAttribute("y2", $line2.coordY2 + $line2.deltaY) 
		$line1.coordX2 = 49 + 61 * Math.cos($line1.currentAngel)
		$line1.coordY2 = 108 + 61 * Math.sin($line1.currentAngel)
		$line2.coordX2 = 49 + 61 * Math.cos($line2.currentAngel)
		$line2.coordY2 = 108 + 61 * Math.sin($line2.currentAngel)
		$line1.currentAngel += step /57.5
		$line2.currentAngel += step/57.5

		
		if ( 0 < $bigGear.currentAngel && $bigGear.currentAngel < 45)
        {
            $line1.deltaX -= 0.03
			$line1.deltaY -= 0.1
			$line2.deltaX += 0.05
			$line2.deltaY += 0.02

			$line1.coordX1 -= 0.035
			$line1.coordY1 -= 0.06
			$line2.coordX1 += 0.05
			$line2.coordY1 += 0.04
        }
        else if ( 0 < $bigGear.currentAngel && $bigGear.currentAngel < 90)
        {
            

        }
        else if ( 90 < $bigGear.currentAngel && $bigGear.currentAngel < 270)
        {
            $line1.deltaY += 0.02
            $line2.deltaX -= 0.01
         	$line2.deltaY += 0.01   
        }
        else if ( 270 < $bigGear.currentAngel && $bigGear.currentAngel < 360)
        {
        	$line1.coordX1 += 0.01745
			$line1.coordY1 += 0.02985
			$line2.coordX1 -= 0.02485
			$line2.coordY1 -= 0.0196

        	$line1.deltaY += 0.018                     	
            $line2.deltaX -= 0.006
			$line2.deltaY -= 0.022                     	
        }
        // End change coordinates X2, Y2 of line1 and line2

        requestAnimationFrameID = requestAnimationFrame(doAnim)
    }

   
})()