import { gql } from "@apollo/client";

export const ADD_BIRB = gql`
  mutation addBirb {
    something
  }
`;
export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      username
    }
  }
`;
export const SIGNUP = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      username
    }
  }
`;
