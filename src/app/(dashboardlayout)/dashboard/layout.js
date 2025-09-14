import Footer from "@/components/Shared/Footer";


const layout = ({children}) => {
    return (
        <div>
           <div className="max-h-screen">
             {children}
           </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default layout;