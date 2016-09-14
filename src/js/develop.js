(function()
{
	"use strict"

	console.log("Runing develop.js")

// Color Background of Mobile Menu
    var $nav_menu = document.querySelector('.nav_menu')
    $nav_menu.className += ' bg_develop_menu'
// END Color Background of Mobile Menu
// Animation
    var step = 0.5
    var initialAngel = 0
    var $gearwheel1 = document.querySelector("#gearwheel1")
	var $gearwheel2 = document.querySelector("#gearwheel2")
	var $gearwheel3 = document.querySelector("#gearwheel3")												

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

    console.log(rotate(0))

  
    $gearwheel1.currentAngel = initialAngel
    $gearwheel2.currentAngel = initialAngel
    $gearwheel3.currentAngel = initialAngel


    var requestAnimationFrameID = requestAnimationFrame(doAnim)
 
    function doAnim()
    {
        // if ( $gearwheel1.currentAngel > 360 )
        // {
        //     cancelAnimationFrame(requestAnimationFrameID)
        //     return
        // }
       	// console.log($gearwheel1.currentAngel)
        $gearwheel1.setAttribute("transform", rotate($gearwheel1.currentAngel))
        $gearwheel2.setAttribute("transform", rotate($gearwheel2.currentAngel))
        $gearwheel3.setAttribute("transform", rotate($gearwheel3.currentAngel))
        $gearwheel1.currentAngel -= step * 3
        $gearwheel2.currentAngel += step
        $gearwheel3.currentAngel -= step
 
        requestAnimationFrameID = requestAnimationFrame(doAnim)
    }

   
})()