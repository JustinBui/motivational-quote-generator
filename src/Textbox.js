import {useState} from 'react';

const Textbox = () => {
    

    // Authors and their corresponding quotes
    const authors = ['Mother Teresa', 'Franklin D. Roosevelt', 'Margaret Mead', 'Robert Louis Stevenson', 'Eleanor Roosevelt', 'Benjamin Franklin', 
                    'Helen Keller', 'Aristotle', 'Anne Frank', 'Ralph Waldo Emerson', 'Thomas A. Edison', 'Maya Angelou', 'Abraham Lincoln', 'Dr. Seuss'];
    const quotes_dict = {
        'Mother Teresa': 'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
        'Franklin D. Roosevelt': 'When you reach the end of your rope, tie a knot in it and hang on.',
        'Margaret Mead': 'Always remember that you are absolutely unique. Just like everyone else.',
        'Robert Louis Stevenson': 'Don\'t judge each day by the harvest you reap but by the seeds that you plant.',
        'Eleanor Roosevelt': 'The future belongs to those who believe in the beauty of their dreams.',
        'Benjamin Franklin': 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
        'Helen Keller': 'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.',
        'Aristotle': 'It is during our darkest moments that we must focus to see the light.',
        'Anne Frank': 'Whoever is happy will make others happy too.',
        'Ralph Waldo Emerson': 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
        'Thomas A. Edison': 'Many of life\'s failures are people who did not realize how close they were to success when they gave up.',
        'Maya Angelou': 'You will face many defeats in life, but never let yourself be defeated.',
        'Abraham Lincoln': 'In the end, it\'s not the years in your life that count. It\'s the life in your years.',
        'Dr. Seuss': 'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.'

    };

    let static_index = 0;

    const [quote, setQuote] = useState(quotes_dict[authors[static_index]]);
    const [author, setAuthor] = useState(authors[static_index]);

    
    const generateQuote = (e) => {
        const min = 0;
        const max = authors.length - 1;

        let random_number;

        do {
            // Prevent repeating indices 2+ times in a row 
            // (There are still some repetitions, so might need to look into this)
            random_number = Math.floor(Math.random() * (max - min + 1) + min);
        } while (random_number === static_index)

        setAuthor(authors[random_number]);
        setQuote(quotes_dict[authors[random_number]]);

        static_index = random_number;
        console.log(random_number)
    }

    return (
        <div className="Textbox">
            <h2 className="quote">"{quote}"</h2>
            <h3 className="author"> - {author}</h3>

            <button onClick={generateQuote}>Generate Quote</button>
        </div>
    );
}
 
export default Textbox;