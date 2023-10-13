import { SparklineAreaData, dropdownData, earningData, ecomPieChartData, recentTransactions, weeklyStats } from "../data/dummy"
import { allstates } from "../states/store"
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';

import  Button from "../components/button";
import Sparkline from "../components/charts/Sparkline";
import Stacked from "../components/charts/Stacked";
import Pie from "../components/charts/Pie";
import Dropdown from "../components/Dropdown";
import LineChart from "../components/charts/LineChart";

 const Ecommerce = () => {
  const maincol = allstates(s=>s.color)
  return (
    <div className="p-4">
       <div className="flex flex-wrap  justify-center gap-10 mt-16 mb-8">
          
          <div className=" h-fit rounded-xl   dark:bg-secondary-dark-bg  flex gap-10 bg-white  justify-between  p-4 ">
                  
                  <div>
                    <p className="font-bold  dark:text-gray-300 text-2xl text-gray-600">Earnings</p>
                    <p className="font-normal text-2xl">$ 63,448.78 </p>
                        <Button cont='download'/>

                  </div>
                <BsCurrencyDollar style={{backgroundColor:maincol}} 
                className=" text-5xl text-white h-16 w-16 rounded-full p-3"/>
              
          </div>

          <div className="flex justify-center   flex-wrap gap-10">
              {earningData.map((item) => (
                <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
                  <button
                    type="button"
                    style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                    className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
                  >
                    {item.icon}
                  </button>
                  <p className="mt-3">
                    <span className="text-lg font-semibold">{item.amount}</span>
                    <span className={`text-sm text-${item.pcColor} ml-2`}>
                      {item.percentage}
                    </span>
                  </p>
                  <p className="text-sm  text-gray-400  mt-1">{item.title}</p>
                </div>
              ))}
          </div>

       </div>
                  <div className="flex flex-wrap">

                  </div>
       <div className="revenue    flex-wrap justify-center gap-8 flex  mx-auto mt-10">
                  
                  <div className=" bg-white dark:bg-secondary-dark-bg  w-fit  max-lg:max-w-[44rem]  p-4 rounded-2xl">
                          <div className="flex justify-between px-8 flex-wrap">
                          <p className="text-2xl max-md:text-lg font-semibold">Revenu Updates</p>
                          <div className="flex   max-md:text-md gap-5">
                            <div className="text-gray-500 items-center flex gap-1">
                              <GoDotFill/>
                              <p>Expense</p>
                            </div>
                            <div className="text-green-500 items-center  flex gap-1">
                              <GoDotFill/>
                              <p>Budget</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap justify-center mt-10 px-4">
                          <div className=" border-r-2 p-7 border-gray-300">
                              
                              <div className="flex mb-10 gap-8 items-center">
                                <div>
                                  <p className="text-3xl   max-md:text-lg  font-bold">$93,438</p>
                                  <p className="text-gray-500">Budget</p>

                                </div>
                                <div className="bg-green-500 p-2 rounded-full text-md text-white">
                                    23%
                                </div>

                              </div>
                              
                              <div className="flex items-center">
                                <div>
                                  <p className="text-3xl  max-md:text-lg  font-bold">$48,487</p>
                                  <p className="text-gray-500">Expense</p>

                                </div>
                                
                              
                              
                              </div>
                          
                              <div >
                                <Sparkline height="100px" width="240px" col={maincol} id="sp-1" type="Line" data={SparklineAreaData}/>
                              </div>
                              <div className="mt-10">
                                <Button cont={"Download Report"}/>
                              </div>
                              
                          
                          
                          </div>
                          <div className="stacked max-sm:mt-8">
                            <Stacked height="350px" width="300px"  />
                          </div>
                        </div>
                  
                  
                  </div>

                  <div className="earnings ">
                          <div style={{backgroundColor:maincol}}
                          className="p-5 max-sm:p-3 rounded-2xl w-fit mx-auto  dark:text-black   text-white pt-12 mb-8"

                          >
                            <div className="flex justify-between">
                                <p className="text-3xl font-bold">Earnings</p>
                                <div>
                                    <p className="text-3xl font-bold ">$63,448.78</p>

                                <p className=" text-xl">Monthly revenue</p>
                                </div>
                            </div>
                            <div className="mt-4">
                            <Sparkline  
                             col="white" height="100px"
                            type="Column" id="sp-2" 
                            data={SparklineAreaData} width="330px"  />
                          </div>


                          </div>
                        <div className="salary bg-white  dark:bg-secondary-dark-bg   rounded-2xl p-4 w-fit">
                          <div className="flex flex-wrap justify-center  gap-4">
                                <div>   
                                    <p className="text-2xl font-bold">$43,246</p>
                                    <div className="text-gray-600">Yearly sales</div>    
                                </div>
                                <div className="max-sm:w-60">
                                  <Pie  data={ecomPieChartData} id="pie-1" height="150px" />
                                </div>
                            
                        </div>
                        </div>

                  </div>


                   










                  
       </div>
          <div className="flex gap-6 mt-14 flex-wrap  items-center  justify-center w-fit mx-auto">



                            <div className="p-5 max-sm:p-3 bg-white  dark:bg-secondary-dark-bg  rounded-2xl ">
                                                  <div className="flex items-center justify-between max-sm:gap-2 gap-6">

                                                    <p className="font-semibod max-sm:text-lg text-xl">
                                                    Recent Transactions
                                                    </p>
                                                    <Dropdown data={dropdownData} id="drop-1" />

                                                  </div>

                                                      <div className="flex border-b-2 pb-6 mt-8 flex-col gap-4 h-[20.8rem] overflow-auto">
                                                      {recentTransactions.map(e=>(<div className="rounded-xl items-center flex 
                                                      cursor-pointer shadow-inner p-2 hover:shadow-xl dark:hover:shadow-slate-100 max-sm:w-fit dark:shadow-md transition gap-4" key={e.title}>
                                                          <div className=" text-2xl max-sm:text-xl max-md:text-md  p-3 
                                                          hover:shadow-xl  transition rounded-2xl" style={{color:e.iconColor,backgroundColor:e.iconBg}}>{e.icon}</div>
                                                            
                                                            <div className="flex justify-between md:flex-1 items-center">
                                                              <div className="w-48 max-sm:w-40">
                                                                <p className=" text-lg max-md:text-md   font-semibold mb-2">{e.title}</p>
                                                                  <p>{e.desc} </p>
                                                              </div>
                                                              <div className={`text-${e.pcColor}`}>{e.amount}</div>
                                                            </div>

                                                            </div>))}
                                                      </div>
                                                      <div className="flex justify-between  items-center">
                                                        <Button  cont="ADD"/> 36 Recent Transactions</div>
                                                  



                                                  


                                              </div>
                                              <div className="p-5 max-sm:p-3  dark:bg-secondary-dark-bg  bg-white rounded-2xl w-fit mx-auto">
                                                  <div className="flex items-center justify-between gap-6">

                                                    <p className="font-semibod text-2xl">
                                                    Sales Overview
                                                    </p>
                                                    <Dropdown data={dropdownData} id="drop-1" />

                                                  </div>
                                                    

                                                      <LineChart/>
                                                    
                                                      
                                                  



                                                  


                                              </div>


                                              







                                
                              </div>
                                <div className="p-5 max-sm:p-3 max-w-[400px] mt-10  dark:bg-secondary-dark-bg  bg-white rounded-2xl w-fit mx-auto">
                                                <div className="flex  justify-between items-center">
                                                      <span>Weekly States</span>
                                                      <span className=" text-gray-500 -translate-y-2 text-2xl  cursor-pointer">...</span>
                                                    </div>
                                                {weeklyStats.map(e=> (
                                                    <div key={e.title} className="flex gap-6 my-7">
                                                  <div className=" text-2xl flex w-14 justify-center items-center rounded-full "
                                                  style={{backgroundColor:e.iconBg}}> {e.icon}</div>
                                                  
                                                  <div className="flex justify-between w-60 items-center">
                                                    <div className=" text-lg">
                                                      <p className=" font-semibold">{e.title} </p>
                                                      <p className="dark:text-gray-300">{e.desc} </p>
                                                    </div>

                                                    <div className={` text-${e.pcColor}`}>{e.amount} </div>
                                                  </div>

                                                    </div>
                                                    

                                                ))}
                                                <Sparkline  id="area-sparkLine" height="190px" type="Area" data={SparklineAreaData} width="320" col="#b3f8ff52" />
                                              </div>

    </div>
  )
}
export default Ecommerce