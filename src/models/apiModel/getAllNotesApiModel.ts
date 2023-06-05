interface getAllNotesApiModel {
  id: string;
  title?: string;
  description: string;
  date: string;
  satisfaction?: number;
  happiness?: number;
  health?: number;
}

export default getAllNotesApiModel