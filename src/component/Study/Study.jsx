import React from 'react';

const Study = () => {
    return (
        <section  className="py-10 px-3 bg-gray-900 text-white">
            <div className="text-center">
                <h3 className="text-4xl font-semibold">
                    Academic Experience
                </h3>

            </div>
            <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-6xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
                <div>

                    <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
                        <span className="font-semibold text-xl text-yellow-600 mb-3">
                            Diploma in Computer Technology
                        </span>
                        <br />
                        Aptouch Polytechnic Institute, Dinajpur, Bangladesh
                        <br />
                        2020 - 2025
                    </p>

                    {/* <p className="lg:text-left text-justify max-w-lg text-sm mt-6 text-gray-200 leading-6">
                        <span className="font-semibold text-xl text-yellow-600 mb-3">
                            Secondary School Certificate
                        </span>
                        <br />
                        Moricha High School, Dinajpur
                        <br />
                        2017 - 2019
                    </p> */}
                    <p className="lg:text-left text-justify max-w-lg text-sm mt-6 text-gray-200 leading-6">
                        <span className="font-semibold text-xl text-yellow-600 mb-3">
                            Higher Secondary Certificate (HSC)
                        </span>
                        <br />
                       Birganj govt college, Dinajpur
                        <br />
                        2019 - 2021
                    </p>


                    <p className="lg:text-left text-justify max-w-lg text-sm mt-6 text-gray-200 leading-6">
                        <span className="font-semibold text-xl text-yellow-600 mb-3">
                            Professional Course
                        </span>
                        <br />
                        Complete Web Development Course with Jhankar Mahbub
                        <br />
                        January 2025 - July 2025
                    </p>


                </div>

                <img
                    src="https://i.ibb.co.com/mrycTL6W/IMG-20230528-230617-100-removebg-preview.png"
                    alt=""
                    className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
                />
            </div>
        </section>
    );
};

export default Study;