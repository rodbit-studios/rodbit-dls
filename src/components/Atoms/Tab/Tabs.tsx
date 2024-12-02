import React, { useState } from "react";
import { TabContainer, TabButton, TabContent } from "./Tabs.styles";

interface Tab {
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

interface TabsProps {
  tabs: Tab[];
  activeTab?: number;
  onTabChange?: (index: number) => void;
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab: controlledActiveTab,
  onTabChange
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState(controlledActiveTab ?? 0);

  const handleTabChange = (index: number) => {
    if (tabs[index].disabled) return;

    if (controlledActiveTab === undefined) {
      setInternalActiveTab(index);
    }

    onTabChange?.(index);
  };

  const activeTab = controlledActiveTab ?? internalActiveTab;

  return (
    <div>
      <TabContainer>
        {tabs.map((tab, index) => (
          <TabButton
            key={index}
            active={activeTab === index}
            disabled={tab.disabled}
            onClick={() => handleTabChange(index)}
          >
            {tab.label}
          </TabButton>
        ))}
      </TabContainer>
      <TabContent>
        {tabs[activeTab].content}
      </TabContent>
    </div>
  );
};

export default Tabs;
