import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }  
`;

export const ADD_USER = gql`
  mutation addUser
    ($username: String!, $email: String!, $password: String!, $location: String, $age: Int, $instrument: String, $profileImage: String, $description: String, genres: String, $influences: String, $pastProjects: String, $currentProjects: String, $videoLink: String, $audioLink: String) {

    addUser(username: $username, email: $email, password: $password, age: $age, location: $location, instrument: $instrument, profileImage: $profileImage, description: $description, genres: $genres, influences: $influences, currentProjects: $currentProjects, pastProjects: $pastProjects, videoLink: $videoLink, audioLink: $audioLink) {
      token
      user {
        _id
        username
        email
        age
        location
        instrument
        profileImage
        description
        genres
        influences
        currentProjects
        pastProjects
        videoLink
        audioLink
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($postText: String!) {
    addPost(postText: $postText) {
      _id
      postText
      createdAt
      username
      responseCount
      responses {
        _id
      }
    }
  }
`;

export const ADD_RESPONSE = gql`
  mutation addResponse($postId: ID!, $responseText: String!) {
    addResponse(postId: $postId, responseText: $responseText) {
      _id
      responseCount
      responses {
        _id
        responseText
        createdAt
        username
      }
    }
  }
`;