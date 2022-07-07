import React from "react";
import styles from "./LowerSection.module.css";
import Button from "../../Button/Button";
import { useHistory } from "react-router-dom";

function LowerSection() {
    const history = useHistory();

    return(
        <div className={styles.Wrapper}>

            <div className = {styles.subWrapper}>
                <div classNane = {styles.Heading}>
                    Post your doubts, Solve your queries, Follow your interests.
                </div>
                <div className = {styles.Button}>
                <Button wrapperClass = {styles.ButtonStyle}
                content = "Sign Up"
                onClick = {() => history.push("/signup")}/>
                </div>
            </div>
        </div>
    )
}

export default LowerSection;