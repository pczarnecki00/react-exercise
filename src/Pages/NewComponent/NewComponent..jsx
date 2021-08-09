import {Link} from 'react-router-dom';
export const NewComponent = () => {
    return (
        <div style={{textAlign: 'center'}}>
        <h2 >New site</h2>
        <Link to='/' > Back to previous site</Link>
        </div>
    )
}