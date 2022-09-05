import styled from "styled-components";

export const HabitCheckBoardList = styled.ul`
  display: flex;
  align-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const HabitCheckBoardItem = styled.li`
  display: flex;
  flex: 100px;
  margin: 10px;
`;

export const Button = styled.button`
  ${(props) => (props.checked)
          ? `background-image: linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed);`
          : null
  }
  color: ${props => props.checked ? `#fff`:`#888`};
  box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin: 10px;
  padding: 10px;
  text-align: center;
  border: none;
  background-size: 300% 100%;
  border-radius: 50px;
  moz-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;

  &&:hover {
    background-position: 100% 0;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
  }
`;