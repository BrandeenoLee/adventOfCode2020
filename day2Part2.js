var input=`4-5 r: rrrjr
9-10 x: pxcbpxxwkqjttx
8-13 b: rjbbbbvgrbrfjx`;

function pswrd (string) {
    var rules = string.split('\n');
    var validPasswords = 0;
    for (var i = 0; i < rules.length; i++) {
      var rule = rules[i]
      var splitDash = rule.split('-');
      var pos1 = splitDash[0]-1;
      var pos2CharString = splitDash[1].split(' ')
      var pos2 = pos2CharString[0]-1;
      var targetChar = pos2CharString[1][0];
      var password = pos2CharString[2];
      var charCount = 0;
      // for (var k = 0; k < password.length; k++) {
      //     // is targetchar at pos1
      //     if (password[k] === targetChar) {
      //       charCount++;
      //     }
      // }
      console.log("password", password)
      console.log("rule", rule);
      console.log("targetChar", targetChar);
      // console.log("charCount", charCount)
      console.log("pos1", pos1);
      console.log("pos2", pos2);
      console.log("password[pos1]", password[pos1]);
      // Exactly one of these positions must contain the given letter. 
  
      if (
        (targetChar === password[pos1] && targetChar !== password[pos2]) ||
        (targetChar === password[pos2] && targetChar !== password[pos1])) {
          validPasswords++;
      }
    }
    return validPasswords;
  };