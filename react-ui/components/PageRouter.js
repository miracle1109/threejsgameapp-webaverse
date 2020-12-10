import { React } from 'https://unpkg.com/es-react@16.13.1/dev';
import { Router } from '/web_modules/@reach/router.js';

import CreatorProfilePage from './CreatorProfilePage.js';
import CreatorsPage from './CreatorsPage.js';
import Gallery from './GalleryPage.js';
import LoginGateway from './LoginGateway.js';
import MintPage from './MintPage.js';
import MyProfile from './MyProfilePage.js';
import NavBar from './NavBar.js';
import NotFoundPage from './NotFoundPage.js';
import Settings from './SettingsPage.js';

export const PageRouter = () => {
  return html`
  <${React.Fragment}>
  <${NavBar} />
  <${Router}>
      <${MyProfile} path="/profile/:view"/>
      <${Settings} path="/settings" />
      <${Gallery} path="/gallery" />
      <${MintPage} path="/mint" />
      <${CreatorsPage} path="/creators" />
      <${CreatorProfilePage} path="/creator" />
      <${CreatorProfilePage} path="/creator/:address" />
      <${CreatorProfilePage} path="/creator/:address/:view" />
      <${LoginGateway} path="/gateway" />
      <${MyProfile} path="*" />
    </${Router}>
  </${React.Fragment}>

  `;
};
