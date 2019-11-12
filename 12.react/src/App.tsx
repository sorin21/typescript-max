import * as React from 'react';

import CounterOutput from './CounterOutput';

// interface IAppProps {}

interface IAppState {
  counterValue: number;
  firstName: string;
}

class App extends React.Component<{}, IAppState> {
  public state = { 
    counterValue: 0,
    firstName: 'Dan' 
  };

  public render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <CounterOutput counter={this.state.counterValue} firstName={this.state.firstName} />
        <button onClick={this.incHandler}>Increment</button>
        <button onClick={this.decHandler}>Decrement</button>
      </div>
    );
  }

  private incHandler = () => {
    this.setState(prevState => {
      return { counterValue: prevState.counterValue + 1, firstName: 'Ionel' };
    });
  };

  private decHandler = () => {
    this.setState(prevState => {
      return { counterValue: prevState.counterValue - 1, firstName: '' };
    });
  };
}

export default App;
