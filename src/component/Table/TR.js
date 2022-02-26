import React, {useState}                                   from 'react';
import ChildTr                                             from "./ChildTr";
import {BsFillArrowDownSquareFill,BsFillArrowUpSquareFill} from "react-icons/bs";

const TR = ({user, id}) => {

    const [isShowSkills, setIsShowSkills] = useState(true)
    const [isShowRow, setIsShowRow] = useState(false)

    return (
        <>
            <tr style={{cursor: 'pointer'}} onClick={ ()=> setIsShowRow(!isShowRow) }>
                <td>{id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>
                    {
                        isShowSkills ?
                        <BsFillArrowDownSquareFill  onClickCapture={ ()=> setIsShowSkills(false) } type='button'/> :
                        <>
                            <BsFillArrowUpSquareFill onClickCapture={ ()=> setIsShowSkills(true) } type='button'/>
                            <ul>{
                                user.skill.map((item, index) => {
                                    return <ChildTr skills={item} key={index}/>
                                })
                            }</ul>
                        </>
                    }

                </td>
            </tr>
            {
                isShowRow && <tr>
                              <td>Test Data</td>
                              <td>Test Data</td>
                              <td>Test Data</td>
                              <td>Test Data</td>
                          </tr>
            }
        </>
    );
};

export default TR;
