import * as React from 'react';
import NotificationOff from '@material-ui/icons/NotificationsOff';
import Nowifi from '@material-ui/icons/SignalWifi0Bar';

import {AlertDiv} from './Alert-Styles';

const alerts =  [
	<AlertDiv className="sidebar__alert--info">
		<div className="sidebar__alert-icon-wrapper">
			<NotificationOff className="sidebar__alert-icon" />
		</div>
		<div className="sidebar__alert-texts">
			<p className="sidebar__alert-text"> Get notified of new messages </p>
			<p className="sidebar__alert-text"> Turn on your notifications </p>
		</div>
	</AlertDiv>,
	<AlertDiv className="sidebar__alert--danger">
		<div className="sidebar__alert-icon-wrapper">
			<NotificationOff className="sidebar__alert-icon" />
		</div>
		<div className="sidebar__alert-texts">
			<p className="sidebar__alert-text"> Phone battery low </p>
			<p className="sidebar__alert-text">
				Charge your phone to keep using Whatsapp.
			</p>
		</div>
	</AlertDiv>,
	<AlertDiv className="sidebar__alert--warning">
		<div className="sidebar__alert-icon-wrapper">
			<Nowifi id="noWifi" className="sidebar__alert-icon" />
		</div>
		<div className="sidebar__alert-texts">
			<p className="sidebar__alert-text"> Phone Not Connected</p>
			<p className="sidebar__alert-text">
				Make sure your phone has an active internet connection.{" "}
				<a
					className="underline"
					href="https://faq.whatsapp.com/web/troubleshooting/cant-connect-to-whatsapp-web-or-desktop/"
					target="_blank"
				>
					{" "}
					Learn more.{" "}
				</a>
			</p>
		</div>
	</AlertDiv>,
];

const randomAlert = alerts.sort(() => 0.5 - Math.random())[0];
const Alert = () => {
    return (
        <div>
            {randomAlert}
        </div>

    )
}

export default Alert;