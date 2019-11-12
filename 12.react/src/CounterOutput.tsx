import * as React from 'react';

interface ICounterOutputProps {
  counter: number;
  firstName: string;
}

const counterOutput = (props: ICounterOutputProps) => {
  return (<div>
    <p style={{ textAlign: 'center' }}>{props.counter}</p>
    <p style={{ textAlign: 'center' }}>{props.firstName}</p>
  </div>)
};

export default counterOutput;
