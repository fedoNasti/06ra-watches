export interface Clock {
  id: string;
  city: string;
  offset: number;
}

export interface WorldClockListProps {
  clocks: Clock[];
  onRemoveClock: (id: string) => void;
}

export interface WorldClockItemProps {
  city: string;
  offset: number;
  id: string;
  onRemove: (id: string) => void;
}

export interface TimeAngles {
  seconds: number;
  minutes: number;
  hours: number;
}

export interface FormData {
  city: string;
  offset: string;
}

export interface FormErrors {
  city: string;
  offset: string;
}