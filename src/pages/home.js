import hero from "../assets/herobg.jpg";
import '../assets/myStyles.css';
import logo from "../assets/logo.png";
import chart from "../assets/charts.png";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import survey from "../assets/survey.png";


const  Home= () => {
    return (
        <div>
        <div className="bg-gray-10 h-[60rem]" >
            <img src={logo} className="w-60 font-bold absolute   top-9  right-5  " alt=""/>
            <img
                src={hero}
                alt={""}
                className="h-[65rem] w-full object-cover"
            />
            <h1 className="absolute top-[20vh] right-[3vh] text-sky-400 font-bold text-[90px]  text-left">
                Just Deep Breathe
                </h1>
            <h1 className="absolute top-[30vh] right-[38vh] text-sky-400 font-bold text-[90px]  text-left">
                and Relax
            </h1>
            <h2 className="absolute top-1/2 right-36 text-gray-500  font-bold  text-2xl w-1/3 text-justify" >
                Find what makes you happy.
            </h2>
        </div>
            <div className='relative flex justify-center bg-gray-100 mt-20 '>
                <div className="flex w-1/2 " >
                    <div className="absolute top-10 left-28 text-gray-800 text-xl w-1/6 text-justify" >
                        <h2>
                            MENTAL HEALTH AWARENESS
                        </h2>
                        <hr />
                        <p className="text-gray-500 text-lg">
                            Mental health is a state of well-being in which the individual
                            realizes his or her own abilities,
                        </p>
                        <p className={'text-gray-500 text-lg'}>
                            It affects how we think, feel, and act. It
                            also helps determine how we handle
                            stress, relate to others, and make
                            healthy choices.
                        </p>
                    </div>
                    <div className="wrap-card mx-5 my-5 ">
                        <div className="card text-gray-500">
                            <h3 className="text-gray-800 text-2xl font-bold">Anxiety</h3>
                            <p className="my-3">
                                Anxiety is a feeling of fear, dread, and uneasiness. It might cause you to sweat, feel restless
                                and tense, and have a rapid heartbeat. It can be a normal reaction to stress. For example,
                                you might feel anxious when faced with a difficult problem at work, before taking a test, or
                                before making an important decision.
                            </p>
                            <div className="text-gray-800">
                                <p className="text-left ">
                                    1 Feeling nervous, restless or tense.
                                </p>
                                <p className="text-left ">
                                    2 Sweating
                                </p>
                                <p className="text-left ">
                                    3 Trembling
                                </p>
                                <p className= "text-left ">
                                    4 Feeling weak or tired.
                                </p>
                                <p className= "text-left ">
                                    5 present worry.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="wrap-card mx-5 my-5 ">
                        <div className="card text-gray-500">
                            <h3 className="text-gray-800 text-2xl font-bold ">ADHD</h3>
                            <p className="my-3">
                                ADHD is one of the most common neurodevelopmental disorders of childhood. It is usually first diagnosed
                                in childhood and often lasts into adulthood. Children with ADHD may have trouble paying attention, controlling
                                impulsive behaviors (may act without thinking about what the result will be), or be overly active.
                            </p>
                            <div className="text-gray-800">
                            <p className="text-left ">
                                1 daydream a lot
                             </p>
                            <p className="text-left ">
                                2 forget or lose things a lot
                                </p>
                            <p className="text-left ">
                                3 squirm or fidget
                            </p>
                            <p className= "text-left ">
                                4 talk too much
                                </p>
                            <p className= "text-left ">
                                5 make careless mistakes or take unnecessary risks
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center bg-gray-100 '>
                <div className="flex w-1/2 " >
                    <div className="wrap-card mx-5 my-5 ">
                        <div className="card text-gray-500">
                            <h3 className="text-gray-800 text-2xl font-bold ">ADHD</h3>
                            <p className="my-3">
                                Depression is a mood disorder that causes a persistent feeling of sadness and loss of interest.
                                Also called major depressive disorder or clinical depression, it affects how you feel,
                                think and behave and can lead to a variety of emotional and physical problems.
                                You may have trouble doing normal day-to-day activities, and sometimes you may feel as
                                if life isn't worth living.
                            </p>
                            <div className="text-gray-800">
                                <p className="text-left ">
                                    1 agitation or restlessness
                                </p>
                                <p className="text-left ">
                                    2 Tiredness and lack of energy,
                                </p>
                                <p className="text-left ">
                                    3 squirm or fidget
                                </p>
                                <p className= "text-left ">
                                    4 speaking or body movements
                                </p>
                                <p className= "text-left ">
                                    5 fixating on past failures or self-blame
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="wrap-card mx-5 my-5 ">
                        <div className="card text-gray-500">
                            <h3 className="text-gray-800 text-2xl font-bold " >Panic</h3>
                            <p className="my-3">
                                Panic disorder is an anxiety disorder where you regularly have sudden attacks of panic
                                or fear. Everyone experiences feelings of anxiety and panic at certain times. It's a
                                natural response to stressful or dangerous situations. But someone with panic disorder
                                has feelings of anxiety, stress and panic regularly and at any time, often for no apparent
                                reason.
                            </p>
                            <div className="text-gray-800">
                                <p className="text-left ">
                                    1 agitation or restlessness
                                </p>
                                <p className="text-left ">
                                    2 Tiredness and lack of energy,
                                </p>
                                <p className="text-left ">
                                    3 squirm or fidget
                                </p>
                                <p className= "text-left ">
                                    4 speaking or body movements
                                </p>
                                <p className= "text-left ">
                                    5 ixating on past failures or self-blame
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-12">
                <img
                    src={chart}
                    alt={""}
                    className="h-[60rem] w-full object-cover"
                />
            </div>
            <hr className="p-4"/>
            <div className="flex justify-center  p-10">
                <div className="w-1/2 " >
                    <p className="p-2 text-gray-500 text-2xl ">
                        What feelings have
                        you had recently
                        about working
                        towards your goals?
                        How "supported" you
                        feel by others around
                        you-your friends,
                        family, or otherwise
                    </p>
                    <h2 className="p-2 text-blue-800 text-3xl">
                        Take a quiz to find out
                    </h2>
                    <Button >
                        <Link to="/Survey" className="p-2 text-white bg-blue-800 rounded-lg" >Survey</Link>
                    </Button>
                </div>
            </div>
            <div className="p-12">
                <img
                    src={survey}
                    alt={""}
                    className="h-[60rem] w-full object-cover"
                />
            </div>
            <hr className="py-4"/>
            <div className=" relative left-1/4 text-left p-10 w-1/2 justify-center  border rounded-3xl">
                <div className="relative inline top-0 left-0 text-gray-800 text-xl w-1/6 text-justify" >
                    <h2 >
                        CONTACT US
                    </h2>
                    <hr className="mb-7"/>
                </div>
                <form>
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="email" name="floating_email" id="floating_email"
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="floating_email"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
                            address</label>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="text" name="floating_password" id="floating_password"
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="floating_password"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="text" name="repeat_password" id="floating_repeat_password"
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="floating_repeat_password"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>

                    </div>
                    <button type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
                    </button>
                </form>
            </div>
            <div className="">
                <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
                    <div className="sm:flex sm:items-center sm:justify-between">
                            <span
                                className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Liquid minds</span>

                        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022
                         Liquiud minds. All Rights Reserved.
                </span>
                </footer>
            </div>
        </div>
    )
}


export default Home;