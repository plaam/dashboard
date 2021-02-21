import styled from 'styled-components';

// sidebar

export const SidebarStyle = styled.div`
  background-color: ${({ theme }) => theme.base.sidebar};
  color: ${({ theme }) => theme.text.main};
  width: 100px;
  height: 100%;
  position: fixed;
  overflow: scroll;
  ::webkit-scrollbar {
      display: none;
  }
`;

export const BaseHeader = styled.header`
    box-sizing: border-box;
    box-shadow: 0px 1px 25px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    height: ${({ theme }) => theme.height.topContent};
`;

export const SidebarHeader = styled(BaseHeader)`
    justify-content: center;
`;

export const IconStyle = styled.div`
    height: 55px;
    width: 55px;
    border-radius: 50px;
    background-color: grey;
`;

export const GuildIcon = styled(IconStyle)`
    height: 60px;
    width: 60px;
    margin: 5px 0px;
`;

export const SidebarContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${({ theme }) => theme.padding.content};
`;

// menu

export const MenuStyle = styled.div`
  box-sizing: border-box;
  position: fixed;
  width: 300px;
  height: 100%;
  margin-left: 100px;
  overflow: scroll;
  ::webkit-scrollbar {
    display: none;
  }
  background-color: ${({ theme }) => theme.base.menu};
  color: ${({ theme }) => theme.text.main};
`;

export const BasePageStyle = styled.div`
  height: 100%;
  width: calc(100% - 400px);
  box-sizing: border-box;
  position: absolute;
  margin-left: 400px;
  background-color: ${({ theme }) => theme.base.content};
  color: ${({ theme }) => theme.text.main};
`;

export const MenuHeader = styled(BaseHeader)`
  padding: 25px;
  position: fixed;
  z-index: 10;
  width: 100%;
  background-color: inherit;
`;

export const MenuContent = styled.div`
  box-sizing: border-box;
  margin-top: 100px;

  padding: ${({ theme }) => theme.padding.content};
`;

export const MenuCategory = styled.div`
  box-sizing: border-box;
  font-size: 16px;
  font-weight: bold;
  :nth-child(2) {
    margin: 20px 0px;
  }
  span {
    padding: 0px 20px;
  }
`;

export const MenuCategoryItem = styled.div`
  font-size: 18px;
  font-weight: lighter;
  padding: 4px 0px;
  transition: 100ms background-color;
  :hover {
    cursor: pointer;
    background-color: #42494c;
  }
`;

//dashboard

export const DashboardHeader = styled(BaseHeader)`
  padding: 25px;
`;