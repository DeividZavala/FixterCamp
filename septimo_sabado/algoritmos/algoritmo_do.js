Problema 2
Return the number (count) 
of vowels in the given string.
We will consider a, e, i, o, and u as vowels

const getCount = str => str.replace(/[^aeiou]/g, '').length;


function getCount(str) {
  let vowelsCount = 0;
  let x = str.toLowerCase().replace(/ /g,'')
  for(let i = 0; i<x.length; i++){
    if(x[i] == 'a'||x[i] =='e'||x[i] =='i'||x[i] =='o'||x[i]
=='u'){
      vowelsCount += 1;
      console.log(vowelsCount)
    }
}
return vowelsCount;
}