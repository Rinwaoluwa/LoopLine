import { Dimensions } from "react-native";

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };
  return `${date.toLocaleDateString('en-US', options)} •`;
};


// Function to truncate the message
export const getMessagePreview = (message: any) => {

  if (!message) return "";

  // Shorten the message to fit within the 10% of the screen width
  return message.trim().length > 20 ? `${message.trim().substring(0, 20)}...` : message;
};