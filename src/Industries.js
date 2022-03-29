import React, { useEffect,useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth"; 
import { Link, useNavigate } from "react-router-dom";
import {useTranslation} from "react-i18next";
import Header from './components/layout/header/Header'
import { auth, logout } from "./firebase"; 

const Industries = () => {
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
        <div> 
    <div className="{ 'dark': isDark }">
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
     {/* <!-- Header -->  */} 
    
     <Header />
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
         {/*   <!--Card 1--> */} 
          <div className="rounded overflow-hidden bg-white dark:bg-gray-800 dark:text-white shadow-lg">
            <Link to="/agriculture">
            <img className="w-full" src="https://ahmenki.s3.amazonaws.com/images/site_categories/SRgJ78bEJtTCF5XwYbSsZhsNSGnqPJjzRFeFYZ2r.jpeg" alt="Mountain" />
            </Link>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{t('agriculture.title')}</div>
              <p className="bg-white dark:bg-gray-800 dark:text-white text-gray-700 text-base">
              {t('agriculture.description')}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#argiculture</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#forestry</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fishing</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#hunting</span>
            </div>
          </div>
           {/*  <!--Card 2--> */}
          <div className="rounded overflow-hidden bg-white dark:bg-gray-800 dark:text-white shadow-lg">
            <Link to="/mining"><img className="w-full" src="https://ahmenki.s3.amazonaws.com/images/site_categories/Cy8AbSZtk0lFacM7k7QqACPvuElNNeZgZyRcAqDL.jpeg" alt="River" />
            </Link>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{t('mining.title')}</div>
              <p className="bg-white dark:bg-gray-800 dark:text-white text-gray-700 text-base">
              {t('mining.description')}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#mining</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#gas&oil</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#quarring</span>
            </div>
          </div>
    
           {/*  <!--Card 3--> */}
          <div className="rounded overflow-hidden bg-white dark:bg-gray-800 dark:text-white shadow-lg">
            <Link to="/utilities">
            <img className="w-full" src="https://ahmenki.s3.amazonaws.com/images/site_categories/JGPnGyxsqHHsZFHNumIuIdK5kG6uyPnQNkoj10Ji.jpeg" alt="Forest"/>
            </Link>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{t('utilities.title')}</div>
              <p className="bg-white dark:bg-gray-800 dark:text-white text-gray-700 text-base">
              {t('utilities.description')}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#utilities</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#water</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#communications</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#water</span>
            </div>
          </div>
           {/*  <!--Card 4--> */}
          <div className="rounded overflow-hidden bg-white dark:bg-gray-800 dark:text-white shadow-lg">
                <Link to="/construction">
                <img className="w-full" src="https://ahmenki.s3.amazonaws.com/images/site_categories/ClxTVIVyw7sybmv2YHbq6nKHjYm7k1s4tsoYUDD2.jpeg" alt="Mountain"/>
                </Link>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{t('construction.title')}</div>
                  <p className="bg-white dark:bg-gray-800 dark:text-white text-gray-700 text-base">
                  {t('construction.description')}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#construction</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#buildings</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#remodeling</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#generalrepair</span>
                </div>
              </div>
               {/*  <!--Card 5--> */}
              <div className="rounded overflow-hidden bg-white dark:bg-gray-800 dark:text-white shadow-lg">
                <Link to="/manufacturing"><img className="w-full" src="https://ahmenki.s3.amazonaws.com/images/site_categories/1dVbIxGb4a4hwQlq2MmcbxWcsqSYD8jPmz0b8ZzV.jpeg" alt="River"/>
                </Link>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{t('manufacturing.title')}</div>
                  <p className="bg-white dark:bg-gray-800 dark:text-white text-gray-700 text-base">
                  {t('manufacturing.description')}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#manufacturing</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#localmanufacturer</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#internationalmanufacturer</span>
                </div>
              </div>
    
               {/*  <!--Card 6--> */}
              <div className="rounded overflow-hidden bg-white dark:bg-gray-800 dark:text-white shadow-lg">
                <Link to="/wholesaler">
                <img className="w-full" src="https://ahmenki.s3.amazonaws.com/images/site_categories/stU0wXLOECAFsnN8HvzaER1RM3jSJdLTmkTSpqYr.jpeg" alt="Forest"/>
                </Link>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{t('wholesaler.title')}</div>
                  <p className="bg-white dark:bg-gray-800 dark:text-white text-gray-700 text-base">
                  {t('wholesaler.description')}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#wholesaler</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#wholesaletrade</span>
                </div>
              </div>
               {/*  <!--Card 7--> */}
              <div className="rounded overflow-hidden bg-white dark:bg-gray-800 dark:text-white shadow-lg">
                    <Link to="/retail-store">
                    <img className="w-full" src="https://ahmenki.s3.amazonaws.com/images/site_categories/ZXTefreqe54F4YEUABsyiEoVfcZ4yuGYSeRoHuKj.jpeg" alt="Mountain"/>
                    </Link>
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{t('retail-store.title')}</div>
                      <p className="bg-white dark:bg-gray-800 dark:text-white text-gray-700 text-base">
                      {t('retail-store.description')}
                      </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#retailstore</span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#dealer</span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#homecenter</span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#applicance</span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Electronics</span>
                    </div>
                  </div>
                   {/*  <!--Card 8--> */}
                  <div className="rounded overflow-hidden bg-white dark:bg-gray-800 dark:text-white shadow-lg">
                    <Link to="/transportation"><img className="w-full" src="https://ahmenki.s3.amazonaws.com/images/site_categories/nS008OhijMufld2pQeNaLATTypmjbFIYuiN8PT8k.jpeg" alt="River"/>
                    </Link>
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{t('transportation.title')}</div>
                      <p className="bg-white dark:bg-gray-800 dark:text-white text-gray-700 text-base">
                      {t('transportation.description')}
                      </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#transportation</span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#warehousing</span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#freight</span>
                    </div>
                  </div>
    
                   {/*  <!--Card 9--> */}
                  <div className="rounded overflow-hidden bg-white dark:bg-gray-800 dark:text-white shadow-lg">
                    <Link to="/information">
                    <img className="w-full" src="https://ahmenki.s3.amazonaws.com/images/site_categories/J8xapnDVneY8f7UpWcXni1iy0PpLp8AL0n605CAN.jpeg" alt="Forest"/>
                    </Link>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{t('information.title')}</div>
                      <p className="bg-white dark:bg-gray-800 dark:text-white text-gray-700 text-base">
                      {t('information.description')}
                      </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#information</span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#publishing</span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#postproduction</span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#broadcasting</span>
                    </div>
                  </div>
                   {/*  <!--Card 10--> */}
                  <div className="rounded overflow-hidden bg-white dark:bg-gray-800 dark:text-white shadow-lg">
                        <Link to="/financial-services">
                        <img className="w-full" src="https://ahmenki.s3.amazonaws.com/images/site_categories/Q2oDsuAKmiw1yq4VWc0vEoXTbctvNHYeBexmTKfq.jpeg" alt="Mountain"/>
                        </Link>
                        <div className="px-6 py-4">
                          <div className="font-bold text-xl mb-2">{t('financial-services.title')}</div>
                          <p className="bg-white dark:bg-gray-800 dark:text-white text-gray-700 text-base">
                          {t('financial-services.description')}
                          </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#banking</span>
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#credit</span>
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#financing</span>
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#brokers</span>
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#insurance</span>
                        </div>
                      </div>
                       {/*  <!--Card 11--> */}
                      <div className="rounded overflow-hidden bg-white dark:bg-gray-800 dark:text-white shadow-lg">
                        <Link to="/real-estate"><img className="w-full" src="https://ahmenki.s3.amazonaws.com/images/site_categories/igXM6JvKaZ6h0qaqh4GoRmxM0kzSHwQjDQazxPzm.jpeg" alt="River"/>
                        </Link>
                        <div className="px-6 py-4">
                          <div className="font-bold text-xl mb-2">{t('real-estate.title')}</div>
                          <p className="bg-white dark:bg-gray-800 dark:text-white text-gray-700 text-base">
                          {t('real-estate.description')}
                          </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#realestate</span>
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#renting</span>
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#leasing</span>
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#appraisers</span>
                        </div>
                      </div>
    
                       {/*  <!--Card 12--> */}
                      <div className="rounded overflow-hidden bg-white dark:bg-gray-800 dark:text-white shadow-lg">
                        <Link to="/professional">
                        <img className="w-full" src="https://ahmenki.s3.amazonaws.com/images/site_categories/4IPA99N37uHreIeGyAwMNkPvt9koXgSGFQcJiyPf.jpeg" alt="Forest"/>
                        </Link>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{t('professional.title')}</div>
                          <p className="bg-white dark:bg-gray-800 dark:text-white text-gray-700 text-base">
                          {t('professional.description')}
                          </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#professional</span>
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#scientific</span>
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#technical</span>
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#accounting</span>
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#payroll</span>
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#engineering</span>
                        </div>
                      </div>
                       {/*  <!--Card 13--> */}
                      <div className="rounded overflow-hidden bg-white dark:bg-gray-800 dark:text-white shadow-lg">
                            <Link to="/enterprise">
                            <img className="w-full" src="https://ahmenki.s3.amazonaws.com/images/site_categories/NCcGZ6o8yhjzOv6YfIcC9ZYipvYPDo0dGPNRPzLJ.jpeg" alt="Mountain"/>
                            </Link>
                            <div className="px-6 py-4">
                              <div className="font-bold text-xl mb-2">{t('enterprise.title')}</div>
                              <p className="bg-white dark:bg-gray-800 dark:text-white text-gray-700 text-base">
                              {t('enterprise.description')}
                              </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#companies</span>
                              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#mangement</span>
                              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#enterprise</span>
                              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#holding</span>
                              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#subsidiary</span>
                            </div>
                          </div>
                           {/*  <!--Card 14--> */}
                          <div className="rounded overflow-hidden bg-white dark:bg-gray-800 dark:text-white shadow-lg">
                            <Link to="/administrative"><img className="w-full" src="https://ahmenki.s3.amazonaws.com/images/site_categories/gtVfyu0TzSxUO9aGMryDJiUWsKndXKVmvytKxtrk.png" alt="River"/>
                            </Link>
                            <div className="px-6 py-4">
                              <div className="font-bold text-xl mb-2">{t('administrative.title')}</div>
                              <p className="bg-white dark:bg-gray-800 dark:text-white text-gray-700 text-base">
                              {t('administrative.description')}
                              </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#administrative</span>
                              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#support</span>
                              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#remediation</span>
                              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#employment</span>
                              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#repossession</span>
                              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travelagencies</span>
                              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#services</span>
                            </div>
                          </div>
    
                           {/*  <!--Card 15--> */}
                          <div className="rounded overflow-hidden bg-white dark:bg-gray-800 dark:text-white shadow-lg">
                            <Link to="/schools">
                            <img className="w-full" src="https://ahmenki.s3.amazonaws.com/images/site_categories/CjiMjTJluQkjkYbLvUozWTzmzoTx3EkC2aZo0M0o.png" alt="Forest"/>
                            </Link>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{t('schools.title')}</div>
                              <p className="bg-white dark:bg-gray-800 dark:text-white text-gray-700 text-base">
                              {t('schools.description')}
                              </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#schools</span>
                              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#university</span>
                              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#technicalschool</span>
                              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#training</span>
                              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#cosmetology</span>
                              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tradeschool</span>
                            </div>
                          </div>
                           {/*  <!--Card 16--> */}
                          <div className="rounded overflow-hidden bg-white dark:bg-gray-800 dark:text-white shadow-lg">
                                <Link to="/healthcare">
                                <img className="w-full" src="https://ahmenki.s3.amazonaws.com/images/site_categories/T1N0wmPU6bZ0Xk0kDuzOK4XYgufqdXtDQoZTJHrk.png" alt="Mountain"/>
                                </Link>
                                <div className="px-6 py-4">
                                  <div className="font-bold text-xl mb-2">{t('healthcare.title')}</div>
                                  <p className="bg-white dark:bg-gray-800 dark:text-white text-gray-700 text-base">
                                  {t('healthcare.description')}
                                  </p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#healthcare</span>
                                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#physicians</span>
                                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#socialassistance</span>
                                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#specialists</span>
                                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#healthcenter</span>
                                </div>
                              </div>
                               {/*  <!--Card 17--> */}
                              <div className="rounded overflow-hidden bg-white dark:bg-gray-800 dark:text-white shadow-lg">
                                <Link to="/entertainment"><img className="w-full" src="https://ahmenki.s3.amazonaws.com/images/site_categories/83UJCWVbkpuPLFpLqZN0QddVzLy76RZ1PWz2sEi8.jpeg" alt="River"/>
                                </Link>
                                <div className="px-6 py-4">
                                  <div className="font-bold text-xl mb-2">{t('entertainment.title')}</div>
                                  <p className="bg-white dark:bg-gray-800 dark:text-white text-gray-700 text-base">
                                  {t('entertainment.description')}
                                  </p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#arts</span>
                                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#entertainment</span>
                                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#recreation</span>
                                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#sports</span>
                                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#racetracks</span>
                                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#museums</span>
                                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#parks</span>
                                </div>
                              </div>
                               {/*  <!--Card 18--> */}
                              <div class="rounded overflow-hidden bg-white dark:bg-gray-800 dark:text-white shadow-lg">
                                <Link to="/accommodation">
                                <img class="w-full" src="https://ahmenki.s3.amazonaws.com/images/site_categories/J5VHBgmFDa3ur7h906njm79Pe32YihWve04ailmK.jpeg" alt="Forest"/>
                                </Link>
                                <div class="px-6 py-4">
                                    <div class="font-bold text-xl mb-2">{t('accommodation.title')}</div>
                                  <p class="bg-white dark:bg-gray-800 dark:text-white text-gray-700 text-base">
                                  {t('accommodation.description')}
                                  </p>
                                </div>
                                <div class="px-6 pt-4 pb-2">
                                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#accommodation</span>
                                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#food</span>
                                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#hotel</span>
                                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#motels</span>
                                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#bars</span>
                                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#restaurant</span>
                                </div>
                              </div>
                               {/*  <!--Card 17--> */}
                              <div class="rounded overflow-hidden bg-white dark:bg-gray-800 dark:text-white shadow-lg">
                                    <Link to="/other-services">
                                    <img class="w-full" src="https://ahmenki.s3.amazonaws.com/images/site_categories/8rtI9s1aiUa2x0C7MvjJhDazY9e05T3q9ABSLjQg.jpeg" alt="Mountain"/>
                                    </Link>
                                    <div class="px-6 py-4">
                                      <div class="font-bold text-xl mb-2">{t('other-services.title')}</div>
                                      <p class="bg-white dark:bg-gray-800 dark:text-white text-gray-700 text-base">
                                      {t('other-services.description')}
                                      </p>
                                    </div>
                                    <div class="px-6 pt-4 pb-2">
                                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#repair</span>
                                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#maintenance</span>
                                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#carwashes</span>
                                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#personalcare</span>
                                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#cleaning</span>
                                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photofinishing</span>
                                    </div>
                                  </div>
                                   {/*  <!--Card 18--> */}
                                  <div class="rounded overflow-hidden bg-white dark:bg-gray-800 dark:text-white shadow-lg">
                                    <Link to="/agencies"><img class="w-full" src="https://ahmenki.s3.amazonaws.com/images/site_categories/1BCQTc0x3lMl95Ku5QYBMij5yyGImlRpXxqOPfIm.jpeg" alt="River"/>
                                    </Link>
                                    <div class="px-6 py-4">
                                      <div class="font-bold text-xl mb-2">{t('agencies.title')}</div>
                                      <p class="bg-white dark:bg-gray-800 dark:text-white text-gray-700 text-base">
                                      {t('agencies.description')}
                                      </p>
                                    </div>
                                    <div class="px-6 pt-4 pb-2">
                                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#agencies</span>
                                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#accountability</span>
                                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#defense</span>
                                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#contracting</span>
                                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#investigation</span>
                                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#police</span>
                                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#courts</span>
                                    </div>
                                  </div>
                                   {/*  <!--Card 19--> */}
                                  <div class="rounded overflow-hidden bg-white dark:bg-gray-800 dark:text-white shadow-lg">
                                    <Link to="/career">
                                    <img class="w-full" src="https://s3.us-east-1.amazonaws.com/ahmenki/images/career/qYWMmbQDCleV2YWlocCRIfAqdsPOHtqYWVfqIym1.jpeg" alt="Forest"/>
                                    </Link>
                                    <div class="px-6 py-4">
                                        <div class="font-bold text-xl mb-2">{t('career.title')}</div>
                                      <p class="bg-white dark:bg-gray-800 dark:text-white text-gray-700 text-base">
                                      {t('career.description')}
                                      </p>
                                    </div>
                                    <div class="px-6 pt-4 pb-2">
                                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#career</span>
                                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#work</span>
                                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#jobs</span>
                                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#hiring</span>
                                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#jobopening</span>
                                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#workfromhome</span>
                                    </div>
                                  </div>
        </div>
        </div>
        </div>
        </div>
      );
    }

export default Industries