import Column from "../assets/Column.png"

export const About =()=>{
    return(
  <div className="mt-20 p-16 max-w-[1440px]">
      <div className="flex justify-center items-center">
        <div className=" flex items-center border-2 bg-grey-200 rounded-2xl py-1 px-5"><h1 className="bg-grey-500  h-6">About me </h1></div>
      </div>
     <div className="  flex flex-col gap-10 md:flex md:flex-row md:gap-10  mt-10"> 
        <div className="min-w-[400px] h-[480px] border-8 ml-10"> <img className="w-fit" src={Column}/></div>
        <div> 
            <h1 className="mb-4 text-2xl font-semibold text-gray-900">Curious about me? Here you have it:</h1>
        <p className="mb-4">I'm a passionate, <span className=" underline underline-offset-1">self-proclaimed designer</span> who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
        <p className="mb-4">I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>
        <p className="mb-4">I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>
        <p>When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on <span className=" underline underline-offset-1">Twitter</span> where I share tech-related bites and build in public, or you can follow me on <span className=" underline underline-offset-1">Github</span>.</p>
        <p>Finally, some quick bits about me.</p>
        <div className="flex gap-12 p-4">
            <div>
            <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>B.E. in Computer Engineering</div>
            <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>Full time freelancer</div>
            </div>
            <div>
            <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>Avid learner</div>
            <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>Aspiring indie hacker</div>
            </div>
        </div>
        <p>One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</p>
        
        </div>
        </div>
  </div>
    )
}

