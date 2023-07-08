interface TitleWithoutBadge {
  id: number;
  title: string;
  withBadge: false;
}

interface TitleWithBadge {
  id: number;
  title: string;
  withBadge: true;
  badgeNumber: number;
}

export type TabsTitle = TitleWithBadge | TitleWithoutBadge;
