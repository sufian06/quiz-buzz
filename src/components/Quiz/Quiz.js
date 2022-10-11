import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const Quiz = () => {
    const quizes = useLoaderData().data.questions
    console.log((quizes));
    return (
        <div className='max-w-7xl mx-auto mt-10'>
            <h2>Quiz of </h2>
            {quizes.map(quiz => <SingleQuiz key={quiz.id} quiz={quiz} />)}
            
        </div>
    );
};

export default Quiz;