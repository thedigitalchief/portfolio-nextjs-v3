import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { BiLinkExternal } from "react-icons/bi"
import { FaGithub } from "react-icons/fa"
import SectionWrapper from "./SectionWrapper"

const CallToAction = () => {

    const { theme } = useTheme();

    return (
        <SectionWrapper id='cta' className="xl:max-w-6xl my-24 lg:mx-10 xl:mx-auto mx-4 relative overflow-hidden flex flex-col-reverse md:flex-row gap-3 md:gap-0 items-center bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-2xl p-6 md:p-8 lg:px-12 lg:py-16 z-10">
            <div className="flex flex-col md:w-1/2 lg:w-3/5">
                <h2 className="text-2xl lg:text-4xl font-extrabold">Interested?<br></br><span className="text-xl text-grey-500">Let&apos;s connect! Don&apos;t hesistate to reach out.</span> </h2>
                <h3 className="md:text-base lg:text-md font-medium mt-1.5">View my<span className="text-grey-300"> GitHub</span> for my software projects & collaborations.</h3>
                {/* <p className="text-sm md:text-base mt-2.5 md:mt-6">Fork this template on GitHub start building your own portfolio website.</p> */}
                <div className="flex items-center gap-4 my-4">
                    <Link href="https://github.com/thedigitalchief" target="_blank" className="zoom py-2 px-4 bg-white text-black rounded-lg w-fit flex items-center gap-2 hover:shadow-xl transition-shadow">
                        <FaGithub />thedigitalchief
                        {/* Fork Now */}
                    </Link>
                    <Link href="https://calendly.com/dylanhnguyen" target="_blank" className="zoom py-2 px-4 bg-blue-800 rounded-lg w-fit flex items-center gap-2 hover:bg-blue-900 shadow-xl transition-all">Schedule Call
                        <BiLinkExternal />
                    </Link>
                </div>
            </div>
            <div className="w-full md:w-1/2 h-40 md:h-52 lg:w-96 mb-4 md:mb-0 mx-auto rounded-lg bg-white dark:bg-grey-900">
                 <Image alt="Fork this template on Github" quality={100} width={1000} height={1000} className="zoom-img w-full h-full mt-2 object-cover object-top rounded-lg" src={theme === "dark" ? "/portfolio-fork-dark.png" : "/portfolio-fork.png"} />
            </div>
            {/* <div className="absolute -bottom-10 -right-6 h-72 w-96 rounded-lg bg-white"></div> */}
        </SectionWrapper >
    )
}

export default CallToAction