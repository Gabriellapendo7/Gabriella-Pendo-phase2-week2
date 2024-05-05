import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faBolt, faShield, faAmbulance, faMagic, faStar } from '@fortawesome/free-solid-svg-icons';

const botTypeIcons = {
    Assault: faHeartbeat,
    Defender: faShield,
    Support: faBolt,
    Medic: faAmbulance,
    Witch: faMagic,
    Captain: faStar,
};


const showEnlistButton = true;

function BotCard({ bot, clickAdd, clickDelete }) {
    return (
        <div className='ui-column'>
            <div className='ui card' key={bot.id} onClick={() => clickAdd(bot)}>
                <div className='image'>
                    <img alt='oh no!' src={bot.avatar_url} />
                </div>
                <div className='content'>
                    <div className='header'>
                        {bot.name}
                        <FontAwesomeIcon icon={botTypeIcons[bot.bot_class]} />
                    </div>
                    <div className='meta text-wrap'>
                        <small>{bot.catchphrase}</small>
                    </div>
                </div>
                <div className='extra content'>
                    <span>
                        <FontAwesomeIcon icon={faHeartbeat} />
                        {bot.health}
                    </span>

                    <span>
                        <FontAwesomeIcon icon={faBolt} />
                        {bot.damage}
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faShield} />
                        {bot.armor}
                    </span>
                    <span>
                        <div className='ui center aligned segment basic'>

                            {showEnlistButton && (
                                <button className='enlist-button' onClick={() => clickAdd(bot)}>
                                    Enlist
                                </button>
                            )}<button
                                className='ui mini blue button'
                                onClick={() => clickDelete(bot)}
                            >
                                Delete
                            </button>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default BotCard;