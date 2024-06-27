import Msg from "../assets/svgsnar/Msg.svg"
import Double from "../assets/svgsnar/Double.svg"
import Phone from "../assets/svgsnar/Phone.svg"
import Cat from "../assets/svgsnar/Cat.svg";
import Bird from "../assets/svgsnar/Bird.svg";
import Tag from "../assets/svgsnar/Tag.svg";

 export const Footer=()=>{
    return(
         <div className="mt-12  flex flex-col items-center gap-10 p-10 max-w-[1440px]">
            <div className="flex justify-center items-center border-2 bg-grey-500 rounded-2xl py-1 px-5 ">Get it touch</div>
            <div>What’s next? Feel free to reach out to me if you're looking for<br/> a developer, have a query, or simply want to connect.</div>
            <div className="flex flex-col items-center gap-5"> 
                <div className="flex gap-3"><img src={Msg} alt="Pic-1"/><p className="font-semibold text-xl flex items-center">reachsagarshah@gmail.com</p><img className="flex" src={Double} alt="Pic-2"/></div>
                <div className="flex"><img src={Phone} alt="Pic-3"/><p className="font-semibold text-xl flex items-center">+91 8980500565</p><img className="flex" src={Double} alt="Pic-2"/></div>
                <div className="flex flex-col items-center"><div><p>You may also find me on these platforms!</p></div> <div className="flex"><img src={Cat} alt="Cat"/><img src={Bird} alt="Bird"/><img src={Tag} alt="Tag"/></div>

                </div>
            </div>
        </div>
    )
}