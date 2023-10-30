import { SVGProps } from 'react';

interface ButtonProps {
    label: string
    disabled: boolean
    type?: 'default' | 'outline'
    buttonType?: "button" | "submit" | "reset"
    icon?: React.ReactElement<SVGProps<SVGSVGElement>>
    className?: string
    onClick?: (e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => void
}

function ButtonComponent({
    label,
    icon = <svg width="0" height="0" style={{ display: "none" }}></svg>,
    disabled = false,
    type = 'default',
    buttonType = "button",
    className,
    onClick = () => null
}: ButtonProps) {
    return (
        <button type={buttonType} onClick={onClick} className={`button ${type} ${className}`} disabled={disabled}>
            {icon}
            {label}
        </button>
    )
}

export default ButtonComponent