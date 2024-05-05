import React from 'react';
import BotCard from './BotCard';

function BotCollection({ bots, addBotToArmy, deleteBot }) {
  const mappedBots = bots.map((bot) => {
    return <BotCard
    bot={bot}
    key={bot.id}
    clickAdd={addBotToArmy}
    clickDelete={deleteBot}/>;
  });

  return (
    <div className='ui-four-column-grid'>
      Collection of all bots
      <div className='row'>{mappedBots}</div>
    </div>
  );
}

export default BotCollection;