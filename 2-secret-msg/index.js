const MSG = "";

let responseNum = 0;
let finalResponse = "";

for (const char in MSG) {
    if(char === '#') response ++;
    else if (char === '@') response --;
    else finalResponse += responseNum.toString();
}

console.log(finalResponse);
