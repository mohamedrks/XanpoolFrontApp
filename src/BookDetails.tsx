
import { useLocation } from "react-router-dom";
import { BookInfo } from "./interfaces/IBookInfo";

function BookDetails(){
    let location = useLocation();
    let productInfo   = location.state as BookInfo;
    return(
        <div >
        <div><h2>Book Details</h2>
            <ul>      
                    <li>{productInfo.title}</li>
                    <li>{productInfo.year}</li>
                    <li>{productInfo.description}</li>
                
            </ul>
        </div>
    </div> 
    )
}

export default BookDetails;