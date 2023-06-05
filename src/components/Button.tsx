import { Button as Btn } from 'antd';
import React, { ComponentProps } from 'react';

interface IButton extends ComponentProps<typeof Btn>{}

function Button({className, ...props}: IButton) {
  return <Btn size="large" type="primary" className={`${className} !bg-primary hover:!bg-primary/80 rounded-none `} {...props} />;
}

function ButtonText ({className, ...props}: IButton) {
  return (
    <Btn size="large" type="primary" className={`hover:!text-primary/60 hover:!bg-transparent !shadow-none !outline-none !text-primary !p-0 !rounded-none ${className}` } {...props}/>
    )
}

function ButtonOutline ({className, ...props}: IButton) {
  return (
    <Btn size="large" type="primary" className={`!border-primary hover:!text-primary/60 hover:!bg-transparent !shadow-none !outline-none !text-primary !rounded-none ${className}` } {...props}/>
    )
}

Button.Text = ButtonText
Button.Outline = ButtonOutline

export { Button}