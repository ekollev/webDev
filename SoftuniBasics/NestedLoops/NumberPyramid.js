function demo(input) {
    let n = Number(input[0]);
    let current = 1;
    let isbigger = false;
    let printcurrentline = "";
    for (let rows = 1; rows <= n; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            if (current > n) {
                isbigger = true;
                break;
            }
            printcurrentline += current + " ";
            current++
        }
        console.log(printcurrentline);
        printcurrentline = "";
        if (isbigger) {
            break;
        }

    }

}demo(["7"])