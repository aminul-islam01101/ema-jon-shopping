import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Shop from './components/Shop';

function App() {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div>
            <Nav className="bg-slate-600" cart={cart} />
            <Shop cart={cart} setCart={setCart} />
        </div>
    );
}
export default App;
