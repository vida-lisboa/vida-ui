---
menu: Components
name: Button
route: /components/button
---

import { Playground, PropsTable } from 'docz'
import Button from './'

# Button
  <PropsTable of={Button} />


## Usage

<Playground>
  <Button size="large" mb={2} mr={2}>Large</Button>
  <Button size="medium" mb={2} mr={2}>Medium</Button>
  <Button size="small" mb={2} mr={2}>Small</Button>
  <Button size="small" disabled mb={2} mr={2}>Disabled</Button>
  <br/>
  <Button fullWidth mb={2}>Full Width</Button>
</Playground>
