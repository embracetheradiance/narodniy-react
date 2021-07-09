import './App.css';
import Logo from './components/logo';
import Search from './components/search';
import Lsup from './components/logsignup';
import Side from './side'
function App() {
  return (
    <div>
      <header className='container'>
        <div className="hheader row">
          <Logo />
          <Search />
          <Lsup />
        </div>
      </header>
      <main>
        <br></br>
        <section className='mainpage container'>
            <Side />
        </section>
      </main>
    </div>
  );
}

export default App;
