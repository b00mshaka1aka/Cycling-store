import * as React from 'react';
import styled from 'styled-components';
import { UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

const MenuContainer = styled.div`
  margin: 0 20px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MenuItems = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Sorting = styled.div`
  font-family: 'Cera Pro', sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: #3d3d3d;

  cursor: pointer;
`;

const MenuSorting = {
  fontFamily: "'Cera Pro', sans-serif",
  fontWeight: '400',
  fontSize: '15px',
  color: '#3d3d3d',
};

interface MenuProps {
  active: boolean;
}

const MenuItem = styled.div<MenuProps>`
  margin: 0 20px;
  position: relative;

  font-family: 'Cera Pro', sans-serif;
  font-weight: ${(props) => (props.active ? '700' : '400')};
  font-size: 15px;
  color: ${(props) => (props.active ? '#46a358' : '#3d3d3d')};

  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    color: #46a358;
  }

  &:after {
    position: absolute;
    content: ' ';
    height: 2px;
    width: 100%;
    bottom: -7px;
    left: 0;
    background-color: #46a358;
    opacity: ${(props) => (props.active ? '1' : '0')};
  }
`;

const sortingBy = ['цене (возрастанию)', 'цене (убыванию)', 'размеру'];

const Menu: React.FC = () => {
  const [currentSorting, setCurrentSorting] = React.useState<string>(sortingBy[0]);

  return (
    <MenuContainer>
      <Sorting>
        <UncontrolledDropdown>
          <DropdownToggle caret className="nav-link" tag="a">
            Сортировка по: {currentSorting}
          </DropdownToggle>
          <DropdownMenu container="body">
            {sortingBy.map((el) => (
              <DropdownItem style={MenuSorting} onClick={() => setCurrentSorting(el)}>
                {el}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </UncontrolledDropdown>
      </Sorting>
    </MenuContainer>
  );
};

export default Menu;
