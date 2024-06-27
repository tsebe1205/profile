
import Java from "../assets/icons/Java.png";
import Type from "../assets/icons/Type.png";
import Reeact from "../assets/icons/Reeact.png";
import Next from "../assets/icons/Next.png";
import Noode from "../assets/icons/Noode.png";
import Express from "../assets/icons/Express.png";
import Neest from "../assets/icons/Neest.png";
import Socket from "../assets/icons/Socket.png";
import Post from "../assets/icons/Post.png";
import Mongo from '../assets/icons/Mongo.png';
import Sas from '../assets/icons/Sas.png';
import Tailwind from '../assets/icons/Tailwind.png';
import Figma from '../assets/icons/Figma.png';
import Cyp from '../assets/icons/Cyp.png';
import Story from '../assets/icons/Story.png';
import Git from '../assets/icons/Git.png';
//  import { Java, Type,Reeact, Next, Noode, Express, Neest, Socket, Post, Mongo,Sas,Tailwind,Figma,Cyp,Story,Git } from '../assets/icons';

 const Logos=()=>{
    return(
    <div className=" flex flex-col mt-10 gap-5 p-10  max-w-[1440px] md:flex md:flex-row">
        <div className="flex gap-8">
    <div className='max-w-22 h-25'><img className='w-full h-full' src={Java} alt='pic1'/></div>
    <div className='max-w-22 h-25'><img className='w-full h-full' src={Type} alt='pic2'/></div>
    <div className='max-w-22 h-25'><img className='w-full h-full' src={Reeact} alt='pic3'/></div>
        </div>
        <div className="flex gap-12">
    <div className='max-w-22 h-25'><img className='w-full h-full' src={Next} alt='pic4'/></div>
    <div className='max-w-22 h-25'><img className='w-full h-full' src={Noode} alt='pic5'/></div>
    <div className='max-w-22 h-25'><img className='w-full h-full' src={Express} alt='pic6'/> </div>
        </div>
        <div className="flex gap-10">
    <div className='max-w-22 h-25'><img className='w-full h-full' src={Neest} alt='pic7'/></div>
    <div className='max-w-22 h-25'><img className='w-full h-full' src={Socket} alt='pic8'/></div>
    <div className='max-w-22 h-25'><img className='w-full h-full' src={Post} alt='pic9'/></div>
        </div>
        <div className="flex gap-5">
    <div className='max-w-22 h-25'><img className='w-full h-full' src={Mongo} alt='pic10'/></div>
    <div className='max-w-22 h-25'><img className='w-full h-full' src={Sas} alt='pic11'/></div>
    <div className='max-w-22 h-25'><img className='w-full h-full' src={Tailwind} alt='pic12'/></div>
        </div>
        <div className="flex gap-14">
    <div className='max-w-22 h-25'><img className='w-full h-full' src={Figma} alt='pic13'/></div>
    <div className='max-w-22 h-25'><img className='w-full h-full' src={Cyp} alt='pic14'/></div>
    <div className='max-w-22 h-25'><img className='w-full h-full' src={Story} alt='pic15'/></div>
        </div>
         <div className="flex gap-10">
    <div className='max-w-22 h-25'><img className='w-full h-full' src={Git} alt='pic16'/> </div>
         </div>

    
    </div>
    )
}
export default Logos