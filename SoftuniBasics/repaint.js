function repaint(input){
    let nailon = Number(input[0]);
    let boq = Number(input[1]);
    let razreditel = Number(input[2]);
    let chasove = Number(input[3]);
    let nailenprice = (nailon + 2) * 1.5;
    let boqPrice = (boq + boq * 0.1) * 14.5;
    let razreditelPrice = razreditel * 5;
    let torbi = 0.4;
    let sumMaterials = nailenprice + boqPrice + razreditelPrice + torbi;
    let sumMaistori = (sumMaterials * 0.3) * chasove;
    let result = sumMaistori + sumMaterials;
    
    console.log(result);

}repaint(["10",
"11",
"4",
"8"])