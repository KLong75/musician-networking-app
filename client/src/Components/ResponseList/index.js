import React from 'react';
import { Link } from 'react-router-dom';

const ResponseList = ({ responses }) => {
  return (
    <div className='card' id='response-list-card'>
      <div className='card-header'>
        <h5 className='font-link'>Responses:</h5>
      </div>
      <div className='card-body' id='response-list-card-body'>
        {responses &&
          responses.map(response => (
            <p className='pill mb-3' key={response._id}>
              {response.responseText} {' // '}
              <Link to={`/profile/${response.username}`} style={{ fontWeight: 700 }}>
                {response.username} responded on {response.createdAt}
              </Link>
            </p>
          ))}
      </div>
    </div>
  );
};

export default ResponseList;