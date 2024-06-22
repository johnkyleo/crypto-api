import React from 'react'



const Home = () => {

  return (
        <div className="flex flex-col min-h-[100dvh]">
          <main className="flex-1">
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-12">
              <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                        Secure and Seamless Crypto Trading
                      </h1>
                      <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                        Experience the future of digital finance with our cutting-edge crypto platform. Trade, invest, and
                        manage your assets with ease.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                     <button className='btn_dark_outline'>Sign Up</button>
                     <button className='btn_dark_rounded'>Learn More</button>                                        
                    </div>
                  </div>
                  <img
                    alt="Hero"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                    src="https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                </div>
              </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-slate-900/15 px-3 py-1 text-base">Key Features</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Unlock the Power of Crypto</h2>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      Our platform offers a comprehensive suite of tools and features to help you navigate the crypto
                      landscape with confidence.
                    </p>
                  </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                  <img
                  alt=""
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                    height="310"
                    src="https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    width="450"
                  />
                  <div className="flex flex-col justify-center space-y-4">
                    <ul className="grid gap-6">
                      <li>
                        <div className="grid gap-1">
                          <h3 className="text-xl font-bold">Secure Trading</h3>
                          <p className="text-gray-500 dark:text-gray-400">
                            Trade with confidence using our advanced security features and multi-factor authentication.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="grid gap-1">
                          <h3 className="text-xl font-bold">Seamless Portfolio Management</h3>
                          <p className="text-gray-500 dark:text-gray-400">
                            Easily track your crypto assets, monitor market trends, and make informed investment decisions.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="grid gap-1">
                          <h3 className="text-xl font-bold">Cutting-Edge Analytics</h3>
                          <p className="text-gray-500 dark:text-gray-400">
                            Leverage our powerful analytics tools to gain deeper insights into the crypto market and your
                            investments.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32">
              <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join the Crypto Revolution</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Start your crypto journey with our user-friendly platform and unlock a world of financial opportunities.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
                <button className='btn_dark_outline'>Sign Up</button>
                <button className='btn_dark_rounded'>Learn More</button> 
                </div>
              </div>
            </section>
          </main>
          
        </div>
      )
}



export default Home