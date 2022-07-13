import React from 'react';
import Auth from '../utils/auth';
import { Navigate, useParams } from 'react-router-dom';

import Header from '../Components/Header';
import PostList from '../Components/PostList';
import PostForm from '../Components/PostForm';

import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import "./style.css";


const Profile = (props) => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam }
  });

  function formatUrl(url) {
    var httpString = 'http://'
      , httpsString = 'https://'
      ;
    if (url.substr(0, httpString.length) !== httpString && url.substr(0, httpsString.length) !== httpsString)
      url = httpString + url;
    return url;
  }

  const user = data?.me || data?.user || {};

  // navigate to personal profile page if username is the logged-in user's
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to='/profile' />;
  }

  if (loading) {
    return <div>Get ready to rock...</div>
  }

  if (!user?.username) {
    return (
      <h4>
        Ready to rock? You must be logged in to jam with us. Use the links above to sign up or log in.
      </h4>
    );
  }


  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="main">
            <div className="row">
              <div className="col-md-4 mt-1">
                <div className="card text-center sidebar">
                  <div className="card-body">
                    <img src="https://cdn-images.audioaddict.com/1/5/d/b/a/a/15dbaa1f6a26c234d4977f10e9ea8808.png" className="rounded-circle" width="150"></img>
                    <div className="mt-3">
                      <h3>{userParam ? `${user.username}` : 'You Rock!'}</h3>
                      <h4>Email:</h4>
                      <p>{user.email}</p>
                      <h4>Age:</h4>
                      <p>{user.age}</p>
                      <h4>Location:</h4>
                      <p>{user.location}</p>
                      <h4>Instruments:</h4>
                      <p>{user.instruments}</p>
                      <h4>Description:</h4>
                      <p>{user.description}</p>
                      <h4>Genres:</h4>
                      <p>{user.genres}</p>
                      <h4>Influences:</h4>
                      <p>{user.influences}</p>
                      <h4>Links:</h4>
                      <a href={formatUrl(user.audioLink)} target='_blank' rel="noreferrer"><p>Audio Sample: Check out my tunes!</p></a>
                      <a href={formatUrl(user.videoLink)} target='_blank' rel="noreferrer"><p>Video Sample: See me in action!</p></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8 mt-1">
                <div className="card mb-3 content">
                  <h1 className="m-3 pt-3">Projects</h1>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-3">
                        <h5>Current:</h5>
                        <p>{user.currentProjects}</p>
                      </div>
                      <div className="col-md-3">
                        <h5>Past:</h5>
                        <p>{user.pastProjects}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3 content">
                <div className="col-12 mb-3 col-lg-8">
                  <PostList
                    posts={user.posts}
                    // title={`${user.username}'s posts...`} 
                    title={userParam ? `${user.username}` : 'Your Posts'}
                  />
                </div>
              </div>
              <div className=''>{!userParam && <PostForm />}</div>
              </div>
              

            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
