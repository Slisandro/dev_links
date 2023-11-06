import React, { SVGProps } from 'react';

interface TextField {
    id?: string
    name?: string
    placeholder: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    type?: 'default' | 'active' | 'error',
    inputType?: HTMLInputElement['type'],
    error?: string,
    prefix?: React.ReactElement<SVGProps<SVGSVGElement>>,
    suffix?: React.ReactElement<SVGProps<SVGSVGElement>>,
    onClickIcon?: () => void
}

function TextFieldComponent({
    prefix,
    suffix,
    type = "default",
    inputType = "text",
    error,
    onClickIcon = () => null,
    ...props
}: TextField) {
    if (inputType === "password") {
        return (
            <div className={`textfield ${error ? "error" : type}`}>
                {prefix && prefix}
                <input type={inputType} {...props} />
                <span>{error}</span>
                <button type="button" onClick={onClickIcon}>
                    {suffix && suffix}
                </button>
            </div>
        )
    }

    return (
        <div className={`textfield ${error ? "error" : type}`}>
            {prefix && prefix}
            <input type={inputType} {...props} />
            <span>{error}</span>
            {suffix && (
                <button type="button" onClick={onClickIcon}>
                    {suffix}
                </button>
            )}
        </div>
    )
}

export default TextFieldComponent