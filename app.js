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

// メイン部分
let alertString;

// 作成した関数を呼び出し、変数へ格納
alertString = addString("webCamp");

// 変数の中身をアラートで表示する
alert(alertString);

// 作成した関数
function addString(strA){
  let addStr = "Hello " + strA;
  return addStr;
}