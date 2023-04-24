import AuthDetails from "./AuthDetails";
import Reminder from "../reminder-app/Reminder";
const UserPage = () => {
    return (
        <>
        <div className="userpage">
            <AuthDetails />
            <Reminder></Reminder>
        </div>
            
        </>
    )
}

export default UserPage