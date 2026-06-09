import Lottie from "react-lottie";
import okay from "../../../public/Okey.json"

const Skills = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: okay,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div className="bg-gray-900">
      <div className='pt-10 bg-gray-900  md:pt-20 lg:flex justify-evenly gap-5 align-center text-white max-w-7xl mx-auto'>
        <div className="flex-1">
          <div className="w-full mx-auto">
            <h1 className="text-center uppercase font-bold text-white text-3xl lg:text-5xl">Tech Stack</h1>
            <div className="flex justify-center my-20">
              <div data-aos="fade-up"
                data-aos-duration="3000" className="flex justify-center flex-col">
                <div className="flex ml-5 md:ml-0 gap-5 lg:gap-10">
                  <img className="w-12 lg:w-16 h-12 lg:h-16 hover:mt-2" src="https://i.ibb.co/k0QSbBx/kisspng-react-javascript-responsive-web-design-github-angu-github-5accac24ced243-4761515415233628528.png" alt="react logo" />
                  <img className="w-16 lg:w-24 h-12 lg:h-16 ml-2 hover:mt-2" src="https://i.ibb.co/P4MGX8Y/download-removebg-preview.png" alt="tailwind logo" />
                  <img className="w-16 lg:w-20 h-12 lg:h-16 hover:mt-2" src="https://i.ibb.co/jbhPkVv/png-transparent-firebase-hd-logo-thumbnail-removebg-preview.png" alt="firebase logo" />
                  <img className="w-16 lg:w-20 -ml-5 h-12 lg:h-16 hover:mt-2" src="https://i.ibb.co/98C0ndb/Mongo-DB-Emblem-removebg-preview.png" alt="mongodb logo" />
                </div>
                <div className="flex gap-2 lg:gap-5 ml-12 lg:ml-14 mt-12">
                  <img className="w-12 lg:w-16 h-12 lg:h-16 hover:mt-2" src="https://i.ibb.co/8KB10fJ/javascript-logo-8892-AEFCAC-seeklogo-com-removebg-preview.png" alt="js logo" />
                  <img className="w-14 lg:w-20 h-12 lg:h-16 hover:mt-2" src="https://i.ibb.co/wsWGjJs/png-clipart-node-js-javascript-npm-computer-icons-web-application-others-miscellaneous-text-removebg.png" alt="node-js logo" />
                  <img className="w-20 lg:w-36 h-8 lg:h-12 mt-2 hover:mt-3" src="https://i.ibb.co/0VYGYbf/download-1.png" alt="express-js logo" />
                </div>
                <div className="flex ml-24 lg:ml-32 gap-2 lg:gap-5">
                  <img className="w-16 lg:w-20 hover:mt-2" src="https://i.ibb.co/pK6cFLz/download-2-removebg-preview.png" alt="css logo" />
                  <img className="w-12 lg:w-16 h-12 lg:h-16 mt-2 hover:mt-4" src="https://i.ibb.co/cwDx5nk/download-3-removebg-preview.png" alt="html logo" />
                </div>
                <div>
                  <img className="w-12 lg:w-16 ml-36 lg:ml-44 hover:mt-2" src="https://i.ibb.co/QCnktg0/523673-removebg-preview.png" alt="github logo" />
                </div>

              </div>
            </div>

          </div>
        </div>
        <div className="flex-1 ">
          <Lottie options={defaultOptions} width={330} height={400} />
        </div>
      </div>
    </div>
  );
};

export default Skills;