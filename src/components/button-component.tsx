interface ButtonProps {
    label: string
    disabled: boolean
    type: 'default' | 'outline'
}

function ButtonComponent({
    label,
    disabled = false,
    type = 'default'
}: ButtonProps) {
    return (
        <button className={`button ${type}`} disabled={disabled}>{label}</button>
    )
}

export default ButtonComponent