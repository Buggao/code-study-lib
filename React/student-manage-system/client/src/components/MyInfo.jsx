import React, { useState, useEffect } from 'react';

function MyInfo({ isShow = false ,message, type = 'warning', onClose }) {
  const [isVisible, setIsVisible] = useState(isShow);

  // 处理关闭按钮点击事件
  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  // 根据类型选择样式
  const alertStyles = {
    warning: {
      backgroundColor: '#fff3cd',
      borderColor: '#ffeeba',
      color: '#856404'
    },
    success: {
      backgroundColor: '#d4edda',
      borderColor: '#c3e6cb',
      color: '#155724'
    }
  };

  // 自动关闭 控制timer 避免重复调用useEffect
  useEffect( () => {
    console.log("isShow is", isVisible )
    let timer;
    if (isVisible) {
      timer = setTimeout(() => {
        setIsVisible(false)
      }, 1000);
    }
    return () => clearTimeout(timer)
  },[isVisible])

  // 当前的样式
  const currentStyle = alertStyles[type] || alertStyles.warning;

  if (!isVisible) return null;

  return (
    <div style={{ ...alertBaseStyle, ...currentStyle }}>
      <span>{message}</span>
      <button onClick={handleClose} style={closeButtonStyle}>×</button>
    </div>
  );
};

// 基础样式
const alertBaseStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '15px',
  border: '1px solid',
  borderRadius: '4px',
  marginBottom: '15px'
};

const closeButtonStyle = {
  background: 'none',
  border: 'none',
  fontSize: '16px',
  color: 'inherit',
  cursor: 'pointer'
};

export default MyInfo