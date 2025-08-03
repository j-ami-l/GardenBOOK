import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import BrowseTipsTable from '../Components/BrowseTipsTable';
import Loading from '../Components/Loading';

const BrowseTips = () => {
    const LoadedTips = useLoaderData()
    const [allTips, setAllTips] = useState([])


    const difficultyOrder = {
        Easy: 0,
        Medium: 1,
        Hard: 2
    }


    useEffect(() => {
        if (LoadedTips) {
            setAllTips(LoadedTips);
        }
    }, [LoadedTips]);


    const handleEasyFilter = () => {

        const newArray = [...allTips]


        const easySortFilterd = newArray.sort((a, b) => {
            return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
        })

        setAllTips(easySortFilterd);
    };

    
    const handleHardFilter = () => {

        const newArray = [...allTips]


        const HardSortFilterd = newArray.sort((a, b) => {
            return difficultyOrder[b.difficulty] - difficultyOrder[a.difficulty];
        })

        setAllTips(HardSortFilterd);
    };

    



    if (!LoadedTips) {
        return <Loading></Loading>
    }




    return (
        <div className='my-15 mx-auto w-11/12 px-4 '>
            <div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn bg-secondary m-1">Filter</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-secondary-content border-accent-content border-[0.5px] rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={handleEasyFilter}><a>Easy</a></li>
                        <li onClick={ handleHardFilter}><a>Hard</a></li>
                    </ul>
                </div>
                <h1 className='text-3xl font-bold text-center mb-10 text-accent-content'>All Tips</h1>
            </div>
            <div className="overflow-x-auto border rounded-lg shadow-xl">
                <Table className="w-full custom-table border-collapse bg-secondary-content text-left">
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