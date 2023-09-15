import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { URLSearchParams } from 'url';
import newRequest from '../../utils/newRequest';

export const Success = () => {
    const navigate = useNavigate();
    const {search} = useLocation();
    const params = new URLSearchParams(search);
    const payment_intent = params.get("payment_intent");

    //when we open this page it going to run this useEffect immediately
    useEffect(()=>{
        const makeRequest = async () =>{
            try {
                await newRequest.put("orders", {payment_intent});
                setTimeout(()=>{
                    navigate("/orders");
                }, 6000);
            } catch (err) {
                console.log(err);
            }
        };
        makeRequest();
    }, []);

  return (
    <div>
        Payment successful, You are being redirected to the orders page.
        please do not close this page.
    </div>
  )
}
