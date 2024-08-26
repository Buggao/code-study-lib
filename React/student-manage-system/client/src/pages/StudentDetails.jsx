import React from 'react';

const StudentDetails = ({ userData }) => {
  if (!userData) {
    return <p>暂无数据</p>;
  }

  const {
    name,
    age,
    gender,
    phone,
    email,
    education,
    school,
    profession,
    bio
  } = userData;

  return (
    <div style={profileStyle}>
      <h2>用户信息</h2>
      <div style={infoGroupStyle}>
        <strong>姓名:</strong> <span>{name}</span>
      </div>
      <div style={infoGroupStyle}>
        <strong>年龄:</strong> <span>{age}</span>
      </div>
      <div style={infoGroupStyle}>
        <strong>性别:</strong> <span>{gender === 'male' ? '男' : '女'}</span>
      </div>
      <div style={infoGroupStyle}>
        <strong>手机号码:</strong> <span>{phone}</span>
      </div>
      <div style={infoGroupStyle}>
        <strong>用户邮箱:</strong> <span>{email}</span>
      </div>
      <div style={infoGroupStyle}>
        <strong>学历:</strong> <span>{education}</span>
      </div>
      <div style={infoGroupStyle}>
        <strong>毕业学校:</strong> <span>{school}</span>
      </div>
      <div style={infoGroupStyle}>
        <strong>职业:</strong> <span>{profession}</span>
      </div>
      <div style={infoGroupStyle}>
        <strong>个人简介:</strong> <p>{bio}</p>
      </div>
    </div>
  );
};

// 样式
const profileStyle = {
  maxWidth: '600px',
  margin: '20px auto',
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};

const infoGroupStyle = {
  marginBottom: '10px'
};

export default StudentDetails;
