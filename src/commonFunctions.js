export const sidebarBtnHandler =  (setIsSidebarOpened) => {
    setIsSidebarOpened(curr => !curr);
}

export const editHandler = (id, setEditId, editInputRef) => {
    setEditId(id);
    editInputRef.current?.focus();
}

export const blurHandler = (e, id, setEditId, editInputRef) => {
    console.log(`New value of (${id}) : ` + e.target.innerText);
}