import { IAdminForm } from "../../../types/types";
import './adminLoginForm.css';

export default function AdminLoginForm({ adminDetails, getAdminDetails, varifyCredentials }: IAdminForm) {
    return (
        <>
            <div>
                <h5>Admin Login</h5>
                <form onSubmit={(event) => varifyCredentials(event)}>
                    <div>
                        <input type="text" placeholder="Enter name" name="adminName" autoComplete="off"
                            value={adminDetails.adminName} onChange={(event) => getAdminDetails(event)} />
                    </div>
                    <div>
                        <input type="password" placeholder="Enter password" name="password" autoComplete="off"
                            value={adminDetails.password} onChange={(event) => getAdminDetails(event)} />
                    </div>
                    <input type="submit" />
                </form>

            </div>
        </>
    );
}
