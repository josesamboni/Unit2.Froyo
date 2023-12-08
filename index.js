// Promt user for flavor
let imput = prompt ("Please enter flavors") 

// Split into array
let flavor=imput.split(",")

console.log(flavor);

//Build an object to track flavors
function organized(flavor){
    let flavors={}
for (let i=0; i < flavor.length; i++) {
    if (!flavors [flavor[i]]) {
        flavors[flavor[i]]=1
    }
    else {
        flavors[flavor[i]]++
    }
}
return flavors
}
console.log(organized(flavor))













