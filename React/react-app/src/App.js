import logo from './logo.svg';
import './App.css';
import CounterClass from './components/Counter/CounterClass'
import CounterFn from './components/Counter/CounterFn';
import CounterNumber from './components/Counter/CounterNumber';
import BuyStockClass from './components/BuyStock/BuyStockClass'
import React, { useContext, useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import BuyStockFn from './components/BuyStock/BuyStockFn';
import { CounterContext } from './context/counterContext';
import { BuyStockContextProvider } from './context/BuyStockContext';
import MyReduxCounterFn, { MyReduxCounterNumberFn } from './MyRedux/MyReduxApp';
import MyReactReduxCounterFn, { MyReactReduxCounterClassContainer, MyReactReduxCounterNumberFn } from './MyRedux/ReactReduxApp';
import { MyRoute, MyLink } from './MyReactRouter/MyReactRouterDOM'


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
    pageName: "MyReactReduxCounterClassContainer",
    pageComponent: MyReactReduxCounterClassContainer
  },
  {
    pageName: "MyReactReduxCounterFn",
    pageComponent: MyReactReduxCounterFn
  },
]

function App() {
  const renderCurrentPage = (currentPage) => {
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
                return <MyLink key={page.pageName} to={`/${page.pageName}`} >{page.pageName} <CounterNumber />  </MyLink>
              case "MyReduxCounterFn":
                return <MyLink key={page.pageName} to={`/${page.pageName}`}>{page.pageName} <MyReactReduxCounterNumberFn />  </MyLink>
              default:
                return <MyLink key={page.pageName} to={`/${page.pageName}`} >{page.pageName}</MyLink>
            }
          })}

        </nav>
      </header>

      <BuyStockContextProvider>
        {
          pageInfo.map(page => {
            return <MyRoute key={page.pageName} exact path={`/${page.pageName}`}>
              {renderCurrentPage(page)}
            </MyRoute>
          })

        }
        <MyRoute exact path="/">
          <h1>Home</h1>
        </MyRoute>
      </BuyStockContextProvider>
    </div>
  );
}

export default App;
