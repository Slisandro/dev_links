import { useState } from 'react';
import ArrowBottomIcon from '../icons/arrow-bottom-icon';
import ArrowTopIcon from '../icons/arrow-top-icon';
import LinkIcon from '../icons/link-icon';

interface Item {
    id: string,
    label: string,
    icon: Element // React.ReactElement<SVGElement>|Element
}

interface DropdownProps {
    options: Item[]
    selected?: Item
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const ITEM_DEFAULT: Item = {
    label: "Add Link",
    icon: <LinkIcon color={"#737373"} />,
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
            <ArrowTopIcon color="currentColor" />
        ) : (
            <ArrowBottomIcon color="currentColor" />
        )}
    </button>
);

export default DropdownComponent