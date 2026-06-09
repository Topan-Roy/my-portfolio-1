import Lottie from "react-lottie";
import animation from "../../../public/Computer.json"


const Works = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const lottieContainerStyle = {
        transform: 'rotate(0deg)',
    };

    const services = [
        {
            id: '01',
            name: 'React js Developer',
            description: 'Designing dynamic interfaces, managing state flawlessly, and integrating data seamlessly—your knack for React development fuels high-performance, collaborative, and innovative web experiences.'
        },
        {
            id: '02',
            name: 'Front-end Developer',
            description: 'Creating captivating interfaces, and integrating data flawlessly—your expertise as a front-end developer drives high-performance, collaborative, and innovative web experiences.',
        },
        {
            id: '03',
            name: 'MERN Stack Developer',
            description: 'Crafting captivating interfaces, and integrating data flawlessly within the MERN stack—your expertise drives high-performance, collaborative, and innovative web experiences from end to end.'
        }
    ]

    return (
        <div className="bg-gray-900">
            <div className=" pt-20 px-10 pb-12 bg-gray-900  text-white max-w-7xl mx-auto ">
                <h1 data-aos="fade-up" data-aos-duration="2000" className="text-center uppercase mt-4 lg:mt-12 text-xl font-bold md:text-3xl lg:text-5xl">What I do</h1>
                <div className="lg:flex justify-evenly lg:gap-16 items-center">
                    <div className="flex-1 ">

                        <div className="w-[350px] lg:w-[400px] h-[200px] lg:h-[800px] mt-8 lg-mt-0" style={lottieContainerStyle}>
                            <Lottie options={defaultOptions} />
                        </div>
                    </div>

                    <div data-aos="zoom-in" data-aos-duration="2000" className="flex-1 pl-2 ">
                        {/* services  */}
                        {
                            services.map((item) => (
                                <div key={item.id} className="card px-3 py-5 mt-8 w-[360px] md:w-[600px] shadow-lg shadow-purple-400">
                                    <h4 className="font-semibold text-2xl text-yellow-600 mb-3">{item.name}</h4>
                                    <p>{item.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Works;