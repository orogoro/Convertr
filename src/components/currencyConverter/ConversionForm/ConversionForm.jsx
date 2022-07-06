import styled from './ConversionForm.module.css';
export default function ConversionForm({
  onChangeOneValue,
  onChangeTwoValue,
  result,
  resultTwo,
  inputOne,
  inputTwo,
  rate,
}) {
  const valueOne = () => {
    return resultTwo.toFixed(2);
  };
  const valueTwo = () => {
    return result.toFixed(2);
  };
  return (
    <>
      <h2 className={styled.ourRate}>Курс нашего банка</h2>
      <form className={styled.form}>
        <label>
          <input
            className={styled.input}
            type="number"
            name="name-1"
            value={inputOne || valueOne()}
            onChange={onChangeOneValue}
          />
        </label>

        <select
          className={styled.select}
          name="currency-1"
          onChange={onChangeOneValue}
        >
          <option>UAH </option>
          <option>USD</option>
          <option>EUR</option>
        </select>

        {!(rate === 0) && (
          <div className={styled.bank_rate}>
            <p>1 = {rate.toFixed(4)}</p>
          </div>
        )}

        <label className={styled.lable}>
          <input
            className={styled.input}
            type="number"
            name="name-2"
            value={inputTwo || valueTwo()}
            onChange={onChangeTwoValue}
          />
        </label>

        <select
          className={styled.select}
          name="currency-2"
          onChange={onChangeTwoValue}
        >
          <option>UAH</option>
          <option>USD</option>
          <option>EUR</option>
        </select>
      </form>
    </>
  );
}
