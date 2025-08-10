import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import AuthInfo from '../hooks/AuthInfo';
import Theme from './Theme';
import { FaClipboardList, FaPlusCircle, FaUtensils } from 'react-icons/fa';


const Nav = () => {
    const navigate = useNavigate()

    const { user, handleLogout, userData, setCuser, cUser } = AuthInfo()



    if (user) {
        if (!(user.emailVerified)) {
            if (userData) {
                const userPresent = userData.find(d => d.email == user.email)
                setTimeout(() => {
                    setCuser(userPresent)
                }, [])
            }

        }
    }



    const logout = () => {
        handleLogout()
            .then(() => {
                navigate("/")
            })
            .catch(() => {

            })

    }


    return (
        <div className="navbar bg-base-100 shadow-sm ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu space-y-4 menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/allfoods'>All Foods
                        </NavLink>
                        <NavLink to='/gallery'>Gallery</NavLink>
                        {

                            user && <>
                                <NavLink to="myfoods" >

                                    My Foods
                                </NavLink>

                                <NavLink to="addfood">

                                    Add Food
                                </NavLink>

                                <NavLink to="myorders" >

                                    My Orders
                                </NavLink>
                            </>
                        }

                    </ul>
                </div>

                <img onClick={() => navigate('/')} src="https://cdn.qwenlm.ai/output/24058570-a08d-412a-b885-c2c9cef0d4a7/t2i/37ad233b-728f-4543-91c0-7efcfc50c57e/3f9bd5fa-2a6e-4c57-a98a-390f8fd5ba09.png?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV91c2VyX2lkIjoiMjQwNTg1NzAtYTA4ZC00MTJhLWI4ODUtYzJjOWNlZjBkNGE3IiwicmVzb3VyY2VfaWQiOiIzZjliZDVmYS0yYTZlLTRjNTctYTk4YS0zOTBmOGZkNWJhMDkiLCJyZXNvdXJjZV9jaGF0X2lkIjpudWxsfQ.NeXmshRyczwJzFAFKNYJzwjyhJftQ6bpadBmNVsW6XY" className='w-[50px] h-[50px] rounded-2xl ' alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex  gap-10">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/allfoods'>All Foods
                    </NavLink>
                    <NavLink to='/gallery'>Gallery</NavLink>

                    {

                        user && <>
                            <NavLink to="myfoods" >

                                My Foods
                            </NavLink>

                            <NavLink to="addfood">

                                Add Food
                            </NavLink>

                            <NavLink to="myorders" >

                                My Orders
                            </NavLink>
                        </>
                    }



                </ul>
            </div>
            <div className="navbar-end gap-2">
                <Theme></Theme>
                {
                    user ? user.emailVerified ? user?.displayName : cUser && <p className='font-semibold'>{cUser?.name}</p> : ''
                }

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className={!user ? '"btn  btn-ghost btn-circle avatar cursor-pointer" hidden' : '"btn  btn-ghost btn-circle avatar cursor-pointer"'}>

                        <div className="w-10 rounded-full cursor-pointer">
                            {user && (
                                user.emailVerified ? (
                                    <img src={user?.photoURL} alt="" />
                                ) : userData && cUser && (
                                    <img src={cUser?.photo_url} alt="" />
                                )
                            )}



                        </div>
                    </div>
                    {
                        user && <ul
                            tabIndex={0}
                            className="menu space-y-3 font-semibold menu-sm dropdown-content mt-3 z-[1] w-52 p-2 shadow bg-base-100 rounded-box"
                        >
                            <NavLink to="myfoods" className="flex items-center gap-2">
                                <FaUtensils className="text-lg" />
                                My Foods
                            </NavLink>

                            <NavLink to="addfood" className="flex items-center gap-2">
                                <FaPlusCircle className="text-lg" />
                                Add Food
                            </NavLink>

                            <NavLink to="myorders" className="flex items-center gap-2">
                                <FaClipboardList className="text-lg" />
                                My Orders
                            </NavLink>
                        </ul>
                    }
                </div>

                {
                    user ? <button onClick={logout} className="btn btn-success btn-outline">Logout</button> : <Link className='btn btn-outline btn-success' to='/login'>Login</Link>

                }
            </div>
        </div>
    );
};

export default Nav;