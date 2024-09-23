import { ReactNode } from "react";
import css from './Button.module.css';
import cn from 'classnames';

interface ButtonProps {
    children: ReactNode;
    className?: string
}

const Button = ({ children, className }: ButtonProps ) => {
    return <button className={cn(css.btn, className)}>{children}</button>;
};

export default Button;
