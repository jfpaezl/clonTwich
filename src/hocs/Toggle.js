import { useState } from "react";
export function useToggle(state=true) {
    const [toggle, setToggle] = useState(state)

    const handleToggle=()=>setToggle(!toggle)

    return {toggle, handleToggle};
}