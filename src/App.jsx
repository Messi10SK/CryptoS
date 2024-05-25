
import Home from './pages/Home'
import { BrowserRouter,Routes ,Route} from 'react-router-dom'
import LearnCrypto from './pages/LearnCrypto'
import DashBoard from './pages/DashBoard'
import Coin from './pages/Coin'
import Watchlist from './pages/Watchlist'
import Compare from './pages/Compare'
function App() {


  return (
   
<BrowserRouter>
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path= "/learncrypto" element ={<LearnCrypto/>}/>
          <Route path="/dashboard" element = {<DashBoard/>}/>
          <Route path="/coin/:id" element={<Coin />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/compare" element={<Compare />} />
    </Routes>
</BrowserRouter>
   
  )
}

export default App
