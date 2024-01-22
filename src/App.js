import logo from './logo.svg';
import './App.scss';
import Navbar from './views/navbar';
import GetNgay from './views/getngay';
import MyComponent from './views/MyComponent/MyComponent';
/**
 * 2 component: class component / function component (function , arrow)
 * function App() co the thay bang const App = () => {
 * JSX
 */
function App() {
  
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Xin chào bạn! React của Doanh đây!
    //     </p>
    //     <MyComponent/>
    //   </header>
    // </div>
    <div className="tong">
      <div className="top">
        <h3>TRƯỜNG ĐẠI HỌC KHOA HỌC HUẾ</h3>
          <GetNgay/>
      </div>
      <nav className="navbar">
            <Navbar/>
      </nav>
      <div style={{backgroundColor: 'white'}}>
          ok
      </div>
      <div style={{display: 'flex'}}>
      <div className="sidebar">
            s
      </div>
      <div className="noidung">
            s
      </div>
      </div>
    </div>
  );
}

export default App;
