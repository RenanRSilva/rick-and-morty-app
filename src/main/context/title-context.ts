import { ContextType, ContextTypeDetail } from "./context-type";

export const ContextTitleMap = new Map<string, string>([
  [ContextType.location, 'Locations'],
  [ContextType.character, 'Characters'],
  [ContextType.episode, 'Episodes'],
]);

export const ContextTitleDetailMap = new Map<string, string>([
  [ContextTypeDetail.location, 'Location'],
  [ContextTypeDetail.character, 'Character'],
  [ContextTypeDetail.episode, 'Episode'],
]);


export const ContextRouteMap = new Map<string, string>([
  [ContextTypeDetail.location, ContextType.location],
  [ContextTypeDetail.character, ContextType.character],
  [ContextTypeDetail.episode, ContextType.episode],
]);
