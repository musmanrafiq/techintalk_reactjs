import logo from './logo.svg';
import './App.css';
import Select from 'react-select';

const options = [ 
  { value: 'A', label: 'First'},
  { value: 'B', label: 'Second'},
  { value: 'C', label: 'Third'}]

function App() {

  const onSelectionChange = (selectedOption) => {
    console.log(selectedOption)
  }

  return (
    <div className="App">
      <Select options={options}
      onChange={onSelectionChange} />
    </div>
  );
}

export default App;
