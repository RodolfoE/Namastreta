import React from 'react';
import { Table } from 'react-bootstrap';

const List = ({header, dataSource, toRender}) => {
   console.log(header, dataSource, toRender)
   return <Table striped bordered hover>
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
    </Table>
}

export default List;