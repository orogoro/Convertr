import { useEffect, useState } from 'react';
import { Header, ConversionForm, Loader } from './currencyConverter';
import { getСonvert, getActualConvert } from '../services/fetchApi';

export const App = () => {
  const [rates, setRates] = useState([]);
  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');
  const [selectOne, setSelectOne] = useState('UAH');
  const [selectTwo, setSelectTwo] = useState('UAH');
  const [result, setResult] = useState(0);
  const [resultTwo, setResultTwo] = useState(0);
  const [rate, setRate] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getActualConvert().then(res => {
      setRates([res.rates]);
    });
  }, []);

  useEffect(() => {
    if (inputOne) {
      setLoading(true);
      getСonvert(selectTwo, selectOne, inputOne).then(res => {
        setLoading(false);
        setResult(res.result);
        setRate(res.info.rate);
      });
    }
  }, [inputOne, selectOne, selectTwo]);

  useEffect(() => {
    if (inputTwo) {
      setLoading(true);
      getСonvert(selectOne, selectTwo, inputTwo).then(res => {
        setLoading(false);
        setResultTwo(res.result);
        setRate(res.info.rate);
      });
    }
  }, [selectOne, inputTwo, selectTwo]);

  const onChangeOneValue = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name-1':
        setInputTwo('');
        setInputOne(value);
        break;

      case 'currency-1':
        setSelectOne(value);
        break;

      default:
        return;
    }
  };

  const onChangeTwoValue = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name-2':
        setInputOne('');
        setInputTwo(value);
        break;

      case 'currency-2':
        setSelectTwo(value);
        break;

      default:
        return;
    }
  };

  return (
    <>
      <Header rates={rates} />
      <ConversionForm
        onChangeOneValue={onChangeOneValue}
        onChangeTwoValue={onChangeTwoValue}
        result={result}
        resultTwo={resultTwo}
        inputOne={inputOne}
        inputTwo={inputTwo}
        rate={rate}
      />
      {loading && <Loader />}
    </>
  );
};
