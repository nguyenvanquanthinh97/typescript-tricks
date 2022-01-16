interface OnInputChange {onInputChange: (newValue: string) => void};

interface InputProps {
    type: 'text' | 'email',
    value: string,
    onChange: OnInputChange['onInputChange']
}
