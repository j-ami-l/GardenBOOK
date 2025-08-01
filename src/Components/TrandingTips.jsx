import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import BrowseTipsTable from './BrowseTipsTable';

const TrandingTips = () => {
    const [topFour, setTopFour] = useState([]);

    useEffect(() => {
        fetch('https://garden-book-server-site-2.vercel.app/browsetips')
            .then(res => res.json())
            .then(data => {
                data.sort((a, b) => Number(b.likeCount) - Number(a.likeCount));
                setTopFour(data.slice(0, 4));
            })
    }, []);

    console.log(topFour);

    return (
        <div className='my-15 mx-auto max-w-screen-xl px-4 '>
            <h1 className='text-3xl text-accent-content font-bold text-center my-10'>Top Tranding Tips</h1>
            <div className="overflow-x-auto border rounded-lg shadow-xl">
                <Table className="w-full custom-table border-collapse text-left bg-secondary-content">
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
                        {topFour?.map((tip) => (
                                <BrowseTipsTable key={tip._id} tip={tip}></BrowseTipsTable>
                        ))}
                    </Tbody>
                </Table>
            </div>

        </div>
    );
};

export default TrandingTips;
