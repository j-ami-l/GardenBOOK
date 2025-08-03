import React, { use } from 'react';
import { AuthContext } from '../Provider/Authprovider';

const AddGardeners = () => {

    const HandleSubmit = e => {
        e.preventDefault();

        const form = e.target;

        const formData = new FormData(form)
        const newGardener = Object.fromEntries(formData.entries())

        fetch("https://garden-book-server-site-2.vercel.app/addgardeners", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newGardener)
        })
            .then(res => res.json())
            .then(() => {
                form.reset();
            })


    }


    return (
        <div className='w-11/12 mx-auto my-10'>
            <h1 className='text-2xl text-center font-bold text-green-700 my-10'>Gardener Information Form</h1>
            <form onSubmit={HandleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <fieldset className="fieldset bg-green-700  border-base-300 rounded-box  border p-4">
                        <input type="text" name='name' className="input w-full" placeholder="Gardeners name" />
                    </fieldset>
                    <fieldset className="fieldset bg-green-700 border-base-300 rounded-box  border p-4">
                        <input type="number" name='age' className="input w-full" placeholder="Age" />
                    </fieldset>
                    <fieldset className="fieldset bg-green-700 border-base-300 rounded-box  border p-4">
                        <input type="text" name='Gender' className="input w-full" placeholder="Gender" />
                    </fieldset>
                    <fieldset className="fieldset bg-green-700 border-base-300 rounded-box  border p-4">
                        <input type="text" name='status' className="input w-full" placeholder="Status" />
                    </fieldset>
                    <fieldset className="fieldset bg-green-700 border-base-300 rounded-box  border p-4">
                        <input type="text" name='experiences' className="input w-full" placeholder="Experiences" />
                    </fieldset>
                    <fieldset className="fieldset bg-green-700 border-base-300 rounded-box  border p-4">
                        <input type="number" name='totalSharedTips' className="input w-full" placeholder="Total shared tips" />
                    </fieldset>
                </div>
                <fieldset className="fieldset my-5 bg-green-700 border-base-300 rounded-box  border p-4">
                    <input type="text" name='photo' className="input w-full" placeholder="Photo URL" />
                </fieldset>
                <button className='btn w-full hover:bg-green-700 hover:text-white'><input type="submit" value="Add Gardener" /></button>
            </form>
        </div>
    );
};

export default AddGardeners;