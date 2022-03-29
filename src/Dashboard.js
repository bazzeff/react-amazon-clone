import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth"; 
import "./Dashboard.css";
import { auth, logout } from "./firebase"; 
import SideBar from "./components/menu/SideBar";
import { Link, useNavigate } from "react-router-dom";
import {useTranslation} from "react-i18next"; 
import Trending from "./Trending";
import products from './data/data'; 
import Header from "./components/layout/header/Header";


function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const {t, i18n} = useTranslation('common');

  const fetchUserName = async () => {

    const {email, password} = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
          this.setState({ email: "", password: "" });
      setName(user.email);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");

    fetchUserName();
  }, [user, loading]);

  return (
    <div className="body"> 
<div className="{ 'dark': isDark }">
<div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
 {/* <!-- Header -->  */}
 <SideBar /> 
 <div className="h-full ml-14 mt-14 mb-10 md:ml-64"> 

        {/* <!--  resources --> */ }
        <div className="mt-8 mx-4"> 
           

<div className="grid grid-flow-row-dense grid-cols-1 gap-1 flex flex-wrap -m-4 sm:grid-cols-3 md:grid-cols-4">
{products.map((category) => { 
                   const { id, title, price, img, description } = category;
                   return (
                       <article key={id}> 
                         <div className="max-w-sm m-2 rounded overflow-hidden shadow-lg">
  <img className="w-72 h-72"  src={img} alt={title} />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{title}</div>
     <h6 className="pt-2 m-0 leading-4 font-semibold">{price}</h6>
    <p className="text-gray-700 text-base">
    {description}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  <button className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-2  rounded-full tracking-wide
                                               font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300" >View Categories</button>
  </div>
</div>
                    </article>
                   );
               })}

  </div> 
        </div>
      {/*  <!-- ./External resources --> */ }
      </div>
    </div>
    </div>
    </div>
  );
}

export default Dashboard;