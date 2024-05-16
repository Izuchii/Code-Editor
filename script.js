const input = document.querySelector('.html-input');
const output = document.querySelector('.output');
const runBtn = document.querySelector('.run');
const inputLen = input.textContent.length;
let htmlContent, jsContent= '';

// for(let i = 0; i < inputLen; i++) {
    //     if(input.textContent[i] == '<' &&
    //     input.textContent[i + 1] == 's' &&
    //     input.textContent[i + 2] == 'c' &&
    //     input.textContent[i + 3] == 'r' &&
    //     input.textContent[i + 4] == 'i' &&
    //     input.textContent[i + 5] == 'p' &&
    //     input.textContent[i + 6] == 't'
//     ) {console.log(i)}
// }

function checkInput() {
    const val = input.textContent.split(/<\/?body>/)[1].trim();
    const scriptIndex = val.search(/<script.*>/);
    console.log(scriptIndex);
    if(scriptIndex > -1) {
        let startAdd = false;
        for(let i = scriptIndex; i < val.length-9; i++) {
            if(val[i-1] == '>') {startAdd = true;}
            if(startAdd) {jsContent += val[i];}
        }
        // jsContent = val.slice(scriptIndex)
        htmlContent = val.slice(0, scriptIndex);
    } else {htmlContent = val;}
}
checkInput()


const div = document.createElement("div");
div.innerHTML = htmlContent;

runBtn.addEventListener('click', () => {
    checkInput();
    output.appendChild(div);
    eval(jsContent)
})
console.log(val);
console.log(htmlContent);
console.log(jsContent);
// console.log(ceck);
// const inputStart = input.textContent.match(/(?=<body>).+/g);
// console.log(inputStart)

// output.innerHTML = htmlContent;
