import React, { useEffect, useState } from 'react';
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';
import SortBar from './SortBar';

function BotPage() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/bots')
      .then((res) => res.json())
      .then((bots) => setBots(bots));
  }, []);

  function addBotToArmy(bot) {
    const botInArmy = army.find((selectedBot) => selectedBot === bot);
    if (!botInArmy) {
      setArmy([...army, bot]);
    }
  }

  function deleteBot(selectedBot) {
    if (army.find((bot) => bot === selectedBot) && bots.find((bot) => bot === selectedBot)) {
      setBots(bots.filter((bot) => bot !== selectedBot));
      setArmy(army.filter((bot) => bot !== selectedBot));
      fetch(`http://localhost:4000/bots${selectedBot.id}`, {
        method: 'DELETE',
      });
    }
  }

  function deleteArmy(selectedBot) {
    const removeArmy = army.filter((bot) => bot !== selectedBot);
    setArmy(removeArmy);
  }

  function handleSort(sortBy) {
    const sorted = [...bots].sort((a, b) => {
      if (sortBy === 'health') {
        return b.health - a.health;
      } else if (sortBy === 'damage') {
        return b.damage - a.damage;
      } else if (sortBy === 'armor') {
        return b.armor - a.armor;
      }
      return 0;
    });
    setBots(sorted);
  }

  return (
    <div>
      <YourBotArmy army={army} deleteBot={deleteBot} deleteArmy={deleteArmy} />
      <SortBar handleSort={handleSort} />
      <BotCollection bots={bots} addBotToArmy={addBotToArmy} deleteBot={deleteBot} />
    </div>
  );
}

export default BotPage;

