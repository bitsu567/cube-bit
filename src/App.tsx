import React from 'react';
import Button from './components/Button/button';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Button btnType='default' size='lg'>
          default
        </Button>
        <Button
          btnType='primary'
          className='good'
          onClick={(e) => console.log(333)}
        >
          primary
        </Button>
        <Button btnType='link' target='_blank' href='./'>
          link
        </Button>
        <Button btnType='link' disabled target='_blank' href='./'>
          link
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
