
Problema 1
Coding in function colorOf. function accept 3 parameter:r gb. 
It means value of color red green and blue. the value range is 0-255.
Use toString(16) Convert numbers r g b to hex string form. 
at last, combine them to a web color code and return it.
the color code should starting with "#". and then use 2 
characters per color.
for example:
colorOf(255,0,0) should return "#ff0000"
colorOf(0,111,0) should return "#006f00"
colorOf(1, 2 ,3) should return "#010203"

var let = "https://www.webpagefx.com/web-design/hex-to-rgb








let toHex = (n)=> {
	let num  = n.toString(16)
	return num.length == 1 ? '0'+num: num
}
let toRgb = (r,g,b) => {

	let color = '#'+toHex(r)+toHex(g)+toHex(b)
	return color;

}



