// let i;
// let num = 0;

// for( i = 1; i < 11; i++){
//   num = num + i;
// }

// alert('1から10まで足し算した結果は' + num + 'です');

// let number1 = 5;
// let number2 = 5;

// alert(number1 + '+' + number2 + 'は' + (number1 + number2) + 'です');
// alert(number1 + '-' + number2 + 'は' + (number1 - number2) + 'です');
// alert(number1 + '*' + number2 + 'は' + (number1 * number2) + 'です');
// alert(number1 + '/' + number2 + 'は' + (number1 / number2) + 'です');



// // メイン部分
// let alertString;

// // 作成した関数を呼び出し、変数へ格納
// alertString = addString("webCamp");

// // 変数の中身をアラートで表示する
// alert(alertString);

// // 作成した関数
// function addString(strA){
//   let addStr = "Hello " + strA;
//   return addStr;
// }



// ジャンケンの手を入力してもらうプロンプト欄を生成
let user_hand = prompt('ジャンケンの手をグー、ちょき、パーから選んでください。')

// ジャンケンの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();

// ユーザーの手とJavaScriptのジャンケンの手をくらべる関数を呼び出し、結果をjudgeに入れる
let judge = winLose(user_hand, js_hand);

// 結果を表示する
 alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' +js_hand + 'です。\n結果は' + judge + 'です。');

// ランダムでジャンケンの手を生成する関数
function getJShand(){
    let js_hand_num = Math.floor( Math.random() * 3 );
    let hand_name;

    if(js_hand_num == 0){
        hand_name = "グー";
    } else if(js_hand_num == 1){
        hand_name = 'チョキ';
    } else if(js_hand_num == 2){
        hand_name = 'パー';
    }

  return hand_name;
}

//ユーザーの手とJavaScriptのジャンケンの手を比べる関数
function winLose(user, js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    }else if(js == "チョキ"){
      winLoseStr = "勝ち";
    }else if(js =="パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    }else if(js == "チョキ"){
      winLoseStr = "あいこ";
    }else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    }else if(js == "チョキ"){
      winLoseStr = "負け";
    }else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}