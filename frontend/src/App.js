// import logo from './logo.svg';
// import './App.css';

const Hello = (props) => {
  return (
    <div>
      <p>Hello, {props.name}!</p>
    </div>
  );
};

const App = () => {
  const name = ['Amir', 'Ali'];
  for (let i = 0; i <= 2; i++) {
    return <Hello name={name[i]} />;
  }
};

export default App;
