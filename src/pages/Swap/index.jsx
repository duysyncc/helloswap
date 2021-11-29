import './styles.css';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faPlus, faSortDown } from '@fortawesome/free-solid-svg-icons'
import Web3 from 'web3';
import { getWeb3 } from '../../constants/web3/getWeb3';
import { erc20 } from '../../constants/contracts/ecr20';
import { PancakeRouter } from '../../constants/contracts/PancakeRouter';
import TokenSearch from '../../components/TokenSearch';

function SwapPage() {
  const [showWindow, setShowWindow] = useState(false)
  const [count, setCount] = useState(0);
  const [accounts, setAccount] = useState("Loading...");

  const [tokenA, setTokenA] = useState(() => {
    return {
      address: "0xb289b361a633a9d2b0b39bae76bb458d83f58cec",
      inputToken: 0,
      decimals: 0,
      balance: 0,
      symbol: ""
    }
  })
  const [tokenB, setTokenB] = useState(() => {
    return {
      address: "0x03351b77e3548b2fa34b89b39e10f327b298c257",
      inputToken: 0,
      decimals: 0,
      balance: 0,
      symbol: ""
    }
  })
  let routerAddress = "0xCc7aDc94F3D80127849D2b41b6439b7CF1eB4Ae0";
  async function getInfoToken(addressToken) {
    let web3 = await getWeb3();
    let accounts = await web3.eth.getAccounts();
    let contract = await erc20(addressToken);
    let balance = await contract.methods.balanceOf(accounts[0]).call()
    let decimals = await contract.methods.decimals().call()
    let symbol = await contract.methods.symbol().call()
    return { "symbol": symbol, "decimals": decimals, "balance": balance, "address": addressToken }
  }
  async function setInfoToken(address, token, tokenStateSet) {
    let { symbol, decimals, balance } = await getInfoToken(address);
    tokenStateSet({
      ...token,
      address: address,
      balance: balance,
      decimals: decimals,
      symbol: symbol
    })
  }
  useEffect(() => {
    async function fetWeb3Init() {
      let web3 = await getWeb3();
      let accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
      await setInfoToken(tokenA.address, tokenA, setTokenA);
      await setInfoToken(tokenB.address, tokenB, setTokenB);
    }
    fetWeb3Init();
  }, []);

  function transferBalance(value, decimals) {
    let decimals_ = Web3.utils.toBN(decimals);
    let amount = Web3.utils.toHex(Web3.utils.toBN(value).mul(Web3.utils.toBN(10).pow(decimals_)));
    return amount
  }

  return (
    <div>
      {showWindow == "A" ? <TokenSearch
        handedClickCLose={() => { setShowWindow(false) }}
        handedClickCard={async (address) => {
          await setInfoToken(address, tokenA, setTokenA)
        }}
        infoToken={[tokenA, setTokenA]} /> : null}
      {showWindow == "B" ? <TokenSearch
        handedClickCLose={() => { setShowWindow(false) }}
        handedClickCard={async (address) => {
          await setInfoToken(address, tokenB, setTokenB)
        }}
        infoToken={[tokenB, setTokenB]} /> : null}
      <h3>{accounts}</h3>
      <div className="MainContent">
        <div className="MainCard">
          <nav className="TitleCard">Swap</nav>
          <div className="BoxInput">
            <div className="BoxInput-Info">
              <nav>Input</nav>
              <nav>Balance:{(tokenA.balance / 10 ** tokenA.decimals).toFixed(3)}</nav>
              <nav>{tokenA.symbol} Coin</nav>
            </div>
            <div className="BoxInput-Value">
              <input type="number" step="0.01" placeholder="0.00" value={(tokenA.inputToken / (10 ** tokenA.decimals))} onChange={(even) => {
                let inputToken = even.target.value * (10 ** tokenA.decimals);
                setTokenA({ ...tokenA, inputToken: inputToken });
              }}
                onBlur={async (even) => {
                  let inputToken = (even.target.value * (10 ** 18).toFixed(3));
                  console.log(BigInt(inputToken).toString())
                  try {
                    let contract = await PancakeRouter(routerAddress);
                    let getAmountsOut = await contract.methods.getAmountsOut(
                      Web3.utils.toBN(BigInt(inputToken).toString()),
                      [tokenA.address, tokenB.address]
                    ).call()
                    getAmountsOut = getAmountsOut[1]
                    console.log(getAmountsOut)
                    setTokenB({ ...tokenB, inputToken: getAmountsOut });
                  } catch (error) {

                  }
                }} />
              <button onClick={() => {
                setTokenA({ ...tokenA, inputToken: tokenA.balance })
              }}>Max</button>
              <button onClick={() => {
                setShowWindow("A")
              }}><FontAwesomeIcon size="2x" icon={faPlusCircle} />
              </button>
            </div>

          </div>
          <FontAwesomeIcon size="2x" className="IconPlus" icon={faSortDown} />
          <div className="BoxInput">
            <div className="BoxInput-Info">
              <nav>Input</nav>
              <nav>Balance:{(tokenB.balance / 10 ** tokenB.decimals).toFixed(3)}</nav>
              <nav>{tokenB.symbol} Coin</nav>
            </div>
            <div className="BoxInput-Value">
              <input type="number" step="0.01" placeholder="0.00" value={(tokenB.inputToken / (10 ** tokenB.decimals))} onChange={(even) => {
                let inputToken = even.target.value * (10 ** tokenB.decimals);
                setTokenB({ ...tokenB, inputToken: inputToken });
              }}
                onBlur={async (even) => {
                  let inputToken = (even.target.value * (10 ** 18).toFixed(3));
                  console.log(BigInt(inputToken).toString())
                  try {
                    let contract = await PancakeRouter(routerAddress);
                    let getAmountIn = await contract.methods.getAmountsIn(
                      Web3.utils.toBN(BigInt(inputToken).toString()),
                      [tokenA.address, tokenB.address]
                    ).call()
                    getAmountIn = getAmountIn[0]
                    console.log(getAmountIn)
                    setTokenA({ ...tokenA, inputToken: getAmountIn });
                  } catch (error) {

                  }
                }} />
              <button onClick={() => {
                setTokenB({ ...tokenB, inputToken: tokenB.balance })
              }}>Max</button>
              <button onClick={() => {
                setShowWindow("B")
              }}><FontAwesomeIcon size="2x" icon={faPlusCircle} />
              </button>
            </div>

          </div>
          <div className="BoxInput-OverView">
            <ul>
              <li>A per B</li>
              <li>Poor Share</li>
              <li>B per A</li>
            </ul>
            <ul>
              <li>50</li>
              <li>{count}</li>
              <li>50</li>
            </ul>
          </div>
          <button className="Button-Confirm" onClick={async () => {
            let contractTokenA = await erc20(tokenA.address);
            let allowanceTokenA = await await contractTokenA.methods.allowance(accounts, routerAddress).call();
            let contractTokenB = await erc20(tokenB.address);
            let allowanceTokenB = await await contractTokenB.methods.allowance(accounts, routerAddress).call();
            console.log(allowanceTokenA)
            console.log(tokenA.inputToken)

            if (+tokenA.inputToken > +allowanceTokenA) {
              alert("Approve token " + tokenA.symbol)
              await contractTokenA.methods.approve(routerAddress, Web3.utils.toBN(BigInt(10 ** 50).toString())).send({ from: accounts })
            }
            if (+tokenB.inputToken > +allowanceTokenB) {
              alert("Approve token ", tokenB.symbol)
              await contractTokenB.methods.approve(routerAddress, Web3.utils.toBN(BigInt(10 ** 50).toString())).send({ from: accounts })
            }

            let contract = await PancakeRouter(routerAddress);
            var data = await contract.methods.swapExactTokensForTokens(
              Web3.utils.toBN(BigInt(tokenA.inputToken).toString()), //amountIn
              Web3.utils.toBN(BigInt(tokenB.inputToken).toString()),//amountOutMin
              [tokenA.address, tokenB.address], //path
              accounts, //to
              Web3.utils.toBN(new Date().getTime() + 20 * 60), //deadline
            ).send({ from: accounts })
            alert("Swap Success Check on https://testnet.bscscan.com/tx/" + data.transactionHash)
          }}>Swap</button>
        </div>
      </div>
    </div >
  );
}

export default SwapPage;