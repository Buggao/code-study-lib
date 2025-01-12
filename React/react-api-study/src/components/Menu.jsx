
import { childPages } from "../router"
function MenuList() {
  console.log("Menus is", childPages)
  return ( 
    <ul>
      {
        childPages.map(item => (
          <li key={item.path}>
            <a href={item.path} key={item.path}>{item.name}</a>
          </li>
        ))
      }
    </ul>
  )
}

export default MenuList