import axios from 'axios';
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import CheckoutWizard from '../components/CheckoutWizard';
import Layout from '../components/Layout';
import { getError } from '../utils/error';
import { Store } from '../utils/Store';

export default function PlaceOrderScreen() {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { cartItems, shippingAddress, paymentMethod } = cart;
  const [address, setAddress] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  useEffect(() => {
    const addr = localStorage.getItem("walletAddress");
    setAddress(addr);
    getUserBalance("0xcA22f8d2316a35919f99c8dd7654f37A4faDdB4C", addr);

  },);
  

  const getUserBalance = async (tokenAddress, userAddress) => {
    try {
      const response = await axios.get(
        `https://perkvenue.onrender.com/tokens/getDetails/${tokenAddress}/${userAddress}`
      );
      // Handle the response data
      console.log(response.data.userBalance); // or update state, etc.
      setUserBalance(response.data.userBalance);
    } catch (error) {
      // Handle errors
      console.error(error);
    }
  };


  const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100;

  const itemsPrice = round2(
    cartItems.reduce((a, c) => a + c.quantity * c.price, 0)
  ); // 123.4567 => 123.46

  const shippingPrice = itemsPrice > 200 ? 0 : 15;
  const taxPrice = round2(itemsPrice * 0.15);
  const totalPrice = round2(itemsPrice + shippingPrice + taxPrice);
  const tokenUse=Math.floor(userBalance*0.1)
  const totalPriceWithToken = round2(totalPrice-tokenUse);
  const result= tokenUse < 1 ? true : false;
  console.log(result)

  const router = useRouter();
  useEffect(() => {
    if (!paymentMethod) {
      router.push('/payment');
    }
  }, [paymentMethod, router]);

  const [loading, setLoading] = useState(false);

  const placeOrderHandler = async () => {
    try {
      setLoading(true);
      const data0 =       {
        "tokenAddress": "0xcA22f8d2316a35919f99c8dd7654f37A4faDdB4C",
        "accountAddress": address,
        "amount": Math.floor(totalPrice*0.1)
      }
      
      const config = {
        headers: {
          'Content-Type': 'application/json',
          
        }
      };


      const response = await axios.post('https://perkvenue.onrender.com/tokens/mint/', JSON.stringify(data0),config);
      console.log(response.data.mintingDetails)
      const { data } = await axios.post('/api/orders', {
        orderItems: cartItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      });
      setLoading(false);
      dispatch({ type: 'CART_CLEAR_ITEMS' });
      Cookies.set(
        'cart',
        JSON.stringify({
          ...cart,
          cartItems: [],
        })
      );
      router.push(`/order/${data._id}`);
    } catch (err) {
      setLoading(false);
      toast.error(getError(err));
    }
  };

  const placeOrderHandlerToken = async () => {
    try {
      setLoading(true);
      const data0 =       {
        "tokenAddress": "0xcA22f8d2316a35919f99c8dd7654f37A4faDdB4C",
        "accountAddress": address,
        "amount": Math.floor(totalPrice*0.1)
      }
      
      const config = {
        headers: {
          'Content-Type': 'application/json',
          
        }
      };
      const data1 =       {
        "tokenAddress": "0xcA22f8d2316a35919f99c8dd7654f37A4faDdB4C",
        "accountAddress": address,
        "amount": tokenUse
      }

      const response = await axios.post('https://perkvenue.onrender.com/tokens/mint/', JSON.stringify(data0),config);
      const response1= await axios.post('https://perkvenue.onrender.com/tokens/burn/', JSON.stringify(data1),config);
      console.log(response.data.mintingDetails)
      console.log(response1.data.burningDetails)
      const { data } = await axios.post('/api/orders', {
        orderItems: cartItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      });
      setLoading(false);
      dispatch({ type: 'CART_CLEAR_ITEMS' });
      Cookies.set(
        'cart',
        JSON.stringify({
          ...cart,
          cartItems: [],
        })
      );
      router.push(`/order/${data._id}`);
    } catch (err) {
      setLoading(false);
      toast.error(getError(err));
    }
  };

  return (
    <Layout title="Place Order">
      <CheckoutWizard activeStep={3} />
      <h1 className="mb-4 text-xl">Place Order</h1>
      {cartItems.length === 0 ? (
        <div>
          Cart is empty. <Link href="/">Go shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <div className="card  p-5">
              <h2 className="mb-2 text-lg">Shipping Address</h2>
              <div>
                {shippingAddress.fullName}, {shippingAddress.address},{' '}
                {shippingAddress.city}, {shippingAddress.postalCode},{' '}
                {shippingAddress.country}
              </div>
              <div>
                <Link href="/shipping">Edit</Link>
              </div>
            </div>
            <div className="card  p-5">
              <h2 className="mb-2 text-lg">Payment Method</h2>
              <div>{paymentMethod}</div>
              <div>
                <Link href="/payment">Edit</Link>
              </div>
            </div>
            <div className="card overflow-x-auto p-5">
              <h2 className="mb-2 text-lg">Order Items</h2>
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th className="px-5 text-left">Item</th>
                    <th className="    p-5 text-right">Quantity</th>
                    <th className="  p-5 text-right">Price</th>
                    <th className="p-5 text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item._id} className="border-b">
                      <td>
                        <Link href={`/product/${item.slug}`} className="flex items-center">

                          <Image
                            src={item.image}
                            alt={item.name}
                            width={50}
                            height={50}
                            style={{
                              maxWidth: "100%",
                              height: "auto"
                            }}></Image>
                          {item.name}

                        </Link>
                      </td>
                      <td className=" p-5 text-right">{item.quantity}</td>
                      <td className="p-5 text-right">${item.price}</td>
                      <td className="p-5 text-right">
                        ${item.quantity * item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div>
                <Link href="/cart">Edit</Link>
              </div>
            </div>
          </div>
          <div>
            <div className="card  p-5">
              <h2 className="mb-2 text-lg">Order Summary</h2>
              <ul>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Items</div>
                    <div>${itemsPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Tax</div>
                    <div>${taxPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Shipping</div>
                    <div>${shippingPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Total</div>
                    <div>${totalPrice}</div>
                  </div>
                </li>
                {/* <li>
                  <div className="mb-2 flex justify-between">
                    <div>Tokens</div>
                    <div>${totalPrice}</div>
                  </div>
                </li> */}
                <li>
                  <button
                    disabled={loading}
                    onClick={placeOrderHandler}
                    className="primary-button w-full"
                  >
                    {loading ? 'Loading...' : 'Place Order'}
                  </button>
                </li>
              </ul>
            </div>
            <div className="card  p-5">
              <h2 className="mb-2 text-lg">Place Order Using Tokens</h2>
              <ul>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Tokens</div>
                    <div>{userBalance}</div>
                  </div>
                </li>               
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Total With Tokens</div>
                    <div>${totalPriceWithToken}</div>
                  </div>
                </li>
            
                <li>
                  <button
                    disabled={result}
                    onClick={placeOrderHandlerToken}
                    className="primary-button w-full"
                  >
                    {loading ? 'Loading...' : 'Place Order'}
                  </button>
                </li>
              </ul>
            </div>

          </div>
        </div>
      )}
    </Layout>
  );
}

PlaceOrderScreen.auth = true;
