import catMe from 'cat-me'


function randCat (){
    for( let i=1;i<=3;i++){
        console.log(catMe())
    }
    return
}

console.log(randCat())