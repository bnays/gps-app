export const formatTimeStamp = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours() + "";
    const minute = date.getMinutes() + "";

    const formattedDateTime = `${day}-${month}-${year} ${hour.length < 2 ? `0${hour}` : hour}:${minute.length < 2 ? `0${minute}` : minute}`;

    return formattedDateTime;
};
