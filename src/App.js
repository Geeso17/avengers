import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <div className="row first">
          <div className="col-md-12">
            <h2>0</h2>
          </div>
        </div>
        <div className="row second">
          <div className="col-md-3">
            <h2>AC</h2>

          </div>
          <div className="col-md-3 push">
            <h2>+/-</h2>

          </div>
          <div className="col-md-3 pull">
            <h2>%</h2>
          </div>
          <div className="col-md-3 play">
            <h2>÷</h2>
          </div>
        </div>
        <div className="row third">
          <div className="col-md-3">

            <h2>7</h2>

          </div>
          <div className="col-md-3 push">
            <h2>8</h2>

          </div>
          <div className="col-md-3 pull">
            <h2>9</h2>
          </div>
          <div className="col-md-3 play">
            <h2 style={{ color: 'white' }}>x</h2>

          </div>
        </div>
        <div className="row fourth">
          <div className="col-md-3">
            <h2>4</h2>
          </div>
          <div className="col-md-3 push">
            <h2>5</h2>

          </div>
          <div className="col-md-3 pull">
            <h2>6</h2>
          </div>
          <div className="col-md-3 play">
            <h2 style={{ color: 'white' }}>-</h2>
          </div>
        </div>
        <div className="row fifth">
          <div className="col-md-3">
            <h2>1</h2>

          </div>
          <div className="col-md-3 push">
            <h2>2</h2>

          </div>
          <div className="col-md-3 pull">
            <h2>3</h2>
          </div>
          <div className="col-md-3 play">
            <h2 style={{ color: 'white' }}>+</h2>

          </div>
        </div>
        <div className=" row sixth">
          <div className="col-md-6">
            <h2>0</h2>
          </div>
          <div className="col-md-3 pull">
            <h2>.</h2>
          </div>
          <div className="col-md-3 play">
            <h2 style={{ color: 'tomato' }}>=</h2>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
