import logo from './logo.svg';
import './App.css';
import CounterClass from './components/Counter/CounterClass'
import CounterFn from './components/Counter/CounterFn';
import BuyStockClass from './components/BuyStock/BuyStockClass'
import { useState } from 'react';

const pageInfo = [
  {
    pageName: "CounterClass",
    pageComponent: CounterClass
  },
  {
    pageName: "CounterFn",
    pageComponent: CounterFn
  },
  {
    pageName: "BuyStockClass",
    pageComponent: BuyStockClass
  }
]

function App() {

  const [currentPage, setCurrentPage] = useState(pageInfo[1])

  const hanldeChangePage = (activePageInfo) => {
    setCurrentPage(activePageInfo)
  }

  const renderCurrentPage = () => {
    const CurPage = currentPage.pageComponent
    return <CurPage />
  }

  return (
    <div className="App" hello="hello">
      <header className="App__header">
        <nav className="App__header__nav">
          {pageInfo.map(page => {
            return <a onClick={() => hanldeChangePage(page)} >{page.pageName}</a>
          })}
        </nav>
      </header>
      {
        renderCurrentPage()
      }
    </div>
  );
}

export default App;
