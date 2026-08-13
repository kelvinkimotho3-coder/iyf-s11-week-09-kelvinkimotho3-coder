import { useState } from 'react';

function Tabs({ tabs }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <div style={{ display: 'flex', gap: '10px' }}>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        style={{ fontWeight: activeTab === index ? 'bold' : 'normal' }}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div>{tabs[activeTab].content}</div>
        </div>
    );
}

export default Tabs;