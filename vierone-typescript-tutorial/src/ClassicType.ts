// // klasik tipler
// String
// Number
// Boolean
// Array
// Object
// null// boş 
// undefined // belirsiz
// Infinity// number bir tip

// type scriptle bir değişken oluşturunca otomatik tip verir
// java scriptteki gibi let ve const kullanılabilir.

let namess="Baran";
// name=3;// bu hata verir çünkü önceden string tanımladık

let myname:String="Hakan"; // bu şekilde tip verebiliriz

// birden fazla tip verilebilir

let mylastname:string | number="hakan";
mylastname=2; // bu şekilde birden fazla tip desteği verilebilir.

// type of kullanımı
if(typeof mylastname==='string'){// 3 eşit js kullanımından gelmekte.
    // burda string işlemlerini yapabilirz
}


// any tipi
let b:any =45; // any ile tanımladığımız değişkenler tip desteği sağlamaz

// instanceof   // type of gibi kullanılabilir 
// anlamı bir değişken stringten instance almışsa kalıtım almıssa gibi bir anlam katar
// bunu genelde html elemanları için kullanılır etikete direk müdehale edebilmek için


if(b instanceof HTMLInputElement){
    // burda İnput un özelliklerinie
    // direk erişim sağliyabiliyoruz
}