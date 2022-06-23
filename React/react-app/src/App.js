import logo from './logo.svg';
import './App.css';
import CounterClass from './components/Counter/CounterClass'
import CounterFn from './components/Counter/CounterFn';
import CounterNumber from './components/Counter/CounterNumber';
import BuyStockClass from './components/BuyStock/BuyStockClass'
import { useContext, useState } from 'react';
import BuyStockFn from './components/BuyStock/BuyStockFn';
import { CounterContext } from './context/counterContext';
import { BuyStockContextProvider } from './context/BuyStockContext';
import MyReduxCounterFn, { MyReduxCounterNumberFn } from './MyRedux/MyReduxApp';
import MyReactReduxCounterFn, { MyReduxCounterClassContainer, MyReactReduxCounterNumberFn } from './MyRedux/ReactReduxApp'


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
  },
  {
    pageName: "BuyStockFn",
    pageComponent: BuyStockFn
  },
  {
    pageName: "MyReduxCounterFn",
    pageComponent: MyReduxCounterFn
  },
  {
    pageName: "MyReduxCounterClassContainer",
    pageComponent: MyReduxCounterClassContainer
  },
  {
    pageName: "MyReactReduxCounterFn",
    pageComponent: MyReactReduxCounterFn
  },
]

function App() {

  const [currentPage, setCurrentPage] = useState(pageInfo[1])
  const value = useContext(CounterContext);

  console.log("APP", value)
  const hanldeChangePage = (activePageInfo) => {
    setCurrentPage(activePageInfo)
  }

  const renderCurrentPage = () => {
    const CurPage = currentPage.pageComponent
    return <CurPage patrick="patrick" />
  }



  return (
    <div className="App" hello="hello">
      <header className="App__header">
        <nav className="App__header__nav">
          {pageInfo.map(page => {
            switch (page.pageName) {
              case "CounterClass":
                return <a onClick={() => hanldeChangePage(page)} >{page.pageName} <CounterNumber />  </a>
              case "MyReduxCounterFn":
                return <a onClick={() => hanldeChangePage(page)} >{page.pageName} <MyReactReduxCounterNumberFn />  </a>

              default:
                return <a onClick={() => hanldeChangePage(page)} >{page.pageName}</a>
            }
          })}
        </nav>
      </header>
      <BuyStockContextProvider>
        {
          renderCurrentPage()
        }
      </BuyStockContextProvider>
    </div>
  );
}

export default App;
