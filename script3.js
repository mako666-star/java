

let eta = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")



    
for(let count = 1; count <= eta; count++) {
    console.log((" ").repeat(eta - count) + ("#").repeat(count));  
}
