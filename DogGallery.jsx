import Image from "./Image"
const DogList = ({data}) => {
    if(data.length > 0){
        return (
            <div className="Dog_Gallery">
                {data.map((item) => (
                    <Image item={item} key={item}/>
                ))}
            </div>
        );
    }
    else{
        return(
            <div className="Dog_Gallery_Message">
                <p>Select a dog breed and the number of images you wish to be displayed</p>
            </div>
        );
    }
}

export default DogList;