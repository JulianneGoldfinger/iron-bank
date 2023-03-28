import { NavBar } from './components/NavBar';
import { HomePage } from './components/HomePage';
import { CreateAccountPage } from './components/CreateAccountPage';
import { DepositPage } from './components/DepositPage';
import { WithdrawPage } from './components/WithdrawPage';
import { AllDataPage } from './components/AllDataPage';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import AccountContext from './AccountContext';
import BalanceContext from './BalanceContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function App() {
  const [accounts, setAccounts] = useState([]);
  const [balance, setBalance] = useState(100);




  return (
    <AccountContext.Provider value={[accounts, setAccounts]}>
      <BalanceContext.Provider value={[balance, setBalance]}>

      <Container fluid>
        <Router>
                <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/withdraw" element={<WithdrawPage />} />
        <Route path="/deposit" element={<DepositPage />} />
        <Route path="/all-data" element={<AllDataPage />} />
      </Routes>
      </Router>

      </Container>
      </BalanceContext.Provider>
    </AccountContext.Provider>
  );
}

export default App;
