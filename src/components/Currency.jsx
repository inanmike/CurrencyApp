import React, { useEffect, useState } from 'react'
import '../css/currency.css';
import { FaArrowRight } from "react-icons/fa6";
import axios from 'axios';

function Currency() {

    let BASE_URL = 'https://api.freecurrencyapi.com/v1/latest';
    // Add API Key 

    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState(0);
    const [kur, setKur] = useState({})

    const exchange = async () => {
        const res = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
        //console.log(res.data.data[toCurrency] * amount)
        const result = (res.data.data[toCurrency] * amount).toFixed(2);
        setResult(result);
    }

    const fetchKur = async () => {
        const res = await axios.get(`${BASE_URL}?apikey=${API_KEY}`)
        setKur(res.data.data)
    }

    useEffect(() => {
        fetchKur();
        console.log(import.meta.env);
    },[])

  return (
        <div>
            <div className="currency-div">
            <div className='title'>
                <h3 >DÖVİZ KURU HESAPLA</h3>
            </div>

            <div>
            <input 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number" className='amount'/>
            <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
                <option>USD</option>
                <option>EUR</option>
                <option>TRY</option>
                <option>RUB</option>
                <option>AUD</option>
                <option>BGN</option>
                <option>BRL</option>
                <option>CAD</option>
                <option>CHF</option>
                <option>CNY</option>
                <option>CZK</option>
                <option>DKK</option>
                <option>GBP</option>
                <option>HKD</option>
                <option>HRK</option>
                <option>HUF</option>
                <option>IDR</option>
                <option>ILS</option>
                <option>INR</option>
                <option>ISK</option>
                <option>JPY</option>
                <option>KRW</option>
                <option>MXN</option>
                <option>MYR</option>
                <option>NOK</option>
                <option>NZD</option>
                <option>PHP</option>
                <option>PLN</option>
                <option>RON</option>
                <option>SEK</option>
                <option>SGD</option>
                <option>THB</option>
                <option>ZAR</option>
            </select>
          
          <FaArrowRight style={{fontSize:"30px"}} />

            <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
                <option>TRY</option>
                <option>EUR</option>
                <option>USD</option>
                <option>RUB</option>
                <option>AUD</option>
                <option>BGN</option>
                <option>BRL</option>
                <option>CAD</option>
                <option>CHF</option>
                <option>CNY</option>
                <option>CZK</option>
                <option>DKK</option>
                <option>GBP</option>
                <option>HKD</option>
                <option>HRK</option>
                <option>HUF</option>
                <option>IDR</option>
                <option>ILS</option>
                <option>INR</option>
                <option>ISK</option>
                <option>JPY</option>
                <option>KRW</option>
                <option>MXN</option>
                <option>MYR</option>
                <option>NOK</option>
                <option>NZD</option>
                <option>PHP</option>
                <option>PLN</option>
                <option>RON</option>
                <option>SEK</option>
                <option>SGD</option>
                <option>THB</option>
                <option>ZAR</option>
            </select>
            <input value={result} type="number" className='result'/>

        </div>

        <div>
            <button 
            onClick={exchange}
            className='exchange-button'>Çevir</button>
        </div>
        </div>
        <div className='all-currency'>
            <h3>Döviz Kurları</h3>
            <div className='items'>
                {Object.keys(kur).map((key) => (
                    <div className='item' key={key}>
                        <span>{key} : {kur[key]}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
export default Currency