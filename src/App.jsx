
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import "./app.css"
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import {FiSettings} from "react-icons/fi"
import  Sidebar from "./components/SideBar"
import { allstates } from './states/store'
import Navbar from './components/navbar'
import Ecommerce  from './pages/Ecommerce'
import  Customers  from './pages/Customers'
import Employee from './pages/Employee'
import Kanban from './pages/Kanban'
import Orders from './pages/Orders'
import Editor from './pages/Editor'
import Calendar from './pages/Calendar'
import Colorpick from './pages/Colorpick'
import Settings from './components/settings'
import Line from "./pages/Line"
import Area from './pages/Area'
import Bar from './pages/Bar'
import Pie from './pages/Pie'
import Financial from './pages/Financial'
import ColorMapping from './pages/ColorMaping'
import Pyramid from './pages/Pyramid'
import Stacked from './pages/Stacked'
function App() {
  const open = allstates(s=>s.menu)
 
  const settsetting = allstates(s=>s.setsetting)
    const theme =allstates(s=>s.theme)
  return (

    <>
      <BrowserRouter  >
      <Settings/>
    <div className={`flex relative  min-h-[100dvh] ${theme} dark:bg-main-dark-bg`}>

            <div className="fixed right-8 bottom-4" style={{ zIndex: '1000' }}>
                    <TooltipComponent
                      content="Settings"
                      position="Top"
                    >
                      <button type="button" onClick={(e)=>{settsetting();e.currentTarget.classList.toggle("-rotate-180")}} className=' transition text-4xl'>
                        <FiSettings />
                      </button>

                    </TooltipComponent>
                  </div>

        <div className={`fixed  bg-white dark:text-white  dark:bg-secondary-dark-bg
          z-40 overflow-x-hidden     w-72 transition    min-h-screen ${open ? " translate-x-0":"-translate-x-full"}`}>
            <Sidebar/>

        </div>
        
        <div style={{transition:"150ms"}} className={`w-full dark:text-white  dark:bg-main-dark-bg     bg-main-bg ${open ? "md:ml-72":"" }  `}>
          <Navbar/>

          <Routes>
          
          <Route path="/" element={(<Ecommerce />)} />
                <Route path="/ecommerce" element={(<Ecommerce />)} />

                {/* pages  */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employee />} />
                <Route path="/customers" element={<Customers />} />

                {/* apps  */}
                <Route path="/kanban" element={<Kanban/>} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<Colorpick />} />


                
                {/* charts  */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
          </Routes>
        </div>
        













    </div>


      </BrowserRouter>
    </>
  )
}

export default App
