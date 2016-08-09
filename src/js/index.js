(function()
{
	"use strict"

	NodeList.prototype[Symbol.iterator] = [][Symbol.iterator]
	console.log("Runing index.js!!!")

	function $(selector)
	{
		return document.querySelector(selector)
	}

	function $All(selector)
	{
		return document.querySelectorAll(selector)
	}
	
	var $aside = $('.aside')
	var $nav_menu = $('.nav_menu')


// Update Width for Pages and Add Color Background for Mobile Menu 
	if ( location.pathname != '/' )
		$aside.className += " width"
	else
		$nav_menu.className += ' bg_main_menu'

// Add Opacity for Navigation Menu	
	if ( location.pathname == '/design_.html' )
		$('.design').className = $('.design').className.concat(' selected')
	if ( location.pathname == '/develop_.html' )
		$('.develop').className = $('.develop').className.concat(' selected')
	if ( location.pathname == '/tech_.html' )
		$('.tech').className = $('.tech').className.concat(' selected')
	if ( location.pathname == '/seo_.html' )
		$('.seo').className = $('.seo').className.concat(' selected')
	if ( location.pathname == '/support_.html' )
		$('.support').className = $('.support').className.concat(' selected')
	if ( location.pathname == '/projects_.html' )
		$('.project').className = $('.project').className.concat(' selected')
	if ( location.pathname == '/contacts_.html' )
		$('.contacts').className = $('.contacts').className.concat(' selected')

// Text link animate (print, run and hide)
 	var $text = $("#smart").querySelectorAll("tspan")
 	var $text1 = $("#text_prof").querySelectorAll("tspan")
 	var $texts = Array.from($text).concat(Array.from($text1))
 	var index = 0
 	var	dxFactor = -6;
	var opacityFactor = 1

 //Function 'letter' print letter
    function letter(node, nodes)
    {
       	if ( index > nodes.length )
    	{
    		index = 0;
    		dx()
    		return
   		}
   	
    	node.style.visibility = "visible"
       	setTimeout(function() {letter(nodes[index++], nodes)}, 250 )
    }

//Fuction 'dx' move and opacity letter
	function dx()
	{
		if ( dxFactor == 1500 ) return
		
		$texts[$texts.length-1].setAttribute("dx", dxFactor++)
		$texts[$texts.length-1].setAttribute("fill-opacity", opacityFactor -= 0.05)
		$texts[$texts.length-2].setAttribute("dx", dxFactor++)
		$texts[$texts.length-2].setAttribute("fill-opacity", opacityFactor -= 0.05)		
		$texts[$texts.length-3].setAttribute("dx", dxFactor++)
		$texts[$texts.length-3].setAttribute("fill-opacity", opacityFactor -= 0.05)
		$texts[$texts.length-4].setAttribute("dx", dxFactor++)
		$texts[$texts.length-4].setAttribute("fill-opacity", opacityFactor -= 0.005)
		$texts[$texts.length-5].setAttribute("dx", dxFactor++)
		$texts[$texts.length-5].setAttribute("fill-opacity", opacityFactor -= 0.005)
		$texts[$texts.length-6].setAttribute("dx", dxFactor++)
		$texts[$texts.length-6].setAttribute("fill-opacity", opacityFactor -= 0.005)		
		$texts[$texts.length-7].setAttribute("dx", dxFactor++)
		$texts[$texts.length-7].setAttribute("fill-opacity", opacityFactor -= 0.001)
		$texts[$texts.length-8].setAttribute("dx", dxFactor++)
		$texts[$texts.length-8].setAttribute("fill-opacity", opacityFactor -= 0.001)

		setTimeout(dx, 100)
	}

	 letter($texts[0], $texts)
// END Text link animate (print, run and hide)

// Mobile Menu
	// Create icon
	var $fa_bars = document.createElement('i')
	$fa_bars.className = "fa fa-bars fa-2x"

	// Create Text 'Меню'
	var $text_menu = document.createTextNode('Меню')

	// Create mobile Menu
	var $mob_menu = document.createElement('div')
	$mob_menu.appendChild($text_menu)
	$mob_menu.appendChild($fa_bars)
	$mob_menu.className = 'mob_menu'
	
	// Add Mobile Menu in Nav
	var $nav = $('.nav')
	$nav.insertBefore($mob_menu, $nav.firstChild)

	// Event Click for Mobile Menu
	var $className // container Class Name
	var $nav_menu = $('.nav_menu')
	$mob_menu = $('.mob_menu')
	$mob_menu.addEventListener("click", function(event)
	{
		 if ( !$nav_menu.classList[$nav_menu.classList.length] &&
		 		$nav_menu.classList[$nav_menu.classList.length-1] != 'visible_menu'){
		 	$className = $nav_menu.className
		 	$nav_menu.className += ' visible_menu'
		 }
		 else
		 	$nav_menu.className = $className
	})
// End Mobile Menu
})()