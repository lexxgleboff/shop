import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Context } from "./index";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { check } from "./http/userAPI";
import { Spinner } from "react-bootstrap";

const App = observer(() => {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      
      check().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
      }).finally( () => setLoading(false))
    }, 2000)
  }, [])

  if (loading) {
    return <div className='d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
      <Spinner animation={'grow'}/>
    </div>
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
})

export default App;
