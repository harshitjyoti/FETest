export interface ITrackerProps {
    eventAction: string; 
    eventLabel: string;
  }
  
  interface ITracker {
    interaction: (props: ITrackerProps) => void
  }
  export interface ICar {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}

export interface IViewsProps {
  index: number;
  slides: ICar[];
  navigate: (direction: string, index?: number) => void; 
}