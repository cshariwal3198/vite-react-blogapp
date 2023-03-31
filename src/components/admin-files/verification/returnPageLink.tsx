import { Link } from "react-router-dom";
import { IReturnPageLink } from "../../../types/types";

export default function ReturnPageLink({ isBooleanValue, path, pageAddress }: IReturnPageLink) {
    return (
        <>
            {isBooleanValue ?
                <div>
                    Click here <Link to={path}>{pageAddress}</Link>
                </div>
                : "Entered details are wrong...!! Please try again"}
        </>
    );
}