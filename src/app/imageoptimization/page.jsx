import Image from "next/image";


const ImageOptimaization = () => {
    return (
        <div className="text-3xl text-center">
            <h1>image optimization</h1>
            <img className="max-w-4xl mx-auto" src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />


            <h1>image from Image tags</h1>
            <Image  className="max-w-4xl mx-auto"  src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            width={500}
            height={600}></Image>
        </div>
    );
};

export default ImageOptimaization;