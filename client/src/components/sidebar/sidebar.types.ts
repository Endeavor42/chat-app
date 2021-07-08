export interface IParticipant {
  id: number;
  name: string;
  text: string;
}
export interface IGroup {
  groupName: string;
  uploadedImage: string;
  participants: IParticipant[];
}
