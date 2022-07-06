import styled from './Header.module.css';
import { hrn, usa, eur } from 'image/image';

export default function Header({ rates }) {
  return (
    <header className={styled.header}>
      <h1 className={styled.title}>Средний курс валют в банках</h1>
      <div>
        <ul className={styled.list}>
          <li className={styled.item}>
            <h2 className={styled.title_list}>Валюта</h2>
            <div className={styled.hrn_container}>
              <img src={eur} alt="" width="25" height="25" />
              <p className={styled.text}>
                EUR <span>евро</span>
              </p>
            </div>
            <div className={styled.hrn_container}>
              <img src={usa} alt="" width="25" height="25" />
              <p className={styled.text}>
                USD<span>доллар США</span>
              </p>
            </div>
          </li>
          {rates.map(({ EUR, USD }, idx) => (
            <li className={styled.item} key={idx}>
              <h2 className={styled.title_list}>Курс</h2>
              <div className={styled.hrn_container}>
                <p className={styled.value}>{(EUR / 0.001).toFixed(2)}</p>
                <img src={hrn} alt="" width="20" height="20" />
              </div>
              <div className={styled.hrn_container}>
                <p className={styled.value}>{(USD / 0.001).toFixed(2)}</p>
                <img src={hrn} alt="" width="20" height="20" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
