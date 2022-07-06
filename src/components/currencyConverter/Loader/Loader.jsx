import PacmanLoader from 'react-spinners/PacmanLoader';
import styled from './Loader.module.css';
// import { CSSProperties } from 'react';

// const override: CSSProperties = {
//   display: 'block',
//   margin: '0 auto',
//   borderColor: 'red',
// };

export default function Loader() {
  return <PacmanLoader color="#fcfcfc" className={styled.loader} size={30} />;
}
