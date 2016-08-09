(function()
{
	"use strict"

	console.log("Runing icons.js")

// Color Background of Mobile Menu
    var $nav_menu = document.querySelector('.nav_menu')
    $nav_menu.className += ' bg_tech_menu'
// END Color Background of Mobile Menu    


// add 'id' for hide icon
	function idIcon()
	{	
		var $svgs = document.querySelector('.aside').querySelectorAll('svg')
		var g = []
		var index = 0

		Array.from($svgs).forEach(function ($svg, index)
		{
			g[index] = $svg.querySelector("g")
			g[index++].setAttribute("id", "icon" + index)
		})
	}
	idIcon()
// END add 'id' for hide icon

// Animation Icon
    var initialScale = 1
    var currentScaleIcon1 = initialScale,
    	currentScaleIcon2 = initialScale,
    	currentScaleIcon3 = initialScale,
    	currentScaleIcon4 = initialScale,
    	currentScaleIcon5 = initialScale,
    	currentScaleIcon6 = initialScale,
    	currentScaleIcon7 = initialScale,
    	currentScaleIcon8 = initialScale,
    	currentScaleIcon9 = initialScale
    var step = 0.005,
    	stepIcon1 = step,
    	stepIcon2 = step,
    	stepIcon3 = 0.008,
    	stepIcon4 = 0.009,
    	stepIcon5 = 0.01,
    	stepIcon6 = 0.011,
    	stepIcon7 = 0.012,
    	stepIcon8 = 0.013,
    	stepIcon9 = 0.014
    var initOpacityIconCSS3 = 0,
    	initOpacityIconHTML5 = 0,
    	initOpacityIconMySQL = 0,
    	initOpacityIconPHP = 0,
    	initOpacityIconJS = 0,
    	initOpacityIconF = 0,
    	initOpacityIconW = 0,
    	initOpacityIconDrupal = 0,
    	initOpacityIconJoomla = 0
    var maxLimit = 1.2
    var minLimit = 0
    
    var transformObject = svgElement.createSVGTransform()
    
    var $iconCSS3 = document.querySelector('#iconCSS3')
    var $iconHTML5 = document.querySelector('#iconHTML5')
    var $iconMySQL = document.querySelector('#iconMySQL')
    var $iconPHP = document.querySelector('#iconPHP')
    var $iconJS = document.querySelector('#iconJS')
    var $iconF = document.querySelector('#iconF')
    var $iconW = document.querySelector('#iconW')
    var $iconDrupal = document.querySelector('#iconDrupal')
    var $iconJoomla = document.querySelector('#iconJoomla')

    var $iconCSS3big = document.querySelector('#iconCSS3big')
    var $iconHTML5big = document.querySelector('#iconHTML5big')
    var $iconMySQLbig = document.querySelector('#iconMySQLbig')
    var $iconPHPbig = document.querySelector('#iconPHPbig')
    var $iconJSbig = document.querySelector('#iconJSbig')
    var $iconFbig = document.querySelector('#iconFbig')
    var $iconWbig = document.querySelector('#iconWbig')
    var $iconDrupalbig = document.querySelector('#iconDrupalbig')
    var $iconJoomlabig = document.querySelector('#iconJoomlabig')

    var requestAnimationFrameICON1,
    	requestAnimationFrameICON2,
    	requestAnimationFrameICON3,
    	requestAnimationFrameICON4,
    	requestAnimationFrameICON5,
    	requestAnimationFrameICON6,
    	requestAnimationFrameICON7,
    	requestAnimationFrameICON8,
    	requestAnimationFrameICON9,
    	requestAnimationFrameICONbig
    
    $iconCSS3.transform.baseVal.appendItem(transformObject)
    $iconHTML5.transform.baseVal.appendItem(transformObject)
    $iconMySQL.transform.baseVal.appendItem(transformObject)
    $iconPHP.transform.baseVal.appendItem(transformObject)
    $iconJS.transform.baseVal.appendItem(transformObject)
    $iconF.transform.baseVal.appendItem(transformObject)
    $iconW.transform.baseVal.appendItem(transformObject)
    $iconDrupal.transform.baseVal.appendItem(transformObject)
    $iconJoomla.transform.baseVal.appendItem(transformObject)

    requestAnimationFrameICON1 = requestAnimationFrame(doAnim)

    setTimeout(function(){
    	requestAnimationFrameICON2 = requestAnimationFrame(doAnimIcon2)
    }, 3000)

    setTimeout(function(){
    	requestAnimationFrameICON3 = requestAnimationFrame(doAnimIcon3)
    }, 5000)

    setTimeout(function(){
    	requestAnimationFrameICON4 = requestAnimationFrame(doAnimIcon4)
    }, 6000)

    setTimeout(function(){
    	requestAnimationFrameICON5 = requestAnimationFrame(doAnimIcon5)
    }, 7000)

    setTimeout(function(){
    	requestAnimationFrameICON6 = requestAnimationFrame(doAnimIcon6)
    }, 8500)

    setTimeout(function(){
    	requestAnimationFrameICON7 = requestAnimationFrame(doAnimIcon7)
    }, 9500)

    setTimeout(function(){
    	requestAnimationFrameICON8 = requestAnimationFrame(doAnimIcon8)
    }, 10500)

     setTimeout(function(){
    	requestAnimationFrameICON9 = requestAnimationFrame(doAnimIcon9)
    }, 11500)

     setTimeout(function(){
    	requestAnimationFrameICONbig = requestAnimationFrame(doAnimIconJoomlabig)
    }, 12500)

    function changeSign( value )
    {
    	return -value
    }

    function doAnim()
    {
    	if ( currentScaleIcon1 > maxLimit) 
   			stepIcon1 = changeSign(stepIcon1)
   		
    	if ( currentScaleIcon1 < minLimit )
    	{
    		cancelAnimationFrame(requestAnimationFrameICON1)
    		return
    	}

        $iconCSS3.setAttribute("transform", "scale(" + currentScaleIcon1 + ")")
    	//$iconCSS3.transform.baseVal[0].setScale(currentScaleIcon1, currentScaleIcon1)
    	currentScaleIcon1 += stepIcon1
    	requestAnimationFrameICON1 = requestAnimationFrame(doAnim)
	}
	
	function doAnimIcon2()
    {
    	if ( currentScaleIcon2 > maxLimit) 
   			stepIcon2 = changeSign(stepIcon2)
   		
    	if ( currentScaleIcon2 < minLimit )
    	{
    		cancelAnimationFrame(requestAnimationFrameICON2)
    		return
    	}
    	
    	initOpacityIconCSS3 += Math.abs(stepIcon2) * 1.5
    	if ( initOpacityIconCSS3 < 1 ) 
    		$iconCSS3big.style.opacity = initOpacityIconCSS3

       	$iconHTML5.setAttribute("transform", "scale(" + currentScaleIcon2 + ")")
    	currentScaleIcon2 += stepIcon2
    	requestAnimationFrameICON2 = requestAnimationFrame(doAnimIcon2)
	}

	function doAnimIcon3()
    {
    	if ( currentScaleIcon3 > maxLimit) 
   			stepIcon3 = changeSign(stepIcon3)
   		
    	if ( currentScaleIcon3 < minLimit )
    	{
    		cancelAnimationFrame(requestAnimationFrameICON3)
    		return
    	}

    	initOpacityIconHTML5 += Math.abs(stepIcon3) * 1.5
    	if ( initOpacityIconHTML5 < 1 ) 
    		$iconHTML5big.style.opacity = initOpacityIconHTML5

    	$iconMySQL.setAttribute("transform", "scale(" + currentScaleIcon3 + ")")
    	currentScaleIcon3 += stepIcon3
    	requestAnimationFrameICON3 = requestAnimationFrame(doAnimIcon3)
	}

	function doAnimIcon4()
    {
    	if ( currentScaleIcon4 > maxLimit) 
   			stepIcon4 = changeSign(stepIcon4)
   		
    	if ( currentScaleIcon4 < minLimit )
    	{
    		cancelAnimationFrame(requestAnimationFrameICON4)
    		return
	   	}

	   	initOpacityIconMySQL += Math.abs(stepIcon4) * 1.5
    	if ( initOpacityIconMySQL < 1 ) 
    		$iconMySQLbig.style.opacity = initOpacityIconMySQL

    	$iconPHP.setAttribute("transform", "scale(" + currentScaleIcon4 + ")")
    	currentScaleIcon4 += stepIcon4
    	requestAnimationFrameICON4 = requestAnimationFrame(doAnimIcon4)
	}

	function doAnimIcon5()
    {
    	if ( currentScaleIcon5 > maxLimit) 
   			stepIcon5 = changeSign(stepIcon5)
   		
    	if ( currentScaleIcon5 < minLimit )
    	{
    		cancelAnimationFrame(requestAnimationFrameICON5)
    		return
    	}

    	initOpacityIconPHP += Math.abs(stepIcon5) * 1.5
    	if ( initOpacityIconPHP < 1 ) 
    		$iconPHPbig.style.opacity = initOpacityIconPHP

    	$iconJS.setAttribute("transform", "scale(" + currentScaleIcon5 + ")")
    	currentScaleIcon5 += stepIcon5
    	requestAnimationFrameICON5 = requestAnimationFrame(doAnimIcon5)
	}

	function doAnimIcon6()
    {
    	if ( currentScaleIcon6 > maxLimit) 
   			stepIcon6 = changeSign(stepIcon6)
   		
    	if ( currentScaleIcon6 < minLimit )
    	{
    		cancelAnimationFrame(requestAnimationFrameICON6)
    		return
    	}

    	initOpacityIconJS += Math.abs(stepIcon6) * 1.5
    	if ( initOpacityIconJS < 1 ) 
    		$iconJSbig.style.opacity = initOpacityIconJS

    	$iconF.setAttribute("transform", "scale(" + currentScaleIcon6 + ")")
    	currentScaleIcon6 += stepIcon6
    	requestAnimationFrameICON6 = requestAnimationFrame(doAnimIcon6)
	}

	function doAnimIcon7()
    {
    	if ( currentScaleIcon7 > maxLimit) 
   			stepIcon7 = changeSign(stepIcon7)
   		
    	if ( currentScaleIcon7 < minLimit )
    	{
    		cancelAnimationFrame(requestAnimationFrameICON7)
    		return
    	}

    	initOpacityIconF += Math.abs(stepIcon7) * 1.5
    	if ( initOpacityIconF < 1 ) 
    		$iconFbig.style.opacity = initOpacityIconF

    	$iconW.setAttribute("transform", "scale(" + currentScaleIcon7 + ")")
    	currentScaleIcon7 += stepIcon7
    	requestAnimationFrameICON7 = requestAnimationFrame(doAnimIcon7)
	}

	function doAnimIcon8()
    {
    	if ( currentScaleIcon8 > maxLimit) 
   			stepIcon8 = changeSign(stepIcon8)
   		
    	if ( currentScaleIcon8 < minLimit )
    	{
    		cancelAnimationFrame(requestAnimationFrameICON8)
    		return
    	}

    	initOpacityIconW += Math.abs(stepIcon8) * 1.5
    	if ( initOpacityIconW < 1 ) 
    		$iconWbig.style.opacity = initOpacityIconW

    	$iconDrupal.setAttribute("transform", "scale(" + currentScaleIcon8 + ")")
    	currentScaleIcon8 += stepIcon8
    	requestAnimationFrameICON8 = requestAnimationFrame(doAnimIcon8)
	}

	function doAnimIcon9()
    {
    	if ( currentScaleIcon9 > maxLimit) 
   			stepIcon9 = changeSign(stepIcon9)
   		
    	if ( currentScaleIcon9 < minLimit )
    	{
    		cancelAnimationFrame(requestAnimationFrameICON9)
    		return
    	}

    	initOpacityIconDrupal += Math.abs(stepIcon9) * 1.5
    	if ( initOpacityIconDrupal < 1 ) 
    		$iconDrupalbig.style.opacity = initOpacityIconDrupal

    	$iconJoomla.setAttribute("transform", "scale(" + currentScaleIcon9 + ")")
    	currentScaleIcon9 += stepIcon9
    	requestAnimationFrameICON9 = requestAnimationFrame(doAnimIcon9)
	}

	function doAnimIconJoomlabig()
    {
       	initOpacityIconJoomla += Math.abs(step) * 1.5
    	if ( initOpacityIconJoomla > 1 )
    		return 

   		$iconJoomlabig.style.opacity = initOpacityIconJoomla

    	requestAnimationFrameICONbig = requestAnimationFrame(doAnimIconJoomlabig)
	}
})()