import logo from './logo.svg';
import './App.css';
import { GenerateCards } from './components/GenerateCards';
import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';
import { CanvasCardGen } from './components/GenerateCards';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <div className="App">
      <div className='CanvasS'> 
      <Canvas>
              <OrbitControls></OrbitControls>
                <Experience>
                  
                </Experience>
            <CanvasCardGen></CanvasCardGen>
            </Canvas>
      </div>
      
      <footer>
        <GenerateCards />
      </footer>
         
     
    </div>
  );
}

export default App;
