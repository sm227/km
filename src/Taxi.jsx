import React, { useState } from "react";
import "./App.css";
import style from "./Taxi.module.css";

function Taxi() {
  const [ch, setch] = useState(true);
  // const check = checkbox.checked
  function start() {
    if (ch === false) {
      alert("동의하지 않았음");
    }
    else {
        alert("동의함")
    }
  }

  const text = {
    0: "✅ 반드시 도봉산 역에 도착한 후 신청해 주세요.\n ✅매칭 후에는 취소할 수 없어요!\n ✅ 매칭 후 취소할 경우 서비스 이용이 제한될 수 있습니다.",
  };

  return (
    <div>
      <h2>⚠ 필독 ⚠</h2>
      <textarea readOnly className={style.agree}>
        {text[0]}
      </textarea>
      <br></br>
      <p className="agree">
        동의합니다.{" "}
        <input
          className={style.check}
          type="checkbox"
          name={ch}
          value={ch}
        ></input>{" "}
      </p>
      <div className={style.start}>
        <button className={style.start_btn} onClick={start}>
          시작하기!
        </button>
      </div>
    </div>
  );
}

export default Taxi;
