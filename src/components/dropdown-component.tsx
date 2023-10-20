import { useState } from 'react';

interface Item { 
    id: string, 
    label: string, 
    icon: React.ReactElement<SVGElement> 
}

interface DropdownProps {
    options: Item[]
    selected?: Item
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const ITEM_DEFAULT: Item = {
    label: "Add Link",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8.523 11.7207C8.59292 11.7903 8.6484 11.8731 8.68625 11.9643C8.7241 12.0555 8.74359 12.1532 8.74359 12.2519C8.74359 12.3506 8.7241 12.4484 8.68625 12.5395C8.6484 12.6307 8.59292 12.7135 8.523 12.7832L8.15175 13.1544C7.44826 13.8579 6.49413 14.2531 5.49925 14.2531C4.50437 14.2531 3.55024 13.8579 2.84675 13.1544C2.14326 12.4509 1.74805 11.4968 1.74805 10.5019C1.74805 9.50702 2.14326 8.55289 2.84675 7.8494L4.35425 6.34253C5.03018 5.66493 5.93961 5.27142 6.89626 5.2426C7.85292 5.21378 8.78439 5.55184 9.49987 6.18753C9.57374 6.25319 9.63395 6.33276 9.67707 6.42169C9.72019 6.51062 9.74537 6.60717 9.75117 6.70583C9.75698 6.8045 9.74329 6.90333 9.7109 6.99671C9.6785 7.09008 9.62803 7.17616 9.56237 7.25003C9.49671 7.3239 9.41714 7.38411 9.32821 7.42723C9.23928 7.47035 9.14273 7.49552 9.04407 7.50133C8.94541 7.50713 8.84657 7.49345 8.75319 7.46105C8.65982 7.42866 8.57374 7.37819 8.49987 7.31253C8.07082 6.93148 7.5124 6.72877 6.93882 6.74584C6.36524 6.76292 5.81987 6.9985 5.41425 7.4044L3.908 8.9094C3.48597 9.33143 3.24888 9.90382 3.24888 10.5007C3.24888 11.0975 3.48597 11.6699 3.908 12.0919C4.33002 12.5139 4.90241 12.751 5.49925 12.751C6.09608 12.751 6.66847 12.5139 7.0905 12.0919L7.46175 11.7207C7.5314 11.6509 7.61412 11.5956 7.70517 11.5579C7.79622 11.5201 7.89381 11.5007 7.99237 11.5007C8.09094 11.5007 8.18853 11.5201 8.27958 11.5579C8.37063 11.5956 8.45334 11.6509 8.523 11.7207ZM13.153 2.84565C12.4489 2.14325 11.495 1.74878 10.5005 1.74878C9.50598 1.74878 8.55206 2.14325 7.848 2.84565L7.47675 3.2169C7.33585 3.3578 7.2567 3.54889 7.2567 3.74815C7.2567 3.94741 7.33585 4.13851 7.47675 4.2794C7.61764 4.4203 7.80874 4.49945 8.008 4.49945C8.20726 4.49945 8.39835 4.4203 8.53925 4.2794L8.9105 3.90815C9.33252 3.48613 9.90491 3.24903 10.5017 3.24903C11.0986 3.24903 11.671 3.48613 12.093 3.90815C12.515 4.33018 12.7521 4.90257 12.7521 5.4994C12.7521 6.09624 12.515 6.66863 12.093 7.09065L10.5861 8.59815C10.1801 9.00388 9.63447 9.23912 9.06075 9.25574C8.48703 9.27235 7.92865 9.06908 7.49987 8.68753C7.426 8.62187 7.33993 8.5714 7.24655 8.539C7.15318 8.50661 7.05434 8.49292 6.95568 8.49873C6.85702 8.50453 6.76046 8.52971 6.67153 8.57283C6.5826 8.61595 6.50303 8.67616 6.43737 8.75003C6.37171 8.8239 6.32124 8.90997 6.28885 9.00335C6.25646 9.09672 6.24277 9.19556 6.24857 9.29422C6.25438 9.39288 6.27956 9.48944 6.32267 9.57837C6.36579 9.6673 6.426 9.74687 6.49987 9.81253C7.21486 10.4481 8.14571 10.7863 9.10191 10.7581C10.0581 10.7299 10.9674 10.3373 11.6436 9.66065L13.1511 8.15378C13.8543 7.44989 14.2495 6.49571 14.2499 5.50073C14.2502 4.50575 13.8557 3.55129 13.153 2.8469V2.84565Z" fill="#737373" />
    </svg>,
    id: "default"
}

function DropdownComponent({ options, selected = ITEM_DEFAULT }: DropdownProps) {
    const [open, setOpen] = useState(false);
    const handleClick = () => setOpen(!open);
    const handleSelect = (event: React.ChangeEvent<HTMLButtonElement>) => setOpen(false);

    return (
        <div className="dropdown">
            <SelectItem open={open} handleClick={handleClick} selected={selected} />
            {open && <Options options={options} handleSelect={handleSelect} />}
        </div >
    )
}

const Options = (
    { options, handleSelect }:
        { options: Item[], handleSelect: (event: React.ChangeEvent<HTMLButtonElement>) => void; }
) => (
    <div className="options">
        {options.map(op => (
            <button className="option" key={op?.id ?? op} onClick={handleSelect}>
                {op?.icon}
                {op?.label ?? op}
            </button>
        ))}
    </div>
);

const SelectItem = (
    { handleClick, selected, open }
        : { selected: Item, open: boolean, handleClick: () => void; }
) => (
    <button className="selected" onClick={handleClick}>
        {selected.icon}
        <span>{selected.label}</span>
        {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
                <path d="M13 8L7 2L1 8" stroke="#633CFF" stroke-width="2" />
            </svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
                <path d="M1 1L7 7L13 1" stroke="#633CFF" stroke-width="2" />
            </svg>
        )}
    </button>
);

export default DropdownComponent