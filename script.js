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
            question: "アトゥイ　オッタ　シクㇷ゚ペ　ヘマンタ　アン？",
            image: "image/C008.png",
            answers: [
                'フンペ',
                'ユㇰ',
                'ソヤ',
                'アマメチカッポ',
            ],
            correct: 'フンペ'
        },
        {
            questionNumber: 'ピシ #2',
            question: "タンペ　ヘマンタ　アン？",
            image: "image/B020.png",
            answers: [
                'マタンプシ',
                'ホㇱ',
                'テクンペ',
                'テタラペ',
            ],
            correct: 'ホㇱ'
        },
        {
            questionNumber: 'ピシ #3',
            question: "フラルイ　コㇿカ　ケラアン　アエㇷ゚　ヘマンタ　アン？",
            image: "",
            answers: [
                'プクサキナ',
                'トゥレㇷ゚',
                'ソㇿマ',
                'プクサ',
            ],
            correct: 'プクサ'
        },
        {
            questionNumber: 'ピシ #4',
            question: "タンペ　ヘマンタ　アン？",
            image: "image/A003.png",
            answers: [
                'セタ',
                'エㇾム',
                'ユㇰ',
                'チャペ',
            ],
            correct: 'ユㇰ'
        },
        {
            questionNumber: 'ピシ #5',
            question: "マカナㇰ　ネ　シリ　アン？",
            image: "image/D006.png",
            answers: [
                'イルㇱカ',
                'イペ',
                'チㇱ',
                'ミナ',
            ],
            correct: 'ミナ'
        },
        {
            questionNumber: 'ピシ #6',
            question: "アㇷ゚トキクンペ　ヘンパㇰペ　アン？",
            image: "image/B026.png",
            answers: [
                'レㇷ゚',
                'トゥㇷ゚',
                'イワンペ',
                'アシㇰネㇷ゚',
            ],
            correct: 'レㇷ゚'
        },
        {
            questionNumber: 'ピシ #7',
            question: "タンペ　ヘマンタ　アン？",
            image: "",
            answers: [
                'キキㇼ',
                'カムイチカㇷ゚',
                'イセポ',
                'キムンカムイ',
            ],
            correct: 'カムイチカㇷ゚'
        },
        {
            questionNumber: 'ピシ #8',
            question: "シウニン　シキ　メノコ　フンナ　アン？",
            image: "",
            answers: [
                'チカパㇱ',
                'インカラマㇰ',
                'アシㇼパ',
                'エノノカ',
            ],
            correct: 'アシㇼパ'
        },
        {
            questionNumber: 'ピシ #9',
            question: "タンペ　ヘマンタ　アン？",
            image: "image/B010.png",
            answers: [
                'トノト',
                'セセㇰ　ウセイ',
                'ワッカ',
                'ナㇺ　ワッカ',
            ],
            correct: 'セセㇰ　ウセイ'
        },
        {
            questionNumber: 'ピシ #10',
            question: "マカナㇰ　ネ　シリ　アン？",
            image: "image/D026.png",
            answers: [
                'ア　ワ　アン',
                'ネㇷ゚キ　コㇿ　アン',
                'シノッ　コㇿ　アン',
                'モコㇿ　ワ　アン',
            ],
            correct: 'モコㇿ　ワ　アン'
        },
        {
            questionNumber: 'ピシ #11',
            question: "クエラマスㇷ゚　ネㇷ゚タ　アン？",
            image: "",
            answers: [
                'ユㇰ',
                'チャペ',
                'セタ',
                'チカㇷ゚',
            ],
            correct: 'チャペ'
        },
        {
            questionNumber: 'ピシ #12',
            question: "ナヌ　クンネ　モユㇰ　レヘ　ネㇷ゚タ　アン？",
            image: "image/A014.png",
            answers: [
                'トイモユㇰ',
                'レキモユㇰ',
                'スケモユㇰ',
                'アンチモユㇰ',
            ],
            correct: 'スケモユㇰ'
        },
        ]


let quizCount = 0;
const quizLength = quiz.length;
let score = 0;

const $button = document.querySelectorAll('.answer');
const buttonLength = $button.length;
const $image = document.getElementById('js-image');
const $prevButton = document.getElementById('prev-button');
const $nextButton = document.getElementById('next-button');

const setupQuiz = () => {
    applyTextWithParagraphs(document.getElementById('js-question'), quiz[quizCount].question);
    applyTextWithParagraphs(document.getElementById('js-number'), quiz[quizCount].questionNumber);
    
    $image.src = quiz[quizCount].image;

    // 選択肢の順番をランダムにシャッフル
    shuffleArray(quiz[quizCount].answers);

    let buttonCount = 0;

    while (buttonCount < buttonLength) {
        applyTextWithParagraphs($button[buttonCount], quiz[quizCount].answers[buttonCount]);
        buttonCount++;
    }
}

setupQuiz();


// 前の問題に戻るボタンのクリックイベント
$prevButton.addEventListener('click', function() {
    if (quizCount > 0) {
        quizCount--;
        setupQuiz();
    }
});

// 次の問題に進むボタンのクリックイベント
$nextButton.addEventListener('click', function() {
    if (quizCount < quizLength - 1) {
        quizCount++;
        setupQuiz();
    }
});
  

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

        // クイズ結果の表示.
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

// 選択肢をシャッフル
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}