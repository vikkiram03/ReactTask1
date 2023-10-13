import React, {useState} from 'react';

function WordCounter() {
    const [text, setText] = useState('');
    const [wordCount, setWordCount] = useState(0);

    const updateWordCount = (inputText) => {
        const words = inputText.trim().split(/\s+/); // Split text into words
        const filteredWords = words.filter(word => word !== ''); // Remove empty strings
        setWordCount(filteredWords.length);
    }

    const handleInputChange = (e) => {
        const inputText = e.target.value;
        setText(inputText);
        updateWordCount(inputText);
    }

    return (
        <div className="m-2">
            <h1 className="display-4"><strong>React Task 1</strong></h1>
            <h5 className="display-6">By 21BCE5919 Vikram Ramkumar</h5>
            <div className="m-4">
                <p className="h2 text-center"> Responsive Paragraph Word Counter </p> <br></br>
                <textarea rows="5" cols="50" value={text} onChange={handleInputChange} placeholder="Enter text" />
                <p className="text-center">Word Count: {wordCount}</p>
            </div>
        </div>
    );
}

export default WordCounter;