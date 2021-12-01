import React from "react";

interface MyButtonProps {
    text: string
    onClick: () => void
}

const MyButton: React.VFC<MyButtonProps> = ({ text, onClick }) => {
    return <button onClick={onClick}>{text}</button>
}

export default MyButton;