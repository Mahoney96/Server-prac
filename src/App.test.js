import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


class App extends React.Component{
  render(){
    return <div>
      <Header/>
      

    </div>
  }
}

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
