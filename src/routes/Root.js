import { Outlet } from 'react-router-dom'
import BSNavbar from './../components/Nav/BSNavbar'

function Root() {
    return (
        <>
            <BSNavbar/>
            <main>
                {/* outlet defines where the content of the child routes will be rendered */}
                <Outlet />
            </main>
        </>
    )
}

export default Root