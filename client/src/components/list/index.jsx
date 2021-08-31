import React from 'react';

const List = ({header, dataSource, toRender}) => {

    
    return <table>
        <thead>
            <tr>
                {
                    header.map(({text}) => <th>{text}</th>)
                }
            </tr>
        </thead>
        <tbody>
            {
                dataSource.map(data => <tr> 
                        { 
                            toRender.map(({attr}) => <td>{data[attr]}</td>)
                        } 
                    </tr> 
                )
            }
        </tbody>
    </table>
}

export default List;