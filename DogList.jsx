import ListItem from "./ListItem"
const DogList = ({data, func}) => {
    return (
        <div className="Dog_Menu">
            <select id="dog_breeds">
                {data.map((item) => (
                    <ListItem item={item} key={item}/>
                ))}
            </select>
            <input type="number" id="qty" min="1" max="99"></input>
            <button id="fetch_button" onClick={()=>func(document.querySelector('#dog_breeds').value , document.querySelector('#qty').value )}>Fetch Images</button>
        </div>
    );
}
export default DogList;