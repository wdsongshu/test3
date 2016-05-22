function calculate_median(array) {
    var evenArray = [];
    var printNum ;

    array.forEach(function(arrNum){
       if(arrNum%2 === 0)
       {
          evenArray.push(arrNum);

       }
    });
    if(evenArray.length%2 === 0)
    {
        printNum = (evenArray[evenArray.length/2 -1] + evenArray[evenArray.length/2 ])/2;

        return printNum;
    }else{
        printNum = evenArray[(evenArray.length +1 )/2 -1 ];

        return printNum;
    }
}

module.exports = calculate_median;
