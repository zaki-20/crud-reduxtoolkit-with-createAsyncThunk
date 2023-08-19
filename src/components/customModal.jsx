import React from 'react'
import { useSelector } from 'react-redux';

const CustomModal = ({ id, setShowPopup }) => {

    const allusers = useSelector((state) => state.app.users);

    const singleUser = allusers.filter((ele) => ele.id === id);
    console.log("singleuser", singleUser);
    return (
        <div>
            <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
                <div className="bg-white px-16 py-14 rounded-md text-center">
                    <h1 className="text-xl mb-4 font-bold text-slate-500">{singleUser[0].name}</h1>
                    <h1 className="text-xl mb-4 font-bold text-slate-500">{singleUser[0].email}</h1>
                    <h1 className="text-xl mb-4 font-bold text-slate-500">{singleUser[0].age}</h1>
                    <h1 className="text-xl mb-4 font-bold text-slate-500">{singleUser[0].gender}</h1>
                    <button onClick={() => setShowPopup(false)} className="bg-red-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold">close</button>
                </div>
            </div>

        </div>
    )
}

export default CustomModal