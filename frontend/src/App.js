
import './App.css';
import './bootstrap.min.css'
import { Container } from 'react-bootstrap'
import Home from './pages/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import CreateStudent from './pages/CreateStudent';
import EditStudent from './pages/EditStudent';

function App() {
  return (
    <Router>
 <main className='py-3'>
 <Container>
  
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/create" element={<CreateStudent/>} />
    <Route path="/edit/:id" element={<EditStudent/>} />
    </Routes>
   
    </Container>
     </main>

    </Router>
   
  );
}

export default App;
