import React from "react";
import { useHistory } from "react-router-dom";

import Button from "../../Button/Button";
import styles from "./UpperSection.module.css";
import {ReactComponent as Mint} from "../../../Assets/mnt1.svg";
import {ReactComponent as Logo} from "../../../Assets/mint.svg";

function UpperSection() {
    let history = useHistory();

    const goToSignIn = () => {
        history.push("/signin");
    };

    const goToSignUp = () => {
        history.push("/signup");
    };

    return(
        <div className={styles.Wrapper}>
        <div className= {styles.LogoWrapper}>
        <Logo className= {styles.Logo}/>
        </div>

        <div className={styles.subWrapper}>
            <div className={styles.LeftSide}>
                <div className={styles.Heading}>
                    One platform for all your doubts and queries!
                </div>
                <div className= {styles.Buttons}>
                    <Button
                    wrapperClass = {styles.ButtonStyle1}
                    content = "Sign Up"
                    onClick = {goToSignUp}
                    />
                    <Button
                    wrapperClass = {styles.ButtonStyle2}
                    content = "Sign In"
                    
                    onClick={goToSignIn}
                    />
                </div>
            </div>

            <div className= {styles.RightSide}>
                <Mint className = {styles.Mnt} />
            </div>
        </div>
    </div>
    )

    


}

export default UpperSection;