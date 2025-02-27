import { Avatar, Button, Popover, List  } from "antd"; 
import store from "../store";
function UserAuth({openLoginModal}) {
  console.log(store.getState());
  let userState = store.getState();
  
  console.log("userState", userState)
  console.log("userState.userInfo.avatar", userState.userInfo.avatar)
  const popoverContent = (
    <List className="cursor-pointer">
      <List.Item> 
        个人中心
      </List.Item>
      <List.Item> 
        退出登录
      </List.Item>
    </List>
  )
  return (
    <>
      {
        userState.isLogin ?
        ( 
          <div className="text-blueGray w-12 h-12"> 
            <Popover content={popoverContent} trigger="hover"> 
              <Avatar className="bg-amber" alt="用户头像" draggable={false} src={userState.userInfo.avatar} size="large" />
            </Popover>
          </div>
        ) :
        (
          <Button size="large" type="primary" onClick={openLoginModal}>注册/登录</Button> 
        )
        
      } 
    </>)
}

export default UserAuth;