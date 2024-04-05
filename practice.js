let computerNum = 0;
let chance = 5;
let numList = []
let userInput = document.getElementById('user-input');
let result = document.getElementById('result-text');
let playButton = document.getElementById('play-button');
let chanceArea = document.getElementById('chance-area');
let resetButton = document.getElementById('reset-button');
let resultImg = document.getElementById('main-img')

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function (){
    userInput.value = ""
})

function selectNum(){
    computerNum = Math.floor(Math.random() * 100 + 1);
    console.log("정답", computerNum); 
}

selectNum();

function play(){
    let userValue = userInput.value;

    if (1>userValue || userValue>100){
        result.textContent = "1~100까지의 숫자를 입력해주세요"
        return;
    }
    if (numList.includes(userInput.value)){
        result.textContent = "이미 입력하신 숫자입니다"
        return;
    }
    
    chance --;
    chanceArea.innerHTML = `남은 기회: ${chance}번`;

    if(userValue > computerNum){
        resultImg.src = 
        "/image/down.gif"
        result.textContent = "Down"
    } else if (userValue < computerNum){
        resultImg.src =
        "/image/up.gif"
        result.textContent = "Up!!!";
    } else {
        result.textContent = "정답입니다!!!";
        playButton.disabled = true
        numList = []
        chance = 5
        return;
    }
    if(chance < 1){
        result.textContent = "틀렸습니다"
        playButton.disabled = true
        numList = []
        chance = 5
        return;
    }

    numList.push(userInput.value);
    console.log(numList)
    
}

function reset(){
    userInput.value = "";
    selectNum();
    chanceArea.textContent = "남은 기회: 5번"
    resultImg.src =
    "/image/drink.gif"
    numList = []
    chance = 5;
    playButton.disabled = false
    
}
