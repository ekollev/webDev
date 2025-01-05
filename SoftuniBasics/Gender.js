function Gender(input) {
    let age = Number(input[0]);
    let gender = String(input[1]);
    switch (gender) {
        case `m`:
            if (age >= 16) {
                console.log(`Mr.`)
            }
            if (age < 16) {
                console.log(`Master`)
            }
            break;
        case `f`:
            if (age >= 16) {
                console.log(`Ms.`)
            } if (age < 16) {
                console.log(`Miss`)
            }
            break;
    }
}
Gender([13.5, "m"])