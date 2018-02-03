import React from 'react';
import {render} from 'react-dom';
import Media from '../src/playlist/components/media'

const app = document.getElementById("app");

render(<Media type="video" image="./images/covers/html5.jpg" title="Aprende HTML5" author="Yo mero" />, app);