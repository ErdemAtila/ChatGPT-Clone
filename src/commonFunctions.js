import {data}  from "./assets/sampleData.js";
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

export const getConversationList = () => {
    return data.map(item => {return {"name" : item.name, id: item.id, date: item.date, category: determineDateCategory(item.date)}});
}

export const getConversationDateCategories = () => {
    return [... new Set(data.map(item => determineDateCategory(item.date)))]
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
  
  
  
  