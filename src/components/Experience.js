import Upwork from "../assets/svgsnar/Upwork1.svg"
export const Experience=()=>{
    return(
        <div className="mt-20  flex flex-col  items-center gap-10 p-10  max-w-[1440px]">
            <div className="flex items-center border-2 bg-grey-200 rounded-2xl w-fit py-1 px-5">Experiensce</div>
            <div>Here is a quick summary of my most recent experiences:</div>
            <div className="max-w-[896px] flex flex-col justify-center items-center border-2 gap-10 p-10 rounded-2xl md:flex md:flex-row md:items-start">
                 <div className="w-1/4"><img src={Upwork} alt='Upwork'/></div>
                <ul className="w-2/4 list-disc">
                <ul className=" font-semibold text-xl">Sr. Frontend Developer</ul>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
                      <li>Sed quis justo ac magna.</li>
                       <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </ul>
<div className="w-1/4"><p>Nov 2021 - Present</p></div>
</div>
      <div className="max-w-[896px] flex flex-col justify-center items-center border-2 gap-10 p-10 rounded-2xl md:flex md:flex-row md:items-start">
                 <div className="w-1/4"><img src={Upwork} alt='Upwork'/> 
                </div>
               
               <ul className="w-2/4 list-disc">
                <ul className=" font-semibold text-xl">Team Lead</ul>
                  <li>Sed quis justo ac magna.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                      <li>Sed quis justo ac magna.</li>
                       <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </ul>
<div className="w-1/4"><p>Jul 2017 - Oct 2021</p></div>
</div>
  <div className="max-w-[896px] flex flex-col justify-center items-center border-2 gap-10 p-10 rounded-2xl md:flex md:flex-row md:items-start">
                 <div className="w-1/4"><img src={Upwork} alt='Upwork'/> 
                </div>
               
               <ul className="w-2/4 list-disc">
                <ul className=" font-semibold text-xl">Full Stack Developer</ul>
                 
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                     
                </ul>
<div className="w-1/4"><p>Dec 2015 - May 2017</p></div>
</div>
   
</div>
        
    )
}
