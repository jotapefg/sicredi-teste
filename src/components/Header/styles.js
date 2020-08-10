import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;

  a {
    margin-right: 10px;
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.6);
    transition: .2s;

    &:hover {
      text-decoration: underline;
      color: rgba(255, 255, 255, 1);
    }
  }
`;
