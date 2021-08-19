import {Link}  from 'react-router-dom';
import { Book } from "./interfaces/IBook";

const TableHeader = () => {
    
    return (
        <thead>
            <tr>
                <th>Name </th>
            </tr>
        </thead>
    )
}

const TableBody = (props : TableProps) => {
    const rows = props.book.map((row : any, index :  number) => {
        return (
          <tr key={index}>
            <td>         
                <Link to={{ pathname: "/bookdetails", state: row }} >{row.title}</Link> 
            </td>
          </tr>
        )
      })
    
      return <tbody>{rows}</tbody>
}

type TableProps = {
    book : Array<Book>
}

function Table(props : TableProps){
    return (
        <div>
            <table>
                <TableHeader/>
                <TableBody book={props.book}/>
            </table>
        </div>

        
    )
}

export default Table