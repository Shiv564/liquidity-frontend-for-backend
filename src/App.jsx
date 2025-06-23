
import './App.css'

import { Route, Routes } from 'react-router'
import ByPass from './Components/Protect/ByPass'
import Protect from './Components/Protect/Protect'
import Layout from './Components/Layout/Layout'
import Account from './Components/Account/Account'
import Deposit from './Components/Account/Deposit'
import DepositRequests from './Components/Account/DepositRequests'
import Plans from './Components/Plans/Plans'
import DepositDetail from './Components/Account/DepositDetail'
import Withdraw from './Components/Account/Withdraw'
import WithrawalRequests from './Components/Account/WithrawalRequests'
import WithdrawalDetail from './Components/Account/WithdrawalDetail'
import Mine from './Components/Mine/Mine'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
// import PlansHistory from './Components/Plans/PlansHistory'
import Dashboard from './Components/Mine/Dashboard'
import Earn from './Components/Earn/Earn'
// import PlanBought from './Components/Plans/PlanBought'
import InviteEarn from './Components/Earn/InviteEarn'
import Referrralsearn from './Components/Earn/Referrralsearn'
import Selecttoken from './Components/Account/Selecttoken'





function App() {


  return (
    <div className="container-alpha">

      <Routes>
        {/* Public Routes - Access without authentication */}

        <Route path='/' element={<ByPass Component={Layout} />}>

          {/* account  */}
          <Route index element={<ByPass Component={Account} />} />
          <Route path='deposit/:token' element={<ByPass Component={Deposit} />} />
          <Route path='deposit/select_token' element={<ByPass Component={Selecttoken} />} />
          <Route path='/deposit/request' element={<ByPass Component={DepositRequests} />} />
          <Route path='deposit/request/:id' element={<ByPass Component={DepositDetail} />} />

          {/* earn  */}
          <Route path='earn' element={<ByPass Component={Earn} />} />
          <Route path='earn/invite' element={<ByPass Component={InviteEarn} />} />
          <Route path='earn/referrals' element={<ByPass Component={Referrralsearn} />} />

          {/* Referrralsearn  */}

          {/* plans  */}
          <Route path='plans' element={<ByPass Component={Plans} />} />
          {/* <Route path='plans/plan/:order' element={<ByPass Component={PlanBought} />} /> */}
          {/* <Route path='plans/history' element={<ByPass Component={PlansHistory} />} /> */}

          {/* mine and dashboard  */}
          <Route path='mine' element={<ByPass Component={Mine} />} />
          <Route path='dashboard' element={<ByPass Component={Dashboard} />} />

          <Route path='withdrawal' element={<ByPass Component={Withdraw} />} />
          <Route path='withdrawal/request' element={<ByPass Component={WithrawalRequests} />} />
          <Route path='withdrawal/request/:request' element={<ByPass Component={WithdrawalDetail} />} />

        </Route>


        {/* authenticators  */}
        <Route path='/login' element={<Protect Component={Login} />} />
        <Route path='/register' element={<Protect Component={Register} />} />
        {/* Protected Routes - Requires authentication */}
        {/* <Route path='/Home' element={<Protect Component={Home} />} /> */}
      </Routes>
    </div>
  )
}

export default App

