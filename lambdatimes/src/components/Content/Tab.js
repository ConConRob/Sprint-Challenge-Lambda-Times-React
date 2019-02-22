import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
const StyledTab = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: ${props => props.tab===props.selectedTab ? "#333" : '#fff'};
  background: ${props => props.tab===props.selectedTab ? "#fff" : '#333'};
  border: ${props => props.tab===props.selectedTab ? "2px solid #333" : 'none'};
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
  :hover {
    text-decoration: underline;
  }
`

const Tab = props => {
  const {tab, selectedTab, selectedTabHandler} = props
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
      
  return (
    
    <StyledTab
      tab={tab}
      selectedTab={selectedTab}
      onClick={() => {
       selectedTabHandler(tab)
      }}
    >
      {tab.toUpperCase()}
    </StyledTab>
  );
};

// Make sure you include PropTypes on your props.
Tab.propType = {
  tab: PT.string.isRequired,
  selectedTab: PT.string.isRequired,
  selectedTabHandler: PT.func.isRequired,
}
export default Tab;
