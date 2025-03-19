import { ReactElement } from "react"
import { INavBar } from "../../InterFace/Navbar"
import { NavLink } from "react-router"
import { CiUser } from "react-icons/ci";


const NavBar = ():ReactElement => {

    const navbarlinks: INavBar[] = [
        // {id: 0, title: "Home", href: "/"},
        {id: 1, title: "Film", href: "/film"},
        {id: 2, title: "Education", href: "/education"},
        {id: 3, title: "Art&Photography", href: "/art&photography"},
        {id: 4, title: "E-Commerce", href: "/e-commerce"},
    ]


  return (
    <div className="flex justify-between px-10 py-5">
        <div>
            <NavLink to="/"
            className="text-2xl">W-ABC</NavLink>
        </div>
        <div className="flex gap-5">
            {
                navbarlinks.map(({id, title, href}: INavBar) => {
                    return <NavLink to={href}  key={id}
                    className="border px-5 py-0.5"
                    >{title}</NavLink>
                })
            }
        </div>
        <NavLink to="/login"
        className="text-xl border w-8 h-8 rounded-full flex justify-center items-center"><CiUser/></NavLink>
    </div>
  )
}

export default NavBar