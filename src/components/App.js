import { useState } from 'react';
import '../styles/App.scss';

function App() {
  const [errors, setErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState(['']);
  const [word, setWord] = useState('katakroker');
  const [userLetters, setUserLetters] = useState(['']);

  const handleClick = (ev) => {
    ev.preventDefault();
    setErrors(errors + 1);
  };

  const handleLetter = (ev) => {
    ev.preventDefault();
    setLastLetter(ev.currentTarget.value);
    if (ev.currentTarget.value.search(/[a-zñA-ZÑÁÉÓÍÚáéíóú]/) === -1) {
      // Letra mala
      setLastLetter('');
    }
    else (setUserLetters([...userLetters, ev.currentTarget.value]));

  };

  const renderSolutionLetters = () => {
    const wordArray = word.split('');
    console.log(wordArray); // hasta aquí es un array
    const htmli = wordArray.map((wordItem, index) => {

      /* const solution = [];
      solution.find((ev.currentTarget, [])) */

      if (lastLetter === wordArray) {
        return <li className='letter' key={index}> {wordItem} </li>
      }
      else {
        return <li className='letter' key={index}></li>
      }
    });
    return htmli;


  };
  return <div className='page'>
    <header>
      <h1 className='header__title'>Juego del ahorcado</h1>
    </header>
    <main className='main'>
      <section>
        <div className='solution'>
          <h2 className='title'>Solución:</h2>
          <ul className='letters'>
            {renderSolutionLetters()}





            {/*     <li className='letter'>k</li>
              <li className='letter'>a</li>
              <li className='letter'></li>
              <li className='letter'>a</li>
              <li className='letter'>k</li>
              <li className='letter'>r</li>
              <li className='letter'></li>
              <li className='letter'>k</li>
              <li className='letter'>e</li>
              <li className='letter'>r</li> */}
          </ul>
        </div>
        <div className='error'>
          <h2 className='title'>Letras falladas:</h2>
          <ul className='letters'>
            <li className='letter'>f</li>
            <li className='letter'>q</li>
            <li className='letter'>h</li>
            <li className='letter'>p</li>
            <li className='letter'>x</li>
          </ul>
        </div>
        <form className='form'>
          <label className='title' htmlFor='last-letter'>
            Escribe una letra:
          </label>
          <input
            autoComplete='off'
            className='form__input'
            maxLength='1'
            type='text'
            name='last-letter'
            id='last-letter'
            onChange={handleLetter}
            value={lastLetter}
          />
          <button onClick={handleClick}>Incrementar</button>
        </form>
      </section>
      <section className={`dummy error-${errors}`}>
        <span className='error-13 eye'></span>
        <span className='error-12 eye'></span>
        <span className='error-11 line'></span>
        <span className='error-10 line'></span>
        <span className='error-9 line'></span>
        <span className='error-8 line'></span>
        <span className='error-7 line'></span>
        <span className='error-6 head'></span>
        <span className='error-5 line'></span>
        <span className='error-4 line'></span>
        <span className='error-3 line'></span>
        <span className='error-2 line'></span>
        <span className='error-1 line'></span>
      </section>
    </main>
  </div>

}

export default App;
