import React from 'react';
import styles from './Button.module.css';

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children - Nội dung hiển thị bên trong nút
 * @param {Function} props.onClick - Hàm xử lý khi nhấp chuột
 * @param {string} props.borderRadius - Độ bo tròn góc tùy chỉnh
 * @param {string} props.hoverColor - Màu nền khi di chuột qua
 * @param {string} props.bgColor - Màu nền mặc định ban đầu
 * @param {string} props.textColor - Màu sắc của chữ
 * @param {string} props.textTransform - Chế độ viết hoa (VD: 'uppercase', 'lowercase', 'none')
 * @param {string} props.className - Các lớp CSS bổ sung
 */
const Button = ({ 
  children, 
  onClick, 
  borderRadius, 
  hoverColor, 
  bgColor, 
  textColor,
  textTransform,
  className = '',
  style,
  ...props 
}) => {
  const customStyles = {
    '--btn-radius': borderRadius,
    '--btn-hover': hoverColor,
    '--btn-bg': bgColor,
    '--btn-text': textColor,
    '--btn-transform': textTransform,
    ...style,
  };

  return (
    <button 
      className={`${styles.button} ${className}`}
      onClick={onClick}
      style={customStyles}
      {...props}
    >
      <span className={styles.content}>{children}</span>
    </button>
  );
};

export default Button;
