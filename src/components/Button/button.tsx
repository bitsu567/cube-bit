import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames';

type ButtonSize = 'lg' | 'sm';

type ButtonType = 'primary' | 'default' | 'danger' | 'link';

interface BaseButtonProps {
  btnType?: ButtonType;
  size?: ButtonSize;
  className?: string;
  href?: string;
}

type ButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLElement> &
  AnchorHTMLAttributes<HTMLElement>;

export const Button: FC<ButtonProps> = ({
  children,
  btnType,
  size,
  className,
  disabled,
  href,
  ...restProps
}) => {
  const klass = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === 'link' && disabled,
  });
  if (btnType === 'link' && href) {
    return (
      <a className={klass} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={klass} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

export default Button;
