export const getStorage = (id: string) => {
  return localStorage.getItem(id);
}  

export const setStorage = (id: string, value: string) => {
    return localStorage.setItem(id, value);
}


export const setAllStorage = (id: string, value: string) => {
    localStorage.setItem("dev_links_links", value);
}