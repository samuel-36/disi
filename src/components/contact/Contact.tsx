// import React from 'react'

// const Contact = () => {

//     const [result, setResult] = React.useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };

//   return (
//     <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden'
//     id='Contact'
//     >
//         <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact 
//             <span className='underline underline-offset-4 decoration-1 under font-light'>us</span></h1>
//             <p className='text-center text-green-950 mb-12 max-w-80 mx-auto'>
//                 Ready To Make a Move? Let's Build Your Future Together
//             </p>

//             <form
//             onSubmit={onSubmit}
//             className='max-w-2xl mx-auto text-slate-700 pt-8'>
//                 <div className='flex flex-wrap'>
//                     <div className='w-full md:w-1/2 text-left'>
//                         Your Name
//                     <input type='text' placeholder='Your Name' required
//                     className='w-full border border-green-950 rounded py-3 px-4 mt-2'
//                     name='Name'
//                     />
//                     </div>
//                     <div className='w-full md:w-1/2 text-left md:pl-4'>
//                         Your Email
//                     <input type='email' placeholder='Your Email' required
//                     className='w-full border border-green-950 rounded py-3 px-4 mt-2'
//                     name='Email'
//                     />
//                     </div>

//                 </div>
//                 <div className='my-6 text-left'>
//                     Message
//                     <textarea
//                     className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'
//                     name='Message' placeholder='Message' required></textarea>
//                 </div>
//                 <button className='bg-green-800 text-white py-2 px-12 mb-10 rounded'>Send</button>
//             </form>
//     </div>
//   )
// }

// export default Contact;

'use client';

import React from 'react'
import { toast } from 'react-toastify';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => { // <-- specify the type here
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target as HTMLFormElement);

        formData.append("access_key", "61cdb2f5-7ae6-4553-b99f-d3d18a1ae8a6");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            toast.success("Form Submitted Successfully");
            (event.target as HTMLFormElement).reset();
        } else {
            console.log("Error", data);
            toast.error(data.message)
            setResult("");
        }
    };

    return (
        <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden bg-white' id='Contact'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact 
                <span className='underline underline-offset-4 decoration-1 under font-light'>us</span>
            </h1>
            <p className='text-center text-green-950 mb-12 max-w-80 mx-auto'>
                Ready To Make a Move? Let's Build Your Future Together
            </p>

            <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-slate-700 pt-8'>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 text-left'>
                        Your Name
                        <input 
                            type='text' 
                            placeholder='Your Name' 
                            required
                            className='w-full border border-green-950 rounded py-3 px-4 mt-2'
                            name='Name'
                        />
                    </div>
                    <div className='w-full md:w-1/2 text-left md:pl-4'>
                        Your Email
                        <input 
                            type='email' 
                            placeholder='Your Email' 
                            required
                            className='w-full border border-green-950 rounded py-3 px-4 mt-2'
                            name='Email'
                        />
                    </div>
                </div>
                <div className='my-6 text-left'>
                    Message
                    <textarea
                        className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'
                        name='Message' 
                        placeholder='Message' 
                        required
                    ></textarea>
                </div>
                <button
                 className='bg-green-950 text-white px-3 py-2 rounded-lg font-medium inline-flex items-center justify-center text-xs lg:text-sm'>
                    {result ? result : "Send Message"}</button>
            </form>
        </div> 
    )
}

export default Contact;
