var input='';

function threeSum(numbers, target) {
 
    for (var i = 0; i < numbers.length; i++) {
        var var1 = numbers[i];
        for (var k = i+1; k < numbers.length; k++) {
            var var2 = numbers[k];
               for(var j = k+1; j < numbers.length; j++) {
                 var var3 = numbers[j];
                      console.log("var1", var1, "var2", var2, "var3", var3)
                  if (var1 + var2 + var3 === target) {
                    return var1 * var2 * var3;
                  };
                };
        };
    };

};