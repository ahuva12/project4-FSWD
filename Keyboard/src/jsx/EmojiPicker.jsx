import React from 'react';

function EmojiPicker(props) {
    const emojis = [
        '😀', '😂', '😅', '😊', '😍', '👍', '💡', '🎉', '❤️', '🔥',
        '😎', '😢', '😜', '😡', '😱', '🤔', '🤩', '🥳', '😇', '🥺',
        '🙌', '👏', '🙏', '👌', '✌️', '👀', '🧠', '💪', '🦄', '🐱',
        '🐶', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷',
        '🐸', '🐵', '🦉', '🦋', '🌸', '🌺', '🌻', '🌼', '🍀', '🍕',
        '🍔', '🍟', '🌮', '🍣', '🍤', '🍪', '🍩', '🍦', '🍿', '🥤'
      ];
    
      return (
        <select className="emoji-picker" onChange={(event) => props.addEmoji(event)}>
          {emojis.map((emoji, index) => (
            <option key={index} value={emoji}>
              {emoji}
            </option>
          ))}
        </select>
      );
}

export default EmojiPicker;