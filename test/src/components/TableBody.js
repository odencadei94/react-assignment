import Axios from "axios";
import Popup from 'reactjs-popup';
import { useState } from 'react';
import TableHead from './TableHead';
import RowContent from './RowContent';

const TableBody = ({value}) => {

    const [planets, setPlanets] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const nameHead = ["name", "diameter", "climate", "population"];
    const [isLoading, setIsLoading] = useState(false);

    //function that fill planets const with api data, planetLink is the parameter that contain the correct link 
    const fetchPlanets = async (planetLink) => {
        setIsLoading(true);
        const { data } = await Axios.get(
            planetLink
        );
        const prod = data;
        setPlanets(prod);
        setIsLoading(false);
    };

    if(isLoading)
{
    return(
    <div>
        loading
    </div>)
}

    return(
    <>
        <tr>
            {/* fill rows  */}
            <RowContent value={value.name}/>
            <RowContent value={value.height}/>
            <RowContent value={value.mass}/>
            <RowContent value={value.created}/>
            <RowContent value={value.edited}/>
            {/* td for button "Planet info". When it is clicked, call fetchPlanets passing the link such as parameter*/}
            <td>
                <button className="planetInfo" onClick = { () => {
                    fetchPlanets(value.homeworld)
                    setIsOpen(true)
                }}>
                Planet info</button>
            </td>
        </tr>
            {/* // popup that appear when isOpen is set to true */}
        { 
            <Popup open={isOpen} position="top left">
                {close => (
                    <div className="popupContainer">
                        <div className="tablePopupContainer">
                            <table className="tablePopup">
                                <tbody>
                                    <tr>
                                        {nameHead.map((content, index) => {
                                            return(
                                                <TableHead value={content} key={content+index}/>
                                            );
                                        })}
                                    </tr>
                                    <tr>
                                        <RowContent value={planets.name}/>
                                        <RowContent value={planets.diameter}/>
                                        <RowContent value={planets.climate}/>
                                        <RowContent value={planets.population}/>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <div className="closePopupContainer">
                            <a className="close" onClick={close}>
                                X
                            </a>

                        </div>
                    </div>
                )}
            </Popup> 
        }
    </>
    );
}

export default TableBody