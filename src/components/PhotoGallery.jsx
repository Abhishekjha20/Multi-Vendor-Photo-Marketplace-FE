import ImageCard from "./ImageCard";
import Pic1 from "../assets/Pic1.jpg";
import Pic2 from "../assets/PIC2.jpg";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
const PhotoGallery = () => {
    return (
        <div className="my-20 bg-white flex flex-col justify-center items-center">
            <h3 className="tex-3xl font-semibold my-14"> photo </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 bg-20">
                {/* All my photos listed in inside this div */}
                {/* Image Card */}
                <ImageCard
                    title="The Beach"
                    image={Pic1}
                    price="20"
                    author="@Abhishek"
                    icon1={<FaShoppingCart/>}
                    icon2 = {<IoIosHeart/>}
                />
                <ImageCard
                    title="The Beach"
                    image={Pic1}
                    price="20"
                    author="@Abhishek"
                    icon1={<FaShoppingCart/>}
                    icon2 = {<IoIosHeart/>}
                />
                <ImageCard
                    title="The Beach"
                    image={Pic1}
                    price="20"
                    author="@Abhishek"
                    icon1={<FaShoppingCart/>}
                    icon2 = {<IoIosHeart/>}
                />
                <ImageCard
                    title="The Beach"
                    image={Pic1}
                    price="20"
                    author="@Abhishek"
                    icon1={<FaShoppingCart/>}
                    icon2 = {<IoIosHeart/>}
                />
                <ImageCard
                    title="The Beach"
                    image={Pic1}
                    price="20"
                    author="@Abhishek"
                    icon1={<FaShoppingCart/>}
                    icon2 = {<IoIosHeart/>}
                />
                
            </div>
        </div>
    )
}

export default PhotoGallery