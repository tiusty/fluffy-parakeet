import { home_3d_backend } from "../../declarations/home_3d_backend";
import React, { useRef, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import Cylinder3d from "./Cylinder3d";
import { render } from "react-dom";
import ReactDOM from 'react-dom'
import Box from './box.jsx'

const MyHello = () => {
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');

  async function doGreet() {
    const greeting = await home_3d_backend.greet(name);
    setMessage(greeting);
  }

  return (
    <>
      <section className='App-header'>
        {/* Canvas 1 */}
        <Canvas>
          <pointLight position={[10, 10, 10]} />
          <ambientLight />
          <Cylinder3d position={[-1.2, 0, 0]} />
          <Cylinder3d position={[1.2, 0, 0]} />
        </Canvas>
 
        {/* Canvas 2 */}
        <Canvas>
          <pointLight position={[10, 10, 10]} />
          <ambientLight intensity={0.5} />
          <Cylinder3d position={[-1.2, 0, 0]} wireframe={true} />
          <Cylinder3d position={[1.2, 0, 0]} wireframe={true} />
        </Canvas>
 
        {/* Canvas 3 */}
        <Canvas>
          <pointLight position={[10, 10, 10]} />
          <ambientLight color={"red"} />
          <Cylinder3d position={[-1.2, 0, 0]} />
          <Cylinder3d position={[1.2, 0, 0]} />
        </Canvas>

        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
      </Canvas>
      </section>
    </>
  );
};

render(<MyHello />, document.getElementById("app"));
