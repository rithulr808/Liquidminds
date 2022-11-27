import hero from "../assets/herobg.jpg";
import '../assets/myStyles.css';
import logo from "../assets/logo.png";
import chart from "../assets/charts.png";
import Form from "../components/form";

const  Home= () => {
    return (
        <div>
        <div className="bg-gray-10 h-[60rem]" >
            <img src={logo} className="w-60 font-bold absolute   top-5  right-5  " alt=""/>
            <img
                src={hero}
                alt={""}
                className="h-[65rem] w-full object-cover"
            />
            <h1 className="absolute top-1/3 right-1/4 text-gray-400 text-5xl " >
                lol
            </h1>
        </div>
            <div className='flex justify-center bg-gray-100 '>
                <div className="flex w-1/2 " >
                    <div className="wrap-card mx-5 my-5 ">
                        <div className="card ">
                            <p>
                                Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est
                                notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas

                                humanita per seaculpa quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur
                                parum clari, fiant sollemnes.
                                Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est
                                notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas

                                humanita per seaculpa quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur
                                parum clari, fiant sollemnes.
                            </p>
                        </div>
                    </div>
                    <div className="wrap-card mx-5 my-5 ">
                        <div className="card">
                            <p>
                                Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est
                                notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas
                                humanita per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur
                                parum clari, fiant sollemnes.
                                Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est
                                notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas

                                humanita per seaculpa quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur
                                parum clari, fiant sollemnes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center bg-gray-100 '>
                <div className="flex w-1/2 " >
                    <div className="wrap-card mx-5 my-5 ">
                        <div className="card ">
                            <p>
                                Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est
                                notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas

                                humanita per seaculpa quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur
                                parum clari, fiant sollemnes.
                                Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est
                                notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas

                                humanita per seaculpa quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur
                                parum clari, fiant sollemnes.
                            </p>
                        </div>
                    </div>
                    <div className="wrap-card mx-5 my-5 ">
                        <div className="card">
                            <p>
                                Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est
                                notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas
                                humanita per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur
                                parum clari, fiant sollemnes.
                                Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est
                                notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas

                                humanita per seaculpa quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur
                                parum clari, fiant sollemnes.
                            </p>
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
            <div className="">

            </div>
        </div>
    )
}


export default Home;