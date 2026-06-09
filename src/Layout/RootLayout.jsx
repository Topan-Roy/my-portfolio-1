import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';
import CursorGlow from '../component/CursorGlow/CursorGlow';
import ScrollProgressBar from '../component/ScrollProgressBar/ScrollProgressBar';
import BackToTop from '../component/BackToTop/BackToTop';


const RootLayout = ({ children }) => {
    return (
        <div className='mx-auto w-full'>
            <ScrollProgressBar />
            <CursorGlow />
            <Navbar />
            {children}
            <Footer />
            <BackToTop />
        </div>
    );
};
 
export default RootLayout;
