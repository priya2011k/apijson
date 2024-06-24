import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';



const Json = () => {
    const [data, setData] = useState([]);
    const [records, setRecords] = useState([]);
    const [value, setValue] = useState('');

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                setData(response.data);
                setRecords(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const options = [
        { value: '', label: 'selection box' },
        { value: 1, label: 'User Id 1' },
        { value: 2, label: 'User Id 2' },
        { value: 3, label: 'User Id 3' },
        { value: 4, label: 'User Id 4' },
        { value: 5, label: 'User Id 5' },
        { value: 6, label: 'User Id 6' },
        { value: 7, label: 'User Id 7' },
        { value: 8, label: 'User Id 8' },
        { value: 9, label: 'User Id 9' },
        { value: 10, label:'User Id 10' }
    ];

    const handleSelect = (event) => {
        setValue(event.target.value);
        const selectedUserId = parseInt(event.target.value);
        if (selectedUserId === '') {
            setRecords(data); 
        } else {
            setRecords(data.filter(item => item.userId === selectedUserId));
        }
    }

    const resetFilter = () => {
        
        setRecords(data);
    }

    return (
        <div>
            <Container style={{backgroundColor:'#d3dce8'}} className='py-2'>
                <h3 className='py-2' style={{ textAlign: 'center', margin: '40px',fontFamily:'poppins',fontSize:'40px',color:'#5e2251' ,background:'#7aa5de',fontWeight:'bold'}}>JSON PLACEHOLDER</h3>
               
                <div className="form-div d-flex m-4" style={{width:'40%'}}>
                    <select className='form-select' value={value} onChange={handleSelect}> 
                        {options.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                    <div className="">
                        <button className="btn btn-primary mx-2" onClick={resetFilter}>Reset</button>
                    </div>
                </div>

                <div className="">
                    <table className="table" style={{ border: '2px solid #ccc', borderCollapse: 'collapse'}}>
                        <thead>
                            <tr>
                                <th>User Id</th>
                                <th>Id</th>
                                <th className='text-center'>Title</th>
                                <th className='text-center'>Body</th> 
                                
                            </tr>
                        </thead>
                        <tbody >
                            {records.map((item, i) => (                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                                <tr key={i}>
                                    <td>{item.userId}</td>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    )
}

export default Json;