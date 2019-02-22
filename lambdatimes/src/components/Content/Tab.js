import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
const StyledTab = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
  :hover {
    text-decoration: underline;
  }
  .active-tab {
  background-color: #fff;
  color: #333;
  border: 2px solid #333;
  }
`
const Tab = props => {
  const {tab, selectedTab, selectedTabHandler} = props
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
      console.log(selectedTabHandler)
  return (
    
    <StyledTab
      className={''}
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
}
export default Tab;
