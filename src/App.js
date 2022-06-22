import Forma from './component/Forma'
import { useState , useEffect } from 'react'
import './App.css';
import { DataContext } from './Context/FormaContext'
import ShowMyData from './component/ShowMyData';
import { HdrStrong } from '@mui/icons-material';
import  Button from '@mui/material/Button'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
function App() {
  const [userData , setUserData] = useState({firstName: "" , secondName: "", email: "", phone: "",ticket: ""})
  const [requestCount , setRequestCount] = useState(0);
  const [firstRender , setFirstRender] = useState(false);
  const [isClicked , setIsClicked] = useState(false);

  const counter = () => {
   setRequestCount(count => count + 1)
  }
  const previewData = <div><p> {`Your name: ${userData.firstName} , Last name: ${userData.secondName} , Your email: ${userData.email} ,Your phone: ${userData.phone}`} </p> <br/> {`Ticket: ${userData.ticket}`} </div>

  useEffect(() => {
      console.log(`kim ja jeste ${firstRender}`)
      if(firstRender === false){
          console.log(`odpierdalam i dalej pokazuje ${firstRender}`)
          setFirstRender(true)
          setRequestCount(0);
          return;
      }
      console.log("jestem gitem")
      console.log(userData)
  counter();
  },[userData])

  return (
    <div className="App">
      <DataContext.Provider value={{userData , setUserData, requestCount, setRequestCount}}>
      <div>
     <Forma />
     </div>
     <ShowMyData />
     </DataContext.Provider>
     <Button onClick={() => setIsClicked(!isClicked)} variant="contained" startIcon={isClicked ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}>Show more</Button>
     {isClicked === true && previewData}
    </div>
  );
}

export default App;
