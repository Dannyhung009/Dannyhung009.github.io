// STEP1:透過querySelector選擇到HTML中的箭頭元素

const upElement = document.querySelector('.chevron-up');
const downElement = document.querySelector('.chevron-down');
// STEP2:透過querySelector選擇到HTML中的數字元素
const numberElement = document.querySelector('.number');
// STEP3:監聽click事件，並執行對應的行為
upElement.addEventListener('click',(e)=>{
    // STEP4:取得當前網頁上的數字
    const currentNumber = Number(numberElement.textContent);

    // STEP5:將數字增加後帶回網頁上
    numberElement.textContent=currentNumber+1;
});

downElement.addEventListener('click',(e)=>{
    // STEP4:取得當前網頁上的數字
    const currentNumber = Number(numberElement.textContent);

    // STEP5:將數字增加後帶回網頁上
    numberElement.textContent=currentNumber - 1;
});
