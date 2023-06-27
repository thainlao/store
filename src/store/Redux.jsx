import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

function Redux () {
const dispatch = useDispatch();

const addCash = (cash) => {
    dispatch({type:'add_cash', payload: cash})
}

const removeCash = (cash) => {
    dispatch({type:'remove_cash' , payload: cash})
}

const addCustomer = (name) => {
    const customer = {
        name,
        id: Date.now(),
    }
    dispatch({type: 'add_custom' , payload:customer})
}

const removeCustomer = (customer) => {
    dispatch({type: 'remove_custom', payload:customer.id})
}

const cash = useSelector(state => state.cash.cash)
const customers = useSelector(state => state.customers.customers)

    return (
    <div className="min-h-screen flex justify-center gap-5 flex-col items-center text-4xl text-black">
        <div className="flex flex-row gap-5">
            <button onClick={() => addCash(Number(prompt()))} className="rounded-full h-14 w-36 bg-[#ffffff]
            text-sm border border-black border-opacity-50 hover:bg-[#f5eeee]">
             Add cash
            </button>
            <button onClick={() => removeCash(Number(prompt()))} className="rounded-full h-14 w-36 bg-[#ffffff]
            text-sm border hover:bg-[#f8f3f3] border-black border-opacity-50">
             remove cash
            </button>
        </div>
        <div>
            Total Money: {cash}
        </div>
        <div className="flex flex-row gap-5">
        <button onClick={() => addCustomer(prompt())} className="rounded-full h-14 w-36 bg-[#ffffff]
            text-sm border hover:bg-[#f8f3f3] border-black border-opacity-50">
             add customer
            </button>
            <button onClick={() => removeCash(Number(prompt()))} className="rounded-full h-14 w-36 bg-[#ffffff]
            text-sm border hover:bg-[#f8f3f3] border-black border-opacity-50">
             remove customer
            </button>
        </div>
        {customers.length > 0 
            ?
            <div className="border border-black p-[8px]">
                {customers.map(customer =>
                    <div onClick={() => removeCustomer(customer)}>{customer.name}</div>
                    )}
            </div>
            :
            <div>
                Клиенты отсутсвуют!
            </div>
        }
    </div>
    ) 
}

export default Redux;