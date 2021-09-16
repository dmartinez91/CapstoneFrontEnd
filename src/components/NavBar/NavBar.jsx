import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../LogOut/LogOut';



const NavBar = ({user}) => {
    return ( 
        <div class="p-2">
            <dl class="nav nav-tabs">
            {!user &&
                <React.Fragment>
                    <dd class="nav-item">
                        <Link to="/login" class="nav-link active">Login</Link>
                    </dd>
                    <dd class="nav-item">
                        <Link to="/register" class="nav-link active">Register</Link>
                    </dd>
                </React.Fragment>            
            }
            {user && 
                <React.Fragment>
                    <dd class="nav-item">
                        <Link to="/search" class="nav-link active">Search</Link>
                    </dd>
                    <dd class="nav-item">
                            <Logout />
                    </dd>
                </React.Fragment>
            }

            </dl>
        </div>
     );
}
 
export default NavBar;




