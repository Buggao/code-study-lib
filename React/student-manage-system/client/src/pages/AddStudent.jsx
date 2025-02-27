import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { addStudentApi } from "../api/studentApis"

export default function AddStudent() {

    const navigate = useNavigate();

    // 状态钩子
    const [formData, setFormData] = useState({
      name: '',
      age: '',
      gender: 'male',
      phone: '',
      email: '',
      education: '本科',
      school: '',
      address: '',
      profession: '',
      bio: ''
    });
  
    // 处理输入变化
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    // 提交表单处理
    const handleSubmit = (e) => {
      // 阻止默认事件
      e.preventDefault();
      console.log(formData);
      // 这里可以添加更多的提交处理逻辑
      for(const item in formData) {
        if(formData[item] === "") {
          alert("请完善表单内容")
          return
        }
      }
      formData.id = Date.now()
      addStudentApi(formData).then(res => {
        navigate("/home", 
          {
            state: {message: "添加学生成功", type: "success"}
          })
      })
    };
  
    return (
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2>用户信息表单</h2>
        
        <div style={inputGroupStyle}>
          <label style={labelStyle}>姓名:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
  
        <div style={inputGroupStyle}>
          <label style={labelStyle}>年龄:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
  
        <div style={inputGroupStyle}>
          <label style={labelStyle}>性别:</label>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
                style={radioStyle}
              />
              男
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
                style={radioStyle}
              />
              女
            </label>
          </div>
        </div>
  
        <div style={inputGroupStyle}>
          <label style={labelStyle}>手机号码:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
  
        <div style={inputGroupStyle}>
          <label style={labelStyle}>用户邮箱:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
  
        <div style={inputGroupStyle}>
          <label style={labelStyle}>学历:</label>
          <select
            name="education"
            value={formData.education}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="小学">小学</option>
            <option value="中学">中学</option>
            <option value="本科">本科</option>
            <option value="硕士">硕士</option>
          </select>
        </div>
  
        <div style={inputGroupStyle}>
          <label style={labelStyle}>毕业学校:</label>
          <input
            type="text"
            name="school"
            value={formData.school}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
  
        <div style={inputGroupStyle}>
          <label style={labelStyle}>职业:</label>
          <input
            type="text"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={inputGroupStyle}>
          <label style={labelStyle}>地址:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        
        <div style={inputGroupStyle}>
          <label style={labelStyle}>个人简介:</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            style={{ ...inputStyle, height: '100px' }}
          />
        </div>
  
        <button type="submit" style={buttonStyle}>提交</button>
      </form>
    );
}

// 样式
const formStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};

const inputGroupStyle = {
  marginBottom: '15px'
};

const labelStyle = {
  display: 'block',
  marginBottom: '5px',
  fontWeight: 'bold'
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  borderRadius: '4px',
  border: '1px solid #ccc'
};

const radioStyle = {
  marginRight: '5px'
};

const buttonStyle = {
  padding: '10px 15px',
  fontSize: '16px',
  color: '#fff',
  backgroundColor: '#007bff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};
