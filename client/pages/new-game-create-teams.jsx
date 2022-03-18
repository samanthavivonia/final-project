import React from 'react';
import Logo from '../components/logo';
import LinkButton from '../components/link-button';

export default function NewGameCreateTeams(props) {
  return (
    <div className='container'>
      <Logo size='smol' />
      <h1>Create Teams</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque egestas congue quisque egestas diam in arcu cursus euismod. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Non enim praesent elementum facilisis leo vel. Orci dapibus ultrices in iaculis nunc sed augue lacus. Molestie a iaculis at erat pellentesque adipiscing commodo elit. Nibh tellus molestie nunc non blandit massa. Cursus sit amet dictum sit amet justo. Nunc congue nisi vitae suscipit tellus mauris a. Aliquam etiam erat velit scelerisque in dictum non. Amet risus nullam eget felis eget nunc lobortis mattis. Feugiat in fermentum posuere urna. Odio morbi quis commodo odio. Et sollicitudin ac orci phasellus egestas tellus rutrum. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Et egestas quis ipsum suspendisse ultrices. Lobortis scelerisque fermentum dui faucibus in ornare quam. Nunc consequat interdum varius sit amet mattis vulputate enim.
      </p>
      <LinkButton text='Go Back' destination='#new-game-settings' />
    </div>
  );
}
