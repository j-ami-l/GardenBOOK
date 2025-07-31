import React from 'react';
import { useLoaderData } from 'react-router';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import BrowseTipsTable from '../Components/BrowseTipsTable';

const BrowseTips = () => {
    const allTips = useLoaderData()
    
    return (
        <div className='my-15 mx-auto max-w-screen-xl px-4 '>
            <div className="overflow-x-auto border rounded-lg shadow-xl">
                <Table className="w-full border-collapse text-left">
                    <Thead className="bg-gray-100">
                        <Tr className="text-gray-700 text-sm uppercase tracking-wide">
                            <Th className="p-3">Image</Th>
                            <Th className="p-3">Title</Th>
                            <Th className="p-3">Topic</Th>
                            <Th className="p-3">Difficulty</Th>
                            <Th className="p-3">Author</Th>
                            <Th className="p-3 text-center">Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {allTips.map((tip) => (
                            <>
                                <BrowseTipsTable key={tip._id} tip={tip}></BrowseTipsTable>
                            </>
                        ))}
                    </Tbody>
                </Table>
            </div>

        </div>
    );
};

export default BrowseTips;