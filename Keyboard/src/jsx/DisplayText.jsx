import React from 'react'; 
import styles from '../css/DisplayText.module.css'

function DisplayText (props) {
    return (
        <div className={styles.displayText} dangerouslySetInnerHTML={{ __html: props.text }}></div>
    )
}

export default DisplayText;