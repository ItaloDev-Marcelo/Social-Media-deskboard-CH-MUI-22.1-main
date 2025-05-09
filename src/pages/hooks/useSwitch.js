import {useState} from 'react';

export default function useSwitch() {
    const [checked, setChecked] = useState(false)
    
        const handleChange = (e) => {
            setChecked(e.target.checked)
            console.log(checked)
        }

    return {
        checked,
        handleChange
    }
}