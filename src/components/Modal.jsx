import { forwardRef,useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom";

export default forwardRef( function Modal({children},ref){
    const dialog=useRef();
    useImperativeHandle(ref,()=>{return {open(){
        dialog.current.showModal();
    }}});
    return createPortal(<dialog ref={dialog}>
        {children}
        <form action=""></form>
    </dialog>,document.getElementById("modal-root"))
})