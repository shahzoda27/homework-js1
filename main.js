//1-masala
let count1 =0
let n1 = parseInt(Math.random()*20)
for(let i = 0; i <=n1 ; i++){
    if(i % 2 == 0){
        count1+=i
        console.log(i);
    }
}
console.log("1dan n gacha bolgan sonlr juft sonlar hamda yig'indisi = " + count1);
for(let i = 0; i <=n1 ; i++){
    if(i % 2 != 0){
        count1*=i
        console.log(i);
    }
}
console.log("1dan n gacha bolgan sonlr toq sonlar hamda ko'paytmasi = " + count1);

//2-masala
let number = parseInt(Math.random()*10)
console.log(' 0 dan number  sonigacha bolgan sonlar');
for(let a = 0; a <=number ; a++){
 console.log(a);  
}


//3-masala
let n = parseInt(Math.random()*20)
console.log('n dan 0 sonigacha bolgan sonlar');
for(let a = 0; a <=n ; a++){
 console.log(n-a);  
}

//4-masala
let count2 = null
let number1 = parseInt(Math.random()*10)
console.log(' number1 dan n  sonigacha bolgan sonlar');
for(let a = 0; a <=number1 ; a++){
 console.log(a);  
count2 +=a
}
console.log('number1 dan n  sonigacha bolgan sonlar = '+ count2);

let count3 =0
let n3 = 10
for(let i = 0; i <=n3 ; i++){
    if(i % 2 == 0){
        count3+=i
        console.log(i);
    }
}
console.log("1dan n gacha bolgan sonlr juft sonlar hamda yig'indisi = " + count3);

//5-masala
let count =0
let n4 = parseInt(Math.random()*20)
for(let i = 0; i <=n4 ; i++){
    if(i % 2 != 0){
        count+=i
        console.log(i);
    }
}
console.log("1dan n gacha bolgan sonlr toq sonlar hamda yig'indisi = " + count);
