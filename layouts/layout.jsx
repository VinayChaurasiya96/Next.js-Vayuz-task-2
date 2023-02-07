import styles from '../styles/Layouts.module.css'
 
function Layout({children}) {
  return (
    <div className=" w-2/5 m-auto ">
     <div className=" text-center py-10 bg-white">
        {children}
     </div>
    </div>
    
  )
}

export default Layout