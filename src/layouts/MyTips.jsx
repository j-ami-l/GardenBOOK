import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/Authprovider';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import MyTipsTable from '../Components/MyTipsTable';
import Swal from 'sweetalert2';

const MyTips = () => {
    const { user } = useContext(AuthContext);
    const [mytips, setMytips] = useState([]);

    const userMail = user.email;


    useEffect(() => {
        fetch("http://localhost:3000/mytips", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email: userMail })
        })
            .then(res => res.json())
            .then(result => {
                setMytips(result);
            });
    }, [userMail]);


    


    const handleDelete = (id) => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            color: "white",
            background: "#1A4D2E",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch('http://localhost:3000/delete', {
                    method: "DELETE",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({ id })
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);
                        const newTips = mytips.filter(p => p._id !== id)
                        setMytips(newTips)
                    })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div className='my-15 mx-auto max-w-screen-xl px-4 '>
            <div className="overflow-x-auto border rounded-lg shadow-xl">
                <Table className="w-full border-collapse text-left">
                    <Thead className="bg-gray-100">
                        <Tr className="text-gray-700 text-sm uppercase tracking-wide">
                            <Th className="p-3">Image</Th>
                            <Th className="p-3">Title</Th>
                            <Th className="p-3">Topic</Th>
                            <Th className="p-3">Category</Th>
                            <Th className="p-3">Difficulty</Th>
                            <Th className="p-3">Availability</Th>
                            <Th className="p-3 text-center">Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {mytips.map((SingleTip) => (
                            <MyTipsTable key={SingleTip._id}
                                handleDelete={handleDelete}
                                SingleTip={SingleTip}></MyTipsTable>
                        ))}
                    </Tbody>
                </Table>
            </div>

        </div>
    );
};

export default MyTips;
