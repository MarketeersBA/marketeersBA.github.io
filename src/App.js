import './App.css';
import ApngComponent from 'react-apng';
import apic1 from './marketeers.png'
function App() {
  return (
    <div className="wrapper">
      <div style={{ height: '100vh', textAlign: 'center', verticalAlign: 'middle' }}>
          <ApngComponent
            autoPlay={true}
            src={apic1}
            />
      </div>
    </div>
  );
}

export default App;
