// 答え
let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
hantei();
hantei();
hantei();
hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = 4;

  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  if (counter < 4 && flag === 0) {
    if (yoso === kotae) {
      console.log('正解！');
      flag = flag + 1;
    }
    else if (yoso < kotae) {
      console.log('間違い、もう少し小さいよ');
    }
    else {
      console.log('間違い、もう少し大きいよ');
    }
  }
  else if (counter > 3 && flag === 0) {
    console.log('残念、答えは' + kotae + 'でした');
  }
  else if (counter < 3 && flag > 0) {
    console.log('答えは' + kotae + 'でした。ゲームは終わりました');
  }
  else {
    console.log('答えは' + kotae + 'でした。ゲームは終わりました');
  }
  counter = counter + 1;
}