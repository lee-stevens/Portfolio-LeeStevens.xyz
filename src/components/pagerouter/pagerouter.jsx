import { Route, Routes} from 'react-router-dom'
import Home     from '../page-home'
import Unity    from '../page-unity'
import WebDev   from '../page-webdev'

function PageRouter() {
    return (
        <PageRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Unity" element={<Unity/>}/>
                <Route path="/WebDev" element={<WebDev/>}/>
            </Routes>
        </PageRouter>
    )
  }
  
  export default PageRouter