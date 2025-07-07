

function ContactForm() {
    
  return (
    <div className='lg:w-[40%] w-[80%] max-w-[600px] flex flex-col items-center bg-gray-800/20 backdrop-blur-sm p-6 rounded-lg shadow-lg'>
        <h3 className='text-[32px] font-bold font-mono text-violet-200 mb-4'>Quick Mail</h3>
        <form action="https://formsubmit.co/balamuralib.22mts@kongu.edu.com" method="POST" className='flex flex-col justify-center w-full gap-3'>
            <div className='flex flex-col'>
                <label htmlFor="name" className='text-[18px] font-mono text-violet-200 mb-1'>Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    
                    placeholder='Enter your name...'
                    className='py-1 px-2 font-mono text-black rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-300'
                    required
                />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="email" className='text-[18px] font-mono text-violet-200 mb-1'>Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    
                    placeholder='Enter your Email...'
                    className='py-1 px-2 font-mono text-black rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-300'
                    required
                />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="subject" className='text-[18px] font-mono text-violet-200 mb-1'>Subject</label>
                <input
                    id="subject"
                    name="subject"
                    type="text"
                    
                    placeholder='<Subject>'
                    className='py-1 px-2 font-mono text-black rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-300'
                    required
                />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="message" className='text-[18px] font-mono text-violet-200 mb-1'>Message</label>
                <textarea
                    id="message"
                    name="message"
                    
                    placeholder='Leave your message here...'
                    className='py-1 px-2 font-mono rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-300 min-h-[80px] text-black'
                    required
                />
            </div>
            <button
                type="submit"
                className='bg-violet-500 hover:bg-violet-600 transition px-4 py-2 text-violet-100 rounded-lg font-mono mt-2'
            >
                Send
            </button>
        </form>
    </div>
  )
}

export default ContactForm
