import React from 'react';
import { markdown, ReactSpecimen, ColorPaletteSpecimen } from 'catalog';

import Input from '../../packages/dom/src/components/Input';


export default () => markdown`
  ## Usage

  ${<ReactSpecimen showSource >
  <Input
    id='email'
    name='email'
    defaultValue='me@vidalisboa.pt'
  />
  </ReactSpecimen>}

`;
