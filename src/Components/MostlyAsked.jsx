import React from 'react';

const MostlyAsked = () => {
    return (
        <div>
            <h1 className="text-2xl md:text-4xl text-accent-content text-center my-20">
                Mostly Asked Questions
            </h1>
            <div className="collapse bg-secondary-content border-base-300 border ">
                <input type="checkbox" />
                <div className="collapse-title font-semibold">How often should I water my plants?</div>
                <div className="collapse-content text-lg">
                    It depends on the type of plant, the season, and your local climate.
                    Indoor plants usually need watering once a week.
                    Outdoor garden plants may need watering 2–3 times a week in summer.
                    Always check the soil: if the top 1–2 inches are dry, it's time to water.
                </div>
            </div>
            <div className="collapse bg-secondary-content border-base-300 border">
                <input type="checkbox" />
                <div className="collapse-title font-semibold">How much sunlight do plants need?</div>
                <div className="collapse-content text-lg">
                    Most plants need at least 6 hours of sunlight per day.
                    Full sun plants: 6+ hours (e.g., tomatoes, roses).
                    Partial shade plants: 3–6 hours (e.g., spinach, ferns).
                    Shade-loving plants: 3 hours (e.g., snake plants, hostas).
                </div>
            </div>
            <div className="collapse bg-secondary-content border-base-300 border">
                <input type="checkbox" />
                <div className="collapse-title font-semibold">How do I prevent pests in my garden naturally?</div>
                <div className="collapse-content text-lg">
                    You can try these natural methods:
                    Use neem oil or insecticidal soap sprays.
                    Introduce beneficial insects like ladybugs.
                    Plant companion plants like marigolds to repel pests.
                    Remove infected leaves and keep the area clean and weed-free.
                </div>
            </div>
            <div className="collapse bg-secondary-content border-base-300 border">
                <input type="checkbox" />
                <div className="collapse-title font-semibold">When is the best time to plant vegetables?</div>
                <div className="collapse-content text-lg">
                    It depends on your local climate, but generally:
                    Cool-season crops (like lettuce, peas, broccoli): early spring or fall.
                    Warm-season crops (like tomatoes, cucumbers, beans): after the last frost in spring.
                    Tip: Use a planting calendar based on your hardiness zone for best timing.
                </div>
            </div>
        </div>
    );
};

export default MostlyAsked;