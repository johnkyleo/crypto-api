import React from 'react'

const Contact = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-300/5">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 bg-slate-500/15 text-base">Contact Us</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
          <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have a question or want to learn more? Fill out the form below and we'll get back to you as soon as
            possible.
          </p>
        </div>
        <div className="w-full max-w-md">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">   
                <label htmlFor="name">Name</label>
                <input id="name" placeholder="Enter your name" className='border rounded-md p-2' />
              </div>
              <div className="space-y-2">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Enter your email" className='border rounded-md p-2'/>
              </div>
            </div>
            <div className="space-y-2 grid">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Enter your message" className="min-h-[100px] border rounded-md p-2" />
            </div>
            <button type="submit" className="w-full btn_dark_rounded">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact