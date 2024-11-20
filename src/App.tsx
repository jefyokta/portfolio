import { useEffect, useState } from 'react';
import './App.css';
import First from './pages/first';
import DrStrange from './pages/Drstrange';
import Third from './pages/third';
import Spacer from './components/Spacer';
import SideBar, { NavBar } from './components/SideBar';
import { ScrollProvider } from './components/ScrollContext';

const App = () => {
  const [offsetY, setOffsetY] = useState<number>(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    console.log(offsetY)

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollProvider>

      <div className='min-h-screen w-screen overflow-x-hidden'>
        <NavBar />
        <SideBar />
        <First offsetY={offsetY} />
        <DrStrange />
        <Spacer />
        <Third />
        <Spacer />
      </div>
    </ScrollProvider>
  );
};

export default App;
