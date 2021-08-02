import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  // 入力値のstate化
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["aaaa", "iiiii"]);
  const [completeTodos, setCompleteTodos] = useState(["cccc"]);

  // 入力値が変更になった場合の取得しstateを変更
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return; // 入力がない場合、処理をスキップ
    const newTodos = [...incompleteTodos, todoText]; // 下の配列＋新しいtextを結合
    setIncompleteTodos(newTodos); // stateの値を更新
    setTodoText(""); // 入力欄を空白にセット
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              // reactでroopする場合、unique-keyが必要
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key="todo" className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
