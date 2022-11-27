import meditation from "../assets/meditation.jpg";


const Solutions =() => {
    return(
        <div>
            <div className="flex flex-wrap absolute top-10 left-0 ">
            <h1 className="text-4xl text-gray-700 font-bold p-4 ">
                What feelings have
                you had recently
                about working
                towards your goals?
                How "supported" you
                feel by others around
                you-your friends,
                family, or otherwise
            </h1>
                <img
                    src={meditation}
                    alt={""}
                    className="h-[60rem] w-full object-cover p-5 rounded-3xl"
                />
                <h2 className="text-3xl text-gray-500 font-bold ml-5 bg-gray-100  w-full p-4 ">
                    Common CBT Techniques for Depression
                </h2>
                <p className="text-2xl text-gray-400 font-bold ml-5 bg-gray-100  w-full py-2 px-4 ">
                    Common CBT techniques used for depression include cognitive restructuring, thought journaling,
                    and mindful meditation. Many of these techniques are used together to show the connections between
                    thoughts, emotions, and behaviors.
                </p>
                <div className='relative flex justify-center bg-gray-100  px-4'>
                <div className="flex  mt-4" >
                    <div className="wrap-card mx-5 my-5 ">
                        <div className="card text-gray-500">
                            <h3 className="text-gray-800 text-2xl font-bold">
                                Cognitive Restructuring
                            </h3>
                            <p className="my-3">
                                In challenging your thought patterns, tone, and self-talk, you learn about potential
                                cognitive distortions and unhealthy thought patterns that could be increasing depressive
                                emotions or suicidal thoughts. Cognitive restructuring helps form healthier patterns, reduce
                                cognitive errors, and practice ways to rationalize distortions.
                            </p>
                        </div>
                    </div>
                    <div className="wrap-card mx-5 my-5 ">
                        <div className="card text-gray-500">
                            <h3 className="text-gray-800 text-2xl font-bold">Activity Scheduling</h3>
                            <p className="my-3">
                                Activity scheduling involves rewarding yourself for scheduling low-level activities
                                that encourage positive regard and self-care. By scheduling these activities and rewards,
                                you learn to motivate yourself to complete necessary tasks even when you are feeling low.
                                It also increases the chances of continuing to complete these tasks after you end your
                                formal therapy sessions.
                            </p>
                        </div>
                    </div>
                    <div className="wrap-card mx-5 my-5 ">
                        <div className="card text-gray-500">
                            <h3 className="text-gray-800 text-2xl font-bold">Thought Journaling</h3>
                            <p className="my-3">
                                By journaling about your emotions, thoughts, and behaviours, you create a space to process
                                and identify any potential triggers, as well as how your thoughts influenced your behaviour.
                                This can increase self-awareness and help you learn coping techniques to use in the future.
                            </p>

                        </div>
                    </div>
                    <div className="wrap-card mx-5 my-5 ">
                        <div className="card text-gray-500">
                            <h3 className="text-gray-800 text-2xl font-bold ">Mindful Meditation</h3>
                            <p className="my-3">
                                By engaging in meditation for depression, you will learn to reduce focus on negative
                                thoughts and increase your ability to remain in the present. Meditation can help you
                                recognize and learn to accept your negative thought patterns and detach from them
                                instead of letting them take over.
                            </p>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solutions;
