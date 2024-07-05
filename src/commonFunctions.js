import {sampleData}  from "./assets/sampleData.js";
import { v4 as uuidv4 } from 'uuid';

//localStorage.setItem("data", JSON.stringify(data));
if(JSON.parse(localStorage.getItem("data")) == null) {
  localStorage.setItem("data", JSON.stringify(sampleData));
}
let data = JSON.parse(localStorage.getItem("data"));



import moment from 'moment';


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







// Date Operations
export const isToday = (date) => {
    const now = moment();
    const targetDate = moment(date, "DD-MM-YYYY");
    return now.isSame(targetDate, 'day');
};

export const isYesterday = (date) => {
    const now = moment();
    const targetDate = moment(date, "DD-MM-YYYY");
    return now.subtract(1, 'days').isSame(targetDate, 'day');
};

export const isWithinLastWeek = (date) => {
    const now = moment();
    const targetDate = moment(date, "DD-MM-YYYY");
    return targetDate.isAfter(now.subtract(7, 'days'));
};

export const isWithinLastMonth = (date) => {
    const now = moment();
    const targetDate = moment(date, "DD-MM-YYYY");
    return targetDate.isAfter(now.subtract(1, 'months'));
};

export const determineDateCategory = (date) => {
    if (isToday(date)) {
      return 'today';
    } else if (isYesterday(date)) {
      return 'yesterday';
    } else if (isWithinLastWeek(date)) {
      return 'Previous 7 Days';
    } else if (isWithinLastMonth(date)) {
      return 'Previous 30 Days';
    } else {
      return 'Older';
    }
  };







  export const findConversationById = (id) => {
    return data.filter(item => id == item.id);
  }


export const createRecord = (text, setData, setCurrentConversation, setPromptText) => {
  let abbr = text.split(" ")[0] + " " + text.split(" ")[1];
  let id = uuidv4();

  let newRecord = {
    id: id,
    date: moment().format("DD-MM-YYYY"),
    name: abbr,
    conversation: []
  }

  setCurrentConversation(id)

  setData(curr => [...curr, newRecord]);
  saveToDB([...getData(), newRecord]);
  setPromptText("");
}



export const editNameBlurHandler = (e, id, setData) => {
  let newConvName = e.target.innerText.trim();
  let newData = getData().map(item => item.id == id ? {...item, name: newConvName} : item);
  setData(newData);

  saveToDB(newData);
}


export const saveToDB = (newData) => {
  localStorage.setItem("data", JSON.stringify(newData));
}
export const getData = () => {
  return JSON.parse(localStorage.getItem("data"));
}


  
  
  