import { gql } from "@apollo/client";

export const ADD_LINK = gql`
  mutation Create_Link($url: String!, $description: String!) {
    Create_Link(url: $url, description: $description) {
      id
      url
      description
    }
  }
`;

export const allBooksQuery = gql`
  {
    feed {
      id
      description
      url
      postedBy {
        id
        name
      }
    }
  }
`;
export const DELETE_LINK = gql`
  mutation Delete_Link($id: String!) {
    Delete_Link(id: $id) {
      id
      url
      description
    }
  }
`;

export const UPDATE_LINK = gql`
  mutation Update_Link($id: String!, $newurl: String, $newdescription: String) {
    Update_Link(id: $id, url: $newurl, description: $newdescription) {
      id
      description
      url
    }
  }
`;

export const CREATE_USER = gql`
  mutation Signup($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
      user {
        id
        name
        email
        links {
          id
          description
          url
          postedBy {
            id
          }
        }
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
