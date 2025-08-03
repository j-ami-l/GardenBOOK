import React from 'react';

const GeneralTips = () => {
    return (
        <div className='my-30'>
            <h1 className="text-2xl md:text-4xl text-accent-content text-center my-20">
                New to Gardening? Start Here 🌿
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                <div className="bg-secondary-content shadow-md hover:shadow-lg rounded-2xl p-4 transition-transform duration-300 transform hover:scale-105">
                    <h3 className="text-lg font-semibold mb-2">🌱 Start Small</h3>
                    <p className="text-sm text-accent-content">
                        If you're new to gardening, it's best to begin with a small, manageable space such as a few pots on a balcony or a small raised bed in your backyard. This allows you to focus on learning plant care without becoming overwhelmed. As you gain confidence and knowledge, you can gradually expand your garden.
                    </p>
                </div>
                <div className="bg-secondary-content shadow-md hover:shadow-lg rounded-2xl p-4 transition-transform duration-300 transform hover:scale-105">
                    <h3 className="text-lg font-semibold mb-2">☀️ Choose the Right Spot</h3>
                    <p className="text-sm text-accent-content">
                        Before planting, observe your surroundings to find a spot that receives plenty of sunlight—ideally 6 to 8 hours daily. Most vegetables and flowering plants thrive in full sun. Also, make sure the area has good drainage and easy access to water. A well-chosen location can make a big difference in plant health.
                    </p>
                </div>
                <div className="bg-secondary-content shadow-md hover:shadow-lg rounded-2xl p-4 transition-transform duration-300 transform hover:scale-105">
                    <h3 className="text-lg font-semibold mb-2">🛠️ Use Basic Tools</h3>
                    <p className="text-sm text-accent-content">
                        You don't need a shed full of tools to start gardening. A few essentials like a trowel, gloves, watering can or hose, and hand fork will be enough for most beginner tasks. Investing in quality basics ensures you're prepared for planting, weeding, and watering, while keeping costs low and maintenance simple.
                    </p>
                </div>
                <div className="bg-secondary-content shadow-md hover:shadow-lg rounded-2xl p-4 transition-transform duration-300 transform hover:scale-105">
                    <h3 className="text-lg font-semibold mb-2">🧪 Learn & Experiment</h3>
                    <p className="text-sm text-accent-content">
                        Gardening is a journey of discovery. Don’t be afraid to try new things, make mistakes, and learn from them. Some plants may thrive while others struggle—that’s part of the learning curve. Keep notes, observe what works in your environment, and gradually build your knowledge through experience and curiosity.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GeneralTips;
