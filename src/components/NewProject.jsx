import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({onAdd}){
    const modal=useRef();
    const title=useRef();
    const desc=useRef();
    const dueDate=useRef();

    function handleSave(){
        const enteredTitle=title.current.value;
        const enteredDesc=desc.current.value;
        const enteredDueDate=dueDate.current.value;

        if(enteredTitle.trim()===''||enteredDesc.trim()===''||enteredDueDate.trim()===''){
            modal.current.open();
            return;
        }
        onAdd({
            title:enteredTitle,
            desc:enteredDesc,
            dueDate:enteredDueDate
        })
    }
    return <>
    <Modal ref={modal} buttonCaption="Okay"><h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2> <p className="text-stone-600 mb-4">Please check your values</p>
    </Modal>
    <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button className="text-stone-800 hover:text-stone-950">Cancel</button></li>
            <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>Save</button></li>
        </menu>
        <div>
            <Input label="Title" type="text" textarea={false} ref={title} />
            <Input label="Description" textarea={true} ref={desc} />
            <Input type="date" label="Date" textarea={false} ref={dueDate}/>
        </div>
    </div></>
}