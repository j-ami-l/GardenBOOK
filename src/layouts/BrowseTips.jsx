import React from 'react';
import { useLoaderData } from 'react-router';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import BrowseTipsTable from '../Components/BrowseTipsTable';
import Loading from '../Components/Loading';

const BrowseTips = () => {
    const allTips = useLoaderData()
    

    if(!allTips){
        return <Loading></Loading>
    }
    
    return (
        <div className='my-15 mx-auto w-11/12 px-4 '>
            <h1 className='text-3xl font-bold text-center mb-10 text-accent-content'>All Tips</h1>
            <div className="overflow-x-auto border rounded-lg shadow-xl">
                <Table className="w-full border-collapse bg-secondary-content text-left">
                    <Thead className="bg-gray-100">
                        <Tr className="text-gray-700 text-sm uppercase tracking-wide">
                            <Th className="p-3">Author</Th>
                            <Th className="p-3">Title</Th>
                            <Th className="p-3">Topic</Th>
                            <Th className="p-3">Image</Th>
                            <Th className="p-3">Difficulty</Th>
                            <Th className="p-3 text-center">Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {allTips?.map((tip) => (
                                <BrowseTipsTable key={tip._id} tip={tip}></BrowseTipsTable>
                        ))}
                    </Tbody>
                </Table>
            </div>

        </div>
    );
};

export default BrowseTips;