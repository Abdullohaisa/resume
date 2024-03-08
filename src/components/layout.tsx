import React from "react"
import Header from "./header";



interface LayoutProps {
    children: any;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className="layout">
   <div className="container">
     <Header/>
           {children}
   </div>
    </div>
    )}

export default Layout
