import { SVGProps } from 'react';

interface ButtonProps {
    label: string
    disabled: boolean
    type: 'default' | 'outline'
    icon?: React.ReactElement<SVGProps<SVGSVGElement>>
    className?: string
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

function ButtonComponent({
    label,
    icon = <svg width="0" height="0" style={{ display: "none" }}></svg>,
    disabled = false,
    type = 'default',
    className,
    onClick
}: ButtonProps) {
    return (
        <button className={`button ${type} ${className}`} disabled={disabled} onClick={onClick}>
            {icon}
            {label}
        </button>
    )
}

export default ButtonComponent