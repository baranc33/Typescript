// geri dönüş tipli fonksyonlar

import { rejects } from "assert";
import { resolve } from "path";



function Bir(): number {
    return 1;
}
let  deger:Number=Bir()

// birden fazla değer dönceği zaman tanımlama sekli
function İki(): [string, number] {
    return ["hakan", 26];
}

let ad: [string ,number]=İki();


// parametreli çalışma

function NameAndLastName(firstName:string,lastname:string):string{
    return firstName+" "+lastname;
}


let Name:string=NameAndLastName("Hakan Baran","Çakır");


// bir  function yazcaz konuyla ilgili geriye promise dönen bir metot yazcaz
// bu konuylşa ilgili detaylı bilgi vermedi hoca
// https://medium.com/codefiction/javascriptte-promise-kullan%C4%B1m%C4%B1-ccca1123989a
// konuyla ilgili araştırma yapılması gerekiyor yukardaki linkten

async function LogPerson(isim:string,soyisim:string,yas:number):Promise<number> {
    return new Promise((resolve,rejects)=>{
        resolve(25);
    });
}

// örnek bir function yazalım

function yazmaca(isim:string,tekrar:number):void{

    for(let i=0; i<tekrar;i++)
    {
        console.log(isim);
    }


}