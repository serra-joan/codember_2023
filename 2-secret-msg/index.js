const MSG = "";
const countString = MSG.length;

let responseNum = 0;
let finalResponse = "";

for (let i = 0; i < countString; i++) {
    const strValue = MSG[i];

    if(strValue === '#') response ++;
    else if (strValue === '@') response --;
    else finalResponse += responseNum.toString();
}

console.log(finalResponse);
