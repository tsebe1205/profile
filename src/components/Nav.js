import { Sun  } from 'lucide-react';

export const Nav =()=>{
    return(
        <div className='flex justify-between p-10 w-[1440px] h-18'>
               <div className='w-24 h-9 font-bold'><h1>{`<SS/>`}</h1></div>
              <div className='flex gap-10'>
                 <div className='flex gap-12 h-6 font-medium'><p>About</p> <p>Work</p> <p>Testimonials</p> <p>Contact</p></div>
               <div className='flex gap-4'><Sun/><button className='bg-gray-900 text-gray-50 w-fit  px-4 py-1 rounded-xl'>Download CV</button></div>
              </div>
              </div>

    )
}
