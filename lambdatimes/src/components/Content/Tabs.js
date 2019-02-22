import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import Tab from './Tab';

const StyledTabs = styled.div`
    border-bottom: 1px solid lightgrey;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 47px;
    background-color: #fff;
  @media (min-width: 1280px) {
    width: 1280px;
  }
  .topics {
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
  }
  .title {
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
  }

`
const Tabs = props => {
  const {tabs, selectedTab, selectedTabHandler} = props
  return (
    <StyledTabs>
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/
          tabs.map((tab, index) => 
          <Tab 
            key={index} 
            tab={tab}
            selectedTab={selectedTab}
            selectedTabHandler={selectedTabHandler} 
          />)
        }
      </div>
    </StyledTabs>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propType = {
  tabs: PT.array.isRequired,
  selectedTab: PT.string.isRequired,
  selectedTabHandler: PT.func.isRequired,
}
export default Tabs;
