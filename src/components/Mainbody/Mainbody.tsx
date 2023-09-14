import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import './styles/mainbody.css';

const Mainbody = () => {

  return (
    <div className="app">
      <div>
        <Screen1 />
      </div>
      <div>
        <Screen2 />
      </div>
      <div>
        <Screen3 />
      </div>
    </div>
  );
};

export default Mainbody;
