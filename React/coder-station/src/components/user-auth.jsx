import { Button } from "antd"; 
import store from "../store";
function UserAuth() {
  console.log(store.getState());
  let userState = store.getState();
  return (
    <>
      {
        userState.isLogin ?
        ( 
          <div src={userState.avatar} className="w-16 h-16" style={{backgroundImage:`url(${userState.avatar})`}}/>
        ) :
        (
          <Button size="large" type="primary">注册/登录</Button> 
        )
        
      } 
    </>)
}

export default UserAuth;