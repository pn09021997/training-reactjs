import React from 'react';
import './heading.css';

interface IProps {
    type: string,
    text: string
}

const Heading: React.FC<IProps> = (props) => {
    const { type, text } = props;

    return (
    <div className='Heading'>
        <p className={`heading-${type}`}>
            {text}
        </p>
    </div>
  )
}

export default Heading;