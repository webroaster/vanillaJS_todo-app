//未完了リストから指定の要素を削除する関数
const deleteUndoneList = (target) => {
    document.getElementById('undone-list').removeChild(target);
}

//未完了リストに追加する関数
const createUndoneList = (text) => {
     //DOMを作成
    //liタグ生成
    const li = document.createElement("li");
    li.className = "list-row";//生成したエレメントにクラスを付与

    //divタグ生成
    const div = document.createElement("div");
    div.innerText = text;//生成したエレメントにインプットタグのテキストを代入

    //buttonタグ完了ボタン生成
    const doneButton = document.createElement("button");
    doneButton.innerText = '完了';
    //完了ボタン押したら処理
    doneButton.addEventListener("click", () => {
        //削除関数呼び出し
        deleteUndoneList(doneButton.parentNode);

        //完了したエリアに移動させる
        const doneList = document.createElement("li");
        doneList.className = "list-row";
        const returnButton = document.createElement("button");
        returnButton.innerText = "戻す";
        //戻すボタン押したら処理
        returnButton.addEventListener("click", () =>{
            //戻すボタンの親タグを削除
            const deleteReturnButton = returnButton.parentNode;
            document.getElementById('done-list').removeChild(deleteReturnButton);
            //リストの移動。未完了エリアのリスト生成関数呼び出し
            const text = returnButton.parentNode.firstElementChild.innerText;
            createUndoneList(text);
        });

        //完了エリアのリスト生成
        const text = doneButton.parentNode.firstChild.innerText;
        const doneDiv = document.createElement("div");
        doneDiv.innerText = text;
        doneList.appendChild(doneDiv);
        doneList.appendChild(returnButton);
        //完了エリアに追加
        document.getElementById('done-list').appendChild(doneList);
    });

    //buttonタグ削除ボタン生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = '削除';
    //削除ボタンクリックしたら関数
    deleteButton.addEventListener("click", () => {
        //未完了エリアから削除する　削除関数呼び出し
        deleteUndoneList(deleteButton.parentNode);
    });

    //エレメントを構造化
    li.appendChild(div);//入れ子にするメソッド
    li.appendChild(doneButton);
    li.appendChild(deleteButton);

    //undone-listに追加
    document.getElementById('undone-list').appendChild(li);//ulタグの下に構造化したliタグをアペンド
}

//追加ボタンクリックした時の関数作成
const onClickAdd = () => {
    //追加ボタン押した後の処理
    const inputText = document.getElementById('add-text').value;//テキストボックスの値を取得してinputTextに代入
    document.getElementById('add-text').value = "";//入力項目の初期化

    createUndoneList(inputText);
}
//追加ボタンクリック発火
document.getElementById('add-button').addEventListener("click", () => onClickAdd());
