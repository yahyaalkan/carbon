function arttirma1() {
    var deger = parseInt(document.getElementById('sayi1').value);
   document.getElementById('sayi1').value = deger + 1;
}

function azaltma1() {
  
   var deger = parseInt(document.getElementById('sayi1').value);
   if (deger>0) {
   document.getElementById('sayi1').value = deger - 1;
   }
}
