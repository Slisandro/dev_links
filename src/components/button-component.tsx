interface ButtonProps {
    label: string
    disabled: boolean
    type: 'default' | 'outline'
    icon?: SVGElement
    className?: string
}

function ButtonComponent({
    label,
    icon,
    disabled = false,
    type = 'default',
    className
}: ButtonProps) {
    return (
        <button className={`button ${type} ${className}`} disabled={disabled}>
            {icon}
            {label}
        </button>
    )
}

export default ButtonComponent