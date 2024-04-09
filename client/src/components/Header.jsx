import {HiMenu} from "react-icons/hi";

function Header(props) {
    


    return (
        <>
            <div className={"h-[8vh] w-full ease-in    top-0 flex justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "}>
<div > <button className="m-3" onClick={()=>{props.setTogale(!props.togale)}}><HiMenu className="text-3xl font-bold hover:scale-110 duration-200" />  </button> </div>

<div className="text-3xl font-bold m-auto ">DATA VISUALIZATION</div>
              
               

            </div>
        </>

    )
}
export default Header;