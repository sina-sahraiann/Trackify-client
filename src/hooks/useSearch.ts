import { useState } from "react";
import getAllNotesApiModel from "../models/apiModel/getAllNotesApiModel";

const useNoteSearch = (initialNotes: getAllNotesApiModel[] | null) => {
  const [notes, setNotes] = useState<any>(initialNotes);
  const [searchInput, setSearchInput] = useState("");

  const filterNotes = (searchTerm: string) => {
    const filteredNotes = initialNotes?.filter(
      (note) =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setNotes(filteredNotes);
  };

  const resetSearchInput = () => {
    setSearchInput("");
  };

  const handleSearchInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const searchTerm = event.target.value;
    setSearchInput(searchTerm);
    filterNotes(searchTerm);
  };

  return [notes, searchInput, handleSearchInputChange, resetSearchInput];
};

export default useNoteSearch;
