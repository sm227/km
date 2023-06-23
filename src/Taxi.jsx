import React from 'react';
import './App.css';
import style from './Taxi.module.css';



function Taxi() {

    const text = {
        0: '✅ 반드시 도봉산 역에 도착한 후 신청해 주세요. 매칭 후에는 취소할 수 없어요!. 신중히 눌러주세요! \n ✅ '
    }

    return (
        <div>
            <h2>⚠ 필독 ⚠</h2>
            <textarea readOnly className={style.agree}>{text[0]}</textarea>
            <br></br>
            <p className='agree'>동의합니다. <input  className={style.check} type="checkbox" name="xxx" value="yyy" ></input> </p>
           

        </div>
    )
}

export default Taxi;