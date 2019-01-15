import React from 'react';
import { markdown, ReactSpecimen, ColorPaletteSpecimen } from 'catalog';

import Button from '../../packages/dom/src/components/Button';


export default () => markdown`
  ## Usage

  ${<ReactSpecimen showSource >
    <Button primary>Foo</Button>
  </ReactSpecimen>}

`;
