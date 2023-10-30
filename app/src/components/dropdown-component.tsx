import { useState, SVGProps } from 'react';
import ArrowBottomIcon from '../icons/arrow-bottom-icon';
import ArrowTopIcon from '../icons/arrow-top-icon';
import LinkIcon from '../icons/link-icon';
import { TechnologiesLabel } from '../constants/technologies-constants';

export interface Item {
    id: string,
    label: string,
    icon: React.ReactElement<SVGProps<SVGSVGElement>>
}

interface DropdownProps {
    id: string
    name: string
    value: string
    error?: string
    options: Item[]
    disabled?: boolean
    onChange: (v: TechnologiesLabel) => void
}

interface SelectItemProps {
    selected: Item,
    open: boolean,
    handleClick: () => void;
    id: string;
    name: string,
    disabled?: boolean
}

const ITEM_DEFAULT: Item = {
    label: "Add Link",
    icon: <LinkIcon color={"#737373"} />,
    id: "default"
}

function DropdownComponent({ id, name, value, error, onChange, disabled, options }: DropdownProps) {
    const [open, setOpen] = useState(false);
    const handleClick = () => setOpen(!open);
    const handleSelect = (event: React.ChangeEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const value = event.target.value as TechnologiesLabel;
        onChange(value); 
        setOpen(false)
    };

    const selected = options.find(op => op.id === value) ?? ITEM_DEFAULT;

    return (
        <div className={`dropdown ${error ? "error" : ""}`}>
            <SelectItem
                open={open}
                disabled={disabled}
                handleClick={handleClick}
                selected={selected}
                name={name}
                id={id}
            />
            {open && <Options options={options} handleSelect={handleSelect} />}
            <span>{error}</span>
        </div >
    )
}

const Options = (
    { options, handleSelect }:
        { options: Item[], handleSelect: (event: React.ChangeEvent<HTMLButtonElement>) => void; }
) => (
    <div className="options">
        {options.map(op => (
            <button
                type="button"
                className="option"
                key={op?.id ?? op}
                value={op?.id}
                // @ts-expect-error
                onClick={handleSelect}
            >
                {op?.icon}
                {op?.label ?? op}
            </button>
        ))}
    </div>
);

const SelectItem = (
    { handleClick, selected, open, id, name, disabled }
        : SelectItemProps
) => (
    <button type="button" disabled={disabled} className="selected" onClick={handleClick} id={id} name={name}>
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