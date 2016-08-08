(function()
{
	"use strict"

	console.log("Runing owl.js!")

	// var $fig_design = document.querySelector('.fig_design')
	// var $p = document.querySelector('p')
	// var $nav_menu = document.querySelector('.nav_menu')
	// var $mob_menu = document.querySelector('.mob_menu')

	// console.log($nav_menu.offsetHeight)
	// $mob_menu.addEventListener("click", function(event)
	// {
		
	// 	 if ( $nav_menu.className == 'nav_menu'){
	// 	 	$fig_design.className += ' opacity_zero'
	// 	 	$nav_menu.className += ' visible_menu'
	// 	 	$nav_menu.style.height = $nav_menu.offsetHeight-$fig_design.offsetHeight + "px"
	// 		console.log($p.style.marginTop)
	// 	 }
	// 	 else{
	// 		$fig_design.className = $fig_design.classList[0]
	// 	 	$nav_menu.className = 'nav_menu'
	// 	 	$p.style.marginTop = 0
	// 	}

	// 	event.preventDefault()
	// })

	// document.addEventListener('reload', function(event)
	// {
	// 	$p.style.marginTop = $nav_menu.offsetHeight-$fig_design.offsetHeight + "px"
	// 	 	console.log($p.style.marginTop)
	// })

	var offsetHead = 300,
		offsetBody = 200,
		offsetWing = 400,
		offsetTail = 100,
		offsetPaw  = 300,
		offsetDown = 250,
		stepHead = 0.5,
		stepBody = 0.5,
		stepWing = 0.6,
		stepTail = 0.5,
		stepPaw = 0.5,
		stepDown = 0.5,
		beginBody = true,
		beginWing = true,
		beginTail = true,
		beginPaw = true,
		beginDown = true,
		theHead = document.querySelector("#head"),
		theBody = document.querySelector("#body"),
		theWing = document.querySelector("#wing"),
		theTail = document.querySelector("#tail"),
		thePaw = document.querySelector("#paw"),
		theDown = document.querySelector("#down")

	theHead.current = offsetHead
	theBody.current = offsetBody
	theWing.current = offsetWing
	theTail.current = offsetTail
	thePaw.current = offsetPaw
	theDown.current = offsetDown

	var requestAnimationFrameHEAD = requestAnimationFrame(doAnim),
		requestAnimationFrameBODY,
		requestAnimationFrameWING,
		requestAnimationFrameTAIL,
		requestAnimationFramePAW,
		requestAnimationFrameDOWN


	function doAnim()
	{	
		if ( theHead.current < offsetHead / 1.15 && beginBody )
		{
			requestAnimationFrameBODY = requestAnimationFrame(doAnimBody)
			beginBody = false;
		}

		if ( theHead.current < 0 )
		{
			cancelAnimationFrame(requestAnimationFrameHEAD)
			return
		}

		theHead.style.strokeDashoffset = theHead.current
		theHead.current -= stepHead
		requestAnimationFrameHEAD = requestAnimationFrame(doAnim)
	}

	function doAnimBody()
	{
		if ( theBody.current < offsetBody / 1.15 && beginWing )
		{
			requestAnimationFrameWING = requestAnimationFrame(doAnimWing)
			beginWing = false;
		}

		if ( theBody.current < 0 )
		{
			cancelAnimationFrame(requestAnimationFrameBODY)
			return
		}

		theBody.style.strokeDashoffset = theBody.current
		theBody.current -= stepBody
		requestAnimationFrameBODY = requestAnimationFrame(doAnimBody)
	}

	function doAnimWing()
	{
		if ( theWing.current < offsetWing / 1.15 && beginTail )
		{
			requestAnimationFrameTAIL = requestAnimationFrame(doAnimTail)
			beginTail = false;
		}
		
		if ( theWing.current < 0 )
		{
			cancelAnimationFrame(requestAnimationFrameWING)
			return
		}

		theWing.style.strokeDashoffset = theWing.current
		theWing.current -= stepWing
		requestAnimationFrameWING = requestAnimationFrame(doAnimWing)
	}

	function doAnimTail()
	{
		if ( theTail.current < offsetTail / 1.15 && beginPaw )
		{
			requestAnimationFramePAW = requestAnimationFrame(doAnimPaw)
			beginPaw = false;
		}
		
		if ( theTail.current < 0 )
		{
			cancelAnimationFrame(requestAnimationFrameTAIL)
			return
		}

		theTail.style.strokeDashoffset = theTail.current
		theTail.current -= stepTail
		requestAnimationFrameTAIL = requestAnimationFrame(doAnimTail)
	}

	function doAnimPaw()
	{
		if ( thePaw.current < offsetPaw / 1.15 && beginDown )
		{
			requestAnimationFrameDOWN = requestAnimationFrame(doAnimDown)
			beginDown = false;
		}
		
		if ( thePaw.current < 0 )
		{
			cancelAnimationFrame(requestAnimationFramePAW)
			return
		}

		thePaw.style.strokeDashoffset = thePaw.current
		thePaw.current -= stepPaw
		requestAnimationFramePAW = requestAnimationFrame(doAnimPaw)
	}

	function doAnimDown()
	{
		if ( theDown.current < 0 )
		{
			cancelAnimationFrame(requestAnimationFrameDOWN)
			return
		}

		theDown.style.strokeDashoffset = theDown.current
		theDown.current -= stepDown
		requestAnimationFrameDOWN = requestAnimationFrame(doAnimDown)
	}	
})()