function FirstTask(input){
    let index = 0;
    while (index < input.length){
        if (input[index] === "Stop"){
            break;
        }console.log(input[index])
        index++
    }
}FirstTask(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])