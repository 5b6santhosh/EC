import React from 'react';
import { ButtonCounter } from './components/ButtonCounter';

export const App = () => {
  const name: string = 'Hello React Button';

  let a: string = 'TEST';
  let b: string = 'ETST';

  const box: [] = [];

  const onChildClicked = (e: number) => {
    console.warn('callback from parent triggered', e);
  };

  const add = () => {
    alert('s');
  };

  return (
    <div className="p-2">
      <h1>React TSX Starter</h1>
      <div>containing:</div>

      <ul>
        <li>React</li>
        <li>Twitter Bootstrap</li>
        <li>Basic Functional Components App and ButtonCounter</li>
      </ul>

      <div className="form-group">
        <input type="text" name="" className="form-control" value="name" />
      </div>

      <div className="form-group">
        <input
          type="button"
          name=""
          className="btn btn-primary"
          onClick={add}
          value="add"
        />
      </div>

      <ButtonCounter name={name} onClicked={(e) => onChildClicked(e)} />
    </div>
  );
};
