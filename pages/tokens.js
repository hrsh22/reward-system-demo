import { signOut, useSession } from "next-auth/react";
// import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Cookies from "js-cookie";
import axios from "axios";
import React, { useContext, useEffect, useState,useReducer } from "react";
import { ToastContainer } from "react-toastify";
import { Menu } from "@headlessui/react";
import "react-toastify/dist/ReactToastify.css";
import { Store } from "../utils/Store";
import DropdownLink from "../components/DropdownLink";
import { useRouter } from "next/router";
import SearchIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { getError } from "../utils/error";

// faRightFromBracket

export default function Layout({ title }) {
  const { status, data: session } = useSession();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [address, setAddress] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
    const addr = localStorage.getItem("walletAddress");
    setAddress(addr);
    getUserBalance("0xcA22f8d2316a35919f99c8dd7654f37A4faDdB4C", addr);
    fetchData();
  }, [cart.cartItems]);

  const logoutClickHandler = () => {
    Cookies.remove("cart");
    dispatch({ type: "CART_RESET" });
    signOut({ callbackUrl: "/login" });
  };

  const [query, setQuery] = useState("");

  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Please Install MetaMask");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      localStorage.setItem("walletAddress", accounts[0]);
      setAddress(accounts[0]);
      // router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  const disconnectWallet = async () => {
    localStorage.removeItem("walletAddress");
  };

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

  ////////////////////////////-----------NFTS FUNCTIONS-----------//////////////////////////////////
  const [nftList, setNFTList] = useState([]);
  const [nftImage, setNFTImage] = useState([]);
  const [nftData, setNFTData] = useState([]);

  // const parseURL = async (url) => {
  //   const ipfsHash = url.slice(7);
  //   const ipfsURL = `https:/${ipfsHash}`;
  //   const data = await fetch(ipfsURL);
  //   const json = await data.json();
  //   // console.log(json);
  //   return json;
  // };
  const parseURL = async (url) => {
    try {

      // console.log('url', url)
      const ipfsHash = url.slice(24);

      // console.log('ipfsHash', ipfsHash)
      const ipfsURL = `https://ipfs.io/${ipfsHash}`;
      const response = await fetch(ipfsURL);
  
      if (!response.ok) {
        throw new Error('Failed to fetch IPFS data');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('An error occurred while parsing the URL:', error);
      throw error;
    }
  };

  const getImage = (url) => {
    let image = url;
    image = image.toString();
    // console.log(image.slice(7, 66));
    // https://bafyreiearcor5tvq7jiqsmx6teotmcaibqn7k6waqigibnemxzif5pjvsq.ipfs.nftstorage.link/metadata.json
    return "https://" + image.slice(7, 66) + ".ipfs.nftstorage.link/image.jpg";
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return { ...state, loading: true, error: '' };
      case 'FETCH_SUCCESS':
        return { ...state, loading: false, orders: action.payload, error: '' };
      case 'FETCH_FAIL':
        return { ...state, loading: false, error: action.payload };
      default:
        state;
    }
  }
  
  
    const [{  orders }, dispatch1] = useReducer(reducer, {
      
      orders: [],
     
    });
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          dispatch1({ type: 'FETCH_REQUEST' });
          const { data } = await axios.get(`/api/admin/sunOfOrders`);
          dispatch1({ type: 'FETCH_SUCCESS', payload: data });
        } catch (err) {
          dispatch1({ type: 'FETCH_FAIL', payload: getError(err) });
        }
      };
      fetchData();
    }, []);
  
    
    let totalOrderAmount = 0;

  {orders.map((order) => {
  if (order.user && order.user.name === session.user.name) {
    totalOrderAmount += order.totalPrice;
  }
})}

  
  
  const quickmint = async () => {
    try {
      
    const data = {
      "name": "My Awesome NFT 500",
      "description": "This is an awesome NFT which yo get after purchasing 500$ worth of Stuff",
      "image": "https://mcdn.wallpapersafari.com/medium/62/26/UGdNBx.jpg",
      "addressTo": address
      }
      const config = {
        headers: {
          'Content-Type': 'application/json',
        }
      }
      const response = await axios.post('https://perkvenue.onrender.com/nfts/quickmint', JSON.stringify(data),config);
      console.log(response.nftdetails);
  }
  catch (error) {
    console.error(error);
  }
}






    

  async function fetchData() {
    try {
      const addr = await localStorage.getItem("walletAddress");
      console.log(addr);
      console.log(`https://perkvenue.onrender.com/nfts/details?owner=${addr}&tokenURI=https://nftstorage.link/ipfs/bafyreieobe5vph63qbplwoz4r57nocqtrxnrxicqnx47zckxhtx74hmas4/metadata.json`);
      const response = await axios.get(
        `https://perkvenue.onrender.com/nfts/details?owner=${addr}`
      );
    
      const response1 = await axios.get(
        `https://perkvenue.onrender.com/nfts/details?owner=${addr}&tokenURI=https://nftstorage.link/ipfs/bafyreieobe5vph63qbplwoz4r57nocqtrxnrxicqnx47zckxhtx74hmas4/metadata.json`
      );
      if (response1.data.length == 0) {
        var x=true;
      }
      else {
        var x=false;
      }
      if (totalOrderAmount >= 500 && x==true) { // Check if order amount is sufficient and NFT is not already created
        quickmint();
        console.log("NFT minted");
        
        }
        else{
          console.log("Not minted")
        }
            
    
      console.log("Response:", response);
      console.log("Total NFTs:", response.data.length);

      const dataList = [];
      const imgList = [];

      for (let i = 0; i < response.data.length; i++) {
        const nft = response.data[i];
        // console.log("1")
        const data = await parseURL(nft.tokenURI);
        // console.log("2")
        const image = getImage(data.image);

        // console.log('NFT Data:', data);
        dataList.push(data);
        imgList.push(image);
      }
      console.log("NFT Data:", dataList);
      console.log("NFT Image:", imgList);

      setNFTList(response.data);
      setNFTData(dataList);
      setNFTImage(imgList);
    } catch (error) {
      console.error(error);
    }
  }

  ///////////////////////////////---------------------------------////////////////////////////////

  return (
    <>
      <Head>
        <title>{title ? title + " - The Krusty Krab" : "The Krusty Krab"}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/kkicon.jpeg" />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

      <div className="flex min-h-screen flex-col justify-between ">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/" className="text-lg font-bold">
              The Krusty Krab
            </Link>
            <form
              onSubmit={submitHandler}
              className="mx-auto  hidden  justify-center md:flex"
            >
              <input
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                className="rounded-tr-none rounded-br-none p-1 text-sm   focus:ring-0"
                placeholder="Search products"
              />
              <button
                className="rounded rounded-tl-none rounded-bl-none bg-amber-300 p-1 text-sm dark:text-black"
                type="submit"
                id="button-addon2"
              >
                <SearchIcon className="h-5 w-5"></SearchIcon>
              </button>
            </form>
            <div className="flex items-center z-10">
              <Link href="/cart" className="p-2">
                Cart
                {cartItemsCount > 0 && (
                  <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                    {cartItemsCount}
                  </span>
                )}
              </Link>

              {status === "loading" ? (
                "Loading"
              ) : session?.user ? (
                <Menu as="div" className="relative inline-block">
                  <Menu.Button className="text-blue-600">
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white  shadow-lg ">
                    <Menu.Item>
                      <DropdownLink className="dropdown-link" href="/profile">
                        Profile
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropdownLink
                        className="dropdown-link"
                        href="/order-history"
                      >
                        Order History
                      </DropdownLink>
                    </Menu.Item>
                    {session.user.isAdmin && (
                      <Menu.Item>
                        <DropdownLink
                          className="dropdown-link"
                          href="/admin/dashboard"
                        >
                          Admin Dashboard
                        </DropdownLink>
                      </Menu.Item>
                    )}
                    <Menu.Item>
                      <a
                        className="dropdown-link"
                        href="#"
                        onClick={logoutClickHandler}
                      >
                        Logout
                      </a>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link href="/login" className="p-2">
                  Login
                </Link>
              )}
            </div>
          </nav>
        </header>

        <main className="container m-auto mt-4 px-4">
          <div className="flex justify-center items-center">
            {address ? (
              <>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center"
                  onClick={disconnectWallet}
                >
                  <span className="mr-2">{address}</span>
                  <FontAwesomeIcon
                    icon={faRightFromBracket}
                    className="h-6 w-6"
                  />
                </button>
              </>
            ) : (
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                // className="bg-[#1E50FF] outline-none border-none py-3 px-5 rounded-xl font-body cursor-pointer  duration-250 ease-in-out hover:transform-x-1 hover:drop-shadow-xl hover:shadow-sky-600 w-full mt-8 transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none "
                onClick={connectWallet}
              >
                Connect Wallet
              </button>
            )}
          </div>
          {address ? (
            <>
           <section className="bg-gray-100 py-8">
  <div className="container mx-auto px-4">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Total Order Value</h2>
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-4xl font-bold text-blue-600">${totalOrderAmount}</h3>
      </div>
    </div>
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Total Tokens</h2>
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-4xl font-bold text-blue-600">{userBalance}</h3>
        <p className="text-gray-600">Tokens Owned</p>
      </div>
    </div>
  </div>
</section>
<section className="bg-gray-100 py-8">
  <div className="container mx-auto px-4">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">My NFTs</h2>
    <div className="grid grid-cols-4 gap-4">
      {nftList.map((item, key) => (
        <div key={key} className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
          <img
            alt="NFT"
            src={nftImage[key]}
            className="rounded-10 object-cover w-full h-48"
          />
          <div>
            <h4 className="text-xl font-semibold tracking-tight text-blue-600">
              {nftData[key].name}
            </h4>
            <p className="mb-2 leading-normal">
              {nftData[key].description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


              {/* <h1>User Balance: {userBalance}</h1>

              <div className="grid grid-cols-4 gap-4 mx-20 my-10">
                {nftList.map((item, key) => (
                  <div key={key} className="flex flex-col items-center">
                    <img
                      alt="NFT"
                      src={nftImage[key]}
                      className="rounded-10 object-cover w-full h-48"
                    />
                    <div className="p-4">
                      <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                        {nftData[key].name}
                      </h4>
                      <p className="mb-2 leading-normal">
                        {nftData[key].description}
                      </p>
                    </div>
                  </div>
                ))}
              </div> */}
      
            </>
          ) : (
            <div>Please connect wallet!</div>
          )}
        </main>

        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright © 2022 The Krusty Krab</p>
        </footer>
      </div>
    </>
  );
}
