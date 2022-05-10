import TableHead from './TableHead';
import TableBody from './TableBody';
import '../index.css';

const Table = ({value})=> {
    //array filled with column names
    const nameHead = ["name","height", "mass", "created", "edited", "planet"];

    return (
        <>
         <table>
            <tbody>
                <tr>
                    { // loop nameHead to create n tableHead object 
                        nameHead.map((content, index) => {
                            return(
                                <TableHead value={content} key={content+index}/>
                            );
                        })
                    }
                </tr>
                {   // loop value (that contain people data) to create n TableBody object 
                    value.map((content, index) => {
                        return(
                            <TableBody value={content} key={content+index}/>
                        );
                    })
                }
            </tbody>
        </table> 
        </>
    );
}

export default Table
