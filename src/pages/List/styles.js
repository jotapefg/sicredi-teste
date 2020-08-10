import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  p {
    font-size: 1.6rem;
    font-weight: 700;
    text-align: center;
    margin: 30px 0px 20px;
  }
`;

export const DragonContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Dragon = styled.li`
  display: flex;
  margin-bottom: 10px;

  a {
    width: 300px;
    font-size: 1.4rem;
    border: 1px solid rgba(255, 255, 255, 0.08);
    text-align: center;
    padding: 10px 0px;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.5);
    transition: .2s;

    &:hover {
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: rgba(255, 255, 255, 1);
    }
  }
`;
