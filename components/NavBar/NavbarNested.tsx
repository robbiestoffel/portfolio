'use client';

import {
  IconBrush,
  IconMeteorFilled,
  IconContract,
} from '@tabler/icons-react';
import { Code, Group, ScrollArea } from '@mantine/core';
import { LinksGroup } from './NavbarLinksGroup';
import { Logo } from './Logo';
import classes from './NavbarNested.module.css';

const mockdata = [
  { label: 'About', icon: IconMeteorFilled },
  { label: 'Contact', icon: IconContract },
  {
    label: 'My Art',
    icon: IconBrush,
    links: [
      { label: 'Drawing', link: '/art/drawing' },
      { label: 'Sketchbook', link: '/art/sketchbook' },
    ],
  },
];

export function NavbarNested() {
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <Group justify="space-between">
          <Logo style={{ width: 120 }} />
          <Code fw={700}>v3.1.2</Code>
        </Group>
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner} >{links}</div>
      </ScrollArea>
    </nav>
  );
}