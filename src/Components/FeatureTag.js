import React from "react";
import '../App.css';

export default function FeatureTag() {
    const [tags, setTags] = React.useState([])
    const addTags = event => {
        if (event.key === "Enter" && event.target.value !== "") {
            setTags([...tags, event.target.value]);
            event.target.value = "";
        }
    }
    const removeTags = indexToRemove => {
        setTags(tags.filter((_, index) => index !== indexToRemove));
    }
    return (
        <div className="feature-input">
            {tags.map((tag, index) => (
                <li>
                    <span>{tag}</span>
                    <i className="material-icons" onClick={() => removeTags(index)}>close</i>
                </li>
            ))}
            <input
                placeholder="press enter to add"
                onKeyUp={addTags}
            />
        </div>
    )
}