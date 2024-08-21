import { useSelector } from "react-redux";
import { selectInvoiceList } from "./invoicesSlice";
import { selectProductList } from "./productSlice";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setCurrency } from './currencySlice';

export const useInvoiceListData = () => {
  const invoiceList = useSelector(selectInvoiceList);

  const getOneInvoice = (receivedId) => {
    return (
      invoiceList.find(
        (invoice) => invoice.id.toString() === receivedId.toString()
      ) || null
    );
  };

  const listSize = invoiceList.length;

  return {
    invoiceList,
    getOneInvoice,
    listSize,
  };
};

export const useProductListData = () => {
  return useSelector(selectProductList);
};



const currencyMap = {
  "₹": "INR",
  "$": "USD",
  "£": "GBP",
  "J¥": "JPY",
  "C$": "CAD",
  "A$": "AUD",
  "S$": "SGD",
  "¥": "CNY",
  "₿": "BTC",
};

// hook to fetch and set currency into redux
export const useCurrency = (symbol) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  console.log("API key", API_KEY);
  const dispatch = useDispatch();
  const code = currencyMap[symbol];

  useEffect(() => {
    const fetchCurrencyRate = async () => {
      try {
        const response = await axios.get(
          `https://api.freecurrencyapi.com/v1/latest?apikey=${API_KEY}&currencies=${code}`
        );
        const currencyValue = response.data.data[code];
        const formattedvalue = currencyValue.toFixed(2);
        console.log("value for selected currency ", formattedvalue);

        
        dispatch(setCurrency({ symbol, value: formattedvalue }));
      } catch (error) {
        console.error("Error fetching currency rate:", error);
      }
    };

    if (code) {
      fetchCurrencyRate();
    }
  }, [code, dispatch, symbol]);
};
