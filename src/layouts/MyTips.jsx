import React, { use, useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import MyTipsTable from '../Components/MyTipsTable';
import Swal from 'sweetalert2';
import Loading from '../Components/Loading';
import { AuthContext } from '../provider/Authprovider';

const MyTips = () => {
    const { user } = use(AuthContext);
    const [mytips, setMytips] = useState(null);




    useEffect(() => {

        if (user) {
            fetch("https://garden-book-server-site-2.vercel.app/mytips", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ email: user?.email })
            })
                .then(res => res?.json())
                .then(result => {
                    setMytips(result);
                });
        }
    }, [user]);

    if(!mytips){
        return <Loading></Loading>
    }



    const handleDelete = (id) => {
     

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

                fetch('https://garden-book-server-site-2.vercel.app/delete', {
                    method: "DELETE",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({ id })
                })
                    .then(res => res.json())
                    .then(() => {
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
        <div className='my-15 mx-auto w-11/12 px-4'>
            <div className="overflow-x-auto border rounded-lg shadow-xl">
                <Table className="w-full bg-secondary-content    text-left custom-table">
                    <Thead className="bg-gray-100">
                        <Tr className=" text-sm text-gray-700 uppercase tracking-wide">
                            <Th className="p-3 ">Image</Th>
                            <Th className="p-3">Title</Th>
                            <Th className="p-3">Topic</Th>
                            <Th className="p-3">Category</Th>
                            <Th className="p-3">Difficulty</Th>
                            <Th className="p-3">Availability</Th>
                            <Th className="p-3 text-center">Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {mytips?.map((SingleTip) => (
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
