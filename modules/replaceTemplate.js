//card html 'ini ve ürün bilgilerini parametre olarak alacak card html 'in içinde 
//değişken olarak tanımlanan değerlerin yerine ürün bilgilerini ekleyecek bir fonk yazalım

const replaceTemplate = (html, data) => {
    //html şablonundaki değişkenlerin yerine data nesnesindeki verileri ekliyoruz
    let output = html.replace(/{%PRODUCTNAME%}/g, data.productName);

    output = output.replace(/{%PRICE%}/g, data.price);
    output = output.replace(/%QUANTITY%/g, data.quantity);
    output = output.replace(/{%IMAGE%}/g, data.image);
    output = output.replace(/{%ID%}/g, data.id);
    output = output.replace(/{%NUTRIENTS%}/g, data.nutrients);
    output = output.replace(/{%DESCRIPTION%}/g, data.description);
    output = output.replace(/{%FROM%}/g, data.from);

    //eğer ürün organik değilse {notorganic}değişkeni yerine not-organic class' ekle
    if (data.organic === false) {
        output = output.replace("{%NOT_ORGANIC%}", "not-organic");
    }


    //oluşturduğumuz yeni-güncellenmiş card html'ini döndür
    return output;
}

//export ettik
module.exports = replaceTemplate; 