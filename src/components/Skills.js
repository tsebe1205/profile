import Logo from "./Logo"


export const Skills=()=>{
    
    return(
        <div className="mt-12  flex flex-col items-center gap-4 p-10  max-w-[1440px]">
            <div className="flex justify-center items-center border-2 bg-grey-500 rounded-2xl py-1 px-5 ">Skills</div>
            <div>The skills, tools and technologies I am really good at:</div>
            <div> <Logo/></div>
        </div>
    )
}