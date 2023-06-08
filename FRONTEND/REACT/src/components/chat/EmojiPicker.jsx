import React from "react";
import EmojiPicker from "emoji-picker-react";

const EmojiPickerComp = ({ setEm }) => {
    const epRef = React.useRef(null);

    const setCN = (para) => {
        if (para) {
            try {
                para.className += " ep-menu";
            } catch {}
            [...para.children].map((el) => {
                if (el.children.length > 0) {
                    setCN(el);
                } else {
                    try {
                        el.className += " em-menu";
                    } catch {}
                }
            });
        }
    };

    const onEmojiClick = (emojiObject, event) => {
        setEm(emojiObject.emoji);
    };

    React.useEffect(() => {
        setCN(epRef.current);
    }, []);
    return (
        <div className="ep-container" ref={epRef}>
            <EmojiPicker onEmojiClick={onEmojiClick} />
        </div>
    );
};

export default EmojiPickerComp;
