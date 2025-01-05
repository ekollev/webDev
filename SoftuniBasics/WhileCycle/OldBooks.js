function oldBooks(input) {
    let index = 1;
    let AniBook = input[0];
    let currentBook = input[index];
    let bookisfound = false;
    while ("No More Books" !== currentBook) {
        if (currentBook === AniBook) {
            bookisfound = true;
            break;
        }
        index++
        currentBook = input[index];
    } if (bookisfound === false) {
        console.log(`The book you search is not here!`)
        console.log(`You checked ${index - 1} books.`);
    } else {
        console.log(`You checked ${index - 1} books and found it.`);
    }
} oldBooks(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship",
    "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"])


//Ани отива до родния си град след много дълъг период извън страната.
//Прибирайки се вкъщи тя вижда старата библиотека на баба си и си спомня за любимата си книга.
//Помогнете на Ани, като напишете функция в която тя въвежда търсената от нея книга(текст).
// Докато Ани не намери любимата си книга или не провери всички в библиотеката,
//програмата трябва да чете всеки път на нов ред името на всяка следваща книга (текст).
//Книгите в библиотеката са свършили щом получите текст "No More Books".
//Ако не открие книгата да се отпечата на два реда:
//"The book you search is not here!"
//"You checked {брой} books."
//Ако открие книгата си се отпечатва един ред:
//"You checked {брой} books and found it."