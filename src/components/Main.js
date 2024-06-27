 import profile from "../assets/Pic.png";
import Cat from "../assets/svgsnar/Cat.svg";
import Bird from "../assets/svgsnar/Bird.svg";
import Tag from "../assets/svgsnar/Tag.svg";
import Pin from "../assets/svgsnar/Pin.svg";

// width: Fill (1,440px)px;
// height: Hug (552px)px;
// padding: 96px 80px 96px 80px;
// gap: 0px;
// justify: space-between;
// opacity: 0px;

export const Main =()=>{
 return(
         <div className='md:flex md:flex-row-reverse max-w-[1440px] gap-12 items-center p-10'>
             <div className='min-w-[400px] h-[360px]'>
   <img className='w-full h-full' src={profile} alt='pic1'/> 
    </div>

    <div>
      <div>
      <h1 className='text-5xl font-bold '>Hi, I’m Tsebe 👋</h1>
    <p className='text-gray-600 mt-2'> I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
      </div>
     <div>
      <div className=" flex mt-16 gap-2">
      <div><img className='' src={Pin} alt='Pin'/></div>Ahmedabad, India</div>
      <div className="flex gap-2">
      <div className="flex items-center gap-2"><div className="w-3 h-3 bg-green-400 rounded-full"></div>Available for new projects</div></div>
      </div>

     <div className="flex mt-12 gap-1"> 
    <div><img className='w-full h-full' src={Cat} alt='Cat'/></div>
    <div><img className='w-full h-full' src={Bird} alt='Bird'/></div>
    <div><img className='w-full h-full' src={Tag} alt='Tag'/></div>
    </div>
    </div>
    
  </div>
    )
}


