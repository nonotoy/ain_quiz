function applyTextWithParagraphs(element, text) {
    // 元の内容を消去
    element.innerHTML = '';

    // 改行でテキストを分割
    let lines = text.split('\n');

    // 各行について処理を行う
    for(let i = 0; i < lines.length; i++) {
        // 新しいp要素を作成し、テキストを設定
        let p = document.createElement('p');
        p.textContent = lines[i];

        // p要素を指定された要素に追加
        element.appendChild(p);
    }
}

const quiz = [
            {
                questionNumber: 'ピシ #1',
                question: "ウンマ　ヘマンタ　エラマス？",
                image: "image/A013.png",
                answers: [
                    'チェㇷ゚',
                    'セイ',
                    'キナ',
                    'キキㇼ',
                ],
                correct: 'キナ'
            },
            {
                questionNumber: 'ピシ #2',
                question: "タンペ　ヘマンタ　アン？",
                image: "image/A029.jpg",
                answers: [
                    'ハㇺ',
                    'マキㇼ',
                    'ピイェ',
                    'カㇷ゚',
                ],
                correct: 'カㇷ゚'
            },
            {
                questionNumber: 'ピシ #3',
                question: "マカナㇰ　ネ　シリ　アン？",
                image: "image/C001.png",
                answers: [
                    'アㇷ゚ト',
                    'カウカウ',
                    'ウパㇱ',
                    'ウラㇻ',
                ],
                correct: 'アㇷ゚ト'
            },
            {
                questionNumber: 'ピシ #4',
                question: "チョイペㇷ゚　ヘンパㇰペ　アン？",
                image: "image/B001.png",
                answers: [
                    'イワンペ',
                    'レㇷ゚',
                    'イサㇺ',
                    'アㇱクネㇷ゚',
                ],
                correct: 'アㇱクネㇷ゚'
            },
            {
                questionNumber: 'ピシ #5',
                question: "タンペ　ヘマンタ　アン？",
                image: "image/A020.png",
                answers: [
                    'アムㇱペ',
                    'アトゥイコㇺ',
                    'ホㇿケテレケㇷ゚',
                    'エペッペッケ',
                ],
                correct: 'ホㇿケテレケㇷ゚'
            },
            {
                questionNumber: 'ピシ #6',
                question: "タン オッカヨ　ヘマンタ　イキ？",
                image: "image/D004.png",
                answers: [
                    'ケイタイ　アニ　シノッ',
                    'オンガク ヌ',
                    'シノッチャキ',
                    'カンカミ　ヌカㇻ',
                ],
                correct: 'オンガク ヌ'
            },
            {
                questionNumber: 'ピシ #7',
                question: 'フナㇰタ　キムンカムイ　オカイ　ルウェ？',
                image: "image/A005.png",
                answers: [
                    'アトゥイサㇺ　タ　オカイ',
                    'コタン　タ　オカイ',
                    'ニソㇿ　ペカ　ホプニ',
                    'キムタ　オカイ＿',
                ],
                correct: 'キムタ　オカイ'
            },
        ]


let quizCount = 0;
const quizLength = quiz.length;
let score = 0;

const $button = document.querySelectorAll('.answer');
const buttonLength = $button.length;
const $image = document.getElementById('js-image');

const setupQuiz = () => {
    applyTextWithParagraphs(document.getElementById('js-question'), quiz[quizCount].question);
    applyTextWithParagraphs(document.getElementById('js-number'), quiz[quizCount].questionNumber);
    
    $image.src = quiz[quizCount].image;

    let buttonCount = 0;

    while (buttonCount < buttonLength) {
        applyTextWithParagraphs($button[buttonCount], quiz[quizCount].answers[buttonCount]);
        buttonCount++;
    }
}
setupQuiz();

let clickedCount = 0;
while (clickedCount < buttonLength) {
    $button[clickedCount].addEventListener("click", function (event) { // クリックイベントのコールバック関数の引数にeventを追加
        const clickedAnswer = event.currentTarget;
   
        if (quiz[quizCount].correct.includes(clickedAnswer.textContent)) {
            clickedAnswer.classList.add("correct");
            score++;
        } else {
            for (let i = 0; i < buttonLength; i++) {
                if (quiz[quizCount].correct.includes($button[i].textContent)) {
                    $button[i].classList.add("correct");
                } else {
                    $button[i].classList.add("incorrect");
                }
            }
        }

        // 選択肢のクリックを無効化
        for (let i = 0; i < buttonLength; i++) {
            $button[i].disabled = true;
        }

        // クイズ結果の表示
        function showQuizResult() {
            const answerResultText = document.getElementById('js-answer-result-text');
            answerResultText.textContent = 'ア=オケレナー！　' + score + '/' + quizLength + '　エ＝エラマン　ルウェ　ネー！ピㇼカワー！';
        }
        
        // エンディングの表示とスコアの更新
        function showEndingPage() {
            const quizBox = document.querySelector('.quiz_box');
            const endingPage = document.createElement('div');
            const scoreElement = document.createElement('p');
            const endingImage = document.createElement('img');
            const answerResultText = document.createElement('div');
          
            endingPage.classList.add('ending_page');
            endingPage.innerHTML = '<h2 class="result_title">パㇰノカ！</h2>';
            endingImage.classList.add('image');
            endingImage.src = "image/Ending.png";
            endingImage.innerHTML = '<img src="" class="image">';
            answerResultText.classList.add('answer_result_text');
            if (score > 0) {
                answerResultText.innerHTML = '<p class="answer_result_text">ア=オケレナー！　' + score + '/' + quizLength + '　エ＝エラマン　ルウェ　ネー！ピㇼカワー！</p>';
            } else {
                answerResultText.innerHTML = '<p class="answer_result_text">ア=オケレナー！　' + score + '/' + quizLength + '　エ＝エラマン　ルウェ　ネー！<br>タン　クイズ　ホカンパ　シリ　アン？</p>';                 
            }

            
            endingPage.appendChild(scoreElement);
            endingPage.appendChild(endingImage);
            endingPage.appendChild(answerResultText);
            quizBox.parentNode.replaceChild(endingPage, quizBox);
          }

        // クイズの進行と終了時の処理
        function proceedQuiz() {
            if (quizCount < quizLength) {
              setupQuiz();
              for (let i = 0; i < buttonLength; i++) {
                $button[i].disabled = false;
              }
            } else {
              showEndingPage();
            }
        }
          
      
        // 一定の遅延後に次の問題に遷移する処理を追加
        setTimeout(function () {
            resetHighlight(); // ハイライトをリセット
            quizCount++;
            proceedQuiz();
            if (quizCount < quizLength) {
                setupQuiz();
                // 選択肢のクリックを有効化
                for (let i = 0; i < buttonLength; i++) {
                    $button[i].disabled = false;
                }
            }
        }, 1000);
        
    });       
    
    clickedCount++;
}

// ハイライトをリセットする関数
function resetHighlight() {
    for (let i = 0; i < buttonLength; i++) {
        $button[i].classList.remove("correct");
        $button[i].classList.remove("incorrect");
    }
}