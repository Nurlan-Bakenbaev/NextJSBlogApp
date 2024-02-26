export function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleString();
}
export function formatTimeAgo(timestamp) {
  const date = new Date(timestamp);
  const now = new Date();
  const timeDifference = now.getTime() - date.getTime();
  const secondsDifference = timeDifference / 1000;
  const minutesDifference = secondsDifference / 60;
  const hoursDifference = minutesDifference / 60;
  if (hoursDifference >= 24) {
    return `${Math.floor(hoursDifference / 24)} days ago`;
  } else if (hoursDifference >= 1) {
    return `${Math.floor(hoursDifference)} hours ago`;
  } else if (minutesDifference >= 1) {
    return `${Math.floor(minutesDifference)} minutes ago`;
  } else {
    return `${Math.floor(secondsDifference)} seconds ago`;
  }
}
const timestamp = "2024-02-16T07:49:05.283Z";
const formattedTimeAgo = formatTimeAgo(timestamp);

export function trunkText(text, number) {
  if (text < number) return text;
  else {
    return text.slice(0, number) + "...";
  }
}
