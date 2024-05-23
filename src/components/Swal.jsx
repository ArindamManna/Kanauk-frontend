import React from 'react'
import { errorIcon, tickCircle, warningIcon } from '../asset/staticData'
import { error } from 'jquery'
import { useDispatch, useSelector } from 'react-redux';
import { updateGlobalState } from '../Redux/GlobalSlice';

function Swal({ data }) {
    // let { type, title, text } = data ? data : {}

    const dispatch = useDispatch();
    const { type, title, text } = useSelector((state) => {
        const { swalDetails } = state?.GlobalSlice;
        return { ...swalDetails }
    });
    function closeSwal() {
        dispatch(updateGlobalState({
            swalDetails: { isSwalOpen: false }
        }))

    }




    return (
        <>

            <div className='h-screen w-screen fixed z-50 top-0 left-0 bg-black bg-opacity-10 px-4 flex items-center justify-center'>
                <div className="swal bg-white w-full max-w-96 py-4 px-8 rounded-md shadow-md flex flex-col items-center ">
                    {(type == "warning") ? <span className='h-16 w-16 text-orange-400'> {warningIcon}</span> : ""}
                    {(type == "error") ? <span className='h-16 w-16 text-red-500'> {errorIcon} </span> : ""}
                    {(type == "success") ? <span className='h-16 w-16 text-green-500'>  {tickCircle}</span> : ""}

                    <h5 className='text-center'>{title}</h5>
                    <p className='text-center text-[#505655]'>{text}</p>

                    <div className='flex gap-2 w-full justify-end'>
                        <button type='button' onClick={() => { closeSwal() }} className='text-white bg-[#03bfa1] py-2.5 px-4 rounded-md flex justify-center items-center gap-1'>Ok</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Swal